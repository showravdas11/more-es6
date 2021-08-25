
// Destructuring Object to extract values to variables

const fish = { id: 58, name: 'king Hilsha', price: 2500, phone: '01309722830', address: 'Chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const address = fish.address;

// const { phone, price, dress, address } = fish;

// console.log(phone, price);
// console.log(phone, price);
// console.log(phone, address);
// console.log(phone, price);
// console.log(phone, address);
// console.log(phone, address);
// console.log(phone);
// console.log(phone);


const company = {
    name: 'Gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' },
}

const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);
