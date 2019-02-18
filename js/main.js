import toggleSidebar from './lib/toggleSidebar.js';
import handleEditorUpdate from './lib/handleEditorUpdate.js';
import addParagraph from './lib/addElement.js';

// attach event listeners
document.getElementById('sidebar-button').addEventListener('click', toggleSidebar);

document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorUpdate));

document.getElementById('add-button').addEventListener('click', addParagraph);
