import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import TariffsSection from '@/components/TariffsSection';
import FaqSection from '@/components/FaqSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'catalog', 'tariffs', 'faq', 'contacts'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navigateTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} onNavigate={navigateTo} />
      <main>
        <HeroSection onNavigate={navigateTo} />
        <CatalogSection onOrderClick={() => navigateTo('contacts')} />
        <TariffsSection onOrderClick={() => navigateTo('contacts')} />
        <FaqSection />
        <ContactsSection />
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
