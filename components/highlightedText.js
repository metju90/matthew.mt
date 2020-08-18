const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
        .success {
            border: 1px solid rgba(29, 161, 242, 1);
            background-color: rgba(29, 161, 242, 0.1);   
        }
        .warning {
            border: 1px solid rgba(240, 173, 78, 1);
            background-color: rgba(240, 173, 78, 0.1);
        }
        .danger {
            border: 1px solid rgba(217, 83, 79, 1);
            background-color: rgba(217, 83, 79, 0.1);
        }
        div {
            border-radius: 3px;
            padding: 30px;
            margin-bottom: 1.5rem;
        }
    </style>
    <div>
        <slot></slot>
    </div>
`;

class HighlightedText extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$types = [
      {
        name: "success",
        class: "success"
      },
      {
        name: "warning",
        class: "warning"
      },
      {
        name: "danger",
        class: "danger"
      }
    ];
  }

  static get observedAttributes() {
    return ["type"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "type": {
        if (!this.$types.map(type => type.name).includes(newVal)) {
          console.error(
            `Incorrect type "${newVal}". \n Support types: ${this.$types.map(
              type => `"${type.name}" `
            )} `
          );
        }
        this._shadowRoot.querySelector("div").setAttribute("class", newVal);
        break;
      }
    }
  }
}

window.customElements.define("highlighted-text", HighlightedText);
