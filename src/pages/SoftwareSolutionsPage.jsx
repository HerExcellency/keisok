// src/Iaas.jsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/SoftwareSolutionsSections/HeroSection';
import ServicesSection from '../components/SoftwareSolutionsSections/ServicesSection';
import ProjectsSection from '../components/SoftwareSolutionsSections/ProjectSection';
import ProcessSection from '../components/SoftwareSolutionsSections/ProcessSection';
import ClientsSection from '../components/SoftwareSolutionsSections/ClientSection';
import { ThemeProvider } from '../components/contexts/ThemeContext';
import CTASection from '../components/sections/CTASection';

function SoftwareSolutionsPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <ClientsSection />
            <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default SoftwareSolutionsPage;

