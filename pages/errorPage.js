const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host {
        display: block;
      }
    </style>
    Sorry, something went wrong.
`;

class ErrorPage extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("error-page", ErrorPage);
