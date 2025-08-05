# Simple PowerShell script to kill development servers quickly
# Optimized for Windows 11 with minimal error output

# Find Claude Code processes to preserve them
$claudePIDs = @()
try {
    # Try to get Claude Code processes by command line
    $claudePIDs += (Get-WmiObject Win32_Process -Filter "Name='node.exe'" -ErrorAction SilentlyContinue | 
        Where-Object { $_.CommandLine -like "*@anthropic-ai/claude-code*" -or $_.CommandLine -like "*claude*" }).ProcessId
} catch {
    # Fallback: exclude any node process with "claude" in the path
    $claudePIDs += (Get-Process -Name "node" -ErrorAction SilentlyContinue | 
        Where-Object { $_.Path -like "*claude*" }).Id
}

# Remove nulls and ensure we have an array
$claudePIDs = $claudePIDs | Where-Object { $_ -ne $null }

# Kill development node processes (avoid Claude Code)
Get-Process -Name "node" -ErrorAction SilentlyContinue | 
    Where-Object { 
        $claudePIDs -notcontains $_.Id
    } | ForEach-Object {
        try {
            # Additional safety check - don't kill if process path contains "claude"
            if ($_.Path -notlike "*claude*") {
                Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
            }
        } catch {
            # Ignore errors
        }
    }

# Kill yarn processes
Get-Process -Name "yarn" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "Development servers stopped" -ForegroundColor Green