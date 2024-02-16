# Webpack

Webpack is a bundler tool that puts all of our modern JS source code into one html, js, and css file.

In this folder there's a webpack project built from scratch.

## Loaders
Loaders are defined in the modules property, rules array. We use loaders to inform webpack of the files that need to be processed before they are bundles.

Three parts of loades:
1) test => Specifies for which files the loader is for (.js)
2) loader = Which loader will do the loading work (The specified loader has to be installed)
3) options => Configure properties of the loader

## Transpiling
Process of converting one kind of javascript into another.

With webpack, we transpile jsx into js with the help of `babel`, the most popular transpiling tool.
Not all browsers support modern JS so code gets transpiled into the ES5 standard.

The transpilation process executed by babel is defined with plugins `options -> presets`