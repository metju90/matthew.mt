const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host {
        display: block;
        margin: 10px 0;
      }
    </style>
    <code>
      <slot></slot>
    </code>
  `;

class CodeBlock extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("code-block", CodeBlock);
export default CodeBlock;
