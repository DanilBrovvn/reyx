import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import ProjectModal from '../components/ProjectModal';
import { supabase } from '../lib/supabase';

const categories = [
  { id: 'all', label: 'Все' },
  { id: '3d', label: '3D и Анимации' },
  { id: 'branding', label: 'Брендирование' },
  { id: 'packaging', label: 'Упаковка' }
];

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  created_at: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError('Ошибка при загрузке проектов');
    } else {
      setProjects(data || []);
    }
  };

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center gap-8 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={clsx(
              'text-lg transition-colors',
              selectedCategory === category.id
                ? 'text-black font-medium'
                : 'text-gray-500 hover:text-black'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {error && (
        <div className="mb-8 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="aspect-square overflow-hidden cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;