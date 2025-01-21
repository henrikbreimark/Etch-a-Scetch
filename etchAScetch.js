//Div that is going to contain grid.
const container = document.querySelector("#pixelContainer");

//At start: Create grid and add eventListeners to grid-elements
loadAtStart();

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
      square.style.flexBasis = `calc(99% / ${gridSides})`;
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

/**Gets the number of sides selected by user.
 */
function addSideChoiceListener() {
  const sideSubmitBox = document.querySelector("#submitSides");
  return sideSubmitBox.value;
}

/**
 * Loads a grid at page load.
 */
function loadAtStart() {
  generateBoard();
  addloadNewGridListener();
}

function addloadNewGridListener() {
  const submitButton = document.querySelector("#gridLoadButton");
  submitButton.addEventListener("click", resetBoard);
  console.dir(submitButton);
}

function generateBoard() {
  generateGrid(addSideChoiceListener());
  addHoverListener();
}

function resetBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.remove());
}
