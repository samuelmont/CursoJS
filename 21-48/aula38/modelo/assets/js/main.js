const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
    //  ^     ^         ^        
    //  |     |         |-  aqui eu cito a cor do que eu quero colocar
    //  |     |-  essa tag eu escolho de qual lugar que vai mudar a cor
    //  |-  essa tag style depois do p é quando eu acesso o stilo (CSS) via script
    let samuel = 18;
}
console.log(samuel);