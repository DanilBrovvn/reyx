import React from 'react';
import { ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Behance',
      url: 'https://behance.net/phoenixraine',
    },
    {
      name: 'VK',
      url: 'https://vk.com/phoenixraine',
    },
    {
      name: 'Pinterest',
      url: 'https://pinterest.com/phoenixraine',
    },
  ];

  const contactInfo = {
    instagram: '@phoenixraine',
    email: 'Phoenixraine@yandex.ru',
    phone: '+79208917932',
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="space-y-8">
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <div key={link.name} className="flex items-center justify-between py-4 border-b">
              <span className="text-lg">{link.name}</span>
              <div className="flex gap-4">
                <button className="text-gray-500 hover:text-black">
                  Скопировать ссылку
                </button>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black flex items-center gap-1"
                >
                  Перейти
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-lg">{contactInfo.instagram}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg">{contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg">{contactInfo.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;