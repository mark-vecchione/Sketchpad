// Select the container and button
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.new-grid-btn');

// A helper function to generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Create a grid of `size` by `size`
function createGrid(size) {
  // Ensure the container is empty before creating a new grid
  container.innerHTML = '';

  // Each row will have `size` squares, total squares = size * size
  // We'll set each square's width & height via JS so that the entire
  // container (960px wide) is proportionally divided
  const squareSize = 960 / size; // Each square's size in px
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';

    // Hover event: change background color to a random color
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

// Create an initial 16 x 16 grid
createGrid(16);

// Listen for clicks on the "New Grid" button
newGridBtn.addEventListener('click', () => {
  let newSize = parseInt(prompt('Enter new grid size (1 - 100): '), 10);

  // Validate the input
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert('Invalid input. Please enter a number between 1 and 100.');
    return;
  }

  // Create a new grid with the user’s input
  createGrid(newSize);
});




  