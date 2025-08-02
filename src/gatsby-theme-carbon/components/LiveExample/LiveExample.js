import React, { useEffect, useRef, useState } from 'react';
import Code from '../Code/Code';

// Import ELEVATE components
import '@inform-elevate/elevate-core-ui';

// MDI Icon Registry - Add common icons used in examples
const MDI_ICONS = {
  'mdi:plus': '<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />',
  'mdi:chevron-right': '<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />',
  'mdi:chevron-left': '<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />',
  'mdi:chevron-down': '<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />',
  'mdi:delete': '<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />',
  'mdi:pencil': '<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />',
  'mdi:dots-vertical': '<path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />',
  'mdi:close': '<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />',
  'mdi:check': '<path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />',
  'mdi:star': '<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />',
  'mdi:download': '<path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />',
  'mdi:open-in-new': '<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />',
  'mdi:magnify': '<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />',
  'mdi:web': '<path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.5 17.5,2 12,2Z" />',
  'mdi:bell': '<path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />',
  'mdi:email': '<path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />',
  // Text formatting icons
  'mdi:format-bold': '<path d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9.02 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />',
  'mdi:format-italic': '<path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />',
  'mdi:format-underline': '<path d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />',
  // Additional commonly used icons
  'mdi:heart': '<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />',
  'mdi:home': '<path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />',
  'mdi:menu': '<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />',
  'mdi:settings': '<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />',
  'mdi:account': '<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />',
  'mdi:arrow-right': '<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />',
  'mdi:arrow-left': '<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />',
  'mdi:info': '<path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />',
  'mdi:alert': '<path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />',
  // Missing icons used in components
  'mdi:cog': '<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />',
  'mdi:book-open-page-variant': '<path d="M19,2L20,2V4L19,4V21A1,1 0 0,1 18,22H6A1,1 0 0,1 5,21V4L4,4V2L5,2H19M17,4H7V20H17V4M9,6H15V8H9V6M9,10H15V12H9V10M9,14H15V16H9V14Z" />',
  'mdi:view-dashboard': '<path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" />',
  'mdi:folder-plus': '<path d="M13,19C13,20.7 14.3,22 16,22C17.7,22 19,20.7 19,19C19,17.3 17.7,16 16,16C14.3,16 13,17.3 13,19M20,18V14L13.5,7.5C13.1,7.1 12.6,6.9 12.1,6.9H4A2,2 0 0,0 2,8.9V15.1C2,16.2 2.9,17.1 4,17.1H11.2C11.7,19 13.2,20.5 15.1,21H20M16,18.5V17.5H17V18.5H18V19.5H17V20.5H16V19.5H15V18.5H16Z" />',
  'mdi:cloud-off': '<path d="M24,15C24,16.3 23.3,17.4 22.4,18C22.8,18.7 23,19.3 23,20A3,3 0 0,1 20,23H6A6,6 0 0,1 6,11C6,9.7 6.3,8.4 6.9,7.3L1.4,1.8L2.8,0.4L23.6,21.2L22.2,22.6L19.8,20.2C19.2,20.4 18.6,20.5 18,20.5H6A2.5,2.5 0 0,1 6,15.5C6,14.6 6.4,13.8 7.1,13.4C7,13 7,12.5 7,12A5,5 0 0,1 12,7C12.5,7 13,7.1 13.4,7.2L24,15Z" />',
  'mdi:user': '<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />',
  'mdi:check-circle': '<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />',
  'mdi:alert-circle': '<path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />',
  'mdi:close-circle': '<path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />',
  'mdi:heart-outline': '<path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />',
  'mdi:content-save': '<path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />',
  'mdi:edit': '<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />',
};

const LiveExample = ({ 
  htmlCode, 
  title = "Live Example", 
  showCode = true,
  height = "auto",
  padding = "2.5rem"
}) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load ELEVATE components and dependencies
    const loadComponents = () => {
      // Check if components are already loaded
      if (window.customElements && window.customElements.get('elvt-button')) {
        setIsLoaded(true);
        return;
      }

      // Create import map for module resolution
      if (!document.querySelector('script[type="importmap"]')) {
        const importMap = document.createElement('script');
        importMap.type = 'importmap';
        importMap.textContent = JSON.stringify({
          imports: {
            // React (for compatibility)
            "react": "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.development.js",
            "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.development.js"
          }
        });
        document.head.appendChild(importMap);
        console.log('Import map created for module resolution');
        console.log('Import map contents:', JSON.parse(importMap.textContent));
      }

      // Since ELEVATE components are now imported directly, just check if they're registered
      checkForComponents();

      function checkForComponents() {
        let attempts = 0;
        const maxAttempts = 100; // Increase timeout to 10 seconds
        
        const checkComponents = () => {
          attempts++;
          
          // Log what custom elements are actually registered
          if (attempts === 1 || attempts % 10 === 0) {
            console.log(`Attempt ${attempts}: Checking for custom elements...`);
            const registeredElements = [];
            
            // Check for any ELEVATE elements
            ['elvt-button', 'elevate-button', 'elvt-icon', 'elevate-icon', 'elvt-card', 'elevate-card'].forEach(tagName => {
              if (window.customElements && window.customElements.get(tagName)) {
                registeredElements.push(tagName);
              }
            });
            
            if (registeredElements.length > 0) {
              console.log('Found registered ELEVATE elements:', registeredElements);
            } else {
              console.log('No ELEVATE elements registered yet...');
            }
          }
          
          // Check for any ELEVATE component (not just button)
          const elevateElements = ['elvt-button', 'elevate-button', 'elvt-icon', 'elevate-icon', 'elvt-card', 'elevate-card'];
          const foundElement = elevateElements.find(tagName => 
            window.customElements && window.customElements.get(tagName)
          );
          
          if (foundElement) {
            console.log(`ELEVATE component found: ${foundElement}`);
            setIsLoaded(true);
          } else if (attempts < maxAttempts) {
            setTimeout(checkComponents, 100);
          } else {
            console.warn('ELEVATE components did not register within timeout');
            console.log('Final check - listing all custom elements that are registered:');
            
            // Try to log all registered custom elements for debugging
            try {
              const allElements = [];
              for (let i = 0; i < 1000; i++) {
                const testName = `test-element-${i}`;
                try {
                  if (window.customElements.get(testName)) {
                    allElements.push(testName);
                  }
                } catch (e) {
                  // Ignore errors
                }
              }
              console.log('Some registered elements:', allElements.slice(0, 10));
            } catch (e) {
              console.log('Could not enumerate custom elements');
            }
            
            setError('Components loaded but did not register properly - check console for details');
          }
        };
        
        checkComponents();
      }
    };
    
    loadComponents();

    // Cleanup function
    return () => {
      // Don't remove scripts/styles as they might be used by other components
    };
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && htmlCode) {
      try {
        // Clear previous content
        containerRef.current.innerHTML = '';
        
        // Create a container div for the live example
        const exampleContainer = document.createElement('div');
        
        // Process HTML code to inject MDI icons
        let processedHtml = htmlCode;
        
        // Find all elvt-icon and elevate-icon elements with mdi: icons and inject SVG paths
        const elvtIconMatches = htmlCode.match(/<elvt-icon[^>]*icon="mdi:([^"]+)"[^>]*><\/elvt-icon>/g);
        const elevateIconMatches = htmlCode.match(/<elevate-icon[^>]*icon="mdi:([^"]+)"[^>]*><\/elevate-icon>/g);
        
        // Process elvt-icon elements
        if (elvtIconMatches) {
          elvtIconMatches.forEach(match => {
            const iconName = match.match(/icon="mdi:([^"]+)"/)[1];
            const iconKey = `mdi:${iconName}`;
            
            if (MDI_ICONS[iconKey]) {
              // Replace the elvt-icon with an inline SVG
              const svgIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle;">${MDI_ICONS[iconKey]}</svg>`;
              processedHtml = processedHtml.replace(match, svgIcon);
            }
          });
        }
        
        // Process elevate-icon elements
        if (elevateIconMatches) {
          elevateIconMatches.forEach(match => {
            const iconName = match.match(/icon="mdi:([^"]+)"/)[1];
            const iconKey = `mdi:${iconName}`;
            
            if (MDI_ICONS[iconKey]) {
              // Replace the elevate-icon with an inline SVG
              const svgIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle;">${MDI_ICONS[iconKey]}</svg>`;
              processedHtml = processedHtml.replace(match, svgIcon);
            }
          });
        }
        
        exampleContainer.innerHTML = processedHtml;
        
        // Append to the ref container
        containerRef.current.appendChild(exampleContainer);
      } catch (err) {
        setError(`Error rendering live example: ${err.message}`);
      }
    }
  }, [isLoaded, htmlCode]);

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
              Loading ELEVATE components...
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