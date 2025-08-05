# PowerShell script for dev:clean:simple with LMDB handling
Write-Host "Starting Gatsby clean development server (simple)..." -ForegroundColor Cyan

# Kill any existing Node.js processes from this project
Write-Host "Stopping any running development servers..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
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