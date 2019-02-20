export default class Editor extends HTMLElement 
{
  constructor() {
      super();

      this.addEventListener('input', this.handleInput);
  }

  connectedCallBack() {
      this.render();
  }

  render() {
    this.innerHTML = `
    <textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>
    <section class="styles">
      <div class="form-group">
        <label>
          Font color:
          <input type="color" name="color"/>
        </label>
      </div>

      <div class="form-group">
        <label>
          Font size:
          <input type="number" />
          px
        </label>
      </div>

      <div class="form-group">
        <label>
          Font family:
          <select>
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
          </select>
        </label>
      </div>
    </section>
    `;
  }
}