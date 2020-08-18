const template = document.createElement("template");
template.innerHTML = `
    <style>
      a {
        color: var(--primary-color);
        text-decoration: none;
        padding-bottom: 3px;
        border-bottom: 1px solid transparent;
      }
      
      a:hover {
        border-bottom: 1px solid var(--primary-color);
      }
    </style>

    <a>
      <slot></slot>
    </a>
  `;

class Anchor extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$a = this._shadowRoot.querySelector("a");
  }

  static get observedAttributes() {
    return ["href", "target", "rel"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "href": {
        this.$a.setAttribute("href", newVal);
        break;
      }
      case "target": {
        this.$a.setAttribute("target", newVal);
        break;
      }
      case "rel": {
        this.$a.setAttribute("rel", newVal);
        break;
      }
    }
  }
}

window.customElements.define("x-anchor", Anchor);
