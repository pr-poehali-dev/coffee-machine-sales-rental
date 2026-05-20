import { useState } from 'react';
import Icon from '@/components/ui/icon';

const tariffs = [
  {
    id: 'start',
    name: 'Старт',
    tagline: 'Для небольших офисов',
    priceMonth: 3900,
    deposit: 0,
    duration: 'от 3 месяцев',
    machines: ['Капсульные', 'Компактные суперавтоматы'],
    features: [
      'Машина в аренду',
      'Доставка и установка',
      'Инструктаж персонала',
      'Техподдержка по телефону',
      'Плановое ТО раз в 6 мес.',
    ],
    notIncluded: ['Выезд мастера', 'Расходные материалы'],
  },
  {
    id: 'business',
    name: 'Бизнес',
    tagline: 'Популярный выбор',
    priceMonth: 6900,
    deposit: 0,
    duration: 'от 1 месяца',
    machines: ['Все модели каталога'],
    features: [
      'Машина в аренду',
      'Доставка и установка',
      'Инструктаж персонала',
      'Техподдержка 24/7',
      'Плановое ТО раз в 3 мес.',
      'Выезд мастера (до 2 раз)',
      'Замена машины на период ремонта',
    ],
    notIncluded: ['Расходные материалы'],
    featured: true,
  },
  {
    id: 'premium',
    name: 'Премиум',
    tagline: 'Для ресторанов и отелей',
    priceMonth: 14900,
    deposit: 0,
    duration: 'от 1 месяца',
    machines: ['Все модели', 'Включая La Marzocco'],
    features: [
      'Машина в аренду',
      'Доставка и установка',
      'Персональный менеджер',
      'Техподдержка 24/7',
      'Ежемесячное ТО',
      'Неограниченные выезды',
      'Замена машины 24ч',
      'Расходные материалы включены',
      'Обучение баристы',
    ],
    notIncluded: [],
  },
];

const additions = [
  { name: 'Кофейные зёрна (1 кг)', price: 1200 },
  { name: 'Молоко (10 л)', price: 950 },
  { name: 'Фирменные стаканы (50 шт)', price: 750 },
  { name: 'Внеплановый выезд мастера', price: 2500 },
  { name: 'Обучение баристы (1 час)', price: 3500 },
];

interface TariffsSectionProps {
  onOrderClick: () => void;
}

export default function TariffsSection({ onOrderClick }: TariffsSectionProps) {
  const [months, setMonths] = useState(3);
  const [selectedTariff, setSelectedTariff] = useState('business');

  const discount = months >= 12 ? 0.15 : months >= 6 ? 0.08 : 0;
  const selected = tariffs.find((t) => t.id === selectedTariff)!;
  const finalPrice = Math.round(selected.priceMonth * (1 - discount));

  return (
    <section id="tariffs" className="py-24 lg:py-32 relative bg-[hsl(20,12%,7%)]">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="divider-gold w-8" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">Тарифы</span>
            <div className="divider-gold w-8" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[hsl(40,30%,90%)]">
            Гибкие <span className="text-gradient-gold italic">условия</span>
          </h2>
          <p className="font-body text-sm text-[hsl(40,15%,50%)] mt-4 max-w-lg mx-auto">
            Выберите тариф и срок аренды — чем дольше, тем выгоднее
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tariffs.map((tariff) => (
            <div
              key={tariff.id}
              onClick={() => setSelectedTariff(tariff.id)}
              className={`rounded-sm p-6 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                tariff.featured
                  ? 'bg-gradient-to-b from-[hsl(20,12%,12%)] to-[hsl(20,10%,9%)] border border-[hsl(43,74%,60%,0.35)] ring-1 ring-[hsl(43,74%,60%,0.15)]'
                  : 'card-luxury hover:border-[hsl(43,74%,60%,0.3)]'
              } ${selectedTariff === tariff.id ? 'ring-1 ring-gold/50' : ''}`}
            >
              {tariff.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
              {tariff.featured && (
                <div className="absolute top-4 right-4 bg-gold text-[hsl(20,14%,6%)] text-[10px] font-body font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                  Популярный
                </div>
              )}

              <div className="mb-4">
                <div className="font-body text-xs text-[hsl(40,15%,40%)] tracking-widest uppercase mb-1">
                  {tariff.tagline}
                </div>
                <h3 className="font-display text-2xl text-[hsl(40,30%,88%)]">{tariff.name}</h3>
              </div>

              <div className="mb-4">
                <span className="font-display text-4xl text-gradient-gold">{tariff.priceMonth.toLocaleString('ru')}</span>
                <span className="font-body text-xs text-[hsl(40,15%,40%)] ml-2">₽/месяц</span>
              </div>

              <div className="font-body text-xs text-[hsl(40,15%,45%)] mb-5 tracking-wide">
                {tariff.duration} · Без депозита
              </div>

              <div className="divider-gold mb-4" />

              <ul className="space-y-2 mb-4">
                {tariff.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-xs text-[hsl(40,20%,65%)]">
                    <Icon name="Check" size={12} className="text-gold mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
                {tariff.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-xs text-[hsl(40,10%,35%)]">
                    <Icon name="X" size={12} className="mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="font-body text-xs text-[hsl(40,15%,40%)] mb-5">
                Модели: <span className="text-[hsl(40,20%,60%)]">{tariff.machines.join(', ')}</span>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); onOrderClick(); }}
                className={`w-full py-3 rounded-sm text-xs ${tariff.featured ? 'btn-gold' : 'btn-outline-gold'}`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[hsl(20,12%,9%)] border border-[hsl(20,10%,16%)] rounded-sm p-8 mb-12">
          <h3 className="font-display text-2xl text-[hsl(40,30%,88%)] mb-2">Калькулятор стоимости</h3>
          <p className="font-body text-xs text-[hsl(40,15%,45%)] mb-6 tracking-wide">
            При аренде от 6 месяцев — скидка 8%, от 12 месяцев — скидка 15%
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <label className="font-body text-xs text-[hsl(40,15%,45%)] tracking-widest uppercase mb-3 block">
                Срок аренды: <span className="text-gold">{months} мес.</span>
              </label>
              <input
                type="range"
                min={1}
                max={24}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-[hsl(43,74%,60%)] bg-[hsl(20,10%,14%)] h-1 rounded-full"
              />
              <div className="flex justify-between font-body text-xs text-[hsl(40,10%,30%)] mt-2">
                <span>1 мес.</span>
                <span>6 мес.</span>
                <span>12 мес.</span>
                <span>24 мес.</span>
              </div>
            </div>

            <div className="bg-[hsl(20,10%,7%)] border border-[hsl(20,10%,14%)] rounded-sm p-6">
              <div className="font-body text-xs text-[hsl(40,15%,40%)] tracking-wide mb-1">
                Тариф «{selected.name}»
              </div>
              {discount > 0 && (
                <div className="font-body text-xs text-[hsl(40,15%,40%)] line-through mb-1">
                  {selected.priceMonth.toLocaleString('ru')} ₽/мес
                </div>
              )}
              <div className="font-display text-4xl text-gradient-gold mb-1">
                {finalPrice.toLocaleString('ru')} ₽
              </div>
              <div className="font-body text-xs text-[hsl(40,15%,40%)] mb-2">в месяц</div>
              {discount > 0 && (
                <div className="compare-tag inline-block px-3 py-1 rounded-sm text-xs font-body mb-3">
                  Скидка {Math.round(discount * 100)}%
                </div>
              )}
              <div className="font-body text-sm text-[hsl(40,20%,60%)] mt-2">
                Итого за {months} мес.: <span className="text-gold font-medium">{(finalPrice * months).toLocaleString('ru')} ₽</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl text-[hsl(40,30%,88%)] mb-6">
            Дополнительные услуги
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {additions.map((a) => (
              <div key={a.name} className="card-luxury rounded-sm px-5 py-4 flex justify-between items-center">
                <span className="font-body text-xs text-[hsl(40,20%,65%)]">{a.name}</span>
                <span className="font-display text-lg text-gold">{a.price.toLocaleString('ru')} ₽</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
