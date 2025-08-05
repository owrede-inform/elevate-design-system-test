import React from 'react';

export const onRenderBody = ({ setHeadComponents, pathPrefix }) => {
  // Ensure we have the correct path prefix - fallback for production
  const actualPathPrefix = pathPrefix || (process.env.NODE_ENV === 'production' ? '/elevate-design-system-test' : '');
  
  // Environment detection for consistent behavior
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Preload critical fonts for better performance
  const fontPreloads = [
    {
      rel: 'preload',
      href: `${actualPathPrefix}/fonts/Inter-Variable.woff2`,
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: `${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2`,
      as: 'font',
      type: 'font/woff2',
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
          .cds--caption-01, .cds--caption-02,
          .cds--label-01, .cds--label-02,
          .cds--helper-text-01, .cds--helper-text-02,
          .cds--legal-01, .cds--legal-02,
          .cds--productive-heading-01, .cds--productive-heading-02,
          .cds--productive-heading-03, .cds--productive-heading-04,
          .cds--productive-heading-05, .cds--productive-heading-06,
          .cds--productive-heading-07,
          .cds--expressive-heading-01, .cds--expressive-heading-02,
          .cds--expressive-heading-03, .cds--expressive-heading-04,
          .cds--expressive-heading-05, .cds--expressive-heading-06,
          .cds--expressive-paragraph-01,
          .cds--quotation-01, .cds--quotation-02,
          .cds--display-01, .cds--display-02, .cds--display-03, .cds--display-04,
          h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, select, textarea {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
          }
          
          /* Preserve monospace for code elements only */
          code, pre, kbd, samp, var,
          .cds--code-01, .cds--code-02 {
            font-family: 'Source Code Pro', 'Roboto Mono', 'JetBrains Mono', Monaco, 'Cascadia Code', 'Courier New', monospace !important;
          }
          /* Standard Inter font face declarations for consistency */
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2');
          }
        `
      }}
    />
  ]);
};