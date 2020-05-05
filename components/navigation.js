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
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
       
      a {
        color: #fff;
        font-family: MontserratBold;
        font-size: 2.1rem;
        text-decoration: none;
      }

      @media only screen and (min-width: 992px) {
        x-container {
          justify-content: inherit;
        } 

        a {
          font-size: 1.7rem;
        }
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
