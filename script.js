//your JS code here. If required.
// JavaScript to dynamically create 799 more square boxes
const container = document.getElementById('color-board');

for (let i = 0; i < 799; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

// Optional: Reset the color after 1 second
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#ccc'; // Reset to original color
        }, 1000);
    });
});
