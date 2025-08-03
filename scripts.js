// Populate the Grid
let color = "rainbow";
let fade = false;
let numBoxesChosen = 16

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

// Make initial grid
makeGrid(16)

// Choose size of grid
const boxesBtn = document.getElementById("boxes-btn");
const input = document.getElementById("num-of-boxes");

boxesBtn.addEventListener("click", () => {
    console.log("Input value:", input.value);

    let screen = document.querySelector(".sketch-screen");
    screen.innerHTML = "";

    numBoxesChosen = parseInt(input.value);
    console.log("Parsed number:", numBoxesChosen);

    if (!isNaN(numBoxesChosen) && numBoxesChosen > 0 && numBoxesChosen <101) {
        makeGrid(numBoxesChosen);
    } else {
        alert("Please enter a valid number.");
    }
});


// Listen for color change radio button switch
let colorGroup = document.getElementsByName('color-and-black');

colorGroup.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            resetBoard();
            color = this.value;
            console.log("Color changed to:", color);
        }
    });
});



// Switch between black and color versions.
function changeBlackOrColor() {
    if (color === "black") {
        this.style.backgroundColor = "black";
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

const resetBrd = document.getElementById("reset-board");

resetBrd.addEventListener('click', () => {
    resetBoard();
})

// Clear the board to white.
function resetBoard() {
    let squares = document.querySelectorAll(".row");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
} 





