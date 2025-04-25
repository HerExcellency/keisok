// components/ServicesSection.jsx
import React from 'react';
import { Settings, RefreshCw, Shield, Clock, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import IconBox from '../ui/IconBox';

const ServicesSection = () => {
  const theme = useTheme();
  
  const services = [
    {
      title: "ATM Sales & Distribution",
      description: "Wide range of ATM models to suit your banking needs with customizable features and competitive pricing.",
      icon: <Settings className="w-10 h-10" />,
      color: "primary"
    },
    {
      title: "ATM Maintenance & Repair",
      description: "Professional maintenance and repair services with rapid response times to minimize ATM downtime.",
      icon: <RefreshCw className="w-10 h-10" />,
      color: "secondary"
    },
    {
      title: "Card Solutions and printer",
      description: "Advanced Card solutions to meet today's users need",
      icon: <Shield className="w-10 h-10" />,
      color: "accent"
    },
    {
      title: "24/7 Support Services",
      description: "Round-the-clock technical support to ensure your ATM network functions optimally at all times.",
      icon: <Clock className="w-10 h-10" />,
      color: "secondaryLight"
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge color="primary" className="mb-4">
            Our Services
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.dark }}>
             ATM and Card Solutions
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.darkGray }}>
            We offer a range of ATM services and card solutions tailored to your specific requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
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

