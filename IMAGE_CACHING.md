# Image Processing & Caching Strategy

This project uses an optimized image caching strategy to avoid unnecessary re-processing of unchanged images during development.

## Problem

Gatsby's `gatsby-plugin-sharp` processes all images on every build, which can take 60-120 seconds even when images haven't changed. This slows down development significantly.

## Solution

We implement a selective image processing strategy with high-quality caching:

### High-Quality Processing (Once)
- **Quality**: 85% (high quality)
- **Formats**: WebP + Auto (optimal performance)
- **Breakpoints**: 4 responsive sizes
- **Features**: Blur placeholders, MozJPEG compression

### Smart Caching
- Images are processed once and cached
- Cache persists between development sessions
- Only re-process when images actually change

## Commands

### Development (Recommended)
```bash
# Fast development with preserved cache
yarn dev:fast
```

### When You Need Fresh Images
```bash
# Force re-render all images (use when adding/changing images)
yarn render-images
```

### Utility Commands
```bash
# Check cache status
yarn cache:info

# Clean only image cache (keep other caches)
yarn clean:images

# Standard development (will re-process images)
yarn dev

# Full clean development
yarn dev:clean
```

## How It Works

1. **First Run**: `yarn render-images` processes all images with high quality settings
2. **Daily Development**: `yarn dev:fast` preserves the cache, skipping image processing
3. **When Images Change**: Run `yarn render-images` to update only changed images
4. **Cache Check**: `yarn cache:info` shows current cache status

## Benefits

- ⚡ **50-80% faster** development builds
- 🖼️ **High quality** images in production
- 🎯 **Selective processing** - only when needed
- 📊 **Cache visibility** - know what's cached

## File Structure

```
.cache/caches/gatsby-plugin-sharp/  # Processed image cache
public/static/                     # Generated responsive images
scripts/cache-info.js             # Cache status utility
```

## When to Use Each Command

| Scenario | Command | Reason |
|----------|---------|---------|
| Daily development | `yarn dev:fast` | Preserves cache, fastest |
| Added new images | `yarn render-images` | Processes new images |
| Changed existing images | `yarn render-images` | Updates changed images |
| Debugging image issues | `yarn clean:images && yarn render-images` | Fresh start |
| Production build | `yarn build` | Full processing with cache |

## Cache Persistence

The image cache is preserved between sessions for faster development. To ensure cache persistence:

- Don't run `yarn clean` unless necessary
- Use `yarn dev:fast` for regular development
- Only clean images when you need to update them

This strategy maintains high image quality while dramatically reducing development build times.