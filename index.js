const container = document.querySelector(".container");
/*for(let i = 0; i < 16; i++) {
    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    for(let j = 0; j < 16; j++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        newSquare.textContent = "div";
        newColumn.append(newSquare);
    }
    container.appendChild(newColumn);
}*/

function createGrid(numberOfDivs) {
    if(typeof numberOfDivs !== "number") {
        alert("Please enter a number between 1 and 100.");
    }
    if (numberOfDivs > 100 || numberOfDivs < 1) {
        numberOfDivs = 0;
        
    } 
    container.replaceChildren();
    for(let i = 0; i < numberOfDivs; i++) {
        let newColumn = document.createElement("div");
        newColumn.classList.add("column");

        for (let j = 0; j < numberOfDivs; j++) {
            let newSquare = document.createElement("div");
            newSquare.classList.add("grid-square");
            newSquare.addEventListener("mouseenter", function() {
                if(newSquare.classList.contains("colored")) {
                    addBlack(newSquare);
                    return;
                }
                const colors = randomizeColors();
                newSquare.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
                newSquare.classList.add("colored");
            })
            newColumn.append(newSquare);
        }
        container.appendChild(newColumn);
    }
    alert(`Number of divs set to ${numberOfDivs}, if result is unwanted please enter a number between 1-100.`);
}

function randomizeColors() {
    const r = Math.floor(Math.random() * 257) - 1;
    const g = Math.floor(Math.random() * 257) - 1;
    const b = Math.floor(Math.random() * 257) - 1;
    return [r, g, b];
}

function addBlack(square) {
    const color = square.style.backgroundColor;
    let rgb = color.substring(color.indexOf("(") + 1, color.length - 1).split(", ");
    if(rgb[0] == 0 && rgb[1] == 0 && rgb[2] == 0){
        const newColors = randomizeColors();
        square.style.backgroundColor = `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
        return;
    }
    let newRed = rgb[0] - 25;
    let newGreen = rgb[1] - 25;
    let newBlue = rgb[2] - 25;
    square.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;

}

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", function() {
    createGrid(+prompt("Please enter a number between 1-100."), 1)
})

