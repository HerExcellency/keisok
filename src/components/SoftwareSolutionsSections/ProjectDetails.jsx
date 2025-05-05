import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../ui/Button';

const ProjectDetail = ({ project }) => {
  const theme = useTheme();
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-xl"
      style={{ 
        borderRadius: theme.borderRadius.xl,
        boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.5)'
      }}
    >
      <div 
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <h4 className="font-semibold text-lg mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ 
                background: theme.colors.lightGray,
                color: theme.colors.primary
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h4 className="font-semibold text-lg mb-2">Key Results:</h4>
        <ul className="mb-4">
          {project.results.map((result, i) => (
            <li key={i} className="flex items-start mb-2">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="primary" size="md" href="#contact">
          Request Similar Solution
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetail;