const container = document.querySelector(".container");
for(let i = 0; i < 16; i++) {
    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    for(let j = 0; j < 16; j++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        newColumn.append(newSquare);
    }
    container.appendChild(newColumn);
}