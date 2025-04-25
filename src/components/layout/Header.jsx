// components/Header.jsx
import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: isScrolled ? theme.colors.white : 'white',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)' : 'none',
        padding: isScrolled ? '12px 0' : '20px 0'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button variant="primary" size="md" href="#contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2" style={{ color: theme.colors.primary }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="md:hidden py-4 px-4 absolute top-full left-0 right-0" 
          style={{ 
            backgroundColor: theme.colors.white,
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <nav className="flex flex-col space-y-4">
            <MobileNavLinks closeMobileMenu={() => setIsMenuOpen(false)} />
            <Button variant="primary" size="md" fullWidth href="#contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => {
  const theme = useTheme();
  const links = [
    { title: 'Home', url: '#' },
    { title: 'Services', url: '#services' },
    { title: 'ATM Solutions', url: '#atm-solutions' },
    { title: 'Why Us?', url: '#why-us?' },
    { title: 'Contact', url: '#contact' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          className="font-medium transition-colors relative group"
          style={{ color: theme.colors.darkGray }}
          onMouseOver={(e) => e.currentTarget.style.color = theme.colors.primary}
          onMouseOut={(e) => e.currentTarget.style.color = theme.colors.darkGray}
        >
          {link.title}
          <span 
            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
            style={{ backgroundColor: theme.colors.primary }}
          ></span>
        </a>
      ))}
    </>
  );
};

const MobileNavLinks = ({ closeMobileMenu }) => {
  const theme = useTheme();
  const links = [
    { title: 'Home', url: '#' },
    { title: 'Services', url: '#services' },
    { title: 'ATM Solutions', url: '#atm-solutions' },
    { title: 'About Us', url: '#about' },
    { title: 'Contact', url: '#contact' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          className="font-medium py-2 border-b"
          style={{ color: theme.colors.darkGray, borderColor: theme.colors.lightGray }}
          onClick={closeMobileMenu}
        >
          {link.title}
        </a>
      ))}
    </>
  );
};

export default Header;

