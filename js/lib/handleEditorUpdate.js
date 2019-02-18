import { updateText, updateStyle } from './updateElement.js';

export default function handleEditorUpdate(event) {
  // get id of element we are targeting
  const { elementId } = event.currentTarget.dataset;
  // get value of input that was changed
  const { value } = event.target;
  // get style the input targets
  const { style, unit } = event.target.dataset;

  if (style) {
    updateStyle(elementId, style, value, unit);
  } else {
    // its a text update
    updateText(elementId, value);
  }
}
