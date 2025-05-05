
// components/software-services/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import ProjectTab from './ProjectTab';
import ProjectDetail from './ProjectDetails';

// Import project images using Vite's import mechanism directly
// You would replace these with actual project images
import projectOne from '../../assets/img/saas/buildas.png';
import projectTwo from '../../assets/img/saas/check.png';
import projectThree from '../../assets/img/saas/tiny.png';
import projectFour from '../../assets/img/saas/recycle.png';
import projectFive from '../../assets/img/saas/care.png';

import projectSix from '../../assets/img/saas/triage.png';

const ProjectsSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  
  // For animation on scroll
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const projectsElement = document.getElementById('projects-section');
      
      if (projectsElement && scrollPosition > projectsElement.offsetTop - 500) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Featured projects
  const projects = [
    {
      id: 1,
      title: "Text to Software Platform",
      client: "Buildas",
      // year: "2024",
      image: projectOne,
      description: "Revolutionary text-to-software platform that transforms business requirements into functional applications within minutes. This solution eliminates dependency on off-the-shelf software by providing fully-featured templates as innovation launchpads, allowing for limitless customization to meet exact business specifications.",
      technologies: ["React", "Typescript", "Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      results: [
        // "Reduced software development cycles from months to minutes",
        "Enabled 100% customization with AI-assisted configuration",
        "Integrated GenAI capabilities for smarter business outcomes",
        "Increased client productivity by 78% through streamlined workflows"
      ]
    },
    {
      id: 2,
      title: "Cross-Border E-Commerce Platform",
      client: "Checkstall",
      // year: "2024",
      image: projectTwo,
      description: "Developed a comprehensive e-commerce platform supporting multi-currency transactions, international shipping logistics, and category management across various retail segments. The solution features a user-friendly dashboard for tracking orders, invoices, and payments while integrating with global payment systems and logistics partners.",
      technologies: ["React", "Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      results: [
        "Created seamless shopping experience with perfect delivery tracking",
        "Implemented multi-currency support with Nigerian Naira and other currencies",
        "Built comprehensive product categorization system across 8+ retail segments",
        "Integrated order management with gathering and shipping logistics"
      ]
    },
    {
      id: 3,
      title: "Healthcare Staffing Platform",
      client: "OakCare",
      // year: "2024",
      image: projectFive,
      description: "Developed a comprehensive digital platform connecting families with qualified healthcare professionals through a streamlined five-step process. The solution includes detailed caregiver profiles, interview scheduling functionality, administrative workflow automation, and a mobile application for daily care management and reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      results: [
        "Reduced caregiver matching time from weeks to days for families",
        "Automated administrative processes cutting paperwork by 75%",
        // "Implemented secure video interviewing with scheduling integration",
        // "Created mobile care management app improving care quality metrics by 40%"
      ]
    },
    {
      id: 4,
      title: "AI-Powered Health Triage Platform",
      client: "Health Triage Solutions",
      // year: "2024",
      image: projectSix,
      description: "Developed an innovative healthcare platform that combines AI diagnostics with practitioner consultations to provide accessible medical guidance. The solution features dual consultation paths (AI and human practitioners), medication recommendations, clinic/pharmacy locator, and comprehensive patient profile management with medical history tracking.",
      technologies: ["React", "Typescript", "Tailwind", "Machine Learning", "Swagger", "C#"],
      results: [
        "Built AI diagnostic system with 85%+ accuracy for preliminary assessments",
        "Integrated direct practitioner consultation with specialized recommendation tools",
        // "Developed geolocation services for finding nearby healthcare facilities",
        "Created comprehensive patient profiles with secure medical history storage"
      ]
    },
    {
      id: 5,
      title: "Digital Photography Booking Platform",
      client: "Tinytography ",
      // year: "2024",
      image: projectThree,
      description: "Developed a specialized photography booking and gallery platform focused on newborn and baby photography services. The solution features package selection, scheduling with availability tracking, customer testimonials, online galleries, and secure payment processing with a seamless account management system.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "Stripe"],
      results: [
        "Created intuitive booking system serving over 245 satisfied customers",
        "Built secure image gallery system for private photo sharing and downloads",
        "Implemented real-time availability tracking to optimize photographer scheduling",
        "Designed tiered package system with customizable photography options"
      ]
    }
  ];
  
  return (
    <section id="projects-section" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge color="primary" className="mb-4">
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of our most impactful software development projects for financial institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project tabs */}
          <div>
            {projects.map(project => (
              <ProjectTab
                key={project.id}
                project={project}
                isActive={activeProjectId === project.id}
                onClick={() => setActiveProjectId(project.id)}
              />
            ))}
          </div>
          
          {/* Active project details */}
          <div 
            className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {projects.filter(p => p.id === activeProjectId).map(project => (
              <ProjectDetail key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;