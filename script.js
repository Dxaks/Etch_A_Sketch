// create a sketch area with and height variable
const gridSize = 600;

// selecting the div and assigning the specified w/h in px variable to sketch area.
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`;
sketchArea.style.height = `${gridSize}px`;

// selecting and create a event to the button so that it fires the whole createGride func. once clicked.
const btn = document.querySelector("#btn");
btn.addEventListener("click", createGridCell);

// create a color func.
function changeColor() {
    this.style.backgroundColor = "black";
}

const multiColorBtn = document.querySelector("#multi-color");

function multiColor() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(`Clicked cell, color: ${randomColor}`);
    this.style.backgroundColor = randomColor;
}

function createGridCell() {

    let input = document.querySelector("#input").value;
    const userInput = parseInt(input);

    let rowsAndCols = (userInput * userInput);

    sketchArea.innerHTML = "";

    for (let i = 0; i < rowsAndCols; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(gridSize / userInput) - 2}px`;
        gridCell.style.height = `${(gridSize / userInput) - 2}px`;

        gridCell.classList.add("cell");
        sketchArea.appendChild(gridCell)

    // callback for color func.
        gridCell.addEventListener("mouseover", changeColor);
        gridCell.addEventListener("mouseover", multiColor);

    }

}
