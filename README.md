<!-- @format -->

# matthew.mt

This is an experimental project which uses WebComponents to create a Single Page Application (SPA). This is also the source code of my personal website which runs on [matthew.mt](http://matthew.mt)

## Transpiler, bundler, dependency and sophistication-free SPA

This is a dependency-free\*\* SPA which works on modern browsers. Whilst I do acknowledge that web bundlers come with features which optimize performance, the objective of this mini project was to build a dependecy free SPA using just the browser's API.

<sup>\*\* Except for one dependency which handles routing on the client. Good to know: the dependecy [(route-slot)](https://github.com/andreasbm/router-slot) itself does not have any dependencies and just uses the browser's API</sub>

## Run the app

To run this application first you need to install a dependency to serve the client. The aforementioned dependency of the SPA is downloaded at run time.

`npm i`

Then run it:

`npm start`
