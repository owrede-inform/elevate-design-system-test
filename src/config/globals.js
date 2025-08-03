// Global configuration for the ELEVATE Design System documentation
export const ELEVATE_CONFIG = {
  // Storybook URLs
  STORYBOOK_BASE_URL: 'https://elevate-core-ui.inform-cloud.io',
  
  // Component-specific Storybook paths (corrected format)
  STORYBOOK_PATHS: {
    // Core components - using correct /docs/ format
    avatar: '/docs/components-avatar--docs',
    badge: '/docs/components-badge--docs', 
    breadcrumb: '/docs/components-breadcrumb--docs',
    'breadcrumb-item': '/docs/components-breadcrumb-item--docs',
    button: '/docs/components-buttons-button--docs',
    'button-group': '/docs/components-buttons-button-group--docs',
    card: '/docs/components-card--docs',
    checkbox: '/docs/components-checkbox--docs',
    chip: '/docs/components-chip--docs',
    'date-picker': '/docs/components-date-picker--docs',
    dialog: '/docs/components-dialog--docs',
    divider: '/docs/components-divider--docs',
    drawer: '/docs/components-drawer--docs',
    dropdown: '/docs/components-dropdown--docs',
    'empty-state': '/docs/components-empty-state--docs',
    'expansion-panel': '/docs/components-expansion-panel--docs',
    icon: '/docs/components-icon--docs',
    'icon-button': '/docs/components-icon-button--docs',
    input: '/docs/components-input--docs',
    link: '/docs/components-link--docs',
    notification: '/docs/components-notification--docs',
    switch: '/docs/components-switch--docs',
    table: '/docs/components-table--docs',
    tooltip: '/docs/components-tooltip--docs',
  },
  
  // Helper function to get full Storybook URL
  getStorybookUrl: (componentName) => {
    const path = ELEVATE_CONFIG.STORYBOOK_PATHS[componentName];
    return path ? `${ELEVATE_CONFIG.STORYBOOK_BASE_URL}${path}` : null;
  }
};

// Export individual values for convenience
export const STORYBOOK_BASE_URL = ELEVATE_CONFIG.STORYBOOK_BASE_URL;
export const getStorybookUrl = ELEVATE_CONFIG.getStorybookUrl;