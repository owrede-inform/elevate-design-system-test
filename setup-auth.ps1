# GitHub Authentication Setup for ELEVATE Packages
# This script sets up authentication for @inform-elevate private packages

Write-Host "Setting up GitHub authentication for ELEVATE packages..." -ForegroundColor Cyan

# Check if GITHUB_TOKEN is already set
if ($env:GITHUB_TOKEN) {
    Write-Host "✅ GITHUB_TOKEN environment variable is already set" -ForegroundColor Green
    $env:NODE_AUTH_TOKEN = $env:GITHUB_TOKEN
    Write-Host "✅ NODE_AUTH_TOKEN set for current session" -ForegroundColor Green
} else {
    Write-Host "❌ GITHUB_TOKEN environment variable not found" -ForegroundColor Red
    Write-Host ""
    Write-Host "To set up authentication:" -ForegroundColor Yellow
    Write-Host "1. Go to GitHub.com → Settings → Developer settings → Personal access tokens" -ForegroundColor Yellow
    Write-Host "2. Generate a token with 'packages:read' permission" -ForegroundColor Yellow
    Write-Host "3. Set it as environment variable:" -ForegroundColor Yellow
    Write-Host "   `$env:GITHUB_TOKEN = 'your-token-here'" -ForegroundColor Yellow
    Write-Host "4. Run this script again" -ForegroundColor Yellow
    exit 1
}

# Test authentication
Write-Host "Testing authentication..." -ForegroundColor Cyan
try {
    $result = npm whoami --registry=https://npm.pkg.github.com 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Authentication successful! Logged in as: $result" -ForegroundColor Green
    } else {
        Write-Host "❌ Authentication failed: $result" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Authentication test failed: $_" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Authentication setup complete!" -ForegroundColor Green
Write-Host "You can now run: yarn install" -ForegroundColor Cyan