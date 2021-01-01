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
        p {
          margin-bottom: 1.7rem
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
          font-size: 40px;
        }

        h2: {
          font-size: 1.5rem
        }

        h3 {
          font-size: 1.3rem
        }
        small:first-of-type {
          margin-top: 5px;
        }
        small {
          display: block;
          font-size: 0.8rem;
        }
        small:last-of-type {
          margin-bottom: 20px;
        }
        code, code-block {
          background:  #eee;
          border-radius: 3px;
          padding: 2px 4px;
          color: rgb(51, 51, 51);
        }
        .hidden {
          visibility: hidden;
        }

    </style>
    <article>
      <h1></h1>
      <small id="date">Published&nbsp;</small>
      <small id="lastUpdate" class="hidden">Updated&nbsp;</small>
      <div id="content"></div>
    </article>
`;

class Article extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$title = this._shadowRoot.querySelector("h1");
    this.$date = this._shadowRoot.querySelector("#date");
    this.$lastUpdate = this._shadowRoot.querySelector("#lastUpdate");
    this.$content = this._shadowRoot.querySelector("#content");
  }

  static get observedAttributes() {
    return ["title", "date", "last-update", "content"];
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
        this.$date.innerText += newVal;
        break;
      }
      case "content": {
        this.$content.innerHTML = newVal;
        break;
      }
      case "last-update": {
        this.$lastUpdate.classList.remove("hidden");
        this.$lastUpdate.innerText += newVal;
        break;
      }
    }
  }
}

window.customElements.define("x-article", Article);
export default Article;
