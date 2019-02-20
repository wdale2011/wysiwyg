export default class EditableText extends HTMLElement {
    constructor () {
        super ();

        this.toggleActive = this.toggleActive.bind(this);
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `<button type="button" class="edit-button">Edit</button>
        <button type="save" class="save-button">Save</button>
        <p class="text-element">Go ahead, edit me however you want!</p>

        <wysiwyg-editor></wysiwyg-editor>`;
    
        // add event listeners
        this.querySelectorAll('.edit-button, .save-button').forEach(button =>
            button.addEventListener('click', this.toggleActive));
            
        // actions up
        this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
        
        }

    toggleActive () {
        console.log(this);
        this.classList.toggle('active');
    }

    handleInput(event) {
        const textElement = this.querySelector('.text-element');
    
        if (event.target.type === 'text' ||
            event.target.tagName === 'TEXTAREA'){
            //Allows for text change
                const text = event.target.value;
                textElement.innerText = text
            }
        else {
            // Handle the styles
            const value = event.target.value
            const styleName = event.target.name;
            const unit = event.target.dataset.unit || '';
            textElement.style[styleName] = `${value}${unit}`
        }
    }

    // toggleActive = () => {
    //     console.log(this);
    //     this.classList.toggle('active');
    // }
}