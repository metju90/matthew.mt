const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            padding: var(--component-padding);
            display: block;
        }
        p:first-child {
          margin-top: 0;
        }
        figure {
          padding: var(--component-padding);
          text-align: center;
        }

        figcaption {
          font-family: sans-serif;
          line-height: 1.5;
          font-size: 0.9rem;
        }
        
        img {
          max-width: 100%;
        }
        h1 {
          margin: 0;
          line-height: 1;
        }
        small {
          margin-bottom: 20px;
          display: block;
        }
    </style>
    <article>
      <h1></h1>
      <small></small>
      <div id="content"></div>
    </article>
`;

class Article extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$title = this._shadowRoot.querySelector("h1");
    this.$date = this._shadowRoot.querySelector("small");
    this.$content = this._shadowRoot.querySelector("#content");
  }

  static get observedAttributes() {
    return ["title", "date", "content"];
  }

  connectedCallback() {
    //the event occurred
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "title": {
        this.$title.innerText = newVal;
        break;
      }
      case "date": {
        this.$date.innerText = newVal;
        break;
      }
      case "content": {
        this.$content.innerHTML = newVal;
        break;
      }
    }
  }
}

window.customElements.define("x-article", Article);
export default Article;
