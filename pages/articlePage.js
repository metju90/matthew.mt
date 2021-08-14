import "/components/article.js";
import "/components/container.js";

import * as articles from "/articles/index.js";
import getDoesRequestedArticleExist from "/utils/getDoesRequestedArticleExist.js";
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
    const requestedArticleName = window.location.pathname.substr(1);

    if (!getDoesRequestedArticleExist(requestedArticleName, articles)) {
      history.pushState({}, "", "/not-found");
    }
    const requestedArticle = getRequestedArticle(
      requestedArticleName,
      articles
    );
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$article = requestedArticle;
  }
  connectedCallback() {
    const article = this._shadowRoot.querySelector("x-article");
    window.document.title += ` - ${this.$article.title}`;
    article.setAttribute("title", this.$article.title);
    if (this.$article.date) {
      article.setAttribute("date", this.$article.date);
    }
    if (this.$article.lastUpdate) {
      article.setAttribute("last-update", this.$article.lastUpdate);
    }
    article.setAttribute("content", this.$article.content);

    const mainPlaceholder = document.querySelector("main-placeholder");
    if (mainPlaceholder) {
      mainPlaceholder.remove();
    }
  }
}

window.customElements.define("article-page", Article);
export default Article;
