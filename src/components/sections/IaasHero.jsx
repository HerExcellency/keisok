// components/Iaas.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

// Import images using Vite's import mechanism directly
// Note: If your images are in the public folder, use '/img/image-name.jpg' format
import atmImage from '../../assets/img/one.avif';
// import atmImageOne from '../../assets/img/two.avif';
import atmImageTwo from '../../assets/img/three.avif';
import atmImageThree from '../../assets/img/four.avif';
import atmImageFour from '../../assets/img/five.avif';
import atmImageFive from '../../assets/img/six.avif';
import atmImageSeven from '../../assets/img/seven.avif';



const Iaas = () => {
  const theme = useTheme();
  const [currentView, setCurrentView] = useState('atm'); // 'atm' or 'card'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Create array of ATM images - using the same image as placeholders
  // In a real app, you would import different images here
  const atmImages = [
    atmImage, 
    // atmImageOne, // Replace with different image
    atmImageTwo , // Replace with different image
    atmImageThree,
    atmImageFour,
    atmImageFive,
    // atmImageSix,
    atmImageSeven,
  ];
  
  // Card designs
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
  
  // Check if images are loaded
  useEffect(() => {
    // Simulate image loading or add actual image preloading
    const img = new Image();
    img.onload = () => setImagesLoaded(true);
    img.onerror = () => {
      console.error("Failed to load image");
      setImagesLoaded(true); // Still set to true so we show fallback
    };
    img.src = atmImage;
  }, [atmImage]);
  
  // Handle rotation between ATM and card views
  useEffect(() => {
    const viewInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentView(prev => prev === 'atm' ? 'card' : 'atm');
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(viewInterval);
  }, []);
  
  // Handle rotation between different ATM images
  useEffect(() => {
    if (currentView === 'atm') {
      const atmInterval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % atmImages.length);
      }, 3000);
      
      return () => clearInterval(atmInterval);
    }
  }, [currentView, atmImages.length]);
  
  // Handle rotation between different card designs
  useEffect(() => {
    if (currentView === 'card') {
      const cardInterval = setInterval(() => {
        setCurrentCardIndex(prev => (prev + 1) % cardDesigns.length);
      }, 3000);
      
      return () => clearInterval(cardInterval);
    }
  }, [currentView, cardDesigns.length]);
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="primary" className="mb-6">
             Software As A Service
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              Advanced Sevices<br/>
              <span style={{ 
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>& Card Issuance<br/>
              Solutions for Modern Banking</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8" style={{ color: theme.colors.darkGray, lineHeight: 1.6 }}>
              KEISOK serv.
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
              <StatCard number="Modern Framework" label="Tools" />
              <StatCard number="99.9%" label="Uptime" />
              <StatCard number="24/7" label="Support" />
            </div>
          </div>
          
          {/* Enlarged and centered image display area */}
          <div className="relative h-[600px] flex items-center justify-center mx-auto">
            <div 
              className="relative w-full max-w-[300px] lg:w-[] lg:h-[500px] h-[400px] flex justify-center items-center"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* ATM display */}
               <div 
                style={{ 
                  opacity: currentView === 'atm' ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  // position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div style={{ 
                  width: '380px',
                  height: '500px',
                  borderRadius: theme.borderRadius.xl,
                  background: theme.colors.light,
                  boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.1), -20px -20px 40px rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {imagesLoaded ? (
                    <img 
                      src={atmImages[currentImageIndex]} 
                      alt="ATM Machine" 
                      className="object-cover w-full h-full rounded-3xl"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="380" height="500" viewBox="0 0 380 500"><rect width="380" height="500" fill="%23f0f0f0"/><text x="190" y="250" font-family="Arial" font-size="20" text-anchor="middle" fill="%23999">ATM Image</text></svg>';
                      }}
                    />
                  ) : (
                    // Loading placeholder
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-3xl">
                      <div className="text-lg text-gray-500">Loading ATM image...</div>
                    </div>
                  )}
                  
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
              </div> 

              
              
              {/* Card display */}
              <div 
                style={{ 
                  opacity: currentView === 'card' ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div className="relative">
                  {/* Main card */}
                  <div className="w-[302px] lg:w-[350px] md:w-[350px] h-[179px] md:h-[220px] lg:[220px]" style={{ 
                    
                    borderRadius: theme.borderRadius.lg,
                    background: cardDesigns[currentCardIndex].background,
                    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: 'rotate(-5deg)',
                    transition: 'transform 0.3s ease, opacity 0.5s ease-in-out'
                  }}>
                    {/* Card Chip */}
                    <div style={{ 
                      position: 'absolute',
                      top: '35px',
                      left: '35px',
                      width: '50px',
                      height: '40px',
                      borderRadius: '5px',
                      background: 'linear-gradient(145deg, #f9d423, #e65c00)',
                      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: '100%',
                        height: '15px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        marginTop: '7px'
                      }}></div>
                    </div>
                    
                    {/* Card Number */}
                    <div style={{ 
                      position: 'absolute',
                      top: '100px',
                      left: '35px',
                      fontSize: '20px',
                      color: 'white',
                      fontWeight: 'bold',
                      letterSpacing: '2px'
                    }}>
                      {cardDesigns[currentCardIndex].cardNumber}
                    </div>
                    
                    {/* Card Holder Name */}
                    <div style={{ 
                      position: 'absolute',
                      bottom: '35px',
                      left: '35px',
                      fontSize: '16px',
                      color: 'white',
                      fontWeight: 'normal'
                    }}>
                      {cardDesigns[currentCardIndex].cardholderName}
                    </div>
                    
                    {/* Card Expiry */}
                    <div style={{ 
                      position: 'absolute',
                      bottom: '60px',
                      right: '35px',
                      fontSize: '14px',
                      color: 'white',
                      fontWeight: 'normal'
                    }}>
                      VALID<br/>THRU<br/>{cardDesigns[currentCardIndex].expiry}
                    </div>
                    
                    {/* Card Network Logo */}
                    <div style={{ 
                      position: 'absolute',
                      bottom: '30px',
                      right: '35px',
                      width: '60px',
                      height: '40px',
                      borderRadius: '5px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      color: theme.colors.primary
                    }}>
                      {cardDesigns[currentCardIndex].logo}
                    </div>
                    
                    {/* Decorative elements */}
                    <div style={{ 
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)'
                    }}></div>
                    
                    <div style={{ 
                      position: 'absolute',
                      bottom: '-30px',
                      left: '-10px',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)'
                    }}></div>
                    
                    {/* Card indicators */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                      {cardDesigns.map((_, index) => (
                        <div 
                          key={index}
                          className={`w-2 h-2 rounded-full ${currentCardIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                          style={{ transition: 'background-color 0.3s ease' }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Second card for layered effect */}
                  <div className="w-[302px] lg:w-[350px] md:w-[350px] h-[179px] md:h-[220px] lg:[220px]" style={{ 
                    
                    borderRadius: theme.borderRadius.lg,
                    background: theme.colors.secondary,
                    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.1)',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: '-1',
                    transform: 'rotate(0deg)'
                  }}></div>
                </div>
              </div>
            </div>
            
            {/* Background accent element */}
            <div style={{ 
              position: 'absolute',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: theme.gradients.primary,
              filter: 'blur(80px)',
              opacity: 0.3,
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              zIndex: '-2',
            }}></div>
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

export default Iaas;