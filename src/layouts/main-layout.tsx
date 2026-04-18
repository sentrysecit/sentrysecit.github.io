import { NavLink, Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '@/modules/core/components/theme-switcher';
import { Shield, BookOpen, Calendar, Users } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Inicio', icon: Shield },
  { path: '/comunidad', label: 'Comunidad', icon: Users },
  { path: '/writeups', label: 'WriteUps', icon: BookOpen },
  { path: '/charlas', label: 'Charlas', icon: Calendar },
];

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28">
        <div className="animate-fade-in">
          <Outlet />
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-border/50 bg-background/80 backdrop-blur-lg z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around py-2">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors duration-200 w-20 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
