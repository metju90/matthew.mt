import "/components/anchor.js";
import "/components/highlightedText.js";

const title = "Frameworks, tools and SPAs";
const date = "May 28th, 2020";
const summary =
  "I've developed a modern SPA without any JS frameworks and tools...";
const link = "/frameworks-tools-spas";

const content = /* html */ `
    <h2>TL;DR</h2>
    <p>I created a Single Page Application (SPA) without transpilers, bundlers or frameworks. I just used features of the modern browsers -- <code>Web Components</code>, <code>ES6 syntax</code>, and <code>history</code> API. <p>
    <p>In this post I discussed  my personal experience in using the above APIs. I didn’t dive into implementation  details on how I developed the SPA but I do mention a list of benefits and disadvantages of the outcome which is summarized here:</p>
    <div>Pros:</div>
    <ul>
        <li>It’s lightweight. This SPA has 32KB of uncompressed JS code. In contrast, an equivalent page written in <x-anchor link="https://github.com/facebook/create-react-app" target="_blank">Create React App</x-anchor> comes with a production-optimized bundle weighing > 250kb</li>
        <li>Good Developer Experience. No time spent in configuring web bundlers and transpilers. I reused UI components which are supported natively in modern browsers</li>
    </ul>
    <div>Cons:</div>
    <ul>
        <li>Using no bundlers, the code is not optimized for production. No mangling, minification nor any optimizations </li>
        <li>Old browser support: Without the use of any polyfills for Web Components and ES6 syntax, this SPA is not functional on older browsers</li>
    </ul>
    <div>Demo: currently you are using the SPA that I developed. It's this website. 😊 </div>
    <div>Source code: <x-anchor href="https://github.com/metju90/matthew.mt"  rel="noopener" target="_blank" />https://github.com/metju90/matthew.mt</x-anchor> </div>
    <h2>Longer version</h2>
    
    <h3>Let’s look back in time</h3>

    <p>The concept of what's today known as SPA has been around for a while. One of the first
    websites of this kind could have been <x-anchor href="https://en.wikipedia.org/wiki/Single-page_application#cite_ref-4"  rel="noopener" target="_blank">written in 2002</x-anchor>
     and in 2003, a <x-anchor href="https://developer.mozilla.org/en-US/docs/Archive/Inner-browsing_extending_the_browser_navigation_paradigm" rel="noopener" target="_blank"> group of people published an article</x-anchor> about "Inner-browsing" which was the term
     used instead of an SPA. Essentially that article introduces the idea and explains the benefits
     of an SPA and the disadvantages
     of Server Side Rendering (SSR) at that time. In the same article you can find <x-anchor href="https://developer.mozilla.org/en-US/docs/Archive/Inner-browsing_extending_the_browser_navigation_paradigm#Source_code_for_the_sample" rel="noopener" target="_blank">code sample</x-anchor> 
     of the same "Inner-browsing" website AKA SPA working on Internet Explorer versions 6 and 8. Heads-up:
     it’s cumbersome. But hey, it’s a SPA written in 2003. That was 17 years ago! In the same source code you will come across
     several <code> // ie fix</code> comments which indicates IE always needed special treatment.
     <p>Currently, I am working on a project which supports IE11 so I do feel empathy for the authors of that code.</p>

    <figure>
        <img src="/images/spa-code-2002.png" alt="Source code of a SPA in 2002" />
        <figcaption> The "Inner-browsing" concept - part of the source code.</figcaption>
    </figure>

    <p>Over the years the capability of the web has evolved. Building and maintaining  one requires skills which can only
    be acquired through experience. Thanks to the frameworks and tools we have available today this complexity is partially
    simplified by leaving the "low-level" work in the framework/tool's hand. As developers, we just interact with the API
    they provide us.</p>

    <h3>My personal experience with SPAs</h3>

    <p>With just over a year of professional experience in the beginning of 2016, the words "bundler",
    "package manager" and "transpiler" were mainly foreign to me. All the projects that I had worked on were
    Server Side Rendered (SSR) using JQuery on the client and PHP on the backend.</p>

    <p>
    Back then, if I wanted to use a dependency, I would download it manually, place it in my working directory,
    created a script tag in the <code>&lt;head&gt;</code> and put the relative path to it as a value for the <code>src</code> attribute.
    That was it. Unless the new dependency (which of course also depended on jQuery) was declared before jQuery itself in
    the list of dependencies. An even worse problem was when jQuery was a
    <x-anchor href="https://classic.yarnpkg.com/en/docs/dependency-types/#toc-peerdependencies" rel="noopener" target="_blank">peer dependency</x-anchor>
    requiring a different version of the one that I was using.
    </p>

    <p>When i was given the opportunity to work as a frontend developer on a project which was based on React as a
    SPA, these problems were mitigated. In this project if I wanted to use a dependency first I had to install it via
    <code>npm</code> and then use ES6 syntax to <code>import</code> it as a module.<p>

    <p>Creating and reusing components was easy and the sugar-coated syntax of JSX made my developer experience
    much better. We were using a CSS in JS processor which made it almost impossible to have a CSS
    <code>class</code> or <code>id</code> naming conflict.</p>

    <p>This was very different from what I was used to. It felt like I entered into a different world of programming.
    A better one.</p>

    <p>That was also the time when I was introduced to transpilers and web bundlers. At that time we were using Webpack
    version 2. I started to become curious about how things work and I was trying to understand the daunting configurations
    of Babel and Webpack. It was really hard to understand what was going on and it took a while to get a good grasp on it.</p>

    <h3>Over the years</h3>

    <p>Bit by bit, I learned more about why these tools exist and what they do exactly. The engineering behind
    them fascinates me. The value they add might be crucial for certain businesses and  surely is beneficial for
    everyone across the board for all kind of businesses and their clients.</p>

    <p>For an example: tree-shaking (also known as dead-code elimination), variable name mangling and code
    minification are key features of the most prominent web bundlers. They play a key role in optimizations for a
    faster page load by reducing the amount source code in the bundle(s). Hence, a user will download smaller JS
    file(s) and the browser will consume less from the user’s available memory and CPU to process it. You can read
    more about the importance of shipping small JavaScript code in
    <x-anchor href="https://v8.dev/blog/cost-of-javascript-2019" rel="noopener" target="_blank"/>The cost of JavaScript in 2019.</x-anchor></p>


    <p>I do appreciate the frameworks and tools we have available today. I use them in most of
    my projects. They inspire and influence how the web standards evolve. For an example, CSS variables was a key feature which
    prominent CSS processors always had. Coincidentally, a few weeks ago (in April 2020) I learned that variables in CSS are now a
    <x-anchor href="https://drafts.csswg.org/css-variables/#using-variables" rel="noopener" target="_blank">standard.</x-anchor></p>

    <p>Unfortunately what most of these different tools have in common is their hard-to-configure setup. Whilst over time this
    become easier to deal with, I believe it is a nightmare for someone who has little to no previous development experience.
    Just like it was to me during that time. </p>

    <highlighted-text type="warning">Note: I do put emphasis on Developer Experience in this post
    but this shouldn’t be given the highest priority when it comes to choosing a technology for production. There are
    many other things one should take into account.</highlighted-text>

    <p>Thus, I started to ask myself: how can one build a SPA with most of the features these frameworks and tools brings, but without the need of using the same frameworks and tools? 🤔 That question translates to: what features do modern browsers support natively which I have been using for the past years to build SPAs? Features that make a great Developer Experience and more importantly, sufficient for my needs. Features such ES6 modules, maintainable and reusable UI components with lifecycle hooks (as exists in modern JS frameworks) and CSS variables which ideally can be encapsulated within the UI components. These were the questions I was asking myself.</p>

    <h3>Web components to the rescue</h3>

    <p>I was partially surprised when I learned that modern browsers offer all the above features. I knew that ES6 syntax
    (including modules) was supported by several browsers but it surprised me when I learned that Web Components is now supported
    in all major browsers!</p>

    <p>Web Components is a set of API which lets you write reusable UI components with encapsulated CSS natively in the browser.
    The API consists of <strong>Custom Elements</strong>, <strong>Shadow DOM</strong>, <strong>ES Modules</strong> and 
    <strong>HTML Templates.</strong> You can read more about Web Components <x-anchor href="https://www.webcomponents.org/introduction" rel="noopener" target="_blank">here</x-anchor></p>

    <p>I had a first glance at Web Components in summer of 2018. At that time it was still mainly supported just by Chrome. I
    skimmed through some source code and found it interesting, but not interesting enough to invest more time in it. But now,
    with Web Components being fully supported across the board in modern browsers, I see potential in this technology.</p>

    <p>This website itself is developed in Web Components. If you are curious on how the markup looks you can inspect the element of
    this page. You can see the source code of this blog here: <x-anchor href="https://github.com/metju90/matthew.mt" rel="noopener" target="_blank">https://github.com/metju90/matthew.mt</x-anchor> </p>
`;

export { title, date, content, summary, link };
