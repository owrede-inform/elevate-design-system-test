# PowerShell script to safely kill yarn dev processes while preserving Claude Code
# Usage: .\kill-dev-processes.ps1

# Get the current Claude Code process (contains @anthropic-ai/claude-code/cli.js in command line)
$claudeProcess = Get-WmiObject Win32_Process -Filter "name='node.exe'" | Where-Object { 
    $_.CommandLine -match "@anthropic-ai/claude-code/cli.js" 
}

if ($claudeProcess) {
    Write-Host "Found Claude Code process (PID: $($claudeProcess.ProcessId)) - will preserve this process"
} else {
    Write-Host "Warning: Could not identify Claude Code process"
}

# Find and kill development-related node processes
$devProcesses = Get-WmiObject Win32_Process -Filter "name='node.exe'" | Where-Object {
    $_.ProcessId -ne $claudeProcess.ProcessId -and
    ($_.CommandLine -match "(yarn|gatsby|webpack|dev-server|develop)" -or
     $_.CommandLine -match "gatsby-config" -or
     $_.CommandLine -match "webpack-dev-server")
}

if ($devProcesses) {
    Write-Host "Found $($devProcesses.Count) development process(es) to kill:"
    foreach ($process in $devProcesses) {
        Write-Host "  PID $($process.ProcessId): $($process.CommandLine)"
        try {
            Stop-Process -Id $process.ProcessId -Force
            Write-Host "  Killed process $($process.ProcessId)"
        } catch {
            Write-Host "  Failed to kill process $($process.ProcessId): $($_.Exception.Message)"
        }
    }
} else {
    Write-Host "No development processes found to kill"
}

# Also check for any yarn processes
$yarnProcesses = Get-Process -Name "yarn" -ErrorAction SilentlyContinue
if ($yarnProcesses) {
    Write-Host "Found yarn processes:"
    foreach ($process in $yarnProcesses) {
        Write-Host "  Killing yarn process PID $($process.Id)"
        Stop-Process -Id $process.Id -Force
    }
}

Write-Host "Process cleanup complete"