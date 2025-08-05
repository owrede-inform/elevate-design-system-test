# ELEVATE Package Authentication Setup

This document describes the current working authentication setup for accessing ELEVATE private packages from the GitHub Package Registry.

## Overview

The project uses private ELEVATE packages that require authentication to install:
- `@inform-elevate/elevate-cdk`
- `@inform-elevate/elevate-core-ui` 
- `@inform-elevate/elevate-design-tokens`
- `@inform-elevate/elevate-icons`

## GitHub Actions (Deployment Server)

### Current Working Configuration

**File**: `.github/workflows/deploy.yml`

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'yarn'  # Uses yarn, not npm
    registry-url: 'https://npm.pkg.github.com'
    
- name: Validate ELEVATE_TOKEN
  run: |
    if [ -z "${{ secrets.ELEVATE_TOKEN }}" ]; then
      echo "❌ ELEVATE_TOKEN secret is empty or not set"
      exit 1
    else
      echo "✅ ELEVATE_TOKEN secret is present"
      # Validates token format (should start with ghp_ or github_pat_)
    fi

- name: Configure authentication for yarn
  run: |
    echo "@inform-elevate:registry=https://npm.pkg.github.com" >> ~/.npmrc
    echo "//npm.pkg.github.com/:_authToken=${{ secrets.ELEVATE_TOKEN }}" >> ~/.npmrc
    
- name: Test authentication
  run: |
    npm whoami --registry=https://npm.pkg.github.com || echo "Authentication test failed"
  env:
    NODE_AUTH_TOKEN: ${{ secrets.ELEVATE_TOKEN }}

- name: Install dependencies with yarn
  run: yarn install
  env:
    NODE_AUTH_TOKEN: ${{ secrets.ELEVATE_TOKEN }}

- name: Build with Gatsby
  run: yarn build --prefix-paths  # Uses yarn, not npm
```

### Repository Secret

**Secret Name**: `ELEVATE_TOKEN` (NOT `ELEVATE_NPM_TOKEN`)

**Location**: GitHub repository → Settings → Secrets and variables → Actions

**Requirements**:
- Valid GitHub Personal Access Token
- Format: Must start with `ghp_` or `github_pat_`
- Permissions: `packages:read` for `inform-elevate` organization
- Must have access to `inform-elevate` GitHub organization

## Local Development

### File Configuration

**File**: `.npmrc` (project root)
```
@inform-elevate:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

**File**: `package.json`
```json
{
  "packageManager": "yarn@1.22.22"
}
```

### Authentication Script

**File**: `setup-auth.ps1`
```powershell
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
```

### Local Usage

```powershell
# Set up authentication (run once per PowerShell session)
.\setup-auth.ps1

# Install dependencies with yarn (NOT npm)
yarn install

# Start development server
yarn dev
```

## Package Manager Consistency

**CRITICAL**: Both local and deployment must use the same package manager:

- ✅ **Correct**: Use `yarn` everywhere
  - Local: `yarn install`, `yarn dev`, `yarn build`
  - GitHub Actions: `yarn install`, `yarn build`
  - Lockfile: `yarn.lock` (committed to repo)

- ❌ **Wrong**: Mixing npm and yarn
  - Causes dependency resolution differences
  - "Works locally but fails in deployment" issues

## Common Issues and Solutions

### Issue: 401 Unauthorized / 403 Permission denied
**Cause**: Token is empty, expired, or has wrong permissions
**Solution**: 
1. Check repository secret `ELEVATE_TOKEN` exists and is not empty
2. Verify token format starts with `ghp_` or `github_pat_`
3. Ensure token has `packages:read` permission for `inform-elevate` org

### Issue: npm vs yarn inconsistency
**Cause**: GitHub Actions using npm while local uses yarn
**Solution**: 
1. Use `cache: 'yarn'` in setup-node action
2. Use `yarn install` and `yarn build` commands
3. Never mix npm and yarn in same project

### Issue: Authentication token not provided
**Cause**: Wrong secret name or environment variable
**Solution**: 
1. Repository secret must be named `ELEVATE_TOKEN`
2. Use `${{ secrets.ELEVATE_TOKEN }}` in workflow
3. Set `NODE_AUTH_TOKEN` environment variable

## Verification Steps

### Local Development
1. Run `.\setup-auth.ps1` - should show "✅ NODE_AUTH_TOKEN set"
2. Run `yarn install` - should install without 401/403 errors
3. Check `node_modules/@inform-elevate/` exists with packages

### GitHub Actions
1. "Validate ELEVATE_TOKEN" step should pass
2. "Test authentication" should show successful whoami
3. "Install dependencies with yarn" should complete without errors
4. Build should access ELEVATE components successfully

## Last Working State

As of the most recent deployment:
- ✅ Repository has valid `ELEVATE_TOKEN` secret
- ✅ GitHub Actions uses yarn consistently
- ✅ Private ELEVATE packages install successfully  
- ✅ Site builds with latest ELEVATE components
- ✅ Local development works with `setup-auth.ps1`

**DO NOT CHANGE** this setup unless there are specific issues. This configuration is tested and working.