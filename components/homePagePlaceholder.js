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
            width: 100%;
        }
              
        #intro x-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 214px;
        }

        img {}
        #image {
            border-radius: 50%;
            float: left;
            width: 130px;
            height: 130px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }

        .intro-text-wrapper {
          margin-left: 50px;
          width: 300px;
        }

        .text-row {
          height: 10px;
          margin-bottom: 15px;
        }

        .article-summary {
          padding: var(--component-padding);
        }

        .article-summary > .text-row:nth-of-type(1) {
           width: 280px;
        }

        .article-summary > .text-row:nth-of-type(2) {
          width: 90px;
          margin-top: -8px;
        }

        .article-summary > .text-row:nth-of-type(3) {
          max-width: 500px;
          width: 100%;
        }

        @keyframes placeHolderShimmer{
          0%{
              background-position: -468px 0
          }
          100%{
              background-position: 468px 0
          }
        }
      
      .animated-background {
          animation-duration: 1.25s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: darkgray;
          background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
          background-size: 800px 104px;
          height: 100%;
          position: relative;
          border-radius: inherit;
      }

        @media only screen and (min-width: 992px) {
            #intro x-container {
              flex-direction: inherit;
            }
    
            .intro-text {
              width: 450px;
              margin-left: 50px;
            }
          }
    </style>
    <div id="intro">
        <x-container> 
            <div id="image">
              <div class="animated-background"></div>
            </div>
            <div class="intro-text">
              <div class="text-row">
                <div class="animated-background"></div>
              </div>
              <div class="text-row">
                <div class="animated-background"></div>
              </div>
              <div class="text-row">
                <div class="animated-background"></div>
              </div>
              <div class="text-row">
                <div class="animated-background"></div>
              </div>
              <div class="text-row">
                <div class="animated-background"></div>
              </div>
            </div>
         </x-container>
    </div>
    <x-container> 
      <div class="article-summary">
        <div class="text-row">
          <div class="animated-background"></div>
        </div>
        <div class="text-row">
          <div class="animated-background"></div>
        </div>
        <div class="text-row">
          <div class="animated-background"></div>
        </div>
      </div>
      <div class="article-summary">
        <div class="text-row">
          <div class="animated-background"></div>
        </div>
        <div class="text-row">
          <div class="animated-background"></div>
        </div>
        <div class="text-row">
          <div class="animated-background"></div>
        </div>
      </div>
    </x-container>
    
`;
class HomePagePlacerholder extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("home-placeholder", HomePagePlacerholder);
