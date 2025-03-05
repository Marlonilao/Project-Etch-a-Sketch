const drawingBoard = document.querySelector('.drawingBoard');

for (let i=0; i < 16; i++) {
    const div = document.createElement('div');
    div.className = 'out';
    drawingBoard.appendChild(div);
    for (let i=0; i < 16; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        div.appendChild(box);
    };
};


document.addEventListener('DOMContentLoaded',(e) => {
    let isDrawing = false

    document.addEventListener('mousedown' , (e) => {
        if (e.button === 0) {
            isDrawing = true;
        }
    });

    document.addEventListener('mouseup', (e) => {
        isDrawing = false;
    });

    const box = document.querySelectorAll('.box');
    box.forEach(box => box.addEventListener('mousemove' , (e) => {
        if (isDrawing == true) {
            e.target.style.backgroundColor = 'gray';
        }
    }));

});


const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    const numberOfSquares = prompt('Enter a number for squares per side for the new grid: ');
    if (numberOfSquares > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
    drawingBoard.innerHTML = '<div></div>'
    for (let i=0; i < numberOfSquares; i++) {
        const div = document.createElement('div');
        div.className = 'out';
        drawingBoard.appendChild(div);
        for (let i=0; i < numberOfSquares; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            div.appendChild(box);
        }
    }
    let isDrawing = false;
    document.addEventListener('mousedown' , (e) => {
        if (e.button === 0) {
            isDrawing = true;
        }
    });

    document.addEventListener('mouseup', (e) => {
        isDrawing = false;
    });

    const box = document.querySelectorAll('.box');
    box.forEach(box => box.addEventListener('mousemove' , (e) => {
        if (isDrawing == true) {
            e.target.style.backgroundColor = 'gray';
        }
    }))};
});