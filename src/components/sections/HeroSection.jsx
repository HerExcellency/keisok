// components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import atmImage from '../../assets/img/image-009.jpg'

// Placeholder images - replace with your actual imports
const atmImage2 = atmImage; // Replace with actual second ATM image
const atmImage3 = atmImage; // Replace with actual third ATM image

const HeroSection = () => {
  const theme = useTheme();
  const [showCard, setShowCard] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Toggle between ATM and Card views with transition
  const toggleView = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowCard(prev => !prev);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }
  };
  
  // Auto-toggle between views
  useEffect(() => {
    const interval = setInterval(() => {
      toggleView();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isTransitioning]);
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="primary" className="mb-6">
              Fintech Solutions Provider
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              Advanced ATM <br/>
              {/* & Card Issuance<br/> */}
              <span style={{ 
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>& Card Issuance<br/>
              Solutions for Modern Banking</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8" style={{ color: theme.colors.darkGray, lineHeight: 1.6 }}>
              KEISOK provides end-to-end ATM machines sales, repair, maintenance, card and fintech solutions to banks and financial institutions across the region.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="#atm-solutions" >
                Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="secondary" size="lg" href="#contact">
                Contact Us
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <StatCard number="10K+" label="Active Users" />
              <StatCard number="99.9%" label="Uptime" />
              <StatCard number="24/7" label="Support" />
            </div>
          </div>
          
          <div className="relative block h-[500px] flex items-center justify-center">
            <div className="relative w-full flex justify-center">
              <div 
                style={{ 
                  opacity: showCard || isTransitioning ? 0 : 1,
                  transition: 'opacity 0.5s ease-in-out',
                  position: 'absolute',
                  display: showCard && !isTransitioning ? 'none' : 'block',
                  transform: 'translateX(-50%)',
                  left: '50%'
                }}
              >
                <HeroImage />
              </div>
              
              <div 
                style={{ 
                  opacity: !showCard || isTransitioning ? 0 : 1, 
                  transition: 'opacity 0.5s ease-in-out',
                  position: 'absolute',
                  display: !showCard && !isTransitioning ? 'none' : 'block',
                  transform: 'translateX(-50%)',
                  left: '50%'
                }}
              >
                <AtmCard />
              </div>
              
              {/* Manual toggle button */}
              <button 
                onClick={toggleView}
                className="absolute bottom-0 bg-white bg-opacity-70 rounded-full py-2 px-4 hover:bg-opacity-90 transition-all z-10"
                style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
              >
                {showCard ? 'Show ATM' : 'Show Card'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }) => {
  const theme = useTheme();
  
  return (
    <Card className="py-4 px-6">
      <div className="text-2xl font-bold" style={{ color: theme.colors.primary }}>{number}</div>
      <div style={{ color: theme.colors.darkGray }}>{label}</div>
    </Card>
  );
};

const HeroImage = () => {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // ATM Machine image array - add your actual images here
  const atmImages = [atmImage, atmImage2, atmImage3];
  
  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % atmImages.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }
  };
  
  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? atmImages.length - 1 : prevIndex - 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }
  };
  
  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentImageIndex, isTransitioning]);
  
  return (
    <div className="relative md:block">
      <div style={{ 
        width: '300px',
        height: '400px',
        borderRadius: theme.borderRadius.xl,
        background: theme.colors.light,
        boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.1), -20px -20px 40px rgba(255, 255, 255, 0.8)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}>
          <img 
            src={atmImages[currentImageIndex]} 
            alt="ATM Machine" 
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all z-10"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all z-10"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        >
          <ChevronRight size={20} />
        </button>
        
        {/* Image indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {atmImages.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              style={{ transition: 'background-color 0.3s ease' }}
            ></div>
          ))}
        </div>
        
        {/* Neumorphic floating elements */}
        <div style={{ 
          position: 'absolute',
          top: '20px',
          right: '-30px',
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          background: theme.colors.primary,
          boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.4)',
          transform: 'rotate(45deg)',
          zIndex: 5
        }}></div>
        
        <div style={{ 
          position: 'absolute',
          bottom: '40px',
          left: '-20px',
          width: '60px',
          height: '60px',
          borderRadius: '15px',
          background: theme.colors.secondary,
          boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.4)',
          transform: 'rotate(30deg)',
          zIndex: 5
        }}></div>
      </div>
      
      {/* Background accent element */}
      <div style={{ 
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: theme.gradients.primary,
        filter: 'blur(60px)',
        opacity: 0.3,
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        zIndex: -1,
      }}></div>
    </div>
  );
};

const AtmCard = () => {
  const theme = useTheme();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Card designs - you can add more card designs here
  const cardDesigns = [
    {
      background: theme.gradients.primary,
      cardNumber: "**** **** **** 5678",
      cardholderName: "CARDHOLDER NAME",
      expiry: "04/28",
      logo: "KEISOK"
    },
    {
      background: `linear-gradient(120deg, ${theme.colors.secondary}, #2d3748)`,
      cardNumber: "**** **** **** 1234",
      cardholderName: "PREMIUM MEMBER",
      expiry: "05/29",
      logo: "KEISOK+"
    },
    {
      background: `linear-gradient(135deg, #2193b0, #6dd5ed)`,
      cardNumber: "**** **** **** 9012",
      cardholderName: "CORPORATE CARD",
      expiry: "12/27",
      logo: "KEISOK"
    }
  ];
  
  const nextCard = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardDesigns.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }
  };
  
  const prevCard = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => 
          prevIndex === 0 ? cardDesigns.length - 1 : prevIndex - 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }
  };
  
  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 6500); // Different timing than ATM images for visual interest
    
    return () => clearInterval(interval);
  }, [currentCardIndex, isTransitioning]);
  
  const currentCard = cardDesigns[currentCardIndex];
  
  return (
    <div className="relative mt-8 md:mt-0 md:ml-6">
      <div style={{ 
        width: '280px',
        height: '175px',
        borderRadius: theme.borderRadius.lg,
        background: currentCard.background,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        transform: 'rotate(-5deg)',
        transition: 'transform 0.3s ease, opacity 0.5s ease-in-out',
        opacity: isTransitioning ? 0 : 1
      }}>
        {/* Card Chip */}
        <div style={{ 
          position: 'absolute',
          top: '25px',
          left: '25px',
          width: '40px',
          height: '30px',
          borderRadius: '5px',
          background: 'linear-gradient(145deg, #f9d423, #e65c00)',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}>
          <div style={{ 
            width: '100%',
            height: '10px',
            background: 'rgba(255, 255, 255, 0.3)',
            marginTop: '5px'
          }}></div>
        </div>
        
        {/* Card Number */}
        <div style={{ 
          position: 'absolute',
          top: '75px',
          left: '25px',
          fontSize: '16px',
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          {currentCard.cardNumber}
        </div>
        
        {/* Card Holder Name */}
        <div style={{ 
          position: 'absolute',
          bottom: '25px',
          left: '25px',
          fontSize: '14px',
          color: 'white',
          fontWeight: 'normal'
        }}>
          {currentCard.cardholderName}
        </div>
        
        {/* Card Expiry */}
        <div style={{ 
          position: 'absolute',
          bottom: '40px',
          right: '25px',
          fontSize: '12px',
          color: 'white',
          fontWeight: 'normal'
        }}>
          VALID<br/>THRU<br/>{currentCard.expiry}
        </div>
        
        {/* Card Network Logo */}
        <div style={{ 
          position: 'absolute',
          bottom: '20px',
          right: '25px',
          width: '50px',
          height: '30px',
          borderRadius: '5px',
          background: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '12px',
          color: theme.colors.primary
        }}>
          {currentCard.logo}
        </div>
        
        {/* Decorative elements */}
        <div style={{ 
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)'
        }}></div>
        
        <div style={{ 
          position: 'absolute',
          bottom: '-30px',
          left: '-10px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)'
        }}></div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevCard}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all z-10"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        >
          <ChevronLeft size={16} />
        </button>
        
        <button 
          onClick={nextCard}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all z-10"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        >
          <ChevronRight size={16} />
        </button>
        
        {/* Card indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {cardDesigns.map((_, index) => (
            <div 
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${currentCardIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              style={{ transition: 'background-color 0.3s ease' }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Second card for layered effect */}
      <div style={{ 
        width: '280px',
        height: '175px',
        borderRadius: theme.borderRadius.lg,
        background: theme.colors.secondary,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.1)',
        position: 'absolute',
        top: '15px',
        left: '15px',
        zIndex: '-1',
        transform: 'rotate(0deg)'
      }}></div>
    </div>
  );
};

export default HeroSection;