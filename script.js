// Set up variables to retrieve HTML and CSS elements 
const container = document.querySelector('.grid-container');

const reset = document.getElementById('reset');
const defaultColor = document.getElementById('default');
const randomColor = document.getElementById('color');

const resolutionInput = document.querySelector('#resolutionInput');
const resolutionLabel = document.querySelector('.resolutionLabel');
let gridSelection = 8;
let type;

resolutionInput.addEventListener('input',changeGrid);

function changeGrid(e){

    gridSelection = e.target.value;
    resolutionLabel.textContent = `${gridSelection}x${gridSelection}`;
}

// Creates grid div boxes on load
createGrid(gridSelection);

// Function to create a grid
function createGrid(size){
    let totalCells = size * size;
    for(let i = 0; i < totalCells; i++){
        // Create a new div element for each cell
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('box');
        // Append the cell to the grid container

        gridDiv.addEventListener('mouseover',changeColor);
        container.appendChild(gridDiv);
    }

    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
}

// Added event listener for our reset button
reset.addEventListener('click',resetGrid);

function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(gridSelection);
}

function changeColor(e){
    if(type === "randomColorMode"){
        const randomR = Math.floor(Math.random()*256);
        const randomG = Math.floor(Math.random()*256);
        const randomB = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
    else if(type === "defaultColorMode"){
        e.target.style.backgroundColor = '#ffffff';
    }
}

defaultColor.addEventListener('click',function(){
    type = "defaultColorMode";
    this.classList.add('active');
    randomColor.classList.remove('active');
});

randomColor.addEventListener('click',function(){
    type = "randomColorMode";
    this.classList.add('active');
    defaultColor.classList.remove('active');
});