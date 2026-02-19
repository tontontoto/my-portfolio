import React from 'react';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Footer } from './components/Footer';
import { ScrollToHash } from './components/ScrollToHash';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
