import React, { useEffect } from 'react';

const FontLoader = () => {
  useEffect(() => {
    // DISABLED: FontLoader is now handled by gatsby-ssr.js to prevent font loading cascade
    // This prevents multiple font loading sources that cause visual flickering
    console.log('FontLoader: Fonts are now handled by gatsby-ssr.js for optimal loading');
    return;
    
    /* COMMENTED OUT TO PREVENT FONT LOADING CASCADE
    // Get the path prefix - try multiple methods to ensure we get it
    let pathPrefix = '';
    if (typeof window !== 'undefined') {
      // Try window.__GATSBY_GLOBAL__ first
      pathPrefix = window.__GATSBY_GLOBAL__?.pathPrefix || '';
      
      // If empty, check if we're on production domain and set manually
      if (!pathPrefix && window.location.hostname.includes('github.io')) {
        pathPrefix = '/elevate-design-system-test';
      }
      
      // Also check if the current path starts with the expected prefix
      if (!pathPrefix && window.location.pathname.startsWith('/elevate-design-system-test')) {
        pathPrefix = '/elevate-design-system-test';
      }
    }
    
    // Skip if font faces are already loaded
    if (document.querySelector('style[data-font-loader]')) {
      return;
    }
    */
    
    // Create dynamic font face CSS with correct paths and variable font support
    const fontCSS = `
      /* Inter Variable Font - Regular with full weight range */
      @font-face {
        font-family: 'Inter Var';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2 supports variations'),
             url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2-variations'),
             url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2'),
             url('${pathPrefix}/fonts/Inter-Variable.ttf') format('truetype');
        font-named-instance: 'Regular';
      }

      /* Inter Variable Font - Italic with full weight range */
      @font-face {
        font-family: 'Inter Var';
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: url('${pathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2 supports variations'),
             url('${pathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2-variations'),
             url('${pathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2'),
             url('${pathPrefix}/fonts/Inter-Italic-Variable.ttf') format('truetype');
        font-named-instance: 'Italic';
      }

      /* Static fallbacks for better compatibility */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2'),
             url('${pathPrefix}/fonts/Inter-Variable.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2'),
             url('${pathPrefix}/fonts/Inter-Variable.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2'),
             url('${pathPrefix}/fonts/Inter-Variable.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('${pathPrefix}/fonts/Inter-Variable.woff2') format('woff2'),
             url('${pathPrefix}/fonts/Inter-Variable.ttf') format('truetype');
      }

      /* Roboto Mono Variable Font - Regular */
      @font-face {
        font-family: 'Roboto Mono Var';
        font-style: normal;
        font-weight: 100 700;
        font-display: swap;
        src: url('${pathPrefix}/fonts/RobotoMono-Variable.ttf') format('truetype');
      }

      /* Roboto Mono Variable Font - Italic */
      @font-face {
        font-family: 'Roboto Mono Var';
        font-style: italic;
        font-weight: 100 700;
        font-display: swap;
        src: url('${pathPrefix}/fonts/RobotoMono-Italic-Variable.ttf') format('truetype');
      }

      /* Source Code Pro Variable Font */
      @font-face {
        font-family: 'Source Code Pro Var';
        font-style: normal;
        font-weight: 200 900;
        font-display: swap;
        src: url('${pathPrefix}/fonts/SourceCodePro-Variable.ttf') format('truetype');
      }

      /* Source Code Pro Variable Font - Italic */
      @font-face {
        font-family: 'Source Code Pro Var';
        font-style: italic;
        font-weight: 200 900;
        font-display: swap;
        src: url('${pathPrefix}/fonts/SourceCodePro-Italic-Variable.ttf') format('truetype');
      }

      /* Static Roboto Mono fallbacks */
      @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${pathPrefix}/fonts/RobotoMono-Variable.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${pathPrefix}/fonts/RobotoMono-Variable.ttf') format('truetype');
      }

      /* Static Source Code Pro fallbacks */
      @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${pathPrefix}/fonts/SourceCodePro-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${pathPrefix}/fonts/SourceCodePro-Bold.ttf') format('truetype');
      }
    `;
    
    // Inject the CSS
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-font-loader', 'true');
    styleElement.textContent = fontCSS;
    document.head.appendChild(styleElement);
    
    console.log('Dynamic font loader: Loaded Inter fonts with prefix:', pathPrefix || 'none (development)');
  }, []);

  return null; // This component doesn't render anything
};

export default FontLoader;