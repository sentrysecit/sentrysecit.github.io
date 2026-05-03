import { Toaster } from '@/modules/core/components/ui/toaster';
import { Toaster as Sonner } from '@/modules/core/components/ui/sonner';
import { TooltipProvider } from '@/modules/core/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/modules/core/components/theme-provider';
import NotFound from './pages/NotFound';
import WriteUpDetailPage from './pages/writeups/writeup-detail-page';
import WriteupPage from './pages/writeups/writeup-page';
import { MainLayout } from './layouts/main-layout';
import HomePage from './pages/home-page';
import CommunityPage from './pages/community-page';
import TalksPage from './pages/talks-page';
import BlogPage from './pages/blog/blog-page';
import BlogDetailPage from './pages/blog/blog-detail-page';

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
              <Route path="/" element={<HomePage />} />
<Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/writeups" element={<WriteupPage />} />

              <Route path="/comunidad" element={<CommunityPage />} />
              <Route path="/charlas" element={<TalksPage />} />
              <Route path="/writeups/:slug" element={<WriteUpDetailPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
