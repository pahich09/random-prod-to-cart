const getRandomArrayElem = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}


const brands = [
    'Asus', 'Lg', 'Apple', 'HTC', 'Fly', 'Huawei',
];

const models = {
    'Galaxy': { min: 100, max: 200 },
    'Note': { min: 200, max: 300 },
    'Redme': { min: 300, max: 400 },
    'XS': { min: 400, max: 500 },
    'Blade': { min: 500, max: 600 },
    'Honor': { min: 600, max: 700 },
    'Space': { min: 800, max: 900 },
};

const colors = [
    'gray', 'silver', 'gold', 'red', 'white', 'pink',
];

const getPhoneName = (brand, model, color) => {
    return `Мобильный телефон ${brand} ${model} 4/64GB ${color}`;
}

const getRandomPrice = ({ min, max }) => min + Math.round(Math.random() * (max - min));
function Phone() {
    this.brand = getRandomArrayElem(brands);
    this.model = getRandomArrayElem(Object.keys(models));
    this.color = getRandomArrayElem(colors);
    this.nameHandler = () => {
        return `Мобильный телефон ${this.brand} ${this.model} 4/64GB ${this.color}`;
    }
    this.name = this.nameHandler();
    this.price = getRandomPrice(models[this.model]);
}

const getArrOfRandomPhones = count => [...new Array(count)].map(() => new Phone());

const count = 15;
const shop = getArrOfRandomPhones(count);

localStorage.setItem('cart', []);

const addToCart = id => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    const key = JSON.stringify(shop[id]);
    cart[key] = cart[key] ? cart[key] + 1 : 1;
    console.table(cart);
    localStorage.setItem('cart', JSON.stringify(cart))
}
const getTotalCart = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let total = 0;

    for (key in cart) {
        const count = cart[key];
        const price = JSON.parse(key).price;
        total += count * price;
    }
    return total;
}


