// components/software-services/ClientLogo.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ClientLogo = ({ name }) => {
  const theme = useTheme();
  
  return (
    <div 
      className="h-24 flex items-center justify-center p-4 rounded-lg"
      style={{ 
        background: theme.colors.light,
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.05), -5px -5px 15px rgba(255, 255, 255, 0.8)'
      }}
    >
      <span 
        className="text-lg font-medium text-center"
        style={{ color: theme.colors.primary }}
      >
        {name}
      </span>
    </div>
  );
};

export default ClientLogo;