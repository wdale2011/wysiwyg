import EditableText from './EditableText.js';

export default class EditableHeading extends EditableText {
  static get observedAttributes() {
    return ['heading'];
  }

  // getter/setter for heading
  get heading() {
    if (this.hasAttribute('heading')) {
      return this.getAttribute('heading');
    }
    // h1 is default
    return 'h1';
  }

  set heading(val) {
    this.setAttribute('heading', val);
  }

  render() {
    this.innerHTML = /* html */ `
      <button type="button" class="edit-button">${this.active ? 'Save' : 'Edit'}</button>
      <${this.heading} class="text-element">Go ahead, edit me however you want!</${this.heading}>

      <wysiwyg-editor></wysiwyg-editor>
    `;

    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleEditorUpdate);
    this.querySelector('button').addEventListener('click', this.toggleEditor);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}
