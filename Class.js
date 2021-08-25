// class SupportInstractor {
//     name = 'shabaj';
//     designation = 'Support web dev';
//     address = 'Bangladesh';
//     constructor(name) {
//         this.name = name
//     }
//     startSession() {
//         console.log('start a support session');
//     }
// }
// const aamir = new SupportInstractor('Amir khan');
// const salman = new SupportInstractor('salman')
// console.log(aamir, salman);

// class মানে হচ্ছে মনে করেন একজন টিচার এখন টিচারেরে অনেক ধরনের কাজ থকতে পারে যেমন ও কি কাজ করে ওর সব কাজ মিলিয়েয় হচ্ছে একটা ক্লাস

// ক্লাস দিয়ে আমার কাজ কি ?? ক্লাস দিয়ে আমি অনেক গুলা অবজেক্ট বানাবো

class SupportInstructor {
    name;
    designation = 'support a web dev';
    address = 'BD';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log('start a support session');
    }

}

const showrav = new SupportInstructor('showrav Das');
const jaggo = new SupportInstructor('jaggo jassu');
console.log(showrav, jaggo);


