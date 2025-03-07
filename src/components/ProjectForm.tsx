import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import ImageUpload from './ImageUpload';

interface Project {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
}

interface ProjectFormProps {
  project?: Project;
  onSuccess: () => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<Project>({
    title: '',
    description: '',
    image_url: '',
    category: '',
    ...project
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (project?.id) {
        // Обновление существующего проекта
        const { error } = await supabase
          .from('projects')
          .update(formData)
          .eq('id', project.id);

        if (error) throw error;
      } else {
        // Создание нового проекта
        const { error } = await supabase
          .from('projects')
          .insert([formData]);

        if (error) throw error;
      }

      onSuccess();
    } catch (err) {
      console.error('Error saving project:', err);
      setError('Ошибка при сохранении проекта');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({ ...prev, image_url: url }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Название проекта
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Описание
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Категория
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          required
        >
          <option value="">Выберите категорию</option>
          <option value="Веб-разработка">Веб-разработка</option>
          <option value="Мобильная разработка">Мобильная разработка</option>
          <option value="UI/UX дизайн">UI/UX дизайн</option>
          <option value="3D и Анимации">3D и Анимации</option>
          <option value="Брендирование">Брендирование</option>
          <option value="Упаковка">Упаковка</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Изображение проекта
        </label>
        <ImageUpload
          onUploadComplete={handleImageUpload}
          currentImageUrl={formData.image_url}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Отмена
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? 'Сохранение...' : project?.id ? 'Обновить' : 'Создать'}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm; 