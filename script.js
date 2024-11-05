 // Select the grid container
const container = document.querySelector('.container');

// Function to create a 16x16 grid
function createGrid(rows,columns){
    const totalCells = rows * columns;
    for(let i = 1; i <= totalCells; i++){
        // Create a new div element for each cell
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // Append the cell to the grid container
        container.appendChild(cell);
    }
}

// createGrid(16, 16);