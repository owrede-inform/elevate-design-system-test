# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby site built using the `gatsby-theme-carbon` theme, which implements IBM's Carbon Design System. The project serves as a documentation site with MDX-based content authoring and component shadowing capabilities.

## Development Commands

- `yarn dev` - Start development server
- `yarn dev:clean` - Clean build cache and start development server with network access
- `yarn build` - Build production site
- `yarn build:clean` - Clean build and create production build
- `yarn serve` - Serve built site locally
- `yarn clean` - Clean Gatsby cache and public directory

## Architecture

### Content Management
- **MDX Pages**: All content lives in `src/pages/` as `.mdx` files
- **Navigation**: Site navigation is configured in `src/data/nav-items.yaml`
- **Homepage**: Custom homepage implementation in `src/components/Homepage.js` with shadowing

### Component System
- **Theme Components**: Uses Carbon Design System components from `gatsby-theme-carbon`
- **Component Shadowing**: Override theme components by placing files in `src/gatsby-theme-carbon/components/`
- **Custom Components**: Site-specific components can be added and used directly in MDX

### Styling
- **SCSS**: Uses Sass with Carbon Design System tokens
- **Global Styles**: Main styles in `src/styles/index.scss`
- **Component Styles**: Module-based SCSS files (e.g., `Homepage.module.scss`)

### Configuration
- **Gatsby Config**: `gatsby-config.js` contains theme and plugin configuration
- **Path Prefix**: Site uses `/elevate-gatsby-test` as path prefix
- **Sass Version**: Locked to v1.62.1 for compatibility

## Key Directories

- `src/pages/` - MDX content files organized by URL structure
- `src/components/` - Custom React components
- `src/gatsby-theme-carbon/` - Theme component overrides (shadowing)
- `src/data/` - YAML configuration files
- `src/styles/` - Global SCSS styles
- `static/` - Static assets (images, videos)

## Content Authoring

- Pages are written in MDX format combining Markdown with React components
- All Carbon theme components are available without imports
- Custom components must be imported at the top of MDX files
- Images should be placed in appropriate directories under `src/images/` or `static/images/`

## Theme Customization

- Override theme components using Gatsby's component shadowing in `src/gatsby-theme-carbon/`
- Customize site metadata in `gatsby-config.js`
- Navigation structure is controlled via `src/data/nav-items.yaml`
- Global styles can be modified in `src/styles/index.scss`

## ELEVATE Design System Integration

### Installing ELEVATE Components

**Authentication Setup (Required):**
ELEVATE packages are hosted on GitHub Package Registry and require authentication. The project uses standard npm authentication with environment variables.

**For Local Development:**
```powershell
# Set up authentication (run once per PowerShell session)
.\setup-auth.ps1

# Now standard yarn/npm commands work
yarn install
yarn dev
```

**Manual Setup (Alternative):**
```powershell
# Set the environment variable manually
$env:NODE_AUTH_TOKEN = "your-github-token"

# Now run yarn/npm commands
yarn install
```

**How it works:**
- The `.npmrc` file uses `${NODE_AUTH_TOKEN}` for environment variable substitution
- Setting the `NODE_AUTH_TOKEN` environment variable enables standard npm/yarn authentication
- No complex workarounds needed - this is the standard approach

**Important Notes:**
- Only install `@inform-elevate/elevate-core-ui` - it automatically installs all required dependencies including CDK and design tokens
- Use `--legacy-peer-deps` flag to handle dependency conflicts with the Gatsby/Carbon ecosystem
- The package includes all required dependencies like `composed-offset-position`, `qr-creator`, `@floating-ui/*`, etc.
- Components are imported via `import '@inform-elevate/elevate-core-ui';` in the LiveExample component

### ELEVATE Component Usage

- ELEVATE components are automatically available in MDX files when using the `<LiveExample>` component
- Components use web components standard (custom elements) like `<elvt-button>`, `<elvt-icon>`, etc.
- **Remove any occurrences of LiveExample2, LiveExample3 or LiveExample4 components. LiveExample is the only correct version (for now)**
- The LiveExample component handles loading and registration of all ELEVATE web components
- This project documents the ELEVATE Design System. We need components from @inform-elevate/elevate-core-ui to be installed for LiveExample component. The Design Tokens are available at @inform-elevate/elevate-design-tokens.

## Typography

### Font System
The project uses **Inter** from Google Fonts instead of IBM Plex for better readability and modern design:

- **Primary Font**: Inter Variable Font (supports weights 100-900)
- **Monospace Font**: JetBrains Mono (for code blocks)
- **Fallback Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### Typography Hierarchy (ELEVATE Design Tokens)
The project now uses the official ELEVATE Design System typography tokens:

**Page Headlines (h1)**: Display sizes
- `important-display-s` (3rem, semibold) - Main page titles
- `important-display-m` (3.75rem, semibold) - Hero titles

**Section Headlines**: Headline and Section sizes
- `h2`: `emphasized-headline-s` (2.75rem, medium)
- `h3`: `emphasized-section-l` (1.75rem, medium)  
- `h4`: `emphasized-section-m` (1.5rem, medium)
- `h5`: `emphasized-section-s` (1.25rem, medium)
- `h6`: `emphasized-label-xl` (1.5rem, medium)

**Body Text**: Content sizes
- Default: `default-content-m` (1rem, regular)
- Large: `default-content-l` (1.25rem, regular)
- Small: `default-content-s` (0.875rem, regular)
- XL: `default-content-xl` (1.5rem, regular)

**UI Elements**: Label sizes
- Labels: `default-label-m` (1rem, regular)
- Captions: `default-caption` (0.75rem, regular)

Font configuration is handled in:
- `src/gatsby-theme-carbon/styles/internal/_plex.scss` - Font face definitions
- `src/styles/elevate-typography.scss` - ELEVATE Design Token typography hierarchy
- `src/styles/index.scss` - Main style imports

## Code Interaction Guidelines

- Do not auto commit and push unless I ask you to do it. Remember to commit, push & merge whenever I ask you to that with the command "/deploy".
- Never add "Co-authored by Claude" lines (or similar) to comments or commit messages or PR comments.
- Never use references to Claude Code in commit messages or PR comments/messages

## Problem-Solving Guidelines

- Never try to work around issues via quick fixes. Resolve problems in a way that they are permanently solved and will work on both the dev server and on the deployment server!

## Package Management Guidelines

- Always install `@inform-elevate/elevate-core-ui` and `@inform-elevate/elevate-design-tokens`
- Do not work around authentication issues
- Always use yarn package manager in this project

## Authentication Setup Memories

- Remember the current setup for the auth token locally and on the GitHub server.