// Giscus Configuration
// You can modify these settings to customize your commenting system
export const giscusConfig = {
  // Repository settings
  repo: "enough-jainil/yt-dlp-doc",
  repoId: "R_kgDOMydt5A",

  // Discussion settings
  category: "DOCs discussions",
  categoryId: "DIC_kwDOMydt5M4CsFo6",

  // Display settings
  mapping: "pathname", // Maps comments to page paths
  strict: "0", // Use strict title matching
  reactionsEnabled: "1", // Enable reaction buttons
  emitMetadata: "0", // Emit discussion metadata
  inputPosition: "top", // Position of comment input box

  // Appearance settings
  // Themes will be automatically switched based on Docusaurus theme
  // Available themes: light, dark, dark_dimmed, dark_high_contrast,
  //                   transparent_dark, preferred_color_scheme
  lightTheme: "light",
  darkTheme: "dark_high_contrast",

  // Internationalization
  lang: "en",

  // Performance
  loading: "lazy", // Load comments lazily

  // Advanced settings
  crossorigin: "anonymous",

  // Pages where comments should be disabled (optional)
  disabledPages: [
    // Add page paths here if you want to disable comments on specific pages
    // Example: "/docs/some-page-without-comments"
  ],
};

export default giscusConfig;
