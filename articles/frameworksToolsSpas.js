const title = "Frameworks, tools and SPAs";
const date = "May 28th, 2020";
const summary = "I've built a modern SPA without any JS frameworks and tools";
const link = "/frameworks-tools-spas";

const content = /* html */ `
    <h2>TL;DR</h2>
    <p>I created a Single Page Application (SPA) without transpilers, bundlers or frameworks. I just used features of the modern browsers -- <code>Web Components</code>, <code>ES6 syntax</code>, and <code>history</code> API. <p>
    <p>In this post I discussed  my personal experience in using the above APIs. I didn’t dive into implementation  details on how I built the SPA but rather explore a list of benefits and disadvantages of the outcome which is summarized here:</p>
    <div>Pros:</div>
    <ul>
        <li>It’s lightweight. This SPA has 32KB of uncompressed JS code. In contrast, an equivalent page written in Create React App[link] comes with a production-optimized bundle weighing > 250kb</li>
        <li>Good Developing Experience. No time spent in configuring web bundlers and transpilers. I reused UI components which are supported natively in modern browsers</li>
    </ul>
    <div>Cons:</div>
    <ul>
        <li>Using no bundlers, the code is not optimized for production. No mangling, minification nor any optimizations </li>
        <li>Old browser support: Without the use of any polyfills for Web Components and ES6 syntax, this SPA is not functional on older browsers</li>
    </ul>
    <div>Demo:This website is the SPA that I built.</div>
    <div>Source code: <a href="https://github.com/metju90/matthew.mt" target="_blank">https://github.com/metju90/matthew.mt </a>
    <h2>Longer version</h2>
    
    <h3>Let’s look back in time</h3>

    <p>The concept of what's today known as SPA has been around for a while. One of the first
    websites of this kind could have been <a href="https://en.wikipedia.org/wiki/Single-page_application#cite_ref-4">written in 2002</a>
     and in 2003, a <a href="https://developer.mozilla.org/en-US/docs/Archive/Inner-browsing_extending_the_browser_navigation_paradigm"> group of people published an article</a> about "Inner-browsing" which was the term
     used instead of an SPA. Essentially that article introduces the idea and explains the benefits
     of an SPA and the disadvantages
     of Server Side Rendering (SSR) at that time. In the same article you can find <a href="https://developer.mozilla.org/en-US/docs/Archive/Inner-browsing_extending_the_browser_navigation_paradigm#Source_code_for_the_sample">code sample</a> 
     of the same "Inner-browsing" website AKA SPA working on Internet Explorer versions 6 and 8. Heads-up:
     it’s cumbersome. But hey, it’s a dependency-free SPA written in 2003! In the same source code you will come across
     several <code>//ie fix</code> comments which indicates IE always needed special treatment.
     <p>Currently, I am working on a project which supports IE11 so I do feel empathy for the authors of that code.</p>

    <figure>
        <img src="/images/spa-code-2002.png" alt="Source code of a SPA in 2002" />
        <caption> The "Inner-browsing" concept - part of the source code.</caption>
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
    <a href="https://classic.yarnpkg.com/en/docs/dependency-types/#toc-peerdependencies" target="_blank">peer dependency</a>
    requiring a different version of the one that I was using.
    </p>

    <p>When i was given the opportunity to work as a frontend developer on a project which was based on React as a
    SPA, these problems were mitigated. In this project if I wanted to use a dependency first I had to install it via
    <code>npm</code> and then use ES6 syntax to <code>import</code> it as a module.<p>

    <p>Creating and reusing components was easy and the sugar-coated syntax of JSX made my developing experience
    much better. We were using a CSS in JS processor which made it almost impossible to have a CSS
    <code>class</code> or <code>id</code> naming conflict.</p>

    <p>This was very different from what I was used to. It felt like I entered into a different world of programming.
    A better one.</p>

    <p>That was also the time when I was introduced to transpilers and web bundlers. At that time we were using Webpack
    version 2. I started to become curious about how things work and I was trying to understand the daunting configurations
    of Babel and Webpack. It was really hard to understand what was going on and it took a while to get a good grasp on it.</p>

`;

export { title, date, content, summary, link };
