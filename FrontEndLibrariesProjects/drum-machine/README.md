# Build a Drum Machine

This project was made without [Create React App](https://github.com/facebook/create-react-app).

I used:
- [Webpack 4](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

[`Link to the published project`](https://natcancein.github.io/drum-machine/)

## Steps to build the App

### 0. Make Folder Structure:
- Project
  - src
     - components
     - styles
### 1. **_npm init or npm init -y_** to skip all the questions
### 2. **_npm install webpack webpack-cli --save-dev_** to install Webpack
### 3. **_npm install react react-dom --save_** to install React
### 4. **_npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev_** to install babel-core, babel-loader, babel-preset-env, babel-preset-react as a dev dependency.
### 5. **Create an index.js** file inside root of the /src folder, for now add the following line code inside it.This file will be the entry point to our app.
<!--
<!DOCTYPE html> <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Boilerplate</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
-->

### 6. **Create a webpack.config.js** in root directory

```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
```
### 7. Install css-loader and style-loader

- **babel-loader:** load JSX/JavaScript files and 
- **css-loader:** load and bundle all of the CSS files into one file
- **style-loader:** will add the styles inside the style tag of the document.

### 8. **_npm install css-loader style-loader --save-dev_** install css-loader and style-loader as a dev-dependency.
### 9. **create a .babelrc file** inside root of the project directory, with this: 
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
- **preset-env:** is used to transpile the ES6/ES7/ES8 code to ES5.
- **preset-react:** This preset is used to transpile JSX code to ES5.

### 10. Compiling files with Webpack:
Add the this inside the script object of the package.json file:
```
"start": "webpack --mode development --watch",
"build": "webpack --mode production"
```
and using this command: **_npm start_**
index_bundle.js file it will create under the /dist directory which will contain transpiled ES5 code from index.js file.

### 11. Create **App.js** inside the components with this:

```
import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;
```
### 12. Create **App.css** inside the styles folder with this (this file is used to make sure the css-loader and style-loader are working correctly.):

```
h1 {
    color: #27aedb;
    text-align: center;
}
```

## 13. Modify the **index.js** file, with this:

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(<App />, document.getElementById("root"));
```

### 14. Install the html-webpack-plugin as a dev-dependency 
**_npm install html-webpack-plugin --save-dev_**
this plugin generates an HTML file==> injects the script inside the HTML file and ==> writes this file to dist/index.html.

### 15. Configure the plugin inside the webpack.config.js file with this: 

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
```

### 16. **_npm start_**
You will get output inside the /dist folder of project, then open the index.html in a web browser.

To have webpack watch our changes and refresh webpage whenever any change is made to our components, we can install webpack-dev-server (with this you don´t have to refresh manually).

### 17.Install webpack-dev-server as a dev-dependency: _**npm install webpack-dev-server --save-dev**_

Then channge **package.json start script** : 
``` "start": "webpack-dev-server --mode development --open --hot" ```

_--open and --hot which opens and refreshes the web page whenever any change is made to components._

### 18. Finally run **_npm start_**