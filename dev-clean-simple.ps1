# PowerShell script for dev:clean:simple with LMDB handling
Write-Host "Starting Gatsby clean development server (simple)..." -ForegroundColor Cyan

# Kill only Gatsby development servers (preserve Claude Code and other Node processes)
Write-Host "Stopping any running Gatsby development servers..." -ForegroundColor Yellow

# Get all Node.js processes and filter for Gatsby-related ones
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
foreach ($process in $nodeProcesses) {
    try {
        $commandLine = (Get-WmiObject Win32_Process -Filter "ProcessId = $($process.Id)").CommandLine
        if ($commandLine -and ($commandLine -match "gatsby" -or $commandLine -match "webpack-dev-server" -or $commandLine -match "elevate-design-system-test")) {
            Write-Host "Stopping Gatsby process: $($process.Id)" -ForegroundColor Yellow
            Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
        }
    }
    catch {
        # Ignore processes we can't access
    }
}

Start-Sleep -Seconds 2

# Force remove cache directories if they exist and are locked
if (Test-Path ".cache") {
    Write-Host "Removing .cache directory..." -ForegroundColor Yellow
    
    # Handle LMDB files specifically
    if (Test-Path ".cache\caches-lmdb\data.mdb") {
        Write-Host "Removing LMDB cache files..." -ForegroundColor Yellow
        Remove-Item -Path ".cache\caches-lmdb\*.mdb" -Force -ErrorAction SilentlyContinue
    }
    
    # Remove entire cache directory
    Remove-Item -Path ".cache" -Recurse -Force -ErrorAction SilentlyContinue
}

if (Test-Path "public") {
    Write-Host "Removing public directory..." -ForegroundColor Yellow
    Remove-Item -Path "public" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "Starting Gatsby development server..." -ForegroundColor Green

# Run gatsby develop with network host
& node node_modules/gatsby/cli.js develop -H 0.0.0.0