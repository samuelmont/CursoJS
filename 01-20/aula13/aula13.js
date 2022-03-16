
let umaString = "Um texto";

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('x' , 4)); // procura primeira letra que to pedir
console.log(umaString.lastIndexOf('x')); // procura a ultima
console.log(umaString.search('x'));
console.log(umaString.replace('Um', 'Eu')); 
console.log(umaString.slice( -5 ));
console.log(umaString.split(' ' , 2 ));
console.log(umaString.toUpperCase);
console.log(umaString.toLowerCase);
console.log(umaString.length); // ele conta as letras
