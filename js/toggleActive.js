/**
 * Toggles the 'active' class for editable-text
 * @param {Event} event
 */
export default function toggleActive(event) {
  // DEV: get the parent element
  const editableText = event.target.parentElement;
  // DEV: Toggle the class active
  editableText.classList.toggle('active');
}
