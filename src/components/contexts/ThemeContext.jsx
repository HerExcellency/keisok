
// contexts/ThemeContext.jsx - Centralized theme management
import React, { createContext, useContext } from 'react';

// Define color scheme
const colors = {
  primary: '#4361EE', // Royal blue
  primaryLight: '#4CC9F0', // Light blue
  primaryDark: '#3A0CA3', // Deep purple
  secondary: '#F72585', // Hot pink
  secondaryLight: '#FF9E00', // Orange
  accent: '#7209B7', // Purple
  light: '#F8F9FA', // Off-white
  lightGray: '#E9ECEF', // Light gray for neumorphic shadows
  darkGray: '#495057', // Dark gray
  dark: '#212529', // Almost black
  white: '#FFFFFF',
  success: '#4CAF50', // Green
  warning: '#FF9800', // Orange
  error: '#F44336', // Red
};

// Create the theme context
const ThemeContext = createContext();

// Custom hook to access the theme
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Neumorphic styles
  const neumorphic = {
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.8)',
    pressed: 'inset 8px 8px 16px rgba(0, 0, 0, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.8)',
    background: colors.light,
  };

  // Combine colors and shared styles
  const theme = {
    colors,
    neumorphic,
    gradients: {
      primary: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      secondary: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
      warning: `linear-gradient(135deg, ${colors.secondaryLight} 0%, ${colors.warning} 100%)`,
    },
    borderRadius: {
      sm: '10px',
      md: '15px',
      lg: '20px',
      xl: '30px',
      full: '9999px',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

