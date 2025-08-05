import React, { useEffect, useRef, useState } from 'react';
import Code from '../Code/Code';

// Lazy-loaded MDI Icon Registry to prevent serialization issues
const getMDIIcon = (iconName) => {
  const icons = {
    'mdi:plus': '<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />',
    'mdi:chevron-right': '<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />',
    'mdi:chevron-left': '<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />',
    'mdi:chevron-down': '<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />',
    'mdi:delete': '<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />',
    'mdi:pencil': '<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />',
    'mdi:close': '<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />',
    'mdi:check': '<path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />',
    'mdi:star': '<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />',
    'mdi:download': '<path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />',
    'mdi:home': '<path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />',
    'mdi:menu': '<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />',
    'mdi:settings': '<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />',
    'mdi:account': '<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />',
    'mdi:info': '<path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />',
    'mdi:alert': '<path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />',
  };
  return icons[iconName] || '';
};

const LiveExample = ({ 
  htmlCode, 
  title = "Live Example", 
  showCode = true,
  height = "auto",
  padding = "2.5rem"
}) => {
  const containerRef = useRef(null);
  // Initialize as loaded during SSR to prevent hydration issues
  const [isLoaded, setIsLoaded] = useState(typeof window === 'undefined');
  const [error, setError] = useState(null);
  const isSSR = typeof window === 'undefined';

  // All hooks must be called before any conditional returns
  useEffect(() => {
    // Skip during SSR/build process
    if (isSSR) {
      return;
    }

    // Check if we're in a build environment by detecting common CI/build indicators
    const isBuildEnvironment = 
      typeof process !== 'undefined' && (
        process.env.NODE_ENV === 'production' ||
        process.env.CI === 'true' ||
        process.env.GATSBY_BUILD === 'true' ||
        typeof window.__GATSBY_BUILD__ !== 'undefined'
      );

    // Dynamically import ELEVATE components for better Gatsby compatibility
    const loadElevateComponents = async () => {
      try {
        // First load the design tokens CSS 
        if (!document.querySelector('link[href*="elevate-design-tokens"]')) {
          // Load design tokens from unpkg since local import doesn't work in browser
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/@inform-elevate/elevate-design-tokens@1.0.0/dist/light.css';
          document.head.appendChild(link);
          console.log('ELEVATE design tokens CSS loaded from unpkg');
        }
        
        // Try to dynamically import ELEVATE components if available
        // This will gracefully fail if the package is not installed
        // Dynamic import to avoid SSR issues
        await import('@inform-elevate/elevate-core-ui');
        console.log('ELEVATE components imported successfully');
        
        // Register MDI icons - using lazy loading to prevent serialization issues
        const iconNames = [
          'mdi:plus', 'mdi:chevron-right', 'mdi:chevron-left', 'mdi:chevron-down', 
          'mdi:delete', 'mdi:pencil', 'mdi:close', 'mdi:check', 'mdi:star', 
          'mdi:download', 'mdi:home', 'mdi:menu', 'mdi:settings', 'mdi:account', 
          'mdi:info', 'mdi:alert'
        ];
        
        iconNames.forEach(name => {
          const path = getMDIIcon(name);
          if (path && window.ElevateCoreUI?.registerIcon) {
            window.ElevateCoreUI.registerIcon(name, path);
          }
        });
        
        setIsLoaded(true);
        setError(null);
      } catch (err) {
        console.error('Failed to load ELEVATE components:', err);
        setError('Failed to load interactive components');
        setIsLoaded(true); // Still set to true so we show the static version
      }
    };

    // Skip loading in build/CI environments to prevent build failures
    if (isBuildEnvironment) {
      console.log('Build environment detected, skipping ELEVATE component loading');
      setIsLoaded(true);
      return;
    }
    
    // Only load on client side in development/runtime
    loadElevateComponents();

    // Cleanup function
    return () => {
      // Don't remove scripts/styles as they might be used by other components
    };
  }, [isSSR]);

  useEffect(() => {
    if (isLoaded && containerRef.current && htmlCode && !isSSR) {
      try {
        // Clear previous content
        containerRef.current.innerHTML = '';
        
        // Create a container div for the live example
        const exampleContainer = document.createElement('div');
        exampleContainer.className = 'live-example-container';
        exampleContainer.setAttribute('data-live-example', 'true');
        
        // Check if ELEVATE components are actually available
        const hasElevateComponents = typeof window !== 'undefined' && 
          window.customElements && 
          window.customElements.get('elvt-button');
        
        if (!hasElevateComponents) {
          // Fallback UI when components aren't available
          exampleContainer.innerHTML = `
            <div style="
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              color: #666;
              font-size: 0.9rem;
              background: #f8f9fa;
              border: 1px dashed #dee2e6;
              border-radius: 4px;
            ">
              ELEVATE components are loading...
            </div>
          `;
        } else {
          // Set the HTML content with ELEVATE components
          exampleContainer.innerHTML = htmlCode;
        }
        
        containerRef.current.appendChild(exampleContainer);
      } catch (err) {
        console.error('Error rendering live example:', err);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="color: #dc3545; padding: 1rem; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px;">
              Error loading example: ${err.message}
            </div>
          `;
        }
      }
    }
  }, [isLoaded, htmlCode, isSSR]);

  // Early return for SSR - just show the code
  if (isSSR) {
    return (
      <div style={{ marginBottom: '-0.5rem' }}>
        {title && (
          <h4 style={{ 
            marginTop: '2rem',
            marginBottom: '1rem', 
            fontSize: '1rem',
            fontWeight: '600',
            color: '#2e2e2e'
          }}>
            {title}
          </h4>
        )}
        
        <div 
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            marginBottom: showCode ? '0' : '1rem',
            width: '100%',
            maxWidth: 'none',
            overflow: 'visible',
            position: 'relative'
          }}
        >
          <div
            style={{
              padding: padding,
              minHeight: '100px',
              backgroundColor: '#ffffff',
              borderRadius: '8px 8px 0 0',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100px',
              color: '#666',
              fontSize: '0.9rem'
            }}>
              Interactive example will be available after page load
            </div>
          </div>
          
          {showCode && htmlCode && (
            <div style={{
              borderTop: '1px solid #e0e0e0',
              borderRadius: '0 0 8px 8px',
              overflow: 'visible',
              width: '100%',
              margin: 0,
              padding: 0,
              display: 'block'
            }}>
              <div style={{ width: '100%', margin: 0, padding: 0 }}>
                <Code className="language-html">{htmlCode}</Code>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render the normal component for client-side
  if (error) {
    return (
      <div style={{
        padding: '1rem',
        border: '1px solid #ff6b6b',
        borderRadius: '4px',
        backgroundColor: '#ffebee',
        color: '#c62828',
        marginBottom: '1rem'
      }}>
        <strong>Live Example Error:</strong> {error}
        {showCode && htmlCode && (
          <div style={{ marginTop: '1rem' }}>
            <Code className="language-html">{htmlCode}</Code>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '-0.5rem' }}>
      {title && (
        <h4 style={{ 
          marginTop: '2rem',
          marginBottom: '1rem', 
          fontSize: '1rem',
          fontWeight: '600',
          color: '#2e2e2e'
        }}>
          {title}
        </h4>
      )}
      
      <div 
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          marginBottom: showCode ? '0' : '1rem',
          width: '100%',
          maxWidth: 'none',
          overflow: 'visible',
          position: 'relative'
        }}
      >
        <div
          ref={containerRef}
          style={{
            padding: padding,
            minHeight: isLoaded ? height : '100px',
            backgroundColor: '#ffffff',
            borderRadius: '8px 8px 0 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {!isLoaded && !error && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100px',
              color: '#666',
              fontSize: '0.9rem'
            }}>
              {typeof window === 'undefined' ? 'Preparing example...' : 'Loading ELEVATE components...'}
            </div>
          )}
        </div>
        
        {showCode && htmlCode && (
          <div style={{
            borderTop: '1px solid #e0e0e0',
            borderRadius: '0 0 8px 8px',
            overflow: 'visible',
            width: '100%',
            margin: 0,
            padding: 0,
            display: 'block'
          }}>
            <div style={{ width: '100%', margin: 0, padding: 0 }}>
              <Code className="language-html">{htmlCode}</Code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveExample;