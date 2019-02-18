export function updateText(elementId, text) {
  document.getElementById(elementId).innerText = text;
}

export function updateStyle(elementId, style, value, unit = '') {
  document.getElementById(elementId).style[style] = `${value}${unit}`;
}
