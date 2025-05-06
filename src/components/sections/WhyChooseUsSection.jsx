// components/WhyChooseUsSection.jsx
import React from 'react';
import { Users, Clock, Settings, RefreshCw } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';

const WhyChooseUsSection = () => {
const theme = useTheme();

const reasons = [
{
title: "Extensive Experience",
description: "Over 12 years of professional experience in the ATM and fintech industry",
icon: <Users className="w-8 h-8" />,
color: "primary"
},
{
title: "Rapid Response",
description: "Quick response times to minimize ATM downtime",
icon: <Clock className="w-8 h-8" />,
color: "secondary"
},
{
title: "Technical Expertise",
description: "Highly skilled technicians for dominant brands and models",
icon: <Settings className="w-8 h-8" />,
color: "accent"
},
{
title: "Continuous Innovation",
description: "Always implementing the latest FIntech Solutions",
icon: <RefreshCw className="w-8 h-8" />,
color: "secondaryLight"
}
];

return (
<section id="why-us?" className="py-12  lg:py-20 relative" style={{ background: theme.colors.light }}>
{/* Background Accent Elements */}
<div style={{ 
position: 'absolute',
width: '300px',
height: '300px',
borderRadius: '50%',
background: theme.gradients.primary,
filter: 'blur(80px)',
opacity: 0.05,
top: '10%',
left: '5%',
zIndex: 0,
}}></div>

<div style={{ 
position: 'absolute',
width: '250px',
height: '250px',
borderRadius: '50%',
background: theme.gradients.secondary,
filter: 'blur(70px)',
opacity: 0.05,
bottom: '10%',
right: '10%',
zIndex: 0,
}}></div>

<div className="container mx-auto px-4 lg:px-8 relative z-10">
<div className="text-center mb-16">
<Badge color="primary" className="mb-4">
  Why Choose Us
</Badge>

<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.dark }}>
  The KEISOK Advantage
</h2>

<p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.darkGray }}>
  We deliver reliable FINTECH services with exceptional service and support
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
{reasons.map((reason, index) => (
  <ReasonCard 
    key={index}
    title={reason.title}
    description={reason.description}
    icon={reason.icon}
    color={reason.color}
  />
))}
</div>

<div className="text-center">
<p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: theme.colors.darkGray }}>
  Partner with KEISOK for reliable, secure, and efficient FINTECH services that keep your customers satisfied and your operations running smoothly.
</p>
<Button variant="primary" size="lg" href="#contact">
  Learn More About Us
</Button>
</div>
</div>
</section>
);
};

const ReasonCard = ({ title, description, icon, color }) => {
const theme = useTheme();

return (
<Card interactive className="text-center px-6 py-8">
<div className="mx-auto mb-6 rounded-full w-16 h-16 flex items-center justify-center" 
style={{ 
background: theme.gradients[color] || theme.gradients.primary,
boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
}}
>
{React.cloneElement(icon, { style: { color: theme.colors.white } })}
</div>

<h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.dark }}>
{title}
</h3>

<p style={{ color: theme.colors.darkGray }}>
{description}
</p>
</Card>
);
};

export default WhyChooseUsSection;
