import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    q: 'Нужен ли залог для аренды кофемашины?',
    a: 'Нет, мы работаем без депозита. Вы платите только за аренду согласно выбранному тарифу. Договор аренды заключается официально.',
  },
  {
    q: 'Что входит в обслуживание и ремонт?',
    a: 'В тарифах «Бизнес» и «Премиум» включены плановое ТО, чистка и настройка машины. В тарифе «Премиум» — неограниченное количество выездов мастера и замена машины в течение 24 часов при поломке.',
  },
  {
    q: 'Как быстро осуществляется доставка?',
    a: 'Доставка и установка — в течение 1–2 рабочих дней после подписания договора. В Москве и ближнем Подмосковье возможна доставка в день обращения.',
  },
  {
    q: 'Можно ли поменять модель кофемашины в процессе аренды?',
    a: 'Да, замена возможна раз в квартал. Разница в стоимости пересчитывается пропорционально. Обратитесь к вашему менеджеру.',
  },
  {
    q: 'Какой минимальный срок аренды?',
    a: 'Минимальный срок — 1 месяц для тарифов «Бизнес» и «Премиум», 3 месяца — для тарифа «Старт». При аренде от 6 месяцев действует скидка 8%, от 12 месяцев — 15%.',
  },
  {
    q: 'Нужно ли самостоятельно покупать кофе и расходники?',
    a: 'В тарифах «Старт» и «Бизнес» расходные материалы оплачиваются отдельно — мы предлагаем широкий ассортимент зёрнового кофе, капсул и молока по выгодным ценам. В тарифе «Премиум» все расходники включены.',
  },
  {
    q: 'Работаете ли вы с ИП и самозанятыми?',
    a: 'Да, мы заключаем договоры с ООО, ИП и самозанятыми. Все платежи официальные с закрывающими документами.',
  },
  {
    q: 'Что происходит, если кофемашина сломается?',
    a: 'В тарифе «Бизнес» мастер выедет в течение 48 часов, в тарифе «Премиум» — в течение 24 часов с заменой на аналогичную модель. На период ремонта предоставляется временная замена.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="divider-gold w-8" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">FAQ</span>
            <div className="divider-gold w-8" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[hsl(40,30%,90%)]">
            Частые <span className="text-gradient-gold italic">вопросы</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-sm border transition-all duration-300 ${
                openIndex === i
                  ? 'border-[hsl(43,74%,60%,0.25)] bg-[hsl(20,12%,9%)]'
                  : 'border-[hsl(20,10%,14%)] bg-[hsl(20,12%,8%)] hover:border-[hsl(20,10%,20%)]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className={`font-body text-sm leading-snug transition-colors ${
                  openIndex === i ? 'text-[hsl(40,30%,88%)]' : 'text-[hsl(40,20%,65%)]'
                }`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  openIndex === i ? 'bg-gold text-[hsl(20,14%,6%)]' : 'bg-[hsl(20,10%,16%)] text-[hsl(40,15%,45%)]'
                }`}>
                  <Icon name={openIndex === i ? 'Minus' : 'Plus'} size={12} />
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 animate-fade-in">
                  <div className="divider-gold mb-4" />
                  <p className="font-body text-sm text-[hsl(40,15%,55%)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
