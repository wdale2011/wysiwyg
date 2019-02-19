# WYSIWYG Editor

Website builder that lets you manipulate text and styles.
Changes happen in realtime, no page refresh.

## Part II Steps

1. Create Editor class extending `HTMLElement`
2. Create a `render` function that sets up `innerHTML` and adds event listener (copy over code from `handleEditorUpdate.js`)
3. Create `connectedCallback` function in Editor, calling render
4. export Editor, import into `main.js`. Use `customeElements.define` to create element
5. Add `wysiwyg-editor` element to HTML, update CSS
6. Add `wysiwyg-editor` to `addEditableText` func
7. Now do the same for `EditableText`
8. Move `handleEditorUpdate` to `EditableText` (discuss actions up, data down)
9. Bing in `toggleEditor` function
   1. Change attributes instead of class
   2. Fancy getter/setter for attributes
   3. Updating button text
10. Heading element inherits from editabletext
11. Only need to change render function to use `h1`
12. Now make it for generic headings using attributes
    1. re-render in `attributeChangedCallback`
    2. make sure you have your `observedAttributes!`

## References

- CSS
  - [CSS transition auto width](https://stackoverflow.com/questions/38643529/css-transition-auto-width)
- JS
  - [Where should I put `<script>` tags in HTML markup?](https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup)
  - [`input` event](https://developer.mozilla.org/en-US/docs/Web/Events/input)
  - [Efficiently Load JavaScript With Defer And Async](https://flaviocopes.com/javascript-async-defer/)
  - [Best way to track onchange as-you-type in input type=“text”?](https://stackoverflow.com/questions/574941/best-way-to-track-onchange-as-you-type-in-input-type-text/26202266#26202266)
  - [How to insert HTML before element in JavaScript](https://stackoverflow.com/questions/19315948/how-to-insert-html-before-element-in-javascript-without-jquery)
  - Web Components
    - [MDN Docs - overview](https://developer.mozilla.org/en-US/docs/Web/Web_Components#Browser_compatibility)
    - [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
    - [Best Practices](https://www.webcomponents.org/community/articles/web-components-best-practices)
    - [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements)
    - [Web Components, the React Way](https://hackernoon.com/web-components-the-react-way-8ed5b6f4f942)
      - [Without Shadow DOM](https://gist.github.com/WebReflection/043eae145ea539805b94da68b5ac2dad)
