import handleEditorInput from "./handleEditorInput.js";
import toggleActive from './toggleActive.js';

export default function addParagraph(event){
    //  create an element (section with the class of 'editable-text')

    const newEditableText = document.createElement('wysiwyg-editable-text');

    //Add event listeners
    newEditableText
    .querySelectorAll('.edit-button, .save-button')
    .forEach(button => button.addEventListener('click', toggleActive));

    newEditableText.querySelector('.editor')
    .addEventListener('input', handleInput);

    // Append that to main (before our button)
    document.querySelector('main').insertBefore(newEditableText, event.target);
}



// const newEditableText = 
// document.createElement('section');
// newEditableText.className = 'editable-text';
// // set its innerHTML
// const tonOfText =  `
// <button type="button" class="edit-button">Edit</button>
// <button type="button" class="save-button">Save</button>
// <p class="text-element">Go ahead, edit me however you want!</p>

// <div class="editor">
//   <!-- prettier-ignore -->
//   <textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>

//   <section class="styles">
//     <div class="form-group">
//       <label>
//         Font color:
//         <input type="color" name="color"/>
//       </label>
//     </div>

//     <div class="form-group">
//       <label>
//         Font size:
//         <input type="number" />
//         px
//       </label>
//     </div>

//     <div class="form-group">
//       <label>
//         Font family:
//         <select>
//           <option value="sans-serif">sans-serif</option>
//           <option value="serif">serif</option>
//         </select>
//       </label>
//     </div>
//   </section>
// </div>`