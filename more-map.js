const friends = ['tom', 'jerry', 'doremon', 'nobita', 'sizuka', 'motu', 'patlu', 'gattu', 'battu', 'oggy'];

const friendLen = friends.map(friend => friend.length);
console.log(friendLen);

const products = [
    { name: 'water bottle', price: 25, color: 'white' },
    { name: 'mobile phone', price: 8000, color: 'golden' },
    { name: 'pen', price: 5, color: 'red' },
    { name: 'calculetor', price: 480, color: 'nevy' },
    { name: 'usb hub', price: 510, color: 'silver' },
]

// for (const product of products) {
//     console.log(product);
// }

// আমার যদি array অব অবজেক্ট থাকে সেখান থেকে ম্যাপ করে করে কোন একটা প্রোপার্টি মান বের করার জন্য খুব সহজে এইভাবে করা যায়

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productPrice);
console.log(productNames);

products.forEach(product => console.log(product));

// products.map(product => console.log(product));