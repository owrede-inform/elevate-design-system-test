import React from 'react';
import { getStorybookUrl } from '../config/globals';

/**
 * Component to generate Storybook documentation links
 * @param {string} component - The component name (e.g., 'button', 'avatar')
 * @param {string} children - Link text (optional, defaults to "Storybook documentation")
 * @param {string} className - Additional CSS classes
 */
const StorybookLink = ({ 
  component, 
  children = "Storybook documentation", 
  className = "",
  ...props 
}) => {
  const url = getStorybookUrl(component);
  
  if (!url) {
    console.warn(`StorybookLink: No URL found for component "${component}"`);
    return <span className="text-gray-500">{children} (URL not configured)</span>;
  }
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default StorybookLink;