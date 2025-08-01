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