const gridSize = 600;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`;
sketchArea.style.height = `${gridSize}px`;

const btn = document.querySelector("button");
btn.addEventListener("click", createGridCell);

function changeColor() {
    this.style.backgroundColor = "black";
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

        gridCell.addEventListener("mouseover", changeColor);
    }

}
