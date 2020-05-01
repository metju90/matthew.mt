/** @format */

import Container from "./container.js";

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
      }
       
      a {
        color: #fff;
        font-family: MontserratBold;
        font-size: 1.7rem;
        text-decoration: none;
      }

      a#myName {
        flex: 6;
      }
      
      a#about,
      a#blog {
        flex: 1;
      }
  </style>
  <x-container>
    <a href="/" id="myName">Matthew Barbara</a>
    <a href="/about" id="about">about</a>
    <a href="/blog/anxious-about-my-first-blog-post" id="blog"
      >blog</a
    >
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
