import "/components/article.js";
import "/components/container.js";
import { title, content } from "/articles/aboutMe.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
      :host {
        display: block;
      }

  </style>
 <x-container>
    <x-article></x-article>
 </x-container>
`;

class About extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    document.title += ` - ${title}`;
    this._shadowRoot.querySelector("x-article").setAttribute("title", title);
    this._shadowRoot
      .querySelector("x-article")
      .setAttribute("content", content);

    const mainPlaceholder = document.querySelector("main-placeholder");
    if (mainPlaceholder) {
      mainPlaceholder.remove();
    }
  }
}

window.customElements.define("about-page", About);
export default About;
