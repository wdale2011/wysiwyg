export default function toggleEditor(event) {
  const editableText = event.target.parentNode;
  editableText.classList.toggle('active');

  // change button text
  event.target.innerText = editableText.classList.contains('active') ? 'Save' : 'Edit';
}
