// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

// const myName = 'jaggo jaso';
// myName = 'showrav';
// console.log(myName);

// let myName = 'jaggo jaso';
// myName = 'showrav';
// console.log(myName);

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

// const name = 'showrav';
// const secondName = 'das'
// const result = name + ' ' + secondName;
// console.log(result);

const name = 'showrav';
const secondName = 'das'

const text = `welcome ${name} ${secondName}`
// console.log(text);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
const n1 = (num2) => num2 / 5;

const divide = n1(25);
// console.log(divide);


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

const apple = (apple, orange) => {
    const sum = (apple + 2 * orange + 2);
    return sum;
}

// const total = apple(2, 2);
// console.log(total);

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const animals = (tiger, lion, Monky) => {
    const total = (tiger * lion * Monky);
    return total;
}

const grandTotal = animals(3, 4, 5);
// console.log(grandTotal);


// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const Animalcount = [20, 12, 58, 65, 55, 45, 35, 98, 78, 10, 72];
const output = [];

const doubleCount = Animalcount.map(double => double * 5)
output.push(doubleCount)
// console.log(output);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const oldAge = [20, 15, 45, 98, 78, 35, 26, 48, 55, 60, 62, 59];
const mainusAge = oldAge.filter(age => age % 2 != 0)
// console.log(mainusAge);


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const products = [
    { name: 'water bottle', price: 25, color: 'white' },
    { name: 'mobile phone', price: 8000, color: 'golden' },
    { name: 'pen', price: 5000, color: 'red' },
    { name: 'usb hub', price: 510, color: 'silver' },
]

const allProducts = products.find(p => p.price == 5000);
// console.log(allProducts);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 


// filter:-------
// এটির কাজ হচ্ছে একটি কলব্যাক ফাংশন নিবে এবং শর্তানুযায়ী একটি Array এর অপ্রয়োজনীয় ইলিমেন্টকে বাদ দিয়ে নতুন একটি Array রিটার্ন করবে।

// map-----------
// যখন আপনি একটি Array এর সব ইলিমেন্টকে একটি নতুন Array তে রুপান্তর করতে চান, তখন আপনাকে map মেথড ব্যবহার করতে হবে। map মেথডও একটি কলব্যাক ফাংশন নিয়ে কাজ করে।


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const fish = { id: 58, name: 'king Hilsha', price: 2500, phone: '01309722830', address: 'Chandpur', dress: 'silver' };
// const dress = fish.dress;
// const address = fish.address;
// const phone = fish.phone;
const { dress, address, phone } = fish;

console.log(address);
console.log(dress);
console.log(phone);


// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let three = arr[3]
// console.log(three);


// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।

function ball(ball1, ball2, ball3 = 10) {
    const totalBall = ball1 + ball2 + ball3;
    return totalBall;
}
const re = ball(6, 5);
console.log(re);

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট 






