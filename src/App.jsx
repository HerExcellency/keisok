// src/App.jsx
import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ATMSolutionsSection from './components/sections/ATMSolutionsSolution';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import TestimonialsSection from './components/sections/TestimonialSection';
import ClientsCarousel from './components/sections/ClientsCarousel';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './components/contexts/ThemeContext';
import './App.css'
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <ATMSolutionsSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <ClientsCarousel />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;