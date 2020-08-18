import "/components/container.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host {
        display: block;
        margin: 50px 0;
      }
    </style>
    <x-container>
        The page you are trying to reach was not found. 
    </x-container>
`;

class NotFound extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("not-found-page", NotFound);
