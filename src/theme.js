// src/utils/theme.js

export const colors = {
  // Primary Colors
  background: "#F9F9F9", // Light gray background
  primaryText: "#333333", // High contrast text for readability

  // Secondary Colors
  accent: "#236990", // Blue accent color
  secondaryText: "#4A4A4A", // Secondary text color, slightly lighter than primary text

  // Additional Colors
  border: "#DDDDDD", // Subtle border color for separation
  hover: "#25abe2", // High contrast hover color for interactive elements

  // Button Colors
  button: {
    primary: {
      color: "#FFFFFF", // White text for primary button
      backgroundColor: "#236990", // High contrast background for primary button
      borderColor: "#236990",

      hover: {
        backgroundColor: "#004a75", // Darker blue for hover to indicate interaction
        borderColor: "#004a75",
      },

      disabled: {
        backgroundColor: "#CCCCCC", // Gray background for disabled state
        borderColor: "#CCCCCC",
        color: "#8C8C8C", // Gray text for disabled state
      },
    },

    secondary: {
      color: "#236990", // Blue text for secondary button
      backgroundColor: "#FFFFFF", // White background for secondary button
      borderColor: "#25abe2",

      hover: {
        backgroundColor: "#E6F7FF", // Light blue background for hover
        borderColor: "#25abe2",
        color: "#25abe2",
      },

      disabled: {
        backgroundColor: "#FFFFFF",
        borderColor: "#E6E6E6", // Light gray border for disabled state
        color: "#E6E6E6", // Light gray text for disabled state
      },
    },
  },

  // Footer Styles
  footer: {
    backgroundColor: "#236990", // Dark blue background for footer
    textColor: "#FFFFFF", // White text for readability in footer
    padding: "2rem",
    textAlign: "center",

    link: {
      color: "#FFFFFF", // White color for links
      textDecoration: "none",
      hover: {
        textDecoration: "underline", // Underline on hover for accessibility
      },
    },
  },

  // Shadows
  shadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Slightly more pronounced shadow for depth

  // Accessibility-specific Colors
  highContrast: {
    text: "#000000", // Black text for high contrast
    background: "#FFFFFF", // White background for high contrast
  },
};

// Define media breakpoints
export const media = {
  tab: "768px", // Tablet breakpoint
  mobile: "480px", // Mobile breakpoint
};

// Export theme object containing colors and media
const FleurimondTheme = {
  colors,
  media,
};

export default FleurimondTheme;
