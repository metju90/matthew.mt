/** @format */
import "/components/container.js";
import "/components/anchor.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
      :host {
        background: var(--grey-color);
        padding: var(--component-padding);
        display: block;
      }
      
      x-container {
        display: flex;
        align-items: center;
        flex-direction: column;
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
        width: 100%;
        margin-left: 0px;
      }

      p {
        margin-bottom: 10px;
      }

      @media only screen and (min-width: 992px) {
        x-container {
          flex-direction: inherit;
        }

        span {
          width: 80%;
          margin-left: 50px;
        }
      }
  </style>
  <x-container>
      <img src="/images/matthew.jpg" />
      <span>
        <p>
          Hey there! I am Matthew Barbara. For the last 6 years i've been
          working as a fullstack developer. My hobbies are skiing and hiking, gym,
          playing video and and learning on software. I live in Switzerland
          and I am coming from Malta. A tiny island in the middle of the
          Mediterranean sea. On this site I plan to start blog posts and in
          the future will also be sharing some of the projects I work on.
        </p>
        <x-anchor href="/about">Read more</x-anchor>
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
