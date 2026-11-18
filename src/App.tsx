import { AnimatePresence, MotionConfig } from 'motion/react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { FloatingNavigation } from './components/FloatingNavigation';
import { MobileNavigation } from './components/MobileNavigation';
import { SiteBackground } from './components/SiteBackground';
import { AboutPage } from './pages/AboutPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';

import { getBlogPostBySlug, getProjectBySlug } from './utils/portfolioHelpers';

function RouteSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    if (pathname === '/') {
      document.title = 'Girish Lade — UI/UX Designer, Full-Stack Developer & LadeStack Founder';
    } else if (pathname === '/projects') {
      document.title = 'Projects by Girish Lade — Browser IDEs, PDF Tools & Web Apps';
    } else if (pathname.startsWith('/projects/')) {
      const slug = pathname.replace('/projects/', '');
      const project = getProjectBySlug(slug);
      document.title = project
        ? `${project.title} — Girish Lade`
        : 'Project Not Found — Girish Lade';
    } else if (pathname === '/blog') {
      document.title = 'Notes & Writing — Girish Lade';
    } else if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      const post = getBlogPostBySlug(slug);
      document.title = post ? `${post.title} — Girish Lade` : 'Note Not Found — Girish Lade';
    } else if (pathname === '/about') {
      document.title = 'About Girish Lade — Engineer, Product Designer & Developer';
    } else if (pathname === '/contact') {
      document.title = 'Contact Girish Lade — Developer & LadeStack Founder';
    } else {
      document.title = 'Page Not Found — Girish Lade';
    }
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <RouteSync />
        <div className="relative min-h-dvh w-full">
          {/* Fixed static background never transitions or reloads across route changes */}
          <SiteBackground />
          <FloatingNavigation />
          <MobileNavigation />
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
