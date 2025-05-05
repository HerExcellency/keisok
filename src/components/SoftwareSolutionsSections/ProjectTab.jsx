import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProjectTab = ({ project, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-6 mb-4 rounded-lg transition-all duration-300 cursor-pointer ${isActive ? 'bg-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100'}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <ChevronRight 
          className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'transform rotate-90 text-primary' : 'text-gray-400'}`}
        />
      </div>
      <p className="text-gray-600 mt-2">{project.client} • {project.year}</p>
    </div>
  );
};

export default ProjectTab;