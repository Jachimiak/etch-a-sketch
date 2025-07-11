
// Populate the Grid

let color = "black";
let fade = false;

function makeGrid(size) {
    let screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.borderBottom = "1px solid rgb(165, 165, 165)";
            row.style.borderRight = "1px solid rgb(165, 165, 165)";
            column.appendChild(row);
            if (fade === false) {
                row.addEventListener('mouseover', changeBlackOrColor);
            } else if (fade === true) {
                row.addEventListener('mouseover', fadeToDark);
            }
        }
        screen.appendChild(column);
    }
}

makeGrid(16);

// Switch between black and color versions.
function changeBlackOrColor(){
    if (color === "black") {
        this.style.background = "black";
    } else if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}

// Accept choice from web UI.
function chooseBlackOrColor(choice) {
    color = choice;
}

// Choice to fade to dark.
/* function fadeToDark() {
    if (color === "black" && fade === true) {
        let fadeUpColor = 0.05;
        this.style.backgroundColor = "rgba(0, 0, 0, " + fadeUpColor + ")";
    }
} */

// Clear the board to white.
function resetBoard() {
    let container = document.querySelector(".sketch-container");
    let squares = container.querySelector("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}





