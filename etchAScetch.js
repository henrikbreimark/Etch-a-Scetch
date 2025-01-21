//Div that is going to contain grid.
const container = document.querySelector("#pixelContainer");

//The length of the grids sides.
let gridSideSize = 4;

//At start: Create grid and add eventListeners to grid-elements
generateGrid(gridSideSize);
addHoverListener();

/**
 *
 * @param {Number} gridSides
 */
function generateGrid(gridSides) {
  //Loop that creates all the squares needed. Uses gridSides as length to set size.
  for (let index = 0; index < gridSides; index++) {
    for (let index = 0; index < gridSides; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
}

/**Adds eventListener to square-class elements.*/
function addHoverListener() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) =>
    square.addEventListener("mouseover", (evt) => {
      let currentOpacity = Number(evt.target.style.opacity);
      let newOpacity = currentOpacity + 0.1;
      evt.target.style.opacity = newOpacity;
    })
  );
}
