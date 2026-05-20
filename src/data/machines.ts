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
    name: 'PROXIMA F11 Plus',
    brand: 'Dr.Coffee',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 7900,
    description: 'Профессиональная суперавтоматическая кофемашина для кафе, баров и средних офисов. 30 напитков из зерна и свежего молока одним нажатием. Подключение к водопроводу.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '2750–3300 Вт',
      tank: '2.0 л (+ водопровод)',
      cups: 'до 150 чашек/сутки',
      dimensions: '31 × 52 × 66 см',
      weight: '17 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['30 напитков', '3 системы водоснабжения', 'Сенсорный дисплей', 'Автоочистка', 'Счётчик порций'],
    badge: 'Популярная'
  },
  {
    id: 2,
    name: 'PROXIMA F11 Big Plus',
    brand: 'Dr.Coffee',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 8900,
    description: 'Увеличенный бак 8 л и бункер 1,2 кг — идеально для высокого потока. Суперавтомат для кафе, ресторанов и крупных офисов без постоянного долива воды.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '2750–3300 Вт',
      tank: '8.0 л (внешний контейнер)',
      cups: 'до 150 чашек/сутки',
      dimensions: '31 × 52 × 66 см',
      weight: '17 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['Бак 8 л', '30 напитков', 'Настраиваемое меню', 'Антивандальный замок', 'Телеметрия (опция)'],
  },
  {
    id: 3,
    name: 'PROXIMA F12 Plus',
    brand: 'Dr.Coffee',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 9900,
    description: 'Флагман серии F12 с вертикальным сенсорным LED-экраном 7,1". 2 вибрационных помпы, 2 термоблока — стабильная температура пара и воды одновременно.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '2750–3300 Вт',
      tank: '2.0 л (+ водопровод)',
      cups: 'до 150 чашек/сутки',
      dimensions: '31 × 52 × 68 см',
      weight: '18 кг',
      milk: 'Инновационный диспенсер молока'
    },
    features: ['Экран 7.1"', '2 помпы + 2 термоблока', '30 напитков', 'Подключение к водопроводу', 'Автопромывка'],
    badge: 'Хит продаж'
  },
  {
    id: 4,
    name: 'PROXIMA F12 Big Plus',
    brand: 'Dr.Coffee',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 10900,
    description: 'Мощный суперавтомат с баком 8 л и подключением к водопроводу. 30 напитков, одновременное приготовление 2 порций, поддержка платёжного терминала.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '2750–3300 Вт',
      tank: '8.0 л + водопровод',
      cups: 'до 150 чашек/сутки',
      dimensions: '31 × 52 × 68 см',
      weight: '18 кг',
      milk: 'Инновационный диспенсер молока'
    },
    features: ['Бак 8 л + водопровод', '2 порции одновременно', 'Терминал оплаты (опция)', 'Телеметрия (опция)', 'Автоочистка'],
  },
  {
    id: 5,
    name: 'PROXIMA M12 Plus',
    brand: 'Dr.Coffee',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 11900,
    description: 'Топовая двухгрупповая модель с экраном 10,1". Готовит 2 капучино одновременно. Для крупных офисов, отелей и ресторанов с высоким потоком гостей.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '2750–3300 Вт',
      tank: '2.0 л (+ водопровод)',
      cups: 'до 150 чашек/сутки',
      dimensions: '35 × 54 × 70 см',
      weight: '22 кг',
      milk: '2 капучино одновременно'
    },
    features: ['Экран 10.1"', '2 капучино одновременно', 'Телеметрия + эквайринг', '5 степеней помола', 'Энергосберегающий режим'],
    badge: 'Премиум'
  },
  {
    id: 6,
    name: 'PROXIMA F16',
    brand: 'Dr.Coffee',
    category: 'Суперавтомат',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 14900,
    description: 'Новинка линейки: экран 10,1", работа на живом молоке, до 150 чашек в сутки. Интуитивная настройка напитков, поддержка телеметрии и безналичной оплаты.',
    specs: {
      pressure: '19 бар',
      capacity: '1.2 кг зёрен',
      power: '3300 Вт',
      tank: '2.0 л (+ водопровод)',
      cups: 'до 150 чашек/сутки',
      dimensions: '35 × 54 × 72 см',
      weight: '23 кг',
      milk: 'Система живого молока'
    },
    features: ['Экран 10.1"', 'Живое молоко', 'Эквайринг + телеметрия', 'Программируемые рецепты', 'Автосервис'],
    badge: 'Новинка'
  },
  {
    id: 7,
    name: 'PROXIMA F22',
    brand: 'Dr.Coffee',
    category: 'Профессиональная',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/cdb3c7af-5432-4783-804d-68c6e66bc534.jpg',
    priceMonth: 22900,
    description: 'Флагманская профессиональная модель для отелей и ресторанов с высоким потоком. До 300 чашек в сутки, двойная группа заварки, расширенные настройки рецептов.',
    specs: {
      pressure: '19 бар',
      capacity: '2.0 кг зёрен',
      power: '3600 Вт',
      tank: '4.0 л (+ водопровод)',
      cups: 'до 300 чашек/сутки',
      dimensions: '42 × 57 × 75 см',
      weight: '32 кг',
      milk: 'Профессиональная система молока'
    },
    features: ['300 чашек/сутки', 'Двойная группа заварки', 'Расширенные рецепты', 'Удалённый контроль', 'Сервисный режим'],
    badge: 'Рестораны'
  },
  {
    id: 8,
    name: 'PROXIMA Minibar S2',
    brand: 'Dr.Coffee',
    category: 'Компактная',
    image: 'https://cdn.poehali.dev/projects/ed06d20d-a1dc-43d2-95b9-80ca6e9fcae2/files/736f4742-72ae-4589-99df-de2a324802d3.jpg',
    priceMonth: 5900,
    description: 'Компактный суперавтомат для небольших офисов и кофе-брейков. 3 системы водоснабжения, 2 алюминиевых бойлера, поддержка платёжного терминала MDB.',
    specs: {
      pressure: '19 бар',
      capacity: '1.0 кг зёрен',
      power: '2200 Вт',
      tank: '4.0 л (+ водопровод)',
      cups: 'до 100 чашек/сутки',
      dimensions: '28 × 46 × 58 см',
      weight: '14 кг',
      milk: 'Автоматический капучинатор'
    },
    features: ['Компактный корпус', '2 алюминиевых бойлера', 'MDB терминал оплаты', '3 системы водоснабжения', 'Самообслуживание'],
    badge: 'Выгодно'
  },
];
