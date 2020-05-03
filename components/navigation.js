/** @format */

import "/components/container.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
      :host {
        background: var(--primary-color);
        height: 70px;
        display: block;
      }

      x-container {
        height: 100%;
        width: 100%;
        align-items: center;
        display: flex;
      }
       
      a {
        color: #fff;
        font-family: MontserratBold;
        font-size: 1.7rem;
        text-decoration: none;
      }


  </style>
  <x-container>
    <a href="/">Matthew Barbara</a>
  </x-container>
`;

class NavigationMain extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("x-navigation", NavigationMain);
