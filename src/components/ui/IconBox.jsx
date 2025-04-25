// components/ui/IconBox.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const IconBox = ({ 
  icon, 
  size = 'md', 
  color = 'primary',
  className = '', 
  ...props 
}) => {
  const theme = useTheme();
  
  // Size variants
  const sizes = {
    sm: {
      width: '50px',
      height: '50px',
      borderRadius: '15px',
    },
    md: {
      width: '70px',
      height: '70px',
      borderRadius: '20px',
    },
    lg: {
      width: '90px',
      height: '90px',
      borderRadius: '25px',
    },
  };
  
  // Get color from theme
  const iconColor = theme.colors[color] || theme.colors.primary;
  
  const boxStyle = {
    ...sizes[size],
    background: theme.colors.light,
    boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: iconColor,
  };
  
  return (
    <div
      className={className}
      style={boxStyle}
      {...props}
    >
      {icon}
    </div>
  );
};

export default IconBox;
