// components/ui/Badge.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Badge = ({ children, color = 'primary', size = 'md', className = '', ...props }) => {
  const theme = useTheme();
  
  // Color variants
  const colors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    success: theme.colors.success,
    warning: theme.colors.warning,
    error: theme.colors.error,
  };
  
  // Size variants
  const sizes = {
    sm: {
      padding: '4px 8px',
      fontSize: '0.75rem',
      borderRadius: '15px',
    },
    md: {
      padding: '6px 12px',
      fontSize: '0.875rem',
      borderRadius: '20px',
    },
    lg: {
      padding: '8px 16px',
      fontSize: '1rem',
      borderRadius: '25px',
    },
  };
  
  const badgeStyle = {
    ...sizes[size],
    display: 'inline-block',
    background: theme.colors.light,
    color: colors[color],
    fontWeight: '500',
    boxShadow: `3px 3px 6px ${theme.colors.lightGray}, -3px -3px 6px ${theme.colors.white}`,
  };
  
  return (
    <span
      className={className}
      style={badgeStyle}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;

