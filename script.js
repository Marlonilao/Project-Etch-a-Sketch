const container = document.querySelector('.container');

for (let i=0; i < 16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    for (let i=0; i < 16; i++) {
        const divv = document.createElement('div');
        divv.className = 'box';
        div.appendChild(divv);
    }
}

const box = document.querySelectorAll('.box');
box.forEach(box => box.addEventListener('mousemove' , (e) => {
    e.target.style.backgroundColor = 'pink';
}))
