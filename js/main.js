import toggleEditor from './lib/toggleEditor.js';
import handleEditorUpdate from './lib/handleEditorUpdate.js';
import addEditableText from './lib/addEditableText.js';

// attach event listeners
document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', toggleEditor));
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorUpdate));
document.getElementById('add-button').addEventListener('click', addEditableText);
