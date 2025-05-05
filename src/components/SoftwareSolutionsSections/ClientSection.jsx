import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import ClientLogo from './ClientLogo';

const ClientsSection = () => {
  const theme = useTheme();
  
  // Clients we've worked with
  const clients = [
    "Fintech", 
    "Healthcare", 
    "Agritech", 
    "Education",
    "Photography",
    "Artificial Intelligence",
    "Retail",
    "Envionmental",
    "Banking"
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge color="primary" className="mb-4">
            Our Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by organizations across multiple sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We've partnered with organizations across multiple sectors—from healthcare and retail to manufacturing and education—to deliver transformative software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {clients.map((client, index) => (
            <ClientLogo key={index} name={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
