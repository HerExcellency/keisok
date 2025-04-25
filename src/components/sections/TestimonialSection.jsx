// components/TestimonialsSection.jsx
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

const TestimonialsSection = () => {
const theme = useTheme();
const [activeTestimonial, setActiveTestimonial] = useState(0);

const testimonials = [
{
content: "KEISOK has been our trusted ATM solutions provider. Their maintenance service is prompt and thorough, and their team is always professional.",
author: "Sarah",
position: "Operations Manager",
rating: 5
},
{
content: "We've significantly reduced our ATM downtime since partnering with KEISOK. Their technicians are knowledgeable, and their customer service is exceptional.",
author: "Michael",
position: "IT Director",
rating: 5
},
{
content: "The ATM machines we purchased from KEISOK are reliable and feature-rich. The cash recycling capability has helped us optimize our cash management process.",
author: "David",
position: "Branch Manager",
rating: 5
}
];

const nextTestimonial = () => {
setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
};

const prevTestimonial = () => {
setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};

return (
<section className="py-20 relative" style={{ background: theme.colors.light }}>
<div className="container mx-auto px-4 lg:px-8">
<div className="text-center mb-12">
<Badge color="primary" className="mb-4">
  Testimonials
</Badge>

<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.dark }}>
  What Our Clients Say
</h2>

<p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.darkGray }}>
  Trusted by leading banks and financial institutions
</p>
</div>

{/* Main testimonial showcase */}
<div className="max-w-4xl mx-auto">
<Card className="p-8 md:p-12 relative">
  <div className="absolute top-8 left-8 opacity-20">
    <Quote size={60} style={{ color: theme.colors.primary }} />
  </div>
  
  <div className="text-xl md:text-2xl mb-8 relative z-10 italic" style={{ color: theme.colors.darkGray, lineHeight: 1.6 }}>
    "{testimonials[activeTestimonial].content}"
  </div>
  
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" 
        style={{ 
          background: theme.colors.primary,
          opacity: 0.2
        }}
      >
        <span style={{ color: theme.colors.primary, fontSize: '20px', fontWeight: 'bold' }}>
          {testimonials[activeTestimonial].author.charAt(0)}
        </span>
      </div>
      <div>
        <h4 className="font-bold" style={{ color: theme.colors.dark }}>
          {testimonials[activeTestimonial].author}
        </h4>
        <p style={{ color: theme.colors.darkGray, fontSize: '0.9rem' }}>
          {testimonials[activeTestimonial].position}
        </p>
      </div>
    </div>
    
    <div className="flex space-x-2">
      {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
        <span key={i} style={{ color: theme.colors.primary, fontSize: '20px' }}>★</span>
      ))}
    </div>
  </div>
  
  {/* Navigation controls */}
  <div className="flex justify-center mt-8 space-x-4">
    <button
      className="p-3 rounded-full"
      style={{
        background: theme.colors.light,
        boxShadow: theme.neumorphic.boxShadow,
      }}
      onClick={prevTestimonial}
    >
      <ArrowLeft size={18} style={{ color: theme.colors.primary }} />
    </button>
    
    <div className="flex space-x-2 items-center">
      {testimonials.map((_, index) => (
        <button
          key={index}
          className="w-3 h-3 rounded-full"
          style={{
            background: activeTestimonial === index ? theme.colors.primary : theme.colors.lightGray,
            boxShadow: activeTestimonial === index ? 'none' : '1px 1px 3px rgba(0, 0, 0, 0.1), -1px -1px 3px rgba(255, 255, 255, 0.8)',
          }}
          onClick={() => setActiveTestimonial(index)}
        />
      ))}
    </div>
    
    <button
      className="p-3 rounded-full"
      style={{
        background: theme.colors.light,
        boxShadow: theme.neumorphic.boxShadow,
      }}
      onClick={nextTestimonial}
    >
      <ArrowRight size={18} style={{ color: theme.colors.primary }} />
    </button>
  </div>
</Card>
</div>
</div>
</section>
);
};

export default TestimonialsSection;

