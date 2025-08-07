import React from 'react';

// Import our fixed wrap-root-element to override theme version
export { default as wrapRootElement } from './src/gatsby-theme-carbon/util/wrap-root-element';

export const onRenderBody = ({ setHeadComponents, pathPrefix }) => {
  // Ensure we have the correct path prefix - fallback for production
  const actualPathPrefix = pathPrefix || (process.env.NODE_ENV === 'production' ? '/elevate-design-system-test' : '');
  
  // Environment detection for consistent behavior
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Use local Inter fonts from static/fonts/Inter directory
  const fontPreloads = [
    {
      rel: 'preload',
      href: `${actualPathPrefix}/fonts/Inter/Inter_18pt-Regular.ttf`,
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: `${actualPathPrefix}/fonts/Inter/Inter_18pt-Medium.ttf`,
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: `${actualPathPrefix}/fonts/Inter/Inter_18pt-SemiBold.ttf`,
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
  ];

  setHeadComponents([
    // Font preloads - highest priority
    ...fontPreloads.map((font, index) => (
      <link key={`font-preload-${index}`} {...font} />
    )),
    
    // Critical CSS for fonts loaded synchronously - prevent FOUT
    <style
      key="critical-fonts"
      dangerouslySetInnerHTML={{
        __html: `
          /* UNIFIED FONT SYSTEM - NO CLIENT-SIDE OVERRIDES */
          /* Clean, systematic approach with single source of truth */
          
          /* Base font declaration */
          html {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
          }
          
          /* Inherit for all elements - no conflicts */
          body, * {
            font-family: inherit;
          }
          
          /* Override any Gatsby theme or Carbon component font declarations */
          [class*="cds-"], [class*="bx-"], 
          .cds--body, .cds--body-compact-01, .cds--body-compact-02,
          .cds--body-01, .cds--body-02,
          .esds-caption-01, .esds-caption-02,
          .esds-label-01, .esds-label-02,
          .esds-helper-text-01, .esds-helper-text-02,
          .esds-legal-01, .esds-legal-02,
          .esds-productive-heading-01, .esds-productive-heading-02,
          .esds-productive-heading-03, .esds-productive-heading-04,
          .esds-productive-heading-05, .esds-productive-heading-06,
          .esds-productive-heading-07,
          .esds-expressive-heading-01, .esds-expressive-heading-02,
          .esds-expressive-heading-03, .esds-expressive-heading-04,
          .esds-expressive-heading-05, .esds-expressive-heading-06,
          .esds-expressive-paragraph-01,
          .esds-quotation-01, .esds-quotation-02,
          .esds-display-01, .esds-display-02, .esds-display-03, .esds-display-04,
          h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, select, textarea {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
          }
          
          /* Preserve monospace for code elements only */
          code, pre, kbd, samp, var,
          .cds--code-01, .cds--code-02 {
            font-family: 'Source Code Pro', 'Roboto Mono', 'JetBrains Mono', Monaco, 'Cascadia Code', 'Courier New', monospace !important;
          }
          /* Inter font face declarations using local static TTF files */
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter/Inter_18pt-Regular.ttf') format('truetype');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter/Inter_18pt-Medium.ttf') format('truetype');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter/Inter_18pt-SemiBold.ttf') format('truetype');
          }
          
          /* CRITICAL: Block ALL IBM Plex font loading attempts */
          /* Prevent any @font-face rules from loading IBM Plex fonts */
          @font-face {
            font-family: 'IBM Plex Sans';
            src: none !important;
          }
          
          @font-face {
            font-family: 'IBM Plex Sans Var';
            src: none !important;
          }
          
          @font-face {
            font-family: 'IBM Plex Mono';
            src: none !important;
          }
          
          /* Override any remaining IBM font references with Inter */
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
          }
          
          /* Specifically target code elements to prevent IBM Plex Mono */
          code, pre, kbd, samp, var,
          .cds--code-01, .cds--code-02 {
            font-family: 'Source Code Pro', 'Roboto Mono', 'JetBrains Mono', Monaco, 'Cascadia Code', 'Courier New', monospace !important;
          }
        `
      }}
    />
  ]);
};