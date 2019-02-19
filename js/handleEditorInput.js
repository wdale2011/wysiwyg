/**
 * Allows for editing title
 * @param {Event} event 
 */

export default function handleEditorInput(event) {
    if (event.target.type === 'text' ||
        event.target.tagName === 'TEXTAREA'){
        
            const textElement = event.currentTarget.parentNode.querySelector('.text-element');
            
            textElement.innerText = event.target.value;
        }
}