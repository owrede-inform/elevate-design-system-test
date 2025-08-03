# Simple PowerShell script to kill development servers quickly
# Optimized for Windows 11 with minimal error output

# Find Claude Code process to preserve it
$claudePID = (Get-Process -Name "node" -ErrorAction SilentlyContinue | 
    Where-Object { $_.CommandLine -like "*@anthropic-ai/claude-code*" }).Id

# Kill development node processes (avoid Claude Code)
Get-Process -Name "node" -ErrorAction SilentlyContinue | 
    Where-Object { 
        $_.Id -ne $claudePID -and 
        ($_.CommandLine -like "*gatsby*" -or 
         $_.CommandLine -like "*webpack*" -or 
         $_.CommandLine -like "*dev-server*" -or
         $_.CommandLine -like "*yarn*dev*")
    } | Stop-Process -Force -ErrorAction SilentlyContinue

# Kill yarn processes
Get-Process -Name "yarn" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "Development servers stopped" -ForegroundColor Green