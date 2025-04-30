// Accessing DOM elements
const dynamicText = document.getElementById('dynamicText');
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleColorBtn = document.getElementById('toggleColorBtn');

// Function to change text content dynamically
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "The text has been changed!";
});

// Function to toggle background color
toggleColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f0f0f0' : 'lightblue';
});
