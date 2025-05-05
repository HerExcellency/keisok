import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../ui/Card';

const ProcessStep = ({ number, title, description }) => {
  const theme = useTheme();
  
  return (
    <div className="relative">
      <div 
        className="absolute -left-4 top-0 text-6xl font-bold opacity-10"
        style={{ color: theme.colors.primary }}
      >
        {number}
      </div>
      <Card className="p-6 h-full relative z-10">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </div>
  );
};

export default ProcessStep;