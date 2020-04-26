/** @format */

(function() {
  const template = document.createElement("template");
  template.innerHTML = `
  <link rel="stylesheet" type="text/css" href="./styles/variables.css" />
  <link rel="stylesheet" type="text/css" href="./styles/common.css" />
  <style>
  :host {
      display: block;
  }
  footer {
      height: 60px;
    }
    
  </style> 
  <div class="container">
    <footer>
        <a target="_blank" rel="noopener" href="https://twitter.com/metju90"
            >Twitter</a
        >
        -
        <a target="_blank" rel="noopener" href="https://github.com/metju90"
            >Github</a
        >
        -
        <a
            target="_blank"
            rel="noopener"
            href="https://stackoverflow.com/users/3861691/matthew-barbara"
            >Stackoverflow</a
        >
        -
        <a
            target="_blank"
            rel="noopener"
            href="mailto:barbaramatthew90@gmail.com"
            >email</a
        >
     </footer>
    </div>
`;

  class FooterComp extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define("footer-comp", FooterComp);
})();
