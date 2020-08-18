import "/components/container.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }

        p {
            margin-top: 5px;
            margin-bottom: 0;
        }
        h2  {
            line-height: 1;
            margin-top: 0;
            margin-bottom: 0;
        }
        #intro {
            padding: var(--component-padding);
            background: var(--grey-color);
            height: 294px;
            width: 100%;
        }
              
        #intro x-container {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        img {
            border-radius: 50%;
            width: auto;
            float: left;
            height: 150px;
            margin: auto;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }

        @media only screen and (min-width: 992px) {
            #intro x-container {
              flex-direction: inherit;
            }
    
            span {
              width: 80%;
              margin-left: 50px;
            }
          }
    </style>
    <div id="intro">
        <x-container> 
            <div>placer holder one</div>
            <div>placer holder two</div>
         </x-container>
    </div>
    
`;
class HomePagePlacerholder extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("home-placeholder", HomePagePlacerholder);
