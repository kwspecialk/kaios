import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { Dashboard } from '@/pages/Dashboard';
import { Health } from '@/pages/Health';
import { Productivity } from '@/pages/Productivity';
import { Social } from '@/pages/Social';
import { Financial } from '@/pages/Financial';
import { Settings } from '@/pages/Settings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/health" element={<Health />} />
              <Route path="/productivity" element={<Productivity />} />
              <Route path="/social" element={<Social />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;