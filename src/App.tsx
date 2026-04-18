import { Toaster } from '@/modules/core/components/ui/toaster';
import { Toaster as Sonner } from '@/modules/core/components/ui/sonner';
import { TooltipProvider } from '@/modules/core/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/modules/core/components/theme-provider';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import WriteUpDetailPage from './pages/writeups/writeup-detail-page';
import WriteupPage from './pages/writeups/writeup-page';
import { MainLayout } from './layouts/main-layout';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/writeups" element={<WriteupPage />} />
              <Route path="/writeups/:slug" element={<WriteUpDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
