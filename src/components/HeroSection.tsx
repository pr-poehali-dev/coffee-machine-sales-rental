interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/f0a71c79-dafe-48a9-ac1e-abe9213109a8.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(20,14%,6%)]/70 via-[hsl(20,14%,6%)]/50 to-[hsl(20,14%,6%)]" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="divider-gold w-12" />
          <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">
            Аренда профессиональных кофемашин
          </span>
          <div className="divider-gold w-12" />
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Вкус совершенства
          <br />
          <span className="text-gradient-gold italic font-normal">каждое утро</span>
        </h1>

        <p
          className="font-body text-sm md:text-base text-[hsl(40,15%,60%)] max-w-xl mx-auto leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Профессиональные кофемашины для вашего офиса или ресторана.
          Гибкие тарифы, полное обслуживание, моментальная доставка.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <button
            onClick={() => onNavigate('catalog')}
            className="btn-gold px-10 py-4 rounded-sm w-full sm:w-auto"
          >
            Смотреть каталог
          </button>
          <button
            onClick={() => onNavigate('tariffs')}
            className="btn-outline-gold px-10 py-4 rounded-sm w-full sm:w-auto"
          >
            Узнать цены
          </button>
        </div>

        <div
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          {[
            { num: '6+', label: 'Моделей' },
            { num: '500+', label: 'Клиентов' },
            { num: '24/7', label: 'Поддержка' },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-gradient-gold font-light">{stat.num}</div>
              <div className="font-body text-xs tracking-widest uppercase text-[hsl(40,15%,45%)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0 }}>
        <span className="font-body text-xs tracking-widest text-[hsl(40,15%,35%)] uppercase">Прокрутите</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[hsl(43,74%,60%,0.5)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}