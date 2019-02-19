import toggleActive from './toggleActive.js';

// DEV: select the edit buttons
const editButtons = document.querySelectorAll('.edit-button');
// DEV: add a click event listener to each buttons
editButtons.forEach(button => {
  button.addEventListener('click', toggleActive);
});
