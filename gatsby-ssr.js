import React from 'react';

export const onRenderBody = ({ setHeadComponents, pathPrefix }) => {
  // Ensure we have the correct path prefix - fallback for production
  const actualPathPrefix = pathPrefix || (process.env.NODE_ENV === 'production' ? '/elevate-design-system-test' : '');
  
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
          /* Font loading optimization - prevent FOUT */
          html {
            font-family: 'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          
          /* Prevent font loading cascade by setting base fonts immediately */
          body, * {
            font-family: inherit;
          }
          /* Critical font face declarations for Inter */
          @font-face {
            font-family: 'Inter Var';
            font-style: normal;
            font-weight: 100 900;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2 supports variations'),
                 url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2-variations'),
                 url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
            font-named-instance: 'Regular';
          }
          
          @font-face {
            font-family: 'Inter Var';
            font-style: italic;
            font-weight: 100 900;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2 supports variations'),
                 url('${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2-variations'),
                 url('${actualPathPrefix}/fonts/Inter-Italic-Variable.woff2') format('woff2');
            font-named-instance: 'Italic';
          }
          
          /* Static fallbacks for better compatibility */
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
            font-weight: 700;
            font-display: swap;
            src: url('${actualPathPrefix}/fonts/Inter-Variable.woff2') format('woff2');
          }
        `
      }}
    />
  ]);
};