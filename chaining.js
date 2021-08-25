//Destructuring

// আরে এর ক্ষেত্রে মনটা হলো পজিশন অর্থাৎ এরা যদি দুইটা মান থাকে আর দুইটা ভেরিয়েবল তাকে তাহলে প্রথমটা প্রথমটা কি নিবে দ্বিতীয় টা  দ্বিতীয় টাকা নিবে 


// কোশ্চেন মার্কের কাজ হল যদি কোন array  ভিতর তার মান খুঁজে পাওয়া  না যায় তাহলে যে  এরর টা আছে আসে তা ভাঙ্গি চুরি আসে সেইটা সুন্দরভাবে দেখানোর জন্য কোশ্চেন মার্ক ব্যবহার করা হয় আর এইটা কে অপশনাল chainning বলে

const [p, q] = [45, 37, 91, 86];
console.log(p, q);

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, a } = myObject
console.log(myObject?.p?.q);

const { sky, color } = { sky: 'blue', soil: 'matti', color: 'red', mony: 500 }


const company = {
    name: 'Gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' },
}
console.log(company.web.employee);