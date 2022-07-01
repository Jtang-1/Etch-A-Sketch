const slider = document.getElementById('myRange');
const padSizeDisplay = document.getElementById('padSize');
const gridContainer = document.querySelector('.gridContainer');
const clearButton = document.querySelector('button#clear');

slider.oninput = (e) =>  padSizeDisplay.textContent = `${slider.value} X ${slider.value}`;
slider.onchange = ()=> updateGrid();
clearButton.onclick = () => updateGrid();

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGridItem(numRowCol){
    gridSize = 100 / numRowCol;
    gridContainer.style.gridTemplateColumns = `repeat(${numRowCol},${gridSize}%)`;
    gridContainer.style.gridTemplateRows = `repeat(${numRowCol},${gridSize}%)`;

    for (i = 0; i < numRowCol**2; i++){
        const newGridItem = document.createElement('div');
        newGridItem.classList.add('gridItem');
        gridContainer.appendChild(newGridItem);
        newGridItem.addEventListener('mouseover', changeColor);
        newGridItem.addEventListener('mousedown', changeColor);
    }
}

function changeColor(e){
    if (e.type ==='mouseover' && !mouseDown) return
    this.classList.add('colorIn');
    console.log(this)
}

function updateGrid(){
    let slider = document.getElementById('myRange');
    numRowCol = slider.value;
    deleteGrid();
    createGridItem(numRowCol);
    console.log("createed");
}

function deleteGrid(){
    gridContainer.innerHTML=''
}

window.onload = updateGrid;
