const numbers = [20, 56, 41, 11, 10, 3, 4, 58, 69, 45, 26, 28, 92];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(bigNumbers, smallNumbers);

const products = [
    { name: 'water bottle', price: 25, color: 'white' },
    { name: 'mobile phone', price: 8000, color: 'golden' },
    { name: 'pen', price: 5, color: 'red' },
    { name: 'calculetor', price: 480, color: 'nevy' },
    { name: 'usb hub', price: 510, color: 'silver' },
]

// ফাইন্ড দিবে হচ্ছে এলিমেন্টরে আর ফিল্টার দিবে হচ্ছে Array ফিল্টার অনেকগুলা কে পেলে অনেক গুলা দিবে ফাইন্ড প্রথমে যেইটা পাবে ওইটাকে নিবে।

const expensive = products.filter(product => product.price > 500);
// console.log(expensive);
// const colors = products.filter(product => product.color == 'silver');
// console.log(colors);

const color = products.find(product => product.color == 'silver');
console.log(color);

