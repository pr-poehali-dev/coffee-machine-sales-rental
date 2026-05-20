interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[hsl(20,14%,5%)] border-t border-[hsl(20,10%,12%)] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <button onClick={() => onNavigate('hero')} className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center">
                <span className="text-[hsl(20,14%,6%)] font-display font-semibold text-xs">C</span>
              </div>
              <span className="font-display text-lg tracking-widest text-gradient-gold">COFFEELUX</span>
            </button>
            <p className="font-body text-xs text-[hsl(40,10%,35%)] leading-relaxed max-w-xs">
              Премиальные кофемашины в аренду для бизнеса. Профессиональный сервис и высочайшее качество.
            </p>
          </div>

          <div>
            <div className="font-body text-xs text-[hsl(40,15%,35%)] tracking-widest uppercase mb-4">Разделы</div>
            <ul className="space-y-2">
              {[
                { id: 'catalog', label: 'Каталог машин' },
                { id: 'tariffs', label: 'Тарифы аренды' },
                { id: 'faq', label: 'Частые вопросы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="font-body text-xs text-[hsl(40,15%,40%)] hover:text-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-xs text-[hsl(40,15%,35%)] tracking-widest uppercase mb-4">Контакты</div>
            <ul className="space-y-2">
              <li className="font-body text-xs text-[hsl(40,15%,40%)]">+7 (495) 123-45-67</li>
              <li className="font-body text-xs text-[hsl(40,15%,40%)]">hello@coffeelux.ru</li>
              <li className="font-body text-xs text-[hsl(40,15%,40%)]">Москва, ул. Арбат, 24</li>
              <li className="font-body text-xs text-[hsl(40,15%,40%)]">Пн–Пт: 9:00–20:00</li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-[hsl(40,10%,28%)]">
            © 2024 CoffeeLux. Все права защищены.
          </span>
          <div className="flex gap-6">
            <button className="font-body text-xs text-[hsl(40,10%,28%)] hover:text-[hsl(40,15%,45%)] transition-colors">
              Политика конфиденциальности
            </button>
            <button className="font-body text-xs text-[hsl(40,10%,28%)] hover:text-[hsl(40,15%,45%)] transition-colors">
              Оферта
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
