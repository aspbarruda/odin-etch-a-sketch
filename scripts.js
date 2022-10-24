const container = document.getElementById('container');
const sizeButton = document.getElementById('size-button');
const rgbButton = document.getElementById('rgb-button');
const clearButton = document.getElementById('clear-all')
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'classic'
let n = DEFAULT_SIZE;
let squares = document.querySelectorAll('.square');
let mode;

function updateGrid(n=DEFAULT_SIZE) {
    for (let i = 0; i < n; i++) {
        let subcontainer = document.createElement('div');
        subcontainer.classList = 'line';
        for (let j = 0; j < n; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            subcontainer.appendChild(div);
        }
        container.appendChild(subcontainer);
    }
    selectMode(mode);
}

function selectMode (mode = DEFAULT_MODE) {
    if (mode === 'classic') classicGame();
    else if (mode === 'rgb') rgbGame();
}

function cleanGrid(n) {
    let grid = document.querySelectorAll('.line');
    grid.forEach(element => {
        element.remove();        
    });
    updateGrid(n);
}

function classicGame() {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.removeProperty('background-color');
            square.classList.add('color');
        })
    });
}

function rgbGame() {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            let r = Math.floor((Math.random() * 256));
            let g = Math.floor((Math.random() * 256));
            let b = Math.floor((Math.random() * 256));
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

sizeButton.addEventListener('click', () => {
    do {
        n = prompt('Enter number of squares on one side: ');
    } while(isNaN(n) || n < 1 || n > 100);
    cleanGrid(n);
})

rgbButton.addEventListener('click', () => {
    if (mode === 'rgb') {
        mode = DEFAULT_MODE;
        rgbButton.classList.remove('selected');
    }
    else {
        mode = 'rgb';
        rgbButton.classList.add('selected');
    }
    selectMode(mode);
})

clearButton.addEventListener('click', () => {
    cleanGrid();
})

window.onload = () => {
    updateGrid();
}