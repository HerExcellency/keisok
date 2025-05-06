
// components/ui/Logo.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import keisok from '../../assets/img/keisokBg.png'


const Logo = () => {
  const theme = useTheme();
  
  return (
    <div className="flex items-center">
      {/* <div style={{ 
        background: theme.gradients.primary,
        padding: '10px',
        borderRadius: theme.borderRadius.md,
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.8)',
      }}>
      </div> */}
      <div className="ml-2 w-[200px] h-[50px]">
        <img src={keisok} alt="Logo"  />
      </div>
    </div>
  );
};

export default Logo;

