
// components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Logo from '../ui/Logo';

const Footer = () => {
const theme = useTheme();

return (
<footer style={{ background: theme.colors.light }}>
<div className=" mx-auto px-4 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
{/* Company Info */}
<div>
  <Logo />
  <p className="mt-4" style={{ color: theme.colors.gray }}>
    KEISOK Integrated Services provides comprehensive ATM and Card solutions including sales, repair, maintenance, and fintech services to banks and financial institutions.
  </p>
  <div className="flex space-x-4 mt-6">
    {/* <SocialLink icon={<Facebook size={20} />} /> */}
    {/* <SocialLink icon={<Twitter size={20} />} /> */}
    {/* <a href="//www.linkedin.com/in/keisok-services-b5322234b/?originalSubdomain=ng"> */}
      <SocialLink icon={<Linkedin size={20} />} />
    {/* </a> */}
    {/* <SocialLink icon={<Instagram size={20} />} /> */}
  </div>
</div>

{/* Quick Links */}
<div>
  <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.gray }}>
    Quick Links
  </h3>
  <FooterLinks 
    links={[
      { title: 'Home', url: '#' },
      { title: 'About Us', url: '#about' },
      { title: 'Services', url: '#services' },
      { title: 'ATM Solutions', url: '#atm-solutions' },
      { title: 'Contact Us', url: '#contact' },
      // { title: 'Support', url: '#' }
    ]} 
  />
</div>

{/* Services */}
<div>
  <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.Gray }}>
    Our Services
  </h3>
  <FooterLinks 
    links={[
      { title: 'ATM Sales & Distribution' },
      { title: 'ATM Maintenance & Repair' },
      { title: 'ATM Security Solutions' },
      { title: '24/7 Support Services' },
      { title: 'Cash Management' },
      { title: 'ATM Network Management' }
    ]} 
  />
</div>

{/* Contact Info */}
<div>
  <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.primary }}>
    Contact Us
  </h3>
  <ul className="space-y-4">
    {/* <li className="flex items-start">
      <MapPin className="w-5 h-5 mr-2 mt-1" style={{ color: theme.colors.primary }} />
      <span style={{ color: theme.colors.gray }}>
        46 Babatunde Famori Street, Lagos, Nigeria
      </span>
    </li> */}
    <li className="flex items-center cursor-pointer" onClick={() => window.location.href = 'tel:+2348034376315'}>
      <Phone className="w-5 h-5 mr-2" style={{ color: theme.colors.primary }} />
      <span style={{ color: theme.colors.gray }}>
        +234 (0) 803 437 6315
      </span>
    </li>
    <li className="flex items-center cursor-pointer" onClick={() => window.location.href = 'mailto:services@keisok.com'}>
      <Mail className="w-5 h-5 mr-2" style={{ color: theme.colors.primary }} />
      <span style={{ color: theme.colors.gray }}>
        services@keisokintegratedservices.com
      </span>
    </li>
  </ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-blue-800">
<div className="flex flex-col md:flex-row justify-between items-center">
  <p className="text-sm" style={{ color: theme.colors.gray }}>
    © {new Date().getFullYear()} KEISOK Integrated Services. All rights reserved.
  </p>
  <div className="flex space-x-6 mt-4 md:mt-0">
    <a 
      href="#" 
      className="text-sm"
      style={{ color: theme.colors.gray }}
    >
      Privacy Policy
    </a>
    <a 
      href="#" 
      className="text-sm"
      style={{ color: theme.colors.gray }}
    >
      Terms of Service
    </a>
  </div>
</div>
</div>
</div>
</footer>
);
};

const SocialLink = ({ icon }) => {
const theme = useTheme();

return (
<a 
href="//www.linkedin.com/in/keisok-services-b5322234b/?originalSubdomain=ng" 
className="flex items-center justify-center w-10 h-10 rounded-full"
style={{ 
color: theme.colors.gray,
background: 'rgba(255, 255, 255, 0.05)',
transition: 'all 0.3s ease'
}}
onMouseOver={(e) => {
e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
e.currentTarget.style.color = theme.colors.primary;
}}
onMouseOut={(e) => {
e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
e.currentTarget.style.color = theme.colors.gray;
}}
>
{icon}
</a>
);
};

const FooterLinks = ({ links }) => {
const theme = useTheme();

return (
<ul className="space-y-2">
{links.map((link, index) => (
<li key={index}>
<a 
  href={link.url} 
  style={{ color: theme.colors.gray, transition: 'color 0.3s ease' }}
  onMouseOver={(e) => e.currentTarget.style.color = theme.colors.primary}
  onMouseOut={(e) => e.currentTarget.style.color = theme.colors.gray}
>
  {link.title}
</a>
</li>
))}
</ul>
);
};

export default Footer;