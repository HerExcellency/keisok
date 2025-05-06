// components/software-services/ServiceCard.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../ui/Card';

const ServiceCard = ({ icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <Card className="p-4 lg:p-6 hover:shadow-lg transition-shadow duration-300">
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ background: theme.gradients.primary }}
      >
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default ServiceCard;