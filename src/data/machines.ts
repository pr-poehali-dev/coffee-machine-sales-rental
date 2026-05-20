export interface Machine {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  priceMonth: number;
  description: string;
  specs: {
    pressure: string;
    capacity: string;
    power: string;
    tank: string;
    cups: string;
    dimensions: string;
    weight: string;
    milk?: string;
  };
  features: string[];
  badge?: string;
}

export const machines: Machine[] = [
  {
    id: 1,
    name: 'F10',
    brand: 'Dr.Coffee',
    category: 'Компактная',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/678f49e1-c1f5-4470-b6e6-6efce5b54fa3.jpg',
    priceMonth: 89000,
    description: 'Компактная автоматическая кофемашина для дома и небольшого офиса. Простое управление, свежий кофе из зерна одним нажатием кнопки.',
    specs: {
      pressure: '15 бар',
      capacity: '0.5 кг зёрен',
      power: '1450 Вт',
      tank: '1.5 л',
      cups: 'до 50 чашек/сутки',
      dimensions: '24 × 35 × 40 см',
      weight: '8 кг',
      milk: 'Капучинатор (ручной)'
    },
    features: ['Автоматический помол', 'Регулировка крепости', 'Съёмный лоток', 'Быстрый нагрев', 'Экономичный режим'],
    badge: 'Выгодно'
  },
  {
    id: 2,
    name: 'F15',
    brand: 'Dr.Coffee',
    category: 'Офисная',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/0ecb6143-63a0-4c6f-b8a4-527323d41951.jpg',
    priceMonth: 135000,
    description: 'Автоматическая кофемашина для среднего офиса. Сенсорный дисплей, автоматический капучинатор, подключение к водопроводу.',
    specs: {
      pressure: '19 бар',
      capacity: '1.0 кг зёрен',
      power: '1800 Вт',
      tank: '2.0 л (+ водопровод)',
      cups: 'до 100 чашек/сутки',
      dimensions: '28 × 42 × 55 см',
      weight: '12 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['Сенсорный дисплей', 'Автокапучинатор', 'Подключение к водопроводу', '5 степеней помола', 'Автоочистка'],
    badge: 'Популярная'
  },
  {
    id: 3,
    name: 'CoffeeBreak Plus (MDB)',
    brand: 'Dr.Coffee',
    category: 'Вендинг',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/18f4a75a-66dc-4812-bc76-72d06ab20127.jpg',
    priceMonth: 154000,
    description: 'Вендинговая кофемашина с поддержкой платёжного терминала MDB. Для торговых точек, офисов самообслуживания и общественных мест.',
    specs: {
      pressure: '19 бар',
      capacity: '1.0 кг зёрен',
      power: '2200 Вт',
      tank: '4.0 л (+ водопровод)',
      cups: 'до 120 чашек/сутки',
      dimensions: '30 × 48 × 62 см',
      weight: '16 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['Терминал MDB', 'Самообслуживание', '3 системы водоснабжения', 'Счётчик порций', 'Антивандальный корпус'],
  },
  {
    id: 4,
    name: 'CoffeeBreak Big Plus (MDB)',
    brand: 'Dr.Coffee',
    category: 'Вендинг',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/18f4a75a-66dc-4812-bc76-72d06ab20127.jpg',
    priceMonth: 160000,
    description: 'Вендинговая кофемашина с увеличенным баком 8 л и терминалом MDB. Меньше дозаливов воды — больше кофе без перебоев.',
    specs: {
      pressure: '19 бар',
      capacity: '1.0 кг зёрен',
      power: '2200 Вт',
      tank: '8.0 л (внешний контейнер)',
      cups: 'до 120 чашек/сутки',
      dimensions: '30 × 48 × 62 см',
      weight: '18 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['Бак 8 л', 'Терминал MDB', 'Самообслуживание', 'Антивандальный замок', 'Телеметрия (опция)'],
  },
  {
    id: 5,
    name: 'CoffeeBar (MDB)',
    brand: 'Dr.Coffee',
    category: 'Вендинг',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/0ecb6143-63a0-4c6f-b8a4-527323d41951.jpg',
    priceMonth: 285000,
    description: 'Профессиональная вендинговая станция с большим сенсорным экраном и терминалом MDB. Для кафе, ресторанов и точек с высоким потоком.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '2750 Вт',
      tank: '4.0 л (+ водопровод)',
      cups: 'до 200 чашек/сутки',
      dimensions: '35 × 52 × 68 см',
      weight: '22 кг',
      milk: 'Система живого молока'
    },
    features: ['Большой сенсорный экран', 'Живое молоко', 'Терминал MDB', 'Телеметрия', 'Программируемые рецепты'],
    badge: 'Хит продаж'
  },
  {
    id: 6,
    name: 'CoffeeCenter (MDB)',
    brand: 'Dr.Coffee',
    category: 'Вендинг',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/18f4a75a-66dc-4812-bc76-72d06ab20127.jpg',
    priceMonth: 320000,
    description: 'Флагманская вендинговая кофемашина. До 200+ чашек в сутки, интеграция с эквайрингом, удалённый мониторинг. Для крупных объектов.',
    specs: {
      pressure: '19 бар',
      capacity: '1.5 кг зёрен',
      power: '3000 Вт',
      tank: '8.0 л + водопровод',
      cups: 'до 250 чашек/сутки',
      dimensions: '40 × 55 × 72 см',
      weight: '28 кг',
      milk: 'Профессиональная система молока'
    },
    features: ['250 чашек/сутки', 'Эквайринг + MDB', 'Удалённый мониторинг', 'Двойной бункер', 'Автосервис'],
    badge: 'Премиум'
  },
  {
    id: 7,
    name: 'CoffeeCenter Plus (MDB)',
    brand: 'Dr.Coffee',
    category: 'Вендинг',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/18f4a75a-66dc-4812-bc76-72d06ab20127.jpg',
    priceMonth: 360000,
    description: 'Топовая вендинговая кофемашина с расширенными возможностями. Максимальная производительность, полный набор платёжных систем, телеметрия.',
    specs: {
      pressure: '19 бар',
      capacity: '1.5 кг зёрен',
      power: '3300 Вт',
      tank: '8.0 л + водопровод',
      cups: 'до 300 чашек/сутки',
      dimensions: '42 × 57 × 75 см',
      weight: '30 кг',
      milk: 'Профессиональная система молока'
    },
    features: ['300 чашек/сутки', 'Все типы оплаты', 'Телеметрия', 'Расширенное меню напитков', 'Сервисный режим'],
    badge: 'Новинка'
  },
  {
    id: 8,
    name: 'F100 (MDB)',
    brand: 'Dr.Coffee',
    category: 'Вендинг',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/0ecb6143-63a0-4c6f-b8a4-527323d41951.jpg',
    priceMonth: 350000,
    description: 'Высокопроизводительная вендинговая кофемашина серии F100. Надёжная платформа, поддержка MDB, широкий ассортимент горячих напитков.',
    specs: {
      pressure: '19 бар',
      capacity: '1.5 кг зёрен',
      power: '3000 Вт',
      tank: '6.0 л (+ водопровод)',
      cups: 'до 250 чашек/сутки',
      dimensions: '40 × 54 × 70 см',
      weight: '26 кг',
      milk: 'Автоматическая система молока'
    },
    features: ['Терминал MDB', 'Широкий выбор напитков', 'Подключение к водопроводу', 'Телеметрия (опция)', 'Антивандальный корпус'],
  },
];
