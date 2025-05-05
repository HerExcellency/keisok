// components/software-services/ServicesSection.jsx
import React from 'react';
import { Server, Shield, Database, Globe, Cpu, Smartphone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
// import ServiceCard from './ServiceCard';
import IconBox from '../ui/IconBox';
import { ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const theme = useTheme();
  
  // Services we offer
  const services = [
    {
      icon: <Server className="w-10 h-10" />,
      title: "Enterprise Software Solutions",
      description: "Custom enterprise applications with intuitive interfaces, robust security, and seamless integration with your existing systems across any industry.",
      color:"primary"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure Transaction Systems",
      description: "End-to-end transaction processing solutions with advanced encryption and security measures for fintech, healthcare, and e-commerce organizations.",
      color:"secondary"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Care Management Platforms",
      description: "Modern care home management systems designed for resident tracking, medication administration, staff scheduling, and regulatory compliance.",
      color:"accent"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "AI-Powered Mobile Applications",
      description: "Feature-rich mobile applications with AI capabilities, natural language processing, and intuitive user experiences for businesses of all sizes.",
      color:"primary"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Health AI Solutions",
      description: "Intelligent health triage applications using machine learning to assess symptoms, locate nearby medical facilities, and suggest appropriate treatments.",
      color:"secondary"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Specialized Industry Platforms",
      description: "Comprehensive solutions for academic institutions and recycling organizations, featuring custom workflows, analytics, and reporting capabilities.",
      color:"accent"

    }
  ];
  
  return (
    <section id="software-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge color="secondary" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Modern Software Solutions 
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in developing high-performance, secure software solutions for institutions of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, color }) => {
  const theme = useTheme();
  
  return (
    <Card interactive>
      <IconBox 
        icon={icon} 
        color={color} 
        size="md" 
        className="mb-6"
      />
      
      <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.dark }}>
        {title}
      </h3>
      
      <p className="mb-4" style={{ color: theme.colors.darkGray }}>
        {description}
      </p>
      
      <a 
        href="#" 
        className="inline-flex items-center font-medium"
        style={{ 
          color: theme.colors[color],
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.paddingLeft = '6px';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.paddingLeft = '0';
        }}
      >
        {/* Learn More <ChevronRight className="w-4 h-4 ml-1" /> */}
      </a>
    </Card>
  );
};

export default ServicesSection;
