const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    let subcontainer = document.createElement('div');
    subcontainer.classList = 'line';
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.classList = 'square';
        subcontainer.appendChild(div);
    }
    container.appendChild(subcontainer);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.toggle('color');
    })
});