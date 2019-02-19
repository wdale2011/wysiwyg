import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js'

const editButtons = document.querySelectorAll('.edit-button, .save-button');

editButtons.forEach(button => 
    addEventListener('click', toggleActive));

// Listen for input events in editor
// When fired update text (or style)
document.querySelectorAll('.editor').forEach(
    editor => editor.addEventListener('input', handleEditorInput)
);
