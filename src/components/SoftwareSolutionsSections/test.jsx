// // components/software-services/HeroSection.jsx
// import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Button from '../../ui/Button';
// import Badge from '../../ui/Badge';
// import Statistic from './Statistic';
// import { Code } from 'lucide-react';

// const HeroSection = () => {
//   const theme = useTheme();
  
//   return (
//     <section className="py-20 md:py-32 relative overflow-hidden">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <Badge color="primary" className="mb-6">
//               Custom Software Development
//             </Badge>
            
//             <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
//               Transforming Banking <br/>
//               <span style={{ 
//                 background: theme.gradients.primary,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}>Through Advanced<br/>
//               Software Solutions</span>
//             </h1>
            
//             <p className="text-lg md:text-xl mb-8" style={{ color: theme.colors.darkGray, lineHeight: 1.6 }}>
//               KEISOK builds custom software solutions for financial institutions, from core banking systems to ATM interfaces and mobile applications, helping our clients stay ahead in the digital banking revolution.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Button variant="primary" size="lg" href="#software-services">
//                 Our Services
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </Button>
              
//               <Button variant="secondary" size="lg" href="#projects-section">
//                 View Projects
//               </Button>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <Statistic number="120+" label="Projects Completed" />
//               <Statistic number="40+" label="Banking Clients" />
//               <Statistic number="15+" label="Years Experience" />
//             </div>
//           </div>
          
//           <div className="relative h-[500px] flex items-center justify-center">
//             <div 
//               className="relative w-full max-w-[400px] h-[400px]"
//               style={{
//                 background: theme.colors.light,
//                 borderRadius: theme.borderRadius.xl,
//                 boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.8)',
//                 overflow: 'hidden'
//               }}
//             >
//               {/* Code animation */}
//               <div className="w-full h-full flex items-center justify-center bg-gray-900 text-green-400 font-mono text-sm overflow-hidden relative p-6">
//                 <div className="absolute inset-0 opacity-30">
//                   {Array(30).fill(0).map((_, i) => (
//                     <div key={i} className="py-1">
//                       {`function processTransaction(${i}) { 
//                         return validateUser(${i*10}) && authorizePayment(${i*100}); 
//                       }`}
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="z-10 text-white text-center">
//                   <Code className="h-16 w-16 mb-4 mx-auto" />
//                   <h3 className="text-2xl font-bold mb-2">Custom Software</h3>
//                   <p>We build tailored solutions for the financial sector</p>
//                 </div>
                
//                 {/* Animated elements */}
//                 <div 
//                   className="absolute top-5 right-5 w-20 h-20 rounded-full"
//                   style={{
//                     background: theme.colors.primary,
//                     opacity: 0.3,
//                     animation: 'pulse 4s infinite'
//                   }}
//                 ></div>
                
//                 <div 
//                   className="absolute bottom-10 left-10 w-16 h-16 rounded-full"
//                   style={{
//                     background: theme.colors.secondary,
//                     opacity: 0.3,
//                     animation: 'pulse 6s infinite'
//                   }}
//                 ></div>
//               </div>
//             </div>
            
//             {/* Background accent */}
//             <div style={{ 
//               position: 'absolute',
//               width: '250px',
//               height: '250px',
//               borderRadius: '50%',
//               background: theme.gradients.primary,
//               filter: 'blur(80px)',
//               opacity: 0.3,
//               top: '50%',
//               left: '0',
//               transform: 'translateY(-50%)',
//               zIndex: '-2',
//             }}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// // components/software-services/Statistic.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Card from '../../ui/Card';

// const Statistic = ({ number, label }) => {
//   const theme = useTheme();
  
//   return (
//     <Card className="py-4 px-6">
//       <div className="text-2xl font-bold" style={{ color: theme.colors.primary }}>{number}</div>
//       <div style={{ color: theme.colors.darkGray }}>{label}</div>
//     </Card>
//   );
// };

// export default Statistic;

// // components/software-services/ServicesSection.jsx
// import React from 'react';
// import { Server, Shield, Database, Globe, Cpu, Smartphone } from 'lucide-react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Badge from '../../ui/Badge';
// import Card from '../../ui/Card';
// import ServiceCard from './ServiceCard';

// const ServicesSection = () => {
//   const theme = useTheme();
  
//   // Services we offer
//   const services = [
//     {
//       icon: <Server className="h-6 w-6" />,
//       title: "ATM Software Development",
//       description: "Custom ATM software solutions with intuitive interfaces, robust security, and seamless integration with banking systems."
//     },
//     {
//       icon: <Shield className="h-6 w-6" />,
//       title: "Secure Payment Systems",
//       description: "End-to-end payment processing solutions with advanced encryption and fraud prevention technologies."
//     },
//     {
//       icon: <Database className="h-6 w-6" />,
//       title: "Banking Core Systems",
//       description: "Modern core banking platforms designed for scalability, compliance, and integration with fintech ecosystems."
//     },
//     {
//       icon: <Smartphone className="h-6 w-6" />,
//       title: "Mobile Banking Apps",
//       description: "Feature-rich mobile banking applications with biometric authentication and intuitive user experience."
//     },
//     {
//       icon: <Cpu className="h-6 w-6" />,
//       title: "AI & Analytics Solutions",
//       description: "Machine learning algorithms for fraud detection, customer insights, and business intelligence."
//     },
//     {
//       icon: <Globe className="h-6 w-6" />,
//       title: "Card Management Systems",
//       description: "Comprehensive card issuance and management platforms supporting multiple card types and payment networks."
//     }
//   ];
  
//   return (
//     <section id="software-services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <Badge color="secondary" className="mb-4">
//             Our Expertise
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Software Solutions for Modern Banking
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             We specialize in developing high-performance, secure software solutions for financial institutions of all sizes.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard 
//               key={index}
//               icon={service.icon}
//               title={service.title}
//               description={service.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// // components/software-services/ServiceCard.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Card from '../../ui/Card';

// const ServiceCard = ({ icon, title, description }) => {
//   const theme = useTheme();
  
//   return (
//     <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
//       <div 
//         className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
//         style={{ background: theme.gradients.primary }}
//       >
//         <div className="text-white">
//           {icon}
//         </div>
//       </div>
//       <h3 className="text-xl font-bold mb-3">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </Card>
//   );
// };

// export default ServiceCard;

// // components/software-services/ProjectsSection.jsx
// import React, { useState, useEffect } from 'react';
// import { CheckCircle, ChevronRight } from 'lucide-react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Badge from '../../ui/Badge';
// import Button from '../../ui/Button';
// import ProjectTab from './ProjectTab';
// import ProjectDetail from './ProjectDetail';

// // Import project images using Vite's import mechanism directly
// // You would replace these with actual project images
// import projectOne from '../../../assets/img/project-one.avif';
// import projectTwo from '../../../assets/img/project-two.avif';
// import projectThree from '../../../assets/img/project-three.avif';
// import projectFour from '../../../assets/img/project-four.avif';

// const ProjectsSection = () => {
//   const [activeProjectId, setActiveProjectId] = useState(1);
//   const [isVisible, setIsVisible] = useState(false);
  
//   // For animation on scroll
//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const projectsElement = document.getElementById('projects-section');
      
//       if (projectsElement && scrollPosition > projectsElement.offsetTop - 500) {
//         setIsVisible(true);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   // Featured projects
//   const projects = [
//     {
//       id: 1,
//       title: "National Bank ATM Network Overhaul",
//       client: "National Bank of Zenith",
//       year: "2024",
//       image: projectOne,
//       description: "Developed and deployed a custom ATM software solution for a network of 500+ machines across the country, integrating with the bank's core systems and introducing new features like cardless transactions and enhanced security protocols.",
//       technologies: ["React", "Node.js", "PostgreSQL", "Kubernetes", "AWS"],
//       results: [
//         "Improved transaction speed by 40%",
//         "Reduced maintenance downtime by 65%",
//         "Enhanced security features",
//         "Increased customer satisfaction by 28%"
//       ]
//     },
//     {
//       id: 2,
//       title: "Card Issuance Platform",
//       client: "Metro Credit Union",
//       year: "2023",
//       image: projectTwo,
//       description: "Built a comprehensive card management and issuance platform that streamlined the credit union's ability to design, issue, and manage multiple card types while meeting stringent compliance requirements.",
//       technologies: ["Angular", "Java Spring Boot", "Oracle", "Docker", "Azure"],
//       results: [
//         "Reduced card issuance time from 7 days to 24 hours",
//         "Increased card activation rates by 35%",
//         "Implemented instant virtual card issuance",
//         "99.99% system reliability"
//       ]
//     },
//     {
//       id: 3,
//       title: "Mobile Banking Suite",
//       client: "First Digital Bank",
//       year: "2023",
//       image: projectThree,
//       description: "Developed a comprehensive mobile banking application suite with features including account management, payments, transfers, budgeting tools, and advanced security measures.",
//       technologies: ["React Native", "Firebase", "GraphQL", "MongoDB", "Google Cloud"],
//       results: [
//         "200,000+ downloads in first quarter",
//         "4.8/5 average user rating",
//         "Reduced customer service calls by 40%",
//         "Increased digital transaction volume by 85%"
//       ]
//     },
//     {
//       id: 4,
//       title: "Fraud Detection System",
//       client: "Global Payments Consortium",
//       year: "2022",
//       image: projectFour,
//       description: "Designed and implemented an AI-powered fraud detection system that analyzes transaction patterns in real-time to identify and prevent fraudulent activities across payment networks.",
//       technologies: ["Python", "TensorFlow", "Kafka", "Elasticsearch", "Kubernetes"],
//       results: [
//         "Detected 99.7% of fraudulent transactions",
//         "Reduced false positives by 62%",
//         "Saved $15M in fraud prevention",
//         "Processing 10,000+ transactions per second"
//       ]
//     }
//   ];
  
//   return (
//     <section id="projects-section" className="py-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <Badge color="primary" className="mb-4">
//             Case Studies
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Explore some of our most impactful software development projects for financial institutions.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Project tabs */}
//           <div>
//             {projects.map(project => (
//               <ProjectTab
//                 key={project.id}
//                 project={project}
//                 isActive={activeProjectId === project.id}
//                 onClick={() => setActiveProjectId(project.id)}
//               />
//             ))}
//           </div>
          
//           {/* Active project details */}
//           <div 
//             className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//           >
//             {projects.filter(p => p.id === activeProjectId).map(project => (
//               <ProjectDetail key={project.id} project={project} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

// // components/software-services/ProjectTab.jsx
// import React from 'react';
// import { ChevronRight } from 'lucide-react';

// const ProjectTab = ({ project, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-6 mb-4 rounded-lg transition-all duration-300 cursor-pointer ${isActive ? 'bg-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100'}`}
//     >
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-bold">{project.title}</h3>
//         <ChevronRight 
//           className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'transform rotate-90 text-primary' : 'text-gray-400'}`}
//         />
//       </div>
//       <p className="text-gray-600 mt-2">{project.client} • {project.year}</p>
//     </div>
//   );
// };

// export default ProjectTab;

// // components/software-services/ProjectDetail.jsx
// import React from 'react';
// import { CheckCircle } from 'lucide-react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Button from '../../ui/Button';

// const ProjectDetail = ({ project }) => {
//   const theme = useTheme();
  
//   return (
//     <div 
//       className="bg-white rounded-xl overflow-hidden shadow-xl"
//       style={{ 
//         borderRadius: theme.borderRadius.xl,
//         boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.5)'
//       }}
//     >
//       <div 
//         className="h-64 w-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${project.image})` }}
//       ></div>
//       <div className="p-6">
//         <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
//         <p className="text-gray-600 mb-4">{project.description}</p>
        
//         <h4 className="font-semibold text-lg mb-2">Technologies Used:</h4>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.technologies.map((tech, i) => (
//             <span 
//               key={i}
//               className="px-3 py-1 rounded-full text-sm font-medium"
//               style={{ 
//                 background: theme.colors.lightGray,
//                 color: theme.colors.primary
//               }}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
        
//         <h4 className="font-semibold text-lg mb-2">Key Results:</h4>
//         <ul className="mb-4">
//           {project.results.map((result, i) => (
//             <li key={i} className="flex items-start mb-2">
//               <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//               <span>{result}</span>
//             </li>
//           ))}
//         </ul>
        
//         <Button variant="primary" size="md" href="#contact">
//           Request Similar Solution
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;

// // components/software-services/ProcessSection.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Badge from '../../ui/Badge';
// import Card from '../../ui/Card';
// import ProcessStep from './ProcessStep';

// const ProcessSection = () => {
//   const theme = useTheme();
  
//   // Our development process
//   const developmentProcess = [
//     {
//       number: "01",
//       title: "Discovery & Analysis",
//       description: "We start by understanding your business needs, current systems, and challenges to establish clear project requirements."
//     },
//     {
//       number: "02",
//       title: "Solution Design",
//       description: "Our experts design a comprehensive solution architecture that addresses your specific needs while ensuring scalability and security."
//     },
//     {
//       number: "03",
//       title: "Agile Development",
//       description: "We develop your solution using agile methodologies, with regular demos and feedback cycles to ensure alignment with your expectations."
//     },
//     {
//       number: "04",
//       title: "Testing & QA",
//       description: "Rigorous testing ensures your solution is secure, reliable and meets the highest quality standards before deployment."
//     },
//     {
//       number: "05",
//       title: "Deployment & Integration",
//       description: "We implement the solution in your environment with minimal disruption, ensuring smooth integration with existing systems."
//     },
//     {
//       number: "06",
//       title: "Support & Maintenance",
//       description: "Our team provides ongoing support, updates, and improvements to keep your software performing optimally."
//     }
//   ];
  
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <Badge color="secondary" className="mb-4">
//             How We Work
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our Development Process
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             We follow a proven methodology to deliver high-quality software solutions that meet your business objectives.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {developmentProcess.map((step, index) => (
//             <ProcessStep 
//               key={index}
//               number={step.number}
//               title={step.title}
//               description={step.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

// // components/software-services/ProcessStep.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Card from '../../ui/Card';

// const ProcessStep = ({ number, title, description }) => {
//   const theme = useTheme();
  
//   return (
//     <div className="relative">
//       <div 
//         className="absolute -left-4 top-0 text-6xl font-bold opacity-10"
//         style={{ color: theme.colors.primary }}
//       >
//         {number}
//       </div>
//       <Card className="p-6 h-full relative z-10">
//         <h3 className="text-xl font-bold mb-3">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </Card>
//     </div>
//   );
// };

// export default ProcessStep;

// // components/software-services/ClientsSection.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Badge from '../../ui/Badge';
// import ClientLogo from './ClientLogo';

// const ClientsSection = () => {
//   const theme = useTheme();
  
//   // Clients we've worked with
//   const clients = [
//     "National Bank of Zenith", 
//     "Metro Credit Union", 
//     "First Digital Bank", 
//     "Global Payments Consortium",
//     "City Trust Bank",
//     "Eastern Financial Services",
//     "Continental Savings",
//     "Pacific Investment Group",
//     "Reserve Bank Systems"
//   ];
  
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <Badge color="primary" className="mb-4">
//             Our Clients
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Trusted by Leading Financial Institutions
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             We've partnered with banks and financial institutions of all sizes to deliver transformative software solutions.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
//           {clients.map((client, index) => (
//             <ClientLogo key={index} name={client} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsSection;

// // components/software-services/ClientLogo.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';

// const ClientLogo = ({ name }) => {
//   const theme = useTheme();
  
//   return (
//     <div 
//       className="h-24 flex items-center justify-center p-4 rounded-lg"
//       style={{ 
//         background: theme.colors.light,
//         boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.05), -5px -5px 15px rgba(255, 255, 255, 0.8)'
//       }}
//     >
//       <span 
//         className="text-lg font-medium text-center"
//         style={{ color: theme.colors.primary }}
//       >
//         {name}
//       </span>
//     </div>
//   );
// };

// export default ClientLogo;

// // components/software-services/CtaSection.jsx
// import React from 'react';
// import { useTheme } from '../../contexts/ThemeContext';
// import Button from '../../ui/Button';

// const CtaSection = () => {
//   const theme = useTheme();
  
//   return (
//     <section 
//       className="py-20 relative"
//       style={{ 
//         background: theme.gradients.primary,
//         borderRadius: theme.borderRadius.lg,
//         margin: '0 2rem',
//         overflow: 'hidden'
//       }}
//     >
//       <div 
//         className="absolute top-0 right-0 w-96 h-96 rounded-full"
//         style={{
//           background: 'rgba(255, 255, 255, 0.1)',
//           transform: 'translate(30%, -30%)'
//         }}
//       ></div>
      
//       <div 
//         className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
//         style={{
//           background: 'rgba(255, 255, 255, 0.1)',
//           transform: 'translate(-30%, 30%)'
//         }}
//       ></div>
      
//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         <div className="text-center text-white max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Transform Your Banking Technology?
//           </h2>
//           <p className="text-lg mb-8 opacity-90">
//             Let's discuss how our software solutions can help you improve efficiency, enhance security, and deliver exceptional customer experiences.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               variant="light" 
//               size="lg" 
//               href="#contact"
//               style={{
//                 background: 'white',
//                 color: theme.colors.primary
//               }}
//             >
//               Schedule a Consultation
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg" 
//               href="#projects-section"
//               style={{
//                 borderColor: 'white',
//                 color: 'white'
//               }}
//             >
//               View More Projects
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CtaSection;

// // components/software-services/SoftwareSolutionsPage.jsx
// import React from 'react';
// import HeroSection from './HeroSection';
// import ServicesSection from './ServicesSection';
// import ProjectsSection from './ProjectsSection';
// import ProcessSection from './ProcessSection';
// import ClientsSection from './ClientsSection';
// import CtaSection from './CtaSection';

// const SoftwareSolutionsPage = () => {
//   return (
//     <div>
//       <HeroSection />
//       <ServicesSection />
//       <ProjectsSection />
//       <ProcessSection />
//       <ClientsSection />
//       <CtaSection />
//     </div>
//   );
// };

// export default SoftwareSolutionsPage;