// Global Variables
let color = "black";
let fade = false;
let numBoxesChosen = 16
let fadeUpColor = 0.1;

// Populate the Grid
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
                // row.addEventListener('mouseover', changeBlackOrColor);
                row.setAttribute('data-opacity', '0');
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


// Listen for opacity fade radio button switch
let opacityFade = document.getElementsByName('opacity');

opacityFade.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            resetBoard();
            fade = this.value === "true";
            console.log("Color changed to:", fade);

            let screen = document.querySelector(".sketch-screen");
            screen.innerHTML = "";  // Clear old grid
            makeGrid(numBoxesChosen);
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

// Choice to fade to dark.
function fadeToDark() {
    if (color === "black" && fade === true) {
        let currentOpacity = parseFloat(this.getAttribute('data-opacity')) || 0;
        if (currentOpacity < 1) {
            currentOpacity += 0.1;
            if (currentOpacity > 1) currentOpacity = 1;
            this.setAttribute('data-opacity', currentOpacity);
            this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
        }
    } else if (color === "rainbow" && fade === true) {
        let currentOpacity = parseFloat(this.getAttribute('data-opacity')) || 0;
        if (currentOpacity < 1) {
            currentOpacity += 0.1;
            if (currentOpacity > 1) currentOpacity = 1;
            this.setAttribute('data-opacity', currentOpacity);
            this.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${currentOpacity})`;
        }
    }
}

const resetBrd = document.getElementById("reset-board");

resetBrd.addEventListener('click', () => {
    resetBoard();
})

// Clear the board to white.
function resetBoard() {
    let squares = document.querySelectorAll(".row");
    squares.forEach((div) => {
        div.style.backgroundColor = "white";
        div.setAttribute('data-opacity', '0');
    })
    fadeUpColor = 0.1;
} 




