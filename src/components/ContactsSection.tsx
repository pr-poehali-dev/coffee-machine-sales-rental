import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-24 lg:py-32 relative bg-[hsl(20,12%,7%)]">
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="divider-gold w-8" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">Контакты</span>
            <div className="divider-gold w-8" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[hsl(40,30%,90%)]">
            Начните <span className="text-gradient-gold italic">сегодня</span>
          </h2>
          <p className="font-body text-sm text-[hsl(40,15%,50%)] mt-4 max-w-md mx-auto">
            Оставьте заявку — мы свяжемся в течение 30 минут и подберём оптимальное решение
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: 'Phone', label: 'Телефон', value: '8 (8442) 267-653', href: 'tel:88442267653' },
                { icon: 'Mail', label: 'Email', value: 'volgoglass@mail.ru', href: 'mailto:volgoglass@mail.ru' },
                { icon: 'MapPin', label: 'Адрес', value: 'г. Волгоград, ул. Скосырева 5', href: '#' },
                { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–18:00', href: '#' },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[hsl(20,10%,12%)] border border-[hsl(20,10%,18%)] flex items-center justify-center text-gold group-hover:bg-[hsl(43,74%,60%,0.1)] transition-colors shrink-0">
                    <Icon name={contact.icon} size={16} />
                  </div>
                  <div>
                    <div className="font-body text-xs text-[hsl(40,15%,40%)] tracking-widest uppercase">{contact.label}</div>
                    <div className="font-body text-sm text-[hsl(40,25%,72%)] group-hover:text-gold transition-colors">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="divider-gold mb-6" />

            <div>
              <div className="font-body text-xs text-[hsl(40,15%,40%)] tracking-widest uppercase mb-4">Мы в соцсетях</div>
              <div className="flex gap-3">
                {[
                  { icon: 'MessageCircle', label: 'Telegram' },
                  { icon: 'Instagram', label: 'Instagram' },
                  { icon: 'Facebook', label: 'VK' },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="w-10 h-10 rounded-sm bg-[hsl(20,10%,12%)] border border-[hsl(20,10%,18%)] flex items-center justify-center text-[hsl(40,15%,45%)] hover:text-gold hover:border-[hsl(43,74%,60%,0.3)] transition-all"
                    title={s.label}
                  >
                    <Icon name={s.icon} size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card-luxury rounded-sm p-8">
            {submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[hsl(43,74%,60%,0.15)] border border-[hsl(43,74%,60%,0.3)] flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCheck" size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-[hsl(40,30%,88%)] mb-3">
                  Заявка отправлена!
                </h3>
                <p className="font-body text-sm text-[hsl(40,15%,50%)] leading-relaxed">
                  Мы свяжемся с вами в течение 30 минут в рабочее время
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold px-6 py-3 rounded-sm text-xs mt-6"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(43,74%,60%,0.4)] to-transparent rounded-t-sm" />

                <h3 className="font-display text-2xl text-[hsl(40,30%,88%)] mb-6">Оставить заявку</h3>

                {[
                  { name: 'name', label: 'Ваше имя', placeholder: 'Александр Иванов', type: 'text', required: true },
                  { name: 'phone', label: 'Телефон', placeholder: '+7 (___) ___-__-__', type: 'tel', required: true },
                  { name: 'company', label: 'Компания', placeholder: 'Название организации', type: 'text', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-body text-xs text-[hsl(40,15%,40%)] tracking-widest uppercase block mb-2">
                      {field.label} {field.required && <span className="text-gold">*</span>}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full bg-[hsl(20,10%,11%)] border border-[hsl(20,10%,18%)] rounded-sm px-4 py-3 font-body text-sm text-[hsl(40,25%,72%)] placeholder:text-[hsl(40,10%,30%)] focus:outline-none focus:border-[hsl(43,74%,60%,0.5)] focus:bg-[hsl(20,10%,12%)] transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-body text-xs text-[hsl(40,15%,40%)] tracking-widest uppercase block mb-2">
                    Сообщение
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите о ваших потребностях…"
                    rows={3}
                    className="w-full bg-[hsl(20,10%,11%)] border border-[hsl(20,10%,18%)] rounded-sm px-4 py-3 font-body text-sm text-[hsl(40,25%,72%)] placeholder:text-[hsl(40,10%,30%)] focus:outline-none focus:border-[hsl(43,74%,60%,0.5)] transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full py-4 rounded-sm text-xs mt-2">
                  Отправить заявку
                </button>

                <p className="font-body text-[10px] text-[hsl(40,10%,30%)] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}