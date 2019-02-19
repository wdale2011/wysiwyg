export default class Editor extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
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
  }
}
