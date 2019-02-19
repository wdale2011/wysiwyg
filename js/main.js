import handleEditorUpdate from './lib/handleEditorUpdate.js';
import addEditableText from './lib/addEditableText.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';
import EditableHeading from './components/EditableHeading.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);
customElements.define('wysiwyg-editable-heading', EditableHeading);

// attach event listeners
document.getElementById('add-button').addEventListener('click', addEditableText);
