export default class EditableText extends HTMLElement {
  // getter/setter for active
  get active() {
    return this.hasAttribute('active');
  }

  set active(val) {
    if (val) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }

  constructor() {
    super();

    // bind functions
    this.handleEditorUpdate = this.handleEditorUpdate.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <button type="button" class="edit-button">${this.active ? 'Save' : 'Edit'}</button>
      <p class="text-element">Go ahead, edit me however you want!</p>

      <wysiwyg-editor></wysiwyg-editor>
    `;

    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleEditorUpdate);
    this.querySelector('button').addEventListener('click', this.toggleEditor);
  }

  handleEditorUpdate(event) {
    // get value of input that was changed
    const { value } = event.target;
    // get style the input targets
    const { style, unit } = event.target.dataset;
    // get text element we want to modify
    const paragraph = this.querySelector('.text-element');

    if (style) {
      this.updateStyle(paragraph, style, value, unit);
    } else {
      // if no style exists, its a text update
      this.updateText(paragraph, value);
    }
  }

  updateStyle(element, style, value, unit = '') {
    element.style[style] = `${value}${unit}`;
  }

  updateText(element, text) {
    element.innerText = text;
  }

  toggleEditor() {
    // if (this.hasAttribute('active')) {
    //   // remove it if it exists
    //   this.removeAttribute('active');
    // } else {
    //   this.setAttribute('active', '');
    // }
    this.active = !this.active;
    this.querySelector('button').innerText = this.active ? 'Save' : 'Edit';
  }
}
