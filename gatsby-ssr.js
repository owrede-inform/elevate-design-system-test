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
    // Font preloads
    ...fontPreloads.map((font, index) => (
      <link key={`font-preload-${index}`} {...font} />
    )),
    
    // Critical CSS for fonts loaded synchronously
    <style
      key="critical-fonts"
      dangerouslySetInnerHTML={{
        __html: `
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