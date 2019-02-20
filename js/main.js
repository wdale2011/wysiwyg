import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

// const editButtons = document.querySelectorAll('.edit-button, .save-button');

// editButtons.forEach(button => 
//     addEventListener('click', toggleActive));

// Listen for input events in editor
// When fired update text (or style)
document.querySelectorAll('.editor').forEach(
    editor => editor.addEventListener('input', handleEditorInput)
);

document.getElementById('add-button').addEventListener('click', addParagraph);