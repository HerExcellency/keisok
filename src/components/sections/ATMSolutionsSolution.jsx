// components/ATMSolutionsSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import atmImage from '../../assets/img/cardAtm.jpg'

const ATMSolutionsSection = () => {
const theme = useTheme();

const features = [
"Latest ATM and card models with touch screen interfaces",
"Cash recycling capabilities to reduce cash management costs",
"Contactless transaction support for modern banking",
"Advanced security features to prevent fraud",
"Remote monitoring and management systems"
];

return (
<section id="atm-solutions" className="py-20 md:py-32 relative">
{/* Background accent element */}
<div style={{ 
position: 'absolute',
width: '300px',
height: '300px',
borderRadius: '50%',
background: theme.gradients.primary,
filter: 'blur(80px)',
opacity: 0.1,
top: '20%',
left: '5%',
zIndex: -1,
}}></div>

<div style={{ 
position: 'absolute',
width: '200px',
height: '200px',
borderRadius: '50%',
background: theme.gradients.secondary,
filter: 'blur(60px)',
opacity: 0.1,
bottom: '10%',
right: '10%',
zIndex: -1,
}}></div>

<div className="container mx-auto px-4 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
  <Badge color="primary" className="mb-4">
    ATM and Card Solutions
  </Badge>
  
  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: theme.colors.dark }}>
    Cutting-Edge ATM & Card Technology
  </h2>
  
  <p className="text-lg mb-6" style={{ color: theme.colors.darkGray, lineHeight: 1.6 }}>
    We provide state-of-the-art ATM machines and fintech solutions that help banks and financial institutions deliver exceptional customer experiences while ensuring maximum operational efficiency.
  </p>

  <div className="space-y-4 mb-8">
    {features.map((feature, index) => (
      <FeatureItem key={index} text={feature} />
    ))}
  </div>

  {/* <Button variant="primary" size="lg">
    View Our ATM Models
  </Button> */}
</div>

<ATMImage />
</div>
</div>
</section>
);
};

const FeatureItem = ({ text }) => {
const theme = useTheme();

return (
<Card className="p-4 flex items-start">
<CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: theme.colors.primary }} />
<span style={{ color: theme.colors.darkGray }}>{text}</span>
</Card>
);
};

const ATMImage = () => {
const theme = useTheme();

return (
<div className="relative hidden md:block">
<Card className="p-5 relative overflow-hidden">
<div style={{
width: '100%',
height: '400px',
borderRadius: theme.borderRadius.lg,
overflow: 'hidden'
}}>
<img 
  src={atmImage}
  alt="ATM Machine Features" 
  className="object-cover w-full h-full"
/>
</div>

<div style={{
position: 'absolute',
bottom: '40px',
left: '40px',
right: '40px',
background: 'rgba(255, 255, 255, 0.9)',
backdropFilter: 'blur(10px)',
padding: '20px',
borderRadius: theme.borderRadius.md,
boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
}}>
<h3 className="font-bold mb-1" style={{ color: theme.colors.primary }}>
  Next-Gen ATM Models
</h3>
<p style={{ color: theme.colors.darkGray, fontSize: '14px' }}>
  Featuring biometric authentication and smart cash management
</p>
</div>
</Card>

{/* Decorative elements */}
<div style={{ 
position: 'absolute',
top: '-20px',
right: '40px',
width: '60px',
height: '60px',
borderRadius: theme.borderRadius.md,
background: theme.colors.primary,
opacity: 0.2,
transform: 'rotate(45deg)',
zIndex: -1
}}></div>

<div style={{ 
position: 'absolute',
bottom: '-30px',
left: '60px',
width: '100px',
height: '100px',
borderRadius: theme.borderRadius.lg,
background: theme.colors.secondary,
opacity: 0.1,
transform: 'rotate(30deg)',
zIndex: -1
}}></div>
</div>
);
};

export default ATMSolutionsSection;

