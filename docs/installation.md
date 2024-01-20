# React Project Without Create React App

This repository provides a basic setup for a React project without using Create React App. Follow the steps below to initialize and configure the project.

## Getting Started

### 1. Initialize a New npm Project

npm init -y

### 2. Install React and React-DOM
npm install react react-dom


### 3. Install Babel and Babel Presets
npm install @babel/core @babel/preset-env @babel/preset-react --save-dev


### 4. Install Webpack and Webpack Dev Server
npm install webpack webpack-cli webpack-dev-server --save-dev


### 5. Install Webpack Loaders and Plugins
npm install babel-loader style-loader css-loader html-webpack-plugin --save-dev

### 6. Create Babel Configuration File (babel.config.js)
// babel.config.js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}


### 7. Create Webpack Configuration File (webpack.config.js)
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
};


### 8. Create React Component (App.js)
// src/App.js
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React without Create React App!</h1>
    </div>
  );
};

export default App;


### 9. Create HTML Template (public/index.html)

<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React without CRA</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>


### 10. Update package.json with Scripts
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}


### 11. Run the Development Server
npm start ---> Visit http://localhost:3000 to view the app.


### 12. Build for Production
npm run build ---> This will generate a production-ready build in the dist directory







# React Project Without Create React App (Using Parcel)

This repository provides a basic setup for a React project without using Create React App, using Parcel as the bundler. Follow the steps below to initialize and configure the project.

## Getting Started

### 1. Initialize a New npm Project
npm init -y


### 2. Install React and React-DOM
npm install react react-dom


### 3. Install Parcel
npm install -D parcel

### 4. Create React Component (App.js)
// src/App.js
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React without Create React App and using Parcel!</h1>
    </div>
  );
};

export default App;


### 5. Create HTML Template (public/index.html)
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React without CRA and Parcel</title>
</head>
<body>
  <div id="root"></div>
  <script src="./src/index.js"></script>
</body>
</html>


### 6. Create index.js for Rendering
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


### 7. Update package.json with Scripts
"scripts": {
  "start": "parcel public/index.html",
  "build": "parcel build public/index.html"
}


### 8. Run the Development Server
npm start ---> Visit http://localhost:1234 to view the app.



### 9. Build for Production
npm run build ---> This will generate a production-ready build in the dist directory


