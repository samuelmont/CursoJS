function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);                                     // while sempre checa antes de excutar
    console.log(rand);
}

do {
    rand = random(min, max);                                     // do while sempre executa antes de checar 
    console.log(rand);
} while (rand !== 10);

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// console.log('Segue a vida ...')