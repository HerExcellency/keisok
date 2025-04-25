
// components/ClientsCarousel.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import bankLogo from '../../assets/img/accessB.png'
import wema from '../../assets/img/wemaBank.svg'
import fidelity from '../../assets/img/fidelity.svg'
import polaris from '../../assets/img/polaris.png'


const ClientsCarousel = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const clients = [
    { name: 'Wema Bank', logo: wema, type: 'Banking' },
    { name: 'Fidelity Bank', logo: fidelity, type: 'Banking' },
    { name: 'Polaris Bank', logo: polaris, type: 'Banking' },
  ];
  
  // Split clients into chunks of 4 for the carousel
  const clientChunks = [];
  for (let i = 0; i < clients.length; i += 4) {
    clientChunks.push(clients.slice(i, i + 4));
  }
  
  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % clientChunks.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [clientChunks.length]);
  
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % clientChunks.length);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + clientChunks.length) % clientChunks.length);
  };
  
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge color="primary" className="mb-4">
            Our Clients   </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.dark }}>
            Trusted by Leading Financial Institutions
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.darkGray }}>
            Our FIntech Solutions power banking services across the region
          </p>
        </div>
        
        <div className="relative overflow-hidden py-8">
          {/* Carousel container with transition effect */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {clientChunks.map((chunk, chunkIndex) => (
              <div 
                key={chunkIndex} 
                className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-3 gap-6"
              >
                {chunk.map((client, clientIndex) => (
                  <ClientCard 
                    key={clientIndex}
                    name={client.name}
                    logo={client.logo}
                    type={client.type}
                  />
                ))}
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          {/* <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full"
            style={{
              background: theme.colors.white,
              boxShadow: theme.neumorphic.boxShadow,
            }}
            onClick={goToPrevSlide}
          >
            <ArrowLeft size={18} style={{ color: theme.colors.primary }} />
          </button>
          
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full"
            style={{
              background: theme.colors.white,
              boxShadow: theme.neumorphic.boxShadow,
            }}
            onClick={goToNextSlide}
          >
            <ArrowRight size={18} style={{ color: theme.colors.primary }} />
          </button> */}
          
          {/* Dots indicator */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {clientChunks.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full"
                style={{
                  background: currentSlide === index ? theme.colors.primary : theme.colors.lightGray,
                  boxShadow: currentSlide === index ? 'none' : '1px 1px 3px rgba(0, 0, 0, 0.1), -1px -1px 3px rgba(255, 255, 255, 0.8)',
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

const ClientCard = ({ name, logo, type }) => {
  const theme = useTheme();
  
  return (
    <Card className="p-6 flex flex-col items-center justify-center h-40">
      <img src={logo} alt={name} className="mb-4 max-h-12" />
      <h3 className="font-medium text-center" style={{ color: theme.colors.dark }}>{name}</h3>
      <span className="text-sm" style={{ color: theme.colors.darkGray }}>{type}</span>
    </Card>
  );
};

export default ClientsCarousel;

