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
    name: 'Signature Pro X1',
    brand: "De'Longhi",
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 8900,
    description: 'Профессиональная суперавтоматическая машина для офисов и кафе. Встроенная кофемолка, двойной бойлер, сенсорный дисплей.',
    specs: {
      pressure: '19 бар',
      capacity: '2.0 кг зёрен',
      power: '1450 Вт',
      tank: '2.5 л',
      cups: 'до 200 чашек/день',
      dimensions: '36 × 43 × 58 см',
      weight: '14 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['Встроенная кофемолка', 'Двойной бойлер', 'Сенсорный экран', 'Wi-Fi управление', 'Автоочистка'],
    badge: 'Хит продаж'
  },
  {
    id: 2,
    name: 'Imperial Black',
    brand: 'Jura',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 12500,
    description: 'Флагманская модель швейцарского производства. Непревзойдённое качество эспрессо, интуитивное управление, идеальна для представительских офисов.',
    specs: {
      pressure: '15 бар',
      capacity: '1.0 кг зёрен',
      power: '1450 Вт',
      tank: '3.1 л',
      cups: 'до 150 чашек/день',
      dimensions: '28 × 44 × 55 см',
      weight: '12 кг',
      milk: 'Система HP3 (горячее, холодное, пена)'
    },
    features: ['Пульс-экстракция', 'Умная обработка молока', 'TFT дисплей', 'Bluetooth', 'Программируемые рецепты'],
    badge: 'Премиум'
  },
  {
    id: 3,
    name: 'Barista Elite',
    brand: 'Melitta',
    category: 'Рожковая',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 5900,
    description: 'Профессиональная рожковая машина для любителей классического эспрессо. Контроль температуры, паровая трубка, двойной портафильтр.',
    specs: {
      pressure: '20 бар',
      capacity: '250 г',
      power: '1600 Вт',
      tank: '2.8 л',
      cups: 'до 80 чашек/день',
      dimensions: '30 × 35 × 40 см',
      weight: '9 кг',
      milk: 'Паровая трубка'
    },
    features: ['PID контроллер', 'Двойной портафильтр', 'Паровая трубка', 'Манометр давления', 'Нержавеющая сталь'],
  },
  {
    id: 4,
    name: 'Office Master',
    brand: 'Franke',
    category: 'Капсульная',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 3900,
    description: 'Идеальное решение для небольших офисов. Совместима с капсулами Nespresso, быстрый нагрев, минимальное обслуживание.',
    specs: {
      pressure: '19 бар',
      capacity: '40 капсул',
      power: '1260 Вт',
      tank: '1.8 л',
      cups: 'до 50 чашек/день',
      dimensions: '19 × 33 × 31 см',
      weight: '4.5 кг',
    },
    features: ['Нагрев за 25 сек', 'Nespresso капсулы', 'Компактный корпус', 'Автовыключение', 'Регулировка объёма'],
    badge: 'Выгодно'
  },
  {
    id: 5,
    name: 'Grand Hotel Series',
    brand: 'La Marzocco',
    category: 'Профессиональная',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 22000,
    description: 'Легендарное итальянское оборудование для отелей и ресторанов. Двойной бойлер E61, ручное приготовление — бескомпромиссное качество.',
    specs: {
      pressure: '9 бар (оптимальное)',
      capacity: '1.0 кг (под молотый)',
      power: '2200 Вт',
      tank: '3.5 л',
      cups: 'до 300 чашек/день',
      dimensions: '51 × 52 × 57 см',
      weight: '32 кг',
      milk: 'Профессиональная паровая трубка E61'
    },
    features: ['Двойной бойлер E61', 'Ручной профессиональный', 'Итальянское производство', 'Стабильная температура', 'Группа saturated'],
    badge: 'Рестораны'
  },
  {
    id: 6,
    name: 'Smart Compact',
    brand: 'Philips',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 4500,
    description: 'Компактный суперавтомат для небольших команд. Встроенная кофемолка, простое управление, тихая работа.',
    specs: {
      pressure: '15 бар',
      capacity: '250 г зёрен',
      power: '1500 Вт',
      tank: '1.8 л',
      cups: 'до 60 чашек/день',
      dimensions: '22 × 43 × 35 см',
      weight: '7 кг',
    },
    features: ['Встроенная кофемолка', 'Сенсорные кнопки', 'Тихий режим', 'Автополив', 'Компактный'],
  }
];