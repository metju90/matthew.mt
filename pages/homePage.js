/** @format */
import "/components/introAboutMe.js";
import "/components/articleSummary.js";
import "/components/container.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host {
        display: block;
      }
    </style>
    <intro-about-me></intro-about-me>
    <x-container>
      <article-summary
      title="Anxious about my first blog post"
      date="April 17th, 2020"
      summary="In 2018 I wanted to write my first blog post but I was afraid to do it..."
      link="/anxious-about-my-first-blog-post"
      ></article-summary>
    </x-container>
`;

class Home extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // const baseElement = document.createElement("base");
    // baseElement.href = "/";
    // document.head.appendChild(baseElement);
  }
}

window.customElements.define("home-page", Home);
export default Home;
