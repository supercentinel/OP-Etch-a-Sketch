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

bkcolor = "black";

const createGrid = (size) => {

    for(let i = 0; i < size; i++) {
        let column = document.createElement("div");

        column.classList.add("column");
        grid.appendChild(column);

        for(let k = 0; k < size; k++) {
            let row = document.createElement("div");

            row.classList.add("row");

            row.addEventListener("mouseover", () => {
                if(gridMouseDown > 0) {
                    colorSquare(row, bkcolor);
                }
            });

            column.appendChild(row);
        }
    }
}

const clearGrid = () => {
    squares = grid.querySelectorAll(".row");
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
}

const deleteGrid = () => {
    columns = grid.querySelectorAll(".column");

    console.log(columns);

    for(let i = 0; i < columns.length; i++) {
        let rows = columns[i].querySelectorAll(".row");

        for(let k = 0; k < rows.length; k++) {
            columns[i].removeChild(rows[k]);
        }

        grid.removeChild(columns[i]);
    }
}

createGrid(4);
