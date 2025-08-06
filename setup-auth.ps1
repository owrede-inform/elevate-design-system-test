# Yarn-compatible GitHub Authentication Setup for ELEVATE Packages
Write-Host "Setting up yarn authentication for ELEVATE packages..." -ForegroundColor Cyan

# Set both NODE_AUTH_TOKEN (for .npmrc) and configure yarn directly
if ($env:GITHUB_TOKEN) {
    # Set NODE_AUTH_TOKEN for .npmrc compatibility
    $env:NODE_AUTH_TOKEN = $env:GITHUB_TOKEN
    
    # Configure yarn authentication directly (bypasses environment variable substitution issue)
    yarn config set "@inform-elevate:registry" "https://npm.pkg.github.com"
    yarn config set "//npm.pkg.github.com/:_authToken" $env:GITHUB_TOKEN
    
    Write-Host "✅ Yarn authentication configured successfully" -ForegroundColor Green
    Write-Host "✅ NODE_AUTH_TOKEN set for .npmrc compatibility" -ForegroundColor Green
    Write-Host "You can now run: yarn install" -ForegroundColor Cyan
} else {
    Write-Host "❌ GITHUB_TOKEN not found. Set it with:" -ForegroundColor Red
    Write-Host "`$env:GITHUB_TOKEN = 'your_github_token'" -ForegroundColor Yellow
}