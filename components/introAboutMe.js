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


      span {
        width: 100%;
        margin-left: 0px;
      }

      p {
        margin-bottom: 10px;
      }

      #image {
        width: 150px;
        height: 150px;
        background: url('/images/matthew-2021.jpg') no-repeat;
        background-size: cover;
        border-radius: 50%;
        background-position: top;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

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
      <div id="image"></div>
      <span>
        <p>
          Hey there! I am Matthew Barbara. For the last ${
            new Date().getFullYear() - 2014
          } years I've been
          working as a fullstack developer. My hobbies are skiing, hiking, gym,
          playing video games and learning more about software development. I was born and raised in
          Malta and I've been living in Switzerland since 2018.
        </p>
        <x-anchor href="/about">Read more about me</x-anchor>
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
