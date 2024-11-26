import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useTheme } from '@/contexts/ThemeContext';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-background p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};