const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            max-width: 790px;
            margin-left: auto;
            margin-right: auto;
            display: block;
            padding: 0 25px;
            
        }
    </style>
    <slot></slot>
  `;

class Container extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("x-container", Container);
