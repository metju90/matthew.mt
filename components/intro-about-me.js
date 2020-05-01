/** @format */
import Container from "./container.js";
import Button from "./anchor.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
      :host {
        background: var(--grey-color);
        padding: var(--component-padding);
        display: block;
      }
      
      x-container {
        align-items: center;
      }

      img {
        border-radius: 50%;
        width: auto;
        float: left;
        height: 130px;
        margin: auto;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }

      span {
        width: 80%;
        margin-left: 50px;
      }

      p {
        margin-bottom: 10px;
      }
  </style>
  <x-container>
      <img src="./images/matthew.jpg" />
      <span>
        <p>
          Hey there! I am Matthew Barbara. For the last 6 years i've been
          working as a fullstack developer. My hobbies are skiing, gym,
          playing video and learning about software. I live in Switzerland
          and I am coming from Malta. A tiny island in the middle of the
          Mediterranean sea. On this site I plan to start blog posts and in
          the future will also be sharing some of the projects I work on.
        </p>
        <x-anchor href="./about.html">Read more</x-anchor>
      </span>
  </x-container>
`;

class IntroAboutMe extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("intro-about-me", IntroAboutMe);
export default IntroAboutMe;
