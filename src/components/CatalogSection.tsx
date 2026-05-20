import { useState } from 'react';
import { machines, Machine } from '@/data/machines';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Суперавтомат', 'Рожковая', 'Капсульная', 'Профессиональная'];

const specLabels: Record<string, string> = {
  pressure: 'Давление',
  capacity: 'Вместимость',
  power: 'Мощность',
  tank: 'Объём бака',
  cups: 'Производительность',
  dimensions: 'Размеры',
  weight: 'Вес',
  milk: 'Молоко',
};

interface CompareModalProps {
  machines: Machine[];
  onClose: () => void;
}

function CompareModal({ machines, onClose }: CompareModalProps) {
  const allSpecKeys = Object.keys(machines[0].specs) as (keyof Machine['specs'])[];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[hsl(20,12%,9%)] border border-[hsl(20,10%,18%)] rounded-sm w-full max-w-5xl max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-[hsl(20,10%,16%)] sticky top-0 bg-[hsl(20,12%,9%)] z-10">
          <h2 className="font-display text-2xl text-gradient-gold">Сравнение моделей</h2>
          <button onClick={onClose} className="text-[hsl(40,15%,45%)] hover:text-gold transition-colors">
            <Icon name="X" size={22} />
          </button>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <td className="text-[hsl(40,15%,40%)] text-xs uppercase tracking-widest font-body pb-4 pr-6 w-36">Характеристика</td>
                {machines.map((m) => (
                  <td key={m.id} className="pb-4 pr-4 align-top">
                    <div className="font-display text-lg text-[hsl(40,30%,85%)]">{m.name}</div>
                    <div className="font-body text-xs text-[hsl(40,15%,45%)]">{m.brand}</div>
                    <div className="font-body text-sm text-gold font-medium mt-1">
                      {m.priceMonth.toLocaleString('ru')} ₽/мес
                    </div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {allSpecKeys.map((key) => (
                <tr key={key} className="border-t border-[hsl(20,10%,14%)]">
                  <td className="py-3 pr-6 font-body text-xs text-[hsl(40,15%,45%)] tracking-wide">
                    {specLabels[key] || key}
                  </td>
                  {machines.map((m) => (
                    <td key={m.id} className="py-3 pr-4 font-body text-sm text-[hsl(40,25%,75%)]">
                      {m.specs[key] ?? <span className="text-[hsl(40,10%,30%)]">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-[hsl(20,10%,14%)]">
                <td className="py-3 pr-6 font-body text-xs text-[hsl(40,15%,45%)] tracking-wide">Функции</td>
                {machines.map((m) => (
                  <td key={m.id} className="py-3 pr-4">
                    <div className="flex flex-wrap gap-1">
                      {m.features.map((f) => (
                        <span key={f} className="feature-badge px-2 py-0.5 rounded-sm text-[10px] font-body">{f}</span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

interface CatalogSectionProps {
  onOrderClick: () => void;
}

export default function CatalogSection({ onOrderClick }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = activeCategory === 'Все'
    ? machines
    : machines.filter((m) => m.category === activeCategory);

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const compareMachines = machines.filter((m) => compareList.includes(m.id));

  return (
    <section id="catalog" className="py-24 lg:py-32 relative section-glow">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="divider-gold w-8" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">Каталог</span>
            <div className="divider-gold w-8" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[hsl(40,30%,90%)]">
            Премиальные <span className="text-gradient-gold italic">модели</span>
          </h2>
          <p className="font-body text-sm text-[hsl(40,15%,50%)] mt-4 max-w-lg mx-auto">
            Выберите идеальную кофемашину для вашего заведения
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs px-5 py-2 rounded-sm tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'btn-gold'
                  : 'btn-outline-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {compareList.length > 0 && (
          <div className="mb-8 flex items-center justify-between bg-[hsl(20,12%,10%)] border border-[hsl(43,74%,60%,0.2)] rounded-sm px-6 py-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <Icon name="GitCompare" size={16} className="text-gold" />
              <span className="font-body text-xs tracking-wide text-[hsl(40,25%,70%)]">
                Выбрано для сравнения:
              </span>
              <div className="flex gap-2">
                {compareMachines.map((m) => (
                  <span key={m.id} className="compare-tag px-3 py-1 rounded-sm text-xs font-body">
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {compareList.length >= 2 && (
                <button
                  onClick={() => setShowCompare(true)}
                  className="btn-gold px-5 py-2 rounded-sm text-xs"
                >
                  Сравнить
                </button>
              )}
              <button
                onClick={() => setCompareList([])}
                className="text-[hsl(40,15%,40%)] hover:text-gold transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((machine) => (
            <div
              key={machine.id}
              className={`card-luxury rounded-sm transition-all duration-300 overflow-hidden group ${
                compareList.includes(machine.id) ? 'ring-1 ring-gold/40' : ''
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,12%,8%)] via-transparent to-transparent" />
                {machine.badge && (
                  <div className="absolute top-4 left-4 bg-gold text-[hsl(20,14%,6%)] text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-sm">
                    {machine.badge}
                  </div>
                )}
                <button
                  onClick={() => toggleCompare(machine.id)}
                  className={`absolute top-4 right-4 w-8 h-8 rounded-sm flex items-center justify-center transition-all ${
                    compareList.includes(machine.id)
                      ? 'bg-gold text-[hsl(20,14%,6%)]'
                      : 'bg-[hsl(20,10%,14%)]/80 text-[hsl(40,15%,55%)] hover:text-gold'
                  }`}
                  title={compareList.includes(machine.id) ? 'Убрать из сравнения' : 'Добавить к сравнению'}
                >
                  <Icon name="GitCompare" size={14} />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-body text-xs text-[hsl(40,15%,40%)] tracking-widest uppercase mb-1">
                      {machine.brand} · {machine.category}
                    </div>
                    <h3 className="font-display text-xl text-[hsl(40,30%,88%)] font-medium">
                      {machine.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl text-gold">
                      {machine.priceMonth.toLocaleString('ru')}
                    </div>
                    <div className="font-body text-[10px] text-[hsl(40,15%,40%)] tracking-wide">₽/месяц</div>
                  </div>
                </div>

                <p className="font-body text-xs text-[hsl(40,15%,50%)] leading-relaxed mb-4 line-clamp-2">
                  {machine.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {machine.features.slice(0, 3).map((f) => (
                    <span key={f} className="feature-badge px-2 py-0.5 rounded-sm font-body">
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedId(expandedId === machine.id ? null : machine.id)}
                  className="w-full flex items-center justify-between text-[hsl(40,15%,45%)] hover:text-gold text-xs font-body tracking-wide uppercase transition-colors py-2 border-t border-[hsl(20,10%,16%)]"
                >
                  <span>Характеристики</span>
                  <Icon name={expandedId === machine.id ? 'ChevronUp' : 'ChevronDown'} size={14} />
                </button>

                {expandedId === machine.id && (
                  <div className="mt-3 space-y-2 animate-fade-in">
                    {(Object.entries(machine.specs) as [keyof Machine['specs'], string][]).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center py-1.5 border-b border-[hsl(20,10%,13%)]">
                        <span className="font-body text-xs text-[hsl(40,15%,40%)]">{specLabels[key]}</span>
                        <span className="font-body text-xs text-[hsl(40,25%,72%)]">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={onOrderClick}
                  className="btn-gold w-full py-3 rounded-sm text-xs mt-4"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCompare && compareMachines.length >= 2 && (
        <CompareModal machines={compareMachines} onClose={() => setShowCompare(false)} />
      )}
    </section>
  );
}
