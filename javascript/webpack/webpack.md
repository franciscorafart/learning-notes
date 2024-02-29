# Webpack

Webpack is a bundler tool that puts all of our modern JS source code into one html, js, and css file.

In this folder there's a webpack project built from scratch.

## Loaders
Loaders are defined in the modules property, rules array. We use loaders to inform webpack of the files that need to be processed before they are bundles.

Three parts of loades:
1) test => Regex that specifies for which files the loader applies to (.js / css)
2) loader = Which loader will do the loading work (The specified loader has to be installed)
3) options => Configure properties of the loader

## Transpiling
Process of converting one kind of javascript into another.

With webpack, we transpile jsx into js with the help of `babel`, the most popular transpiling tool.
Not all browsers support modern JS so code gets transpiled into the ES5 standard.

The transpilation process executed by babel is defined with plugins `options -> presets`

## Webpack dev server
webpack-dev-server is a package that allows us to serve our code and update automatically when we make file changes without the need to re-build the application.

The built process is fast, and the result of the bundle only exists in memory, not as a file like in the regular buil process.

It requires us to 1) Add a `start` script on package.json to serve our code and 2) add a `devServer` configuration property specifying the port and build path for our dev server.

## Source maps
When there's an error in the application code, the browser will show the location of the error in the transpilled code, which makes finding the problem in the source code vert difficult. With source maps we can get the location of our errors in the source code.

For that we add a `devtool: 'source-map',` property in the webpack config file.

## Minifing code
Bundle file sizes are large even when the application is small because the file contains all the dependencies we are using.
To avoid larger than necessary files we can minify our code with libraries like `UglifyJS`

To minify the JS we can just add `--mode=production` to the build script and webpack will do it for us

## Polyfill
Some older browsers lack support for even ES5 methods and functionalities, such as async/await and .find method. In these cases transpiling the code is not enough. To avoid issues in older browsers we can do a polyfill, which is code that adds the missing functionality.
