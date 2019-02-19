import handleEditorUpdate from './handleEditorUpdate.js';
import toggleEditor from './toggleEditor.js';

export default function addEditableText() {
  // create editable text
  const newEditableText = document.createElement('section');
  newEditableText.className = 'editable-text';
  newEditableText.innerHTML = /* html */ `
    <button type="button" class="edit-button">Edit</button>
    <p class="text-element">Go ahead, edit me however you want!</p>

    <div class="editor">
      <textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>

      <section class="styles">
        <div class="form-group">
          <label>
            Font color:
            <input type="color" data-style="color" value="#151019" />
          </label>
        </div>

        <div class="form-group">
          <label>
            Font size:
            <input
              type="number"
              data-style="font-size"
              data-unit="px"
              value="16"
            />
            px
          </label>
        </div>

        <div class="form-group">
          <label>
            Font family:
            <select data-style="font-family">
              <option value="sans-serif">sans-serif</option>
              <option value="serif">serif</option>
            </select>
          </label>
        </div>
      </section>
    </div>
  `;

  // attach event listeners
  newEditableText.querySelector('.editor').addEventListener('input', handleEditorUpdate);
  newEditableText.querySelector('.edit-button').addEventListener('click', toggleEditor);

  // now append it to main
  document.querySelector('main').append(newEditableText);
}
