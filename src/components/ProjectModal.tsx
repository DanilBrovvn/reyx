import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white w-full max-w-6xl h-[80vh] flex rounded-lg overflow-hidden"
        >
          <div className="w-2/3 bg-black flex items-center justify-center">
            {!imageError ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-white text-center p-4">
                <p>Извините, не удалось загрузить изображение</p>
                <button 
                  onClick={() => setImageError(false)}
                  className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Попробовать снова
                </button>
              </div>
            )}
          </div>
          <div className="w-1/3 p-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 id="modal-title" className="text-2xl font-bold">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Закрыть модальное окно"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;