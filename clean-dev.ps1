# PowerShell script to clean Gatsby cache and start development server
# Handles Windows LMDB file locking issues

Write-Host "Starting Gatsby clean development server..." -ForegroundColor Cyan

# Function to force remove locked files including LMDB database files
function Remove-LockedDirectory {
    param([string]$Path)
    
    if (Test-Path $Path) {
        Write-Host "Removing $Path..." -ForegroundColor Yellow
        
        # Handle LMDB files specifically
        $lmdbPath = Join-Path $Path "caches-lmdb"
        if (Test-Path $lmdbPath) {
            Write-Host "Detected LMDB cache directory, using special handling..." -ForegroundColor Yellow
            try {
                # Kill any Node.js processes that might be locking the files
                Write-Host "Stopping Node.js processes..." -ForegroundColor Yellow
                Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*$PWD*" } | Stop-Process -Force -ErrorAction SilentlyContinue
                Start-Sleep -Seconds 2
                
                # Remove LMDB files with specific error handling
                Get-ChildItem -Path $lmdbPath -Filter "*.mdb" -ErrorAction SilentlyContinue | ForEach-Object {
                    try {
                        Remove-Item -Path $_.FullName -Force -ErrorAction Stop
                        Write-Host "Removed $($_.Name)" -ForegroundColor Green
                    }
                    catch {
                        Write-Host "Failed to remove $($_.Name): $($_.Exception.Message)" -ForegroundColor Red
                    }
                }
            }
            catch {
                Write-Host "LMDB cleanup encountered issues: $($_.Exception.Message)" -ForegroundColor Yellow
            }
        }
        
        try {
            # First, try normal removal
            Remove-Item -Path $Path -Recurse -Force -ErrorAction Stop
            Write-Host "Successfully removed $Path" -ForegroundColor Green
        }
        catch {
            Write-Host "Standard removal failed, trying advanced cleanup..." -ForegroundColor Yellow
            
            # Kill only Gatsby-related processes that might be locking the files
            $processes = Get-Process -Name "node" -ErrorAction SilentlyContinue
            if ($processes) {
                Write-Host "Found Node.js processes, checking for Gatsby processes..." -ForegroundColor Yellow
                $gatsbyProcesses = $processes | Where-Object {
                    try {
                        $cmdLine = (Get-WmiObject Win32_Process -Filter "ProcessId = $($_.Id)").CommandLine
                        $cmdLine -match "gatsby" -or $cmdLine -match "webpack" -or ($cmdLine -match "node" -and $cmdLine -match $PWD.Path)
                    }
                    catch {
                        $false
                    }
                }
                
                if ($gatsbyProcesses) {
                    Write-Host "Found Gatsby-related processes, stopping them..." -ForegroundColor Yellow
                    $gatsbyProcesses | ForEach-Object {
                        try {
                            $_.Kill()
                            Write-Host "Stopped Gatsby process $($_.Id)" -ForegroundColor Yellow
                        }
                        catch {
                            Write-Host "Could not stop process $($_.Id)" -ForegroundColor Red
                        }
                    }
                    Start-Sleep -Seconds 2
                } else {
                    Write-Host "No Gatsby-related processes found to stop" -ForegroundColor Green
                }
            }
            
            # Try to remove individual LMDB files first
            $lmdbPath = Join-Path $Path "caches-lmdb"
            if (Test-Path $lmdbPath) {
                Write-Host "Attempting to unlock LMDB files..." -ForegroundColor Yellow
                Get-ChildItem -Path $lmdbPath -File | ForEach-Object {
                    try {
                        Remove-Item $_.FullName -Force -ErrorAction SilentlyContinue
                    }
                    catch {
                        # Ignore individual file errors
                    }
                }
            }
            
            # Final attempt with robocopy (Windows-specific robust file operations)
            if (Test-Path $Path) {
                $tempDir = Join-Path $env:TEMP "gatsby-clean-$(Get-Random)"
                New-Item -Path $tempDir -ItemType Directory -Force | Out-Null
                
                # Use robocopy to "move" (effectively delete) the directory
                robocopy $tempDir $Path /MIR /R:0 /W:0 2>$null | Out-Null
                Remove-Item -Path $Path -Recurse -Force -ErrorAction SilentlyContinue
                Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
                
                if (-not (Test-Path $Path)) {
                    Write-Host "Successfully removed $Path using robocopy" -ForegroundColor Green
                } else {
                    Write-Host "Could not remove $Path" -ForegroundColor Red
                }
            }
        }
    }
}

# Clean all Gatsby cache directories (comprehensive cleanup)
$directories = @(
    ".cache",                                      # Main Gatsby cache
    "public",                                      # Built files
    "node_modules\.cache\babel-loader",           # Babel cache
    "node_modules\.cache\terser-webpack-plugin",  # Terser cache
    "node_modules\.cache\webpack",                # Webpack cache
    "node_modules\.cache\@babel",                 # Babel core cache
    "node_modules\.cache\eslint",                 # ESLint cache
    "node_modules\.cache\.eslintcache",           # ESLint file cache
    "node_modules\.cache\gatsby-plugin-sharp",    # Sharp plugin cache
    ".eslintcache",                               # Root ESLint cache
    ".cache\page-ssr",                           # SSR cache (main issue)
    ".cache\caches",                             # General caches
    ".cache\caches-lmdb",                        # LMDB cache
    ".cache\redux",                              # Redux cache
    ".cache\webpack",                            # Webpack dev cache
    ".parcel-cache",                             # Parcel cache (if used)
    "data\gatsby-theme-carbon-repo"              # Remove conflicting theme repo (causes webpack path issues)
)

foreach ($dir in $directories) {
    Remove-LockedDirectory -Path $dir
}

# Clean yarn cache and npm cache to ensure fresh dependencies
Write-Host "Cleaning yarn cache..." -ForegroundColor Cyan
try {
    yarn cache clean --force 2>$null | Out-Null
    Write-Host "Yarn cache cleaned successfully" -ForegroundColor Green
}
catch {
    Write-Host "Warning: Could not clean yarn cache" -ForegroundColor Yellow
}

# Clear npm cache if available (additional safety)
Write-Host "Cleaning npm cache..." -ForegroundColor Cyan
try {
    npm cache clean --force 2>$null | Out-Null
    Write-Host "npm cache cleaned successfully" -ForegroundColor Green
}
catch {
    Write-Host "Warning: Could not clean npm cache" -ForegroundColor Yellow
}

# Clear temp files that might contain stale webpack references
Write-Host "Cleaning temp webpack files..." -ForegroundColor Cyan
$tempPaths = @(
    "$env:TEMP\webpack*",
    "$env:TEMP\*.cache",
    "$env:LOCALAPPDATA\Temp\webpack*",
    "$env:LOCALAPPDATA\Temp\*.cache"
)

foreach ($tempPath in $tempPaths) {
    try {
        Get-ChildItem -Path $tempPath -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    }
    catch {
        # Ignore temp cleanup errors
    }
}

# Optional: Complete node_modules reinstall for persistent issues
$forceReinstall = $args -contains "--reinstall" -or $args -contains "-r"
if ($forceReinstall) {
    Write-Host "Removing node_modules for complete reinstall..." -ForegroundColor Yellow
    Remove-LockedDirectory -Path "node_modules"
    
    Write-Host "Reinstalling dependencies..." -ForegroundColor Cyan
    try {
        yarn install --force 2>$null
        Write-Host "Dependencies reinstalled successfully" -ForegroundColor Green
    }
    catch {
        Write-Host "Warning: Dependency reinstallation had issues" -ForegroundColor Yellow
    }
}

Write-Host "Starting Gatsby development server..." -ForegroundColor Cyan

# Start the development server
Write-Host "Launching Gatsby development server..." -ForegroundColor Cyan
& node node_modules/gatsby/cli.js develop -H 0.0.0.0