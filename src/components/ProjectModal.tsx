import React from 'react';
import { X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  created_at: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-6xl h-[80vh] flex rounded-lg overflow-hidden">
        <div className="w-2/3 bg-black flex items-center justify-center">
          <img
            src={project.image_url}
            alt={project.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-1/3 p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-600 whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;