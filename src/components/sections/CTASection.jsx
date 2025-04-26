// components/CTASection.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ConsultationFormModal from '../ui/ConsultationModal'; // Import the modal component
import { useState } from 'react';




const CTASection = () => {
const theme = useTheme();
const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

const openModal = () => {
  setIsModalOpen(true);
}


const closeModal = () => {
  setIsModalOpen(false);
};

return (
<section id="contact" className="py-20">
<div className="container mx-auto px-4 lg:px-8">
<Card className="p-10 lg:p-16 text-center relative overflow-hidden">
{/* Background accent elements */}
<div style={{ 
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '10px',
  background: theme.gradients.primary,
  zIndex: 0
}}></div>

<div style={{ 
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: theme.gradients.primary,
  filter: 'blur(80px)',
  opacity: 0.1,
  top: '-100px',
  right: '-100px',
  zIndex: 0
}}></div>

<div style={{ 
  position: 'absolute',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: theme.gradients.secondary,
  filter: 'blur(60px)',
  opacity: 0.1,
  bottom: '-80px',
  left: '-80px',
  zIndex: 0
}}></div>

<div className="relative z-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: theme.colors.dark }}>
    Ready to Upgrade Your Fintech Services?
  </h2>
  
  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: theme.colors.darkGray }}>
    Contact us today to discuss how KEISOK can help optimize your Fintech operations, reduce costs, and improve customer satisfaction.
  </p>
  
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <Button variant="primary" size="lg">
      Schedule a Consultation
    </Button>
     {/* <Button 
        variant="primary" 
        size="lg" 
        onClick={openModal}
      >
        Schedule a Consultation
      </Button> */}
      <ConsultationFormModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    
    <Button variant="secondary" size="lg" href="mailto:services@keisok.com">
      Email Us
    </Button>
  </div>
</div>
</Card>
</div>
</section>
);
};

export default CTASection;
