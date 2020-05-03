/** @format */

const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host {
        display: block;
      }
    </style>
    The page you are trying to reach was not found. 
`;

class NotFound extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("not-found-page", NotFound);
export default NotFound;
