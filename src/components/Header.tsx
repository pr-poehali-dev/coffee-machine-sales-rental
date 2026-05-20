import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'tariffs', label: 'Тарифы' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[hsl(20,14%,6%)]/95 backdrop-blur-md border-b border-[hsl(20,10%,16%)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
              <span className="text-[hsl(20,14%,6%)] font-display font-semibold text-sm">C</span>
            </div>
            <span className="font-display text-xl tracking-widest text-gradient-gold font-medium">
              COFFEELUX
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-gold'
                    : 'text-[hsl(40,15%,55%)] hover:text-[hsl(40,30%,80%)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-[hsl(40,15%,55%)] hover:text-gold transition-colors text-xs font-body tracking-wide">
              <Icon name="Phone" size={14} />
              +7 (495) 123-45-67
            </a>
            <button
              onClick={() => onNavigate('contacts')}
              className="btn-gold px-5 py-2 rounded-sm text-xs"
            >
              Оставить заявку
            </button>
          </div>

          <button
            className="lg:hidden text-[hsl(40,30%,80%)]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(20,14%,6%)]/98 backdrop-blur-md border-t border-[hsl(20,10%,16%)] animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`text-left font-body text-sm tracking-widest uppercase py-2 border-b border-[hsl(20,10%,14%)] transition-colors ${
                  activeSection === item.id ? 'text-gold' : 'text-[hsl(40,15%,55%)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('contacts'); setMobileOpen(false); }}
              className="btn-gold px-5 py-3 rounded-sm text-xs mt-2"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
