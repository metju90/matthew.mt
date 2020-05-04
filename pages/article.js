/** @format */
import "/components/article.js";
import "/components/container.js";

import * as articles from "/articles/index.js";
import getIsPathNameValidArticle from "/utils/getIsPathNameValidArticle.js";
import getRequestedArticle from "/utils/getRequestedArticle.js";

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

class Article extends HTMLElement {
  constructor() {
    super();
    const requestedArticle = window.location.pathname.substr(1);

    if (!getIsPathNameValidArticle(requestedArticle, articles)) {
      history.pushState({}, "", "/not-found");
    }
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$article = getRequestedArticle(requestedArticle, articles);
  }
  connectedCallback() {
    this._shadowRoot
      .querySelector("x-article")
      .setAttribute("title", this.$article.title);
    this._shadowRoot
      .querySelector("x-article")
      .setAttribute("date", this.$article.date);
    this._shadowRoot
      .querySelector("x-article")
      .setAttribute("content", this.$article.content);
    //the event occurred
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed!`);
  }

  adoptedCallback() {}
}

window.customElements.define("article-page", Article);
export default Article;
