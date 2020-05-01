/** @format */
import Container from "./container.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
  :host {
      display: block;
  }
  footer {
      height: 60px;
    }
    
  </style> 
  <x-container>
    <footer>
        <a
        part="anchor" target="_blank" rel="noopener" href="https://twitter.com/metju90"
            >Twitter</a
        >
        -
        <a 
        part="anchor" target="_blank" rel="noopener" href="https://github.com/metju90"
            >Github</a
        >
        -
        <a
        part="anchor"
            target="_blank"
            rel="noopener"
            href="https://stackoverflow.com/users/3861691/matthew-barbara"
            >Stackoverflow</a
        >
        -
        <a
            part="anchor"
            target="_blank"
            rel="noopener"
            href="mailto:barbaramatthew90@gmail.com"
            >email</a
        >
     </footer>
    </x-container>
`;

class FooterComp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("x-footer", FooterComp);
