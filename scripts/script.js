const grid = document.querySelector("#grid");

gridMouseDown = 0;

grid.addEventListener("mousedown", () => {
    gridMouseDown++;
});

grid.addEventListener("mouseup", () => {
    gridMouseDown = 0;
});

const colorSquare = (square, color) => {
    square.style.backgroundColor = color;
}

let size = 32;

for(let i = 0; i < size; i++) {
    let column = document.createElement("div");

    column.classList.add("column");
    grid.appendChild(column);

    for(let k = 0; k < size; k++) {
        let row = document.createElement("div");

        row.classList.add("row");

        row.addEventListener("mouseover", () => {
            if(gridMouseDown > 0) {
                colorSquare(row, "green");
            }
        });

        column.appendChild(row);
    }
}

console.log(gridMouseDown);
