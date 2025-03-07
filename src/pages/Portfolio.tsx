import React from 'react';
import PortfolioView from '../components/PortfolioView';

// Пример данных для портфолио
const projects = [
  {
    id: '1',
    title: 'Проект 1',
    description: 'Описание проекта 1. Это может быть длинное описание, которое будет обрезано в карточке, но полностью отображаться в модальном окне.',
    image_url: 'https://picsum.photos/800/600?random=1',
    category: 'Веб-разработка',
    created_at: '2024-03-07'
  },
  {
    id: '2',
    title: 'Проект 2',
    description: 'Описание проекта 2. Здесь может быть подробное описание проекта, его целей и достигнутых результатов.',
    image_url: 'https://picsum.photos/800/600?random=2',
    category: 'Мобильная разработка',
    created_at: '2024-03-06'
  },
  {
    id: '3',
    title: 'Проект 3',
    description: 'Описание проекта 3. В этом проекте мы использовали современные технологии и достигли отличных результатов.',
    image_url: 'https://picsum.photos/800/600?random=3',
    category: 'UI/UX дизайн',
    created_at: '2024-03-05'
  },
  {
    id: '4',
    title: 'Проект 4',
    description: 'Описание проекта 4. Это может быть описание сложного проекта с множеством функций и особенностей.',
    image_url: 'https://picsum.photos/800/600?random=4',
    category: 'Веб-разработка',
    created_at: '2024-03-04'
  },
  {
    id: '5',
    title: 'Проект 5',
    description: 'Описание проекта 5. В этом проекте мы создали инновационное решение для сложной задачи.',
    image_url: 'https://picsum.photos/800/600?random=5',
    category: 'Мобильная разработка',
    created_at: '2024-03-03'
  },
  {
    id: '6',
    title: 'Проект 6',
    description: 'Описание проекта 6. Это может быть описание проекта, в котором мы использовали передовые технологии.',
    image_url: 'https://picsum.photos/800/600?random=6',
    category: 'UI/UX дизайн',
    created_at: '2024-03-02'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <PortfolioView projects={projects} />
    </div>
  );
};

export default Portfolio;