import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorChameleon from './components/FlavorChameleon';
import LineupGallery from './components/LineupGallery';
import BrandStory from './components/BrandStory';
import WhereToFind from './components/WhereToFind';
import B2BModal from './components/B2BModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedFlavor, setSelectedFlavor] = useState('hot-soja');
  const [isB2BOpen, setIsB2BOpen] = useState(false);

  const handleSelectFlavor = (id) => {
    setSelectedFlavor(id);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-body font-sans selection:bg-amber-500 selection:text-black transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
        {/* Top Navbar */}
        <Navbar onOpenB2B={() => setIsB2BOpen(true)} />

        {/* Hero Showcase */}
        <main>
          <Hero onSelectFlavor={handleSelectFlavor} />

          {/* Dynamic Flavor Experience (Chameleon Theme) */}
          <FlavorChameleon
            selectedId={selectedFlavor}
            onSelectFlavor={handleSelectFlavor}
            onOpenB2B={() => setIsB2BOpen(true)}
          />

          {/* 6 Tubes Full Collection Lineup */}
          <LineupGallery onSelectFlavor={handleSelectFlavor} />

          {/* Brand Story & Manifesto */}
          <BrandStory />

          {/* Restaurant & Partner Locations */}
          <WhereToFind onOpenB2B={() => setIsB2BOpen(true)} />
        </main>

        {/* Footer */}
        <Footer onOpenB2B={() => setIsB2BOpen(true)} />

        {/* B2B Tasting Request Modal */}
        <B2BModal
          isOpen={isB2BOpen}
          onClose={() => setIsB2BOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
