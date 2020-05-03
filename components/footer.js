/** @format */
import "/components/container.js";
import "/components/anchor.js";

const template = document.createElement("template");
template.innerHTML = /* html */ `
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
        <x-anchor
          target="_blank"
          rel="noopener"
          href="https://twitter.com/metju90"
        >
          Twitter
        </x-anchor>
        -
        <x-anchor
          target="_blank"
          rel="noopener"
          href="https://github.com/metju90"
        >
          Github
        </x-anchor>
        -
        <x-anchor
            target="_blank"
            rel="noopener"
            href="https://stackoverflow.com/users/3861691/matthew-barbara"
          >
          Stackoverflow
        </x-anchor>
        -
        <x-anchor
            part="anchor"
            target="_blank"
            rel="noopener"
            href="mailto:barbaramatthew90@gmail.com"
          >
            email
        </x-anchor>
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
