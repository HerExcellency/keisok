// // App.jsx - Main application component
// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import ServicesSection from './components/ServicesSection';
// import ATMSolutionsSection from './components/ATMSolutionsSection';
// import WhyChooseUsSection from './components/WhyChooseUsSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import ClientsCarousel from './components/ClientsCarousel';
// import CTASection from './components/CTASection';
// import Footer from './components/Footer';
// import { ThemeProvider } from './contexts/ThemeContext';

// const App = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <ThemeProvider>
//       <div className="min-h-screen flex flex-col font-sans">
//         <Header isScrolled={isScrolled} />
//         <main className="flex-grow">
//           <HeroSection />
//           <ServicesSection />
//           <ATMSolutionsSection />
//           <WhyChooseUsSection />
//           <TestimonialsSection />
//           <ClientsCarousel />
//           <CTASection />
//         </main>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;

