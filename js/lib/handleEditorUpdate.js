export default function handleEditorUpdate(event) {
  // get value of input that was changed
  const { value } = event.target;
  // get style the input targets
  const { style, unit } = event.target.dataset;
  // get text element we want to modify
  const textElement = event.currentTarget.parentNode.querySelector('.text-element');

  if (style) {
    updateStyle(textElement, style, value, unit);
    // console.log(event.currentTarget.parentNode.querySelector('.text-element'));
  } else {
    // its a text update
    updateText(textElement, value);
  }
}

function updateStyle(element, style, value, unit = '') {
  element.style[style] = `${value}${unit}`;
}

function updateText(element, text) {
  element.innerText = text;
}
