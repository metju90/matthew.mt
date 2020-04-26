/** @format */
(function() {
  const template = document.createElement("template");
  template.innerHTML = `
  <link rel="stylesheet" type="text/css" href="./styles/variables.css" />
  <link rel="stylesheet" type="text/css" href="./styles/common.css" />
    <style>
        :host {
            padding: var(--component-padding);
            display: block;
        }

        p {
            margin-top: 15px;
            margin-bottom: 0;
        }
        h2  {
            line-height: 1;
            margin-top: 0;
            margin-bottom: 0;
        }
    </style>
    <div class="container">
        <a>
            <h2></h2>
        </a>
        <small></small>
        <p></p>
    </div>
`;
  class PostSummary extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this.$title = this._shadowRoot.querySelector("h2");
      this.$date = this._shadowRoot.querySelector("small");
      this.$summary = this._shadowRoot.querySelector("p");
      this.$link = this._shadowRoot.querySelector("a");
    }

    static get observedAttributes() {
      return ["title", "date", "summary", "link"];
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
        case "summary": {
          this.$summary.innerText = newVal;
          break;
        }
        case "link": {
          this.$link.setAttribute("href", newVal);
          break;
        }
      }
    }
  }

  window.customElements.define("post-summary", PostSummary);
})();
