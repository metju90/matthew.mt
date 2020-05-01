/** @format */
import "../components/intro-about-me.js";
import "../components/post-summary.js";

const template = document.createElement("template");
template.innerHTML = `
<intro-about-me></intro-about-me>
<post-summary
  title="Anxious about my first blog post"
  date="April 17th, 2020"
  summary="In 2018 I wanted to write my first blog post but I was afraid to do it..."
  link="./blog/anxious-about-my-first-blog-post.html"
></post-summary>
`;

class Home extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("part", "* => h-i-*");
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    console.log(window.document.querySelector("x-home"));
  }
}

window.customElements.define("x-home", Home);
export default Home;
