import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-t border-gray-200">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg">{title}</span>
        <Plus
          size={24}
          className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const About = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'about',
      title: 'Обо мне',
      content: (
        <p className="text-gray-600">
          Я графический дизайнер с опытом в создании уникальных визуальных решений. 
          Специализируюсь на брендинге, 3D-графике и дизайне упаковки.
        </p>
      ),
    },
    {
      id: 'software',
      title: 'Программы, которые я использую',
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
          <li>Cinema 4D</li>
          <li>Blender</li>
        </ul>
      ),
    },
    {
      id: 'services',
      title: 'Я создаю',
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Фирменный стиль</li>
          <li>Упаковку</li>
          <li>3D-визуализации</li>
          <li>Анимации</li>
          <li>Веб-дизайн</li>
        </ul>
      ),
    },
    {
      id: 'why',
      title: 'Почему я',
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Более 5 лет опыта в графическом дизайне</li>
          <li>Индивидуальный подход к каждому проекту</li>
          <li>Внимание к деталям</li>
          <li>Соблюдение дедлайнов</li>
        </ul>
      ),
    },
    {
      id: 'prices',
      title: 'Цены',
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Брендинг: от 50,000 ₽</li>
          <li>Дизайн упаковки: от 30,000 ₽</li>
          <li>3D-визуализация: от 20,000 ₽</li>
          <li>Анимация: от 40,000 ₽</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="border-b border-gray-200">
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            title={section.title}
            isOpen={openSection === section.id}
            onClick={() => toggleSection(section.id)}
          >
            {section.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default About;