/** @format */

(function() {
  const template = document.createElement("template");
  template.innerHTML = `
  <link rel="stylesheet" type="text/css" href="./styles/variables.css" />
  <link rel="stylesheet" type="text/css" href="./styles/common.css" />
  <style>
      :host {
        background: var(--primary-color);
        height: 70px;
        display: block;
      }

      div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
      }
       
      a {
        color: #fff;
        font-family: MontserratBold;
        font-size: 1.7rem;
      }

      a {
        color: #fff;
        font-family: MontserratBold;
        font-size: 1.7rem;
      }
      
      a#myName {
        flex: 6;
      }
      
      a#about,
      a#blog {
        flex: 1;
      
  </style>
  <div class="container">
    <a href="./index.html" id="myName">Matthew Barbara</a>
    <a href="./about.html" id="about">about</a>
    <a href="./blog/anxious-about-my-first-blog-post.html" id="about"
      >blog</a
    >
  </div>
`;

  class NavigationMain extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define("navigation-main", NavigationMain);
})();
