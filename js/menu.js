/* Baoli Lounge Bar — меню заведения.
   Цены в тенге (₸). Категории совпадают с вкладками на сайте. */

const BAOLI_CATEGORIES = [
  { id: 'all',       title: 'Всё меню' },
  { id: 'starters',  title: 'Закуски' },
  { id: 'salads',    title: 'Салаты' },
  { id: 'sushi',     title: 'Суши и роллы' },
  { id: 'soups',     title: 'Супы' },
  { id: 'hot',       title: 'Горячее' },
  { id: 'desserts',  title: 'Десерты' },
  { id: 'cocktails', title: 'Коктейли' },
  { id: 'wine',      title: 'Вино и шампанское' },
  { id: 'strong',    title: 'Крепкий алкоголь' },
  { id: 'soft',      title: 'Безалкогольные' },
  { id: 'hookah',    title: 'Кальяны' },
  { id: 'lunch',     title: 'Ланчи и сеты' }
];

const BAOLI_MENU = [
  /* ---------- ЗАКУСКИ ---------- */
  { id: 'st1', cat: 'starters', name: 'Кесадилья с курицей', desc: 'Тортилья, курица гриль, сыр чеддер, соус сальса, гуакамоле', weight: '280 г', price: 3600, tag: 'hit' },
  { id: 'st2', cat: 'starters', name: 'Крылья BBQ', desc: 'Куриные крылья в соусе барбекю, кунжут, маринованный лук', weight: '350 г', price: 3800 },
  { id: 'st3', cat: 'starters', name: 'Карпаччо из говядины', desc: 'Тонко нарезанная вырезка, руккола, пармезан, трюфельное масло', weight: '160 г', price: 4900 },
  { id: 'st4', cat: 'starters', name: 'Креветки темпура', desc: 'Тигровые креветки в хрустящем кляре, соус спайси-майо', weight: '180 г', price: 5400 },
  { id: 'st5', cat: 'starters', name: 'Хумус с лепёшкой', desc: 'Нут, тахини, оливковое масло, тёплая тандырная лепёшка', weight: '220 г', price: 2900, tag: 'veg' },
  { id: 'st6', cat: 'starters', name: 'Сырная тарелка', desc: 'Пять видов сыра, мёд, орехи, виноград, крекеры', weight: '260 г', price: 5900 },
  { id: 'st7', cat: 'starters', name: 'Бао с томлёной свининой', desc: 'Паровая булочка бао, свинина по-азиатски, маринованный огурец', weight: '2 шт · 180 г', price: 3200, tag: 'new' },
  { id: 'st8', cat: 'starters', name: 'Картофель по-деревенски', desc: 'Дольки с розмарином, чесночный соус', weight: '250 г', price: 2200, tag: 'veg' },

  /* ---------- САЛАТЫ ---------- */
  { id: 'sl1', cat: 'salads', name: 'Цезарь с креветками', desc: 'Романо, тигровые креветки, пармезан, гренки, соус цезарь', weight: '240 г', price: 4200 },
  { id: 'sl2', cat: 'salads', name: 'Салат с томлёной уткой', desc: 'Микс салатов, утка конфи, апельсин, кунжутная заправка', weight: '220 г', price: 5200, tag: 'hit' },
  { id: 'sl3', cat: 'salads', name: 'Поке с лососем', desc: 'Рис, лосось, эдамаме, авокадо, огурец, соус понзу', weight: '280 г', price: 4600 },
  { id: 'sl4', cat: 'salads', name: 'Греческий', desc: 'Фета, томаты, огурец, оливки, красный лук, орегано', weight: '230 г', price: 3200, tag: 'veg' },
  { id: 'sl5', cat: 'salads', name: 'Тёплый салат с говядиной', desc: 'Стейк, болгарский перец, шпинат, соус терияки', weight: '250 г', price: 4900 },

  /* ---------- СУШИ И РОЛЛЫ ---------- */
  { id: 'su1', cat: 'sushi', name: 'Филадельфия', desc: 'Лосось, сливочный сыр, огурец, рис, нори', weight: '8 шт · 280 г', price: 4900, tag: 'hit' },
  { id: 'su2', cat: 'sushi', name: 'Калифорния с крабом', desc: 'Краб, авокадо, огурец, икра тобико', weight: '8 шт · 260 г', price: 3900 },
  { id: 'su3', cat: 'sushi', name: 'Дракон', desc: 'Угорь, креветка темпура, авокадо, соус унаги', weight: '8 шт · 300 г', price: 5200 },
  { id: 'su4', cat: 'sushi', name: 'Запечённый спайси-ролл', desc: 'Лосось, сыр, спайси-соус, сырная шапка', weight: '8 шт · 290 г', price: 4400, tag: 'new' },
  { id: 'su5', cat: 'sushi', name: 'Нигири с лососем', desc: 'Ломтик лосося на рисовой подушке', weight: '2 шт · 70 г', price: 1900 },
  { id: 'su6', cat: 'sushi', name: 'Сет Baoli', desc: 'Филадельфия, Калифорния, Дракон — на большую компанию', weight: '24 шт · 850 г', price: 18900, tag: 'hit' },
  { id: 'su7', cat: 'sushi', name: 'Сет «Токио»', desc: 'Ассорти нигири и маки с лососем и тунцом', weight: '16 шт · 520 г', price: 12900 },

  /* ---------- СУПЫ ---------- */
  { id: 'so1', cat: 'soups', name: 'Том-ям с креветками', desc: 'Кокосовое молоко, лемонграсс, креветки, шампиньоны, чили', weight: '350 мл', price: 4400, tag: 'hit' },
  { id: 'so2', cat: 'soups', name: 'Рамен с томлёной свининой', desc: 'Свиной бульон, чашу, яйцо аджитама, нори, зелёный лук', weight: '400 мл', price: 3900 },
  { id: 'so3', cat: 'soups', name: 'Крем-суп из грибов', desc: 'Шампиньоны, сливки, трюфельное масло, гренки', weight: '300 мл', price: 2900, tag: 'veg' },
  { id: 'so4', cat: 'soups', name: 'Куриный бульон с лапшой', desc: 'Домашний бульон, лапша, курица, зелень', weight: '350 мл', price: 2400 },

  /* ---------- ГОРЯЧЕЕ ---------- */
  { id: 'ho1', cat: 'hot', name: 'Стейк Рибай', desc: '300 г мраморной говядины на гриле, соус чимичурри, овощи', weight: '300 г', price: 12900, tag: 'hit' },
  { id: 'ho2', cat: 'hot', name: 'Филе-миньон', desc: 'Нежная вырезка, перечный соус, картофельное пюре', weight: '220 г', price: 9900 },
  { id: 'ho3', cat: 'hot', name: 'Лосось на гриле', desc: 'Стейк лосося, спаржа, соус голландез', weight: '240 г', price: 7900 },
  { id: 'ho4', cat: 'hot', name: 'Пицца Маргарита', desc: 'Томатный соус, моцарелла, базилик', weight: '30 см', price: 3600, tag: 'veg' },
  { id: 'ho5', cat: 'hot', name: 'Пицца с прошутто', desc: 'Моцарелла, прошутто, руккола, пармезан', weight: '30 см', price: 4900 },
  { id: 'ho6', cat: 'hot', name: 'Бургер Baoli', desc: 'Мраморная говядина, чеддер, бекон, соус барбекю, картофель', weight: '380 г', price: 4200 },
  { id: 'ho7', cat: 'hot', name: 'Паста карбонара', desc: 'Спагетти, гуанчале, желток, пармезан', weight: '280 г', price: 3900 },
  { id: 'ho8', cat: 'hot', name: 'Курица терияки', desc: 'Бедро курицы, соус терияки, рис, кунжут', weight: '300 г', price: 4200 },
  { id: 'ho9', cat: 'hot', name: 'Овощи на гриле', desc: 'Кабачок, перец, баклажан, томаты, оливковое масло', weight: '250 г', price: 2600, tag: 'veg' },
  { id: 'ho10', cat: 'hot', name: 'Колбаски на гриле', desc: 'Домашние колбаски, горчица, маринованные овощи', weight: '260 г', price: 4400 },

  /* ---------- ДЕСЕРТЫ ---------- */
  { id: 'de1', cat: 'desserts', name: 'Чизкейк Нью-Йорк', desc: 'Классический, с ягодным соусом', weight: '140 г', price: 2400 },
  { id: 'de2', cat: 'desserts', name: 'Шоколадный фондан', desc: 'Тёплый фондан, шарик ванильного мороженого', weight: '160 г', price: 2600, tag: 'hit' },
  { id: 'de3', cat: 'desserts', name: 'Моти', desc: 'Рисовые пирожные с муссом манго, матча и клубника', weight: '3 шт · 120 г', price: 2200, tag: 'new' },
  { id: 'de4', cat: 'desserts', name: 'Фруктовая тарелка', desc: 'Сезонные фрукты и ягоды', weight: '350 г', price: 3900, tag: 'veg' },

  /* ---------- КОКТЕЙЛИ ---------- */
  { id: 'ck1', cat: 'cocktails', name: 'Baoli Sour', desc: 'Бурбон, лимон, медовый сироп, пенка из белка, золотая пыль', weight: '120 мл', price: 3800, tag: 'hit' },
  { id: 'ck2', cat: 'cocktails', name: 'Golden Dragon', desc: 'Джин, личи, лемонграсс, имбирь, тоник', weight: '140 мл', price: 4200, tag: 'hit' },
  { id: 'ck3', cat: 'cocktails', name: 'Lychee Martini', desc: 'Водка, личи, вермут, цветок орхидеи', weight: '100 мл', price: 3900 },
  { id: 'ck4', cat: 'cocktails', name: 'Passion Spritz', desc: 'Просекко, маракуйя, апероль, содовая', weight: '180 мл', price: 3600 },
  { id: 'ck5', cat: 'cocktails', name: 'Smoky Old Fashioned', desc: 'Бурбон, дым сигарной щепы, биттер, апельсин', weight: '100 мл', price: 4500 },
  { id: 'ck6', cat: 'cocktails', name: 'Matcha Colada', desc: 'Ром, матча, кокос, ананас', weight: '160 мл', price: 3800, tag: 'new' },
  { id: 'ck7', cat: 'cocktails', name: 'Aperol Spritz', desc: 'Aperol, просекко, содовая, апельсин', weight: '180 мл', price: 3200 },
  { id: 'ck8', cat: 'cocktails', name: 'Negroni', desc: 'Джин, кампари, красный вермут', weight: '100 мл', price: 3600 },
  { id: 'ck9', cat: 'cocktails', name: 'Espresso Martini', desc: 'Водка, кофейный ликёр, эспрессо', weight: '120 мл', price: 3800 },
  { id: 'ck10', cat: 'cocktails', name: 'Mojito', desc: 'Белый ром, мята, лайм, содовая', weight: '200 мл', price: 3000 },
  { id: 'ck11', cat: 'cocktails', name: 'Long Island', desc: 'Пять видов алкоголя, кола, лимон', weight: '220 мл', price: 4200 },

  /* ---------- ВИНО И ШАМПАНСКОЕ ---------- */
  { id: 'wi1', cat: 'wine', name: 'Просекко, бокал', desc: 'Италия, сухое, игристое', weight: '150 мл', price: 2500 },
  { id: 'wi2', cat: 'wine', name: 'Просекко, бутылка', desc: 'Италия, сухое, игристое', weight: '750 мл', price: 18000 },
  { id: 'wi3', cat: 'wine', name: 'Moët & Chandon', desc: 'Франция, брют', weight: '750 мл', price: 89000, tag: 'hit' },
  { id: 'wi4', cat: 'wine', name: 'Совиньон Блан, бокал', desc: 'Новая Зеландия, свежее белое', weight: '150 мл', price: 3200 },
  { id: 'wi5', cat: 'wine', name: 'Кьянти, бокал', desc: 'Италия, красное, вишня и специи', weight: '150 мл', price: 3400 },
  { id: 'wi6', cat: 'wine', name: 'Кьянти, бутылка', desc: 'Италия, красное сухое', weight: '750 мл', price: 22000 },

  /* ---------- КРЕПКИЙ АЛКОГОЛЬ ---------- */
  { id: 'sg1', cat: 'strong', name: 'Jameson', desc: 'Ирландский виски', weight: '50 мл', price: 3000 },
  { id: 'sg2', cat: 'strong', name: 'Macallan 12', desc: 'Шотландский односолодовый виски', weight: '50 мл', price: 7900 },
  { id: 'sg3', cat: 'strong', name: 'Hennessy VS', desc: 'Коньяк', weight: '50 мл', price: 5500 },
  { id: 'sg4', cat: 'strong', name: 'Beluga Noble', desc: 'Водка', weight: '50 мл', price: 2600 },
  { id: 'sg5', cat: 'strong', name: 'Hendrick’s Gin', desc: 'Джин, огурец и розовые лепестки', weight: '50 мл', price: 4200 },
  { id: 'sg6', cat: 'strong', name: 'Patrón Silver', desc: 'Текила', weight: '50 мл', price: 6200 },
  { id: 'sg7', cat: 'strong', name: 'Bacardi Carta Blanca', desc: 'Белый ром', weight: '50 мл', price: 2800 },
  { id: 'sg8', cat: 'strong', name: 'Jägermeister', desc: 'Травяной ликёр', weight: '50 мл', price: 2600 },

  /* ---------- БЕЗАЛКОГОЛЬНЫЕ ---------- */
  { id: 'sf1', cat: 'soft', name: 'Домашний лимонад', desc: 'Манго-маракуйя, базилик-лайм или ягоды', weight: '400 мл', price: 1800, tag: 'veg' },
  { id: 'sf2', cat: 'soft', name: 'Virgin Mojito', desc: 'Мята, лайм, содовая, тростниковый сахар', weight: '350 мл', price: 1900, tag: 'veg' },
  { id: 'sf3', cat: 'soft', name: 'Эспрессо', desc: 'Свежеобжаренные зёрна', weight: '40 мл', price: 1200, tag: 'veg' },
  { id: 'sf4', cat: 'soft', name: 'Капучино', desc: 'Кофе с молочной пенкой', weight: '250 мл', price: 1600, tag: 'veg' },
  { id: 'sf5', cat: 'soft', name: 'Чайник чая', desc: 'Облепиха, тархун, чабрец или пуэр', weight: '700 мл', price: 2600, tag: 'veg' },
  { id: 'sf6', cat: 'soft', name: 'Свежевыжатый сок', desc: 'Апельсин, грейпфрут, яблоко', weight: '250 мл', price: 2200, tag: 'veg' },

  /* ---------- КАЛЬЯНЫ ---------- */
  { id: 'hk1', cat: 'hookah', name: 'Кальян «Классика»', desc: 'Табак на выбор: дыня, виноград, мята, ваниль', weight: '1 шт', price: 4500 },
  { id: 'hk2', cat: 'hookah', name: 'Кальян «Авторский»', desc: 'Миксы кальянщика: Baoli Gold, Восточный сад, Ягодный пунш', weight: '1 шт', price: 6500, tag: 'hit' },
  { id: 'hk3', cat: 'hookah', name: 'Кальян на фрукте', desc: 'Грейпфрут, ананас или гранат', weight: '1 шт', price: 9900 },
  { id: 'hk4', cat: 'hookah', name: 'Замена табака', desc: 'Смена вкуса в кальяне', weight: '1 шт', price: 2000 },

  /* ---------- ЛАНЧИ И СЕТЫ ---------- */
  { id: 'lu1', cat: 'lunch', name: 'Бизнес-ланч', desc: 'Салат, суп, горячее и напиток на выбор', weight: '12:00–17:00', price: 3500, tag: 'hit' },
  { id: 'lu2', cat: 'lunch', name: 'Завтрак Baoli', desc: 'Яйца бенедикт, круассан, сок, кофе', weight: '08:00–14:00', price: 4200 },
  { id: 'lu3', cat: 'lunch', name: 'Сет на двоих', desc: 'Закуски, два ролла, том-ям и два коктейля', weight: '2 персоны', price: 15900 },
  { id: 'lu4', cat: 'lunch', name: 'Ночной сет', desc: 'Бургер, картофель, пицца и лимонад', weight: '2 персоны', price: 9900, tag: 'new' }
];
