const products = [
    {
        name: 'Ноутбук Asus ROG Strix G531GT-BQ132',
        category: 'laptop',
        price: 26999,
        description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-9300H (2.4 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce GTX 1650, 4 ГБ',
        amount: 250,
    },
    {
        name: 'Ноутбук HP Pavilion Gaming 15-bc504ur',
        category: 'laptop',
        price: 15999,
        description: 'Экран 15.6" SVA (1920x1080) Full HD, матовый / Intel Core i5-9300H (2.4 - 4.1 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050, 3 ГБ',
        amount: 150,
    },
    {
        name: 'Ноутбук Acer Aspire 5 A515-54G',
        category: 'laptop',
        price: 15000,
        description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX250',
        amount: 50,
    },
    {
        name: 'Ноутбук Lenovo IdeaPad',
        category: 'laptop',
        price: 18000,
        description: 'Экран 15.6" TN+film (1366x768) HD, матовый / AMD A6-9225 (2.6 - 3.0 ГГц) / RAM 4 ГБ / HDD 500 ГБ / AMD Radeon R4 Graphics',
        amount: 5,
    },
    {
        name: 'Ноутбук Asus ZenBook 13 ',
        category: 'laptop',
        price: 19999,
        description: 'Экран 13.3" IPS (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / SSD 512 ГБ',
        amount: 500,
    },
    {
        name: 'Мобильный телефон Samsung Galaxy S9 64GB',
        category: 'phone',
        price: 19999,
        description: 'Экран (5.8", Super AMOLED, 2960х1440)/ Samsung Exynos 9810 (4 x 2.7 ГГц + 4 x 1.7 ГГц)/ основная камера 12 Мп + фронтальная 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 400 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.0 (Oreo) / 3000 мА*ч',
        amount: 200,
    },
    {
        name: 'Мобильный телефон Samsung Galaxy S10 Plus 8/128GB',
        category: 'phone',
        price: 19999,
        description: 'Экран (6.4", Dynamic AMOLED, 3040x1440)/ Samsung Exynos 9820 (2 x 2.7 ГГц + 2 x 2.3 ГГц + 4 x 1.9 ГГц)/ тройная основная камера: 12 Мп + 12 Мп + 16 Мп / двойная фронтальная: 10 Мп + 8 Мп/ RAM 8 ГБ/ ',
        amount: 900,
    },
    {
        name: 'Мобильный телефон Meizu 16 6/64GB',
        category: 'phone',
        price: 24000,
        description: 'Экран (6.0", Super AMOLED, 2160x1080)/ Qualcomm Snapdragon 710 (2 x 2.2 ГГц + 6 x 1.7 ГГц)/ двойная основная камера: 12 Мп + 20 Мп, фронтальная камера: 20 Мп/ RAM 6 ГБ/ 64 ГБ',
        amount: 9,
    },
    {
        name: 'Мобильный телефон Huawei P30 Lite 4/64GB',
        category: 'phone',
        price: 17000,
        description: 'Экран (6.15", LTPS, 2312x1080)/ HiSilicon Kirin 710 (4 x 2.2 ГГц + 4 x 1.7 ГГц)/ тройная основная камера: 48 Мп + 8 Мп + 2 Мп, фронтальная камера: 24 Мп/ RAM 4 ГБ/ 64 ГБ',
        amount: 159,
    },
    {
        name: 'Мобильный телефон Xiaomi Mi Note 10 6/128GB',
        category: 'phone',
        price: 25000,
        description: 'Экран (6.47", AMOLED, 2340x1080)/ Qualcomm Snapdragon 730G (2.2 ГГц)/ пятерная основная камера: 108 Мп + 20 Мп + 12 Мп + 5 Мп + 2 Мп, фронтальная камера: 32 Мп/ RAM 6 ГБ/ 128 ГБ',
        amount: 870,
    },
    {
        name: 'Мобильный телефон Huawei Y5 2018',
        category: 'phone',
        price: 1999,
        description: 'Экран (5.45", IPS, 1440x720)/ MediaTek MT6739 (1.5 ГГц)/ основная камера: 8 Мп, фронтальная камера: 5 Мп/ RAM 2 ГБ/ 16',
        amount: 207,
    },
    {
        name: 'Телевизор Samsung UE43N5000AUXUA',
        category: 'tv',
        price: 7999,
        description: 'Диагональ экрана 43',
        amount: 20,
    },
    {
        name: 'Телевизор LG UK6300',
        category: 'tv',
        price: 9999,
        description: 'Диагональ экрана 43',
        amount: 9,
    },
    {
        name: 'Стиральная машина узкая LG FH0B8ND',
        category: 'washer',
        price: 9899,
        description: 'Максимальная загрузка белья 6кг, Скорость отжима 1000 об/мин А++ 13 программ',
        amount: 47,
    },
    {
        name: 'Фотоаппарат Canon EOS 77D EF-S 18-135mm IS USM Kit Black',
        category: 'camera',
        price: 24199,
        description: 'Матрица CMOS 22.3 x 14.9 мм, 24.2 Мп / Объектив EF-S 18-135mm IS USM',
        amount: 56,
    },
    {
        name: 'Фотоаппарат Nikon D5600 AF-P 18-55mm f/3.5-5.6G VR Black',
        category: 'camera',
        price: 17999,
        description: 'Матрица 23.5 x 15.6 мм, 24.2 Мп / объектив 18-55mm f/3.5-5.6G VR / Зум: 0.82х ',
        amount: 180,
    },
    {
        name: 'Фотоаппарат Sony Alpha A6100 Body Black',
        category: 'camera',
        price: 21999,
        description: 'Матрица 23.5х15.6 мм, 24.2 Мп / поддержка карт памяти Memory Stick PRO Duo, Memory Stick PRO-HG Duo',
        amount: 45,
    },
    {
        name: 'Холодильник BOSCH KGN39VI3 ',
        category: 'refrigerator',
        price: 13299,
        description: 'Система разморозки No Frost (Frost Free) 279l',
        amount: 7,
    },
    {
        name: 'Двухкамерный холодильник SNAIGE FR',
        category: 'refrigerator',
        price: 4299,
        description: 'Полезный объем холодильной камеры 166l',
        amount: 90,
    },
    {
        name: 'Стиральная машина узкая CANDY CS34',
        category: 'washer',
        price: 4444,
        description: 'Максимальная загрузка белья 5кг, Скорость отжима 1000 об/мин',
        amount: 25,
    },
    {
        name: 'Стиральная машина узкая ELECTROLUX EW6S5R06W',
        category: 'washer',
        price: 5999,
        description: 'Максимальная загрузка белья 5кг, Скорость отжима 1000 об/мин А++',
        amount: 0,
    },
];

// function getCategoryList() {
//     let cat = [];
//     products.forEach((el) => {
//         cat.includes(el.category) ? false : cat.push(el.category)
//     })
//     return cat;
// }
const cart = [];
let data;

const getRandomProduct = () => products[Math.floor(Math.random() * products.length)];
const getArrRandProd = quantity => [...new Array(quantity)].map(el => el = getRandomProduct());

const addToCart = () => {
    cart.push(data[0]);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelector('#btn').onclick = () => {
    let quantity = +document.querySelector('input').value;
    data = getArrRandProd(quantity);
    console.log(data);
}

document.querySelector('#btn1').onclick = () => addToCart();

