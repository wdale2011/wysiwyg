/**
 * Allows for editing title
 * @param {Event} event 
 */

export default function handleEditorInput(event) {
    const textElement = event.currentTarget.parentNode.querySelector('.text-element');

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