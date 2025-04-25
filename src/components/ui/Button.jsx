// components/ui/Button.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom'; // Import Link (assuming you're using React Router)

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  className = '',
  href, // Add href prop for links
  to, // Add to prop for React Router Links
  id, // Add id prop
  ...props
}) => {
  const theme = useTheme();
  
  // Define variant styles
  const variants = {
    primary: {
      background: theme.gradients.primary,
      color: theme.colors.white,
      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)',
    },
    secondary: {
      background: theme.colors.light,
      color: theme.colors.primary,
      boxShadow: theme.neumorphic.pressed,
    },
    outline: {
      background: 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`,
    },
  };
  
  // Define size styles
  const sizes = {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      borderRadius: theme.borderRadius.sm,
    },
    md: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      borderRadius: theme.borderRadius.md,
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
      borderRadius: theme.borderRadius.lg,
    },
  };

  // Combined style based on props
  const buttonStyle = {
    ...variants[variant],
    ...sizes[size],
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)',
    cursor: 'pointer',
    textDecoration: 'none', // Important for links
  };

  // Hover effects
  const handleMouseOver = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '12px 12px 20px rgba(0, 0, 0, 0.15), -12px -12px 20px rgba(255, 255, 255, 0.9)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.boxShadow = 'inset 12px 12px 20px rgba(0, 0, 0, 0.15), inset -12px -12px 20px rgba(255, 255, 255, 0.9)';
    }
  };

  const handleMouseOut = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.boxShadow = theme.neumorphic.pressed;
    }
  };

  // Determine what element to render based on props
  if (to) {
    // If 'to' prop is provided, render a React Router Link
    return (
      <Link
        to={to}
        className={`${className}`}
        style={buttonStyle}
        id={id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        {...props}
      >
        {children}
      </Link>
    );
  } else if (href) {
    // If 'href' prop is provided, render an anchor tag
    return (
      <a
        href={href}
        className={`${className}`}
        style={buttonStyle}
        id={id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    // Otherwise, render a regular button
    return (
      <button
        className={`${className}`}
        style={buttonStyle}
        onClick={onClick}
        id={id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;