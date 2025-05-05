// components/software-services/Statistic.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../ui/Card';

const Statistic = ({ number, label }) => {
  const theme = useTheme();
  
  return (
    <Card className="py-4 px-6">
      <div className="text-2xl font-bold" style={{ color: theme.colors.primary }}>{number}</div>
      <div style={{ color: theme.colors.darkGray }}>{label}</div>
    </Card>
  );
};

export default Statistic;
