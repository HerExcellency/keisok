// components/ui/Card.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Card = ({ children, elevated = true, interactive = false, className = '', ...props }) => {
  const theme = useTheme();
  
  const baseStyle = {
    background: theme.neumorphic.background,
    borderRadius: theme.borderRadius.lg,
    padding: '30px',
    transition: interactive ? 'all 0.3s ease' : 'none',
    transform: 'translateY(0)',
  };
  
  const boxShadow = elevated 
    ? theme.neumorphic.boxShadow
    : 'none';
  
  const cardStyle = {
    ...baseStyle,
    boxShadow,
  };
  
  const handleMouseOver = (e) => {
    if (interactive) {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '15px 15px 30px rgba(0, 0, 0, 0.15), -15px -15px 30px rgba(255, 255, 255, 0.9)';
    }
  };
  
  const handleMouseOut = (e) => {
    if (interactive) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = theme.neumorphic.boxShadow;
    }
  };
  
  return (
    <div 
      className={className}
      style={cardStyle}
      onMouseOver={interactive ? handleMouseOver : undefined}
      onMouseOut={interactive ? handleMouseOut : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

