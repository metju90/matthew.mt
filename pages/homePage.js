import "/components/introAboutMe.js";
import "/components/articleSummary.js";
import "/components/container.js";
import * as articles from "/articles/index.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host {
        display: block;
      }
    </style>
    <intro-about-me></intro-about-me>
    <x-container></x-container>
`;

class Home extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.$xContainer = this._shadowRoot.querySelector("x-container");
    Object.keys(articles)
      .reverse()
      .map(key => {
        const { title, date, summary, link } = articles[key];
        // "About me" article is treated different. It's summary is included in  the <intro-about-me>
        // component and therefore there is no need to make another summary of it.
        if (title === "About me") {
          return null;
        }
        const articleSummary = document.createElement("article-summary");
        articleSummary.setAttribute("title", title);
        articleSummary.setAttribute("date", date);
        articleSummary.setAttribute("summary", summary);
        articleSummary.setAttribute("link", link);
        this.$xContainer.appendChild(articleSummary);
      });
  }
}

window.customElements.define("home-page", Home);
export default Home;
