import handleEditorUpdate from './handleEditorUpdate.js';

export default function addParagraph() {
  const id = Date.now();

  // create paragraph
  const newParagraph = document.createElement('p');
  newParagraph.id = `p${id}`;
  newParagraph.innerText = 'Go ahead, change me in the sidebar.';
  document.querySelector('main').append(newParagraph);

  // create input
  const newInput = document.createElement('div');
  newInput.className = 'editor';
  newInput.dataset.elementId = `p${id}`;
  newInput.innerHTML = /* html */ `
    <h3>Paragraph</h3>
    <textarea cols="40" rows="5">Go ahead, change me in the sidebar.</textarea>
    <section class="styles">
      <div class="form-group">
        <label for="p1-font-color">Font color:</label>
        <input type="color" id="p1-font-color" data-style="color" value="#000000" />
      </div>

      <div class="form-group">
        <label for="p1-font-size">Font size:</label>
        <input type="number" id="p1-font-size" data-style="font-size" data-unit="px" value="16" /> <label>px</label>
      </div>

      <div class="form-group">
        <label for="p1-font-family">Font family:</label>
        <select id="p1-font-family" data-style="font-family">
          <option value="sans-serif">sans-serif</option>
          <option value="serif">serif</option>
        </select>
      </div>
    </section>
  `;

  const addButton = document.getElementById('add-button');
  addButton.parentElement.insertBefore(newInput, addButton);
  // add event listener
  newInput.addEventListener('input', handleEditorUpdate);
}
