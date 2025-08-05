# Simple GitHub Authentication Setup for ELEVATE Packages
Write-Host "Setting up GitHub authentication for ELEVATE packages..." -ForegroundColor Cyan

# Set NODE_AUTH_TOKEN from GITHUB_TOKEN if available
if ($env:GITHUB_TOKEN) {
    $env:NODE_AUTH_TOKEN = $env:GITHUB_TOKEN
    Write-Host "✅ NODE_AUTH_TOKEN set from GITHUB_TOKEN" -ForegroundColor Green
    Write-Host "You can now run: npm install" -ForegroundColor Cyan
} else {
    Write-Host "❌ GITHUB_TOKEN not found. Set it with:" -ForegroundColor Red
    Write-Host "`$env:GITHUB_TOKEN = 'your_github_token'" -ForegroundColor Yellow
}