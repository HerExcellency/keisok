import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
  const theme = useTheme();
  
  // Our development process
  const developmentProcess = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business needs, current systems, and challenges to establish clear project requirements."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts design a comprehensive solution architecture that addresses your specific needs while ensuring scalability and security."
    },
    {
      number: "03",
      title: "Agile Development",
      description: "We develop your solution using agile methodologies, with regular demos and feedback cycles to ensure alignment with your expectations."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing ensures your solution is secure, reliable and meets the highest quality standards before deployment."
    },
    {
      number: "05",
      title: "Deployment & Integration",
      description: "We implement the solution in your environment with minimal disruption, ensuring smooth integration with existing systems."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Our team provides ongoing support, updates, and improvements to keep your software performing optimally."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge color="secondary" className="mb-4">
            How We Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to deliver high-quality software solutions that meet your business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentProcess.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;