import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

interface NavLink {
  path: string;
  label: string;
}

const Layout: React.FC = () => {
  const location = useLocation();

  const navLinks: NavLink[] = [
    { path: '/', label: 'Портфолио' },
    { path: '/about', label: 'Обо мне' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white z-50" role="navigation" aria-label="Основная навигация">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold" aria-label="Главная страница">
              Андрей Пчелов
            </Link>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={clsx(
                    'text-lg transition-colors',
                    location.pathname === link.path
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-24 pb-12">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;