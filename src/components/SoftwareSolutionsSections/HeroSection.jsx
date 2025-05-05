// components/software-services/HeroSection.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
// import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Statistic from './Statistic';
import { Code } from 'lucide-react';

const HeroSection = () => {
  const theme = useTheme();
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="primary" className="mb-6">
              Custom Software Development
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Custom Software <br/>
              <span style={{ 
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Development For<br/>
               Every Organization</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8" style={{ color: theme.colors.darkGray, lineHeight: 1.6 }}>KEISOK builds innovative software solutions for organizations across all industries, from enterprise applications to custom interfaces and mobile platforms, helping our clients achieve digital transformation and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="#software-services">
                Our Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="secondary" size="lg" href="#projects-section">
                View Projects
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Statistic number="120+" label="Projects Completed" />
              <Statistic number="40+" label="Partner Organizations" />
            </div>
          </div>
          
          <div className="relative h-[500px] flex items-center justify-center">
            <div 
              className="relative w-full max-w-[400px] h-[400px]"
              style={{
                background: theme.colors.light,
                borderRadius: theme.borderRadius.xl,
                boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.8)',
                overflow: 'hidden'
              }}
            >
              {/* Code animation */}
              <div className="w-full h-full flex items-center justify-center bg-gray-900 text-green-400 font-mono text-sm overflow-hidden relative p-6">
                <div className="absolute inset-0 opacity-30">
                  {Array(30).fill(0).map((_, i) => (
                    <div key={i} className="py-1">
                      {`function processTransaction(${i}) { 
                        return validateUser(${i*10}) && authorizePayment(${i*100}); 
                      }`}
                    </div>
                  ))}
                </div>
                
                <div className="z-10 text-white text-center">
                  <Code className="h-16 w-16 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">Custom Software</h3>
                  <p>We build tailored solutions for organizations across all industries</p>
                </div>
                
                {/* Animated elements */}
                <div 
                  className="absolute top-5 right-5 w-20 h-20 rounded-full"
                  style={{
                    background: theme.colors.primary,
                    opacity: 0.3,
                    animation: 'pulse 4s infinite'
                  }}
                ></div>
                
                <div 
                  className="absolute bottom-10 left-10 w-16 h-16 rounded-full"
                  style={{
                    background: theme.colors.secondary,
                    opacity: 0.3,
                    animation: 'pulse 6s infinite'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Background accent */}
            <div style={{ 
              position: 'absolute',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: theme.gradients.primary,
              filter: 'blur(80px)',
              opacity: 0.3,
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: '-2',
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;