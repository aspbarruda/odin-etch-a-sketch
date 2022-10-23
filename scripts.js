const container = document.getElementById('container');

function updateGrid(n) {
    for (let i = 0; i < n; i++) {
        let subcontainer = document.createElement('div');
        subcontainer.classList = 'line';
        for (let j = 0; j < n; j++) {
            let div = document.createElement('div');
            div.classList = 'square';
            subcontainer.appendChild(div);
        }
        container.appendChild(subcontainer);
    }
}

function cleanGrid() {
    let grid = document.querySelectorAll('.line');
    grid.forEach(element => {
        element.remove();        
    });
}


const button = document.getElementById('button');
let n = 16;

for (let i = 0; i < n; i++) {
    let subcontainer = document.createElement('div');
    subcontainer.classList = 'line';
    for (let j = 0; j < n; j++) {
        let div = document.createElement('div');
        div.classList = 'square';
        subcontainer.appendChild(div);
    }
    container.appendChild(subcontainer);
}

let squares = document.querySelectorAll('.square');

button.addEventListener('click', () => {
    do {
        n = prompt('Enter number of squares on one side: ');
    } while(isNaN(n) || n < 1 || n > 100);
    cleanGrid();
    updateGrid(n);
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.toggle('color');
        })
    });
})

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.toggle('color');
    })
});