export default function addEditableText() {
  // create editable text
  const newEditableText = document.createElement('wysiwyg-editable-text');

  // now append it to main
  document.querySelector('main').append(newEditableText);
}
