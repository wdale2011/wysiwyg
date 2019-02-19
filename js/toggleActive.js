/**
 *  Toggles active class on editable-text
 * @param {Event} event
 */
const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach(button => addEventListener('click', toggleActive));

function toggleActive(event) {
    // get the parent element
    const editableText = event.target.parentElement;
    // toggle the class active
    editableText.classList.toggle('active')
}

export default {toggleActive}