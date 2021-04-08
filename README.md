# React Boiler 01
Personal React App Boilerplate with Webpack, d3, styled-components, etc.
An overstuffed boilerplate for bringing a Matthieu-friendly React app up fast.


## Demo
[See the demo here:](https://matthieupierce.github.io/react-boiler-01).

## Suitable for
Getting something heavy but capable up fast.


## Prelaunch Checklist
1. rename dir
2. package.json
  1. "name"
  2. "homepage"
3. Git 
  1. erase .git
  2. git init, add, commit
  3. github repository
4. webpack.config.js > module.plugins
  1. HtmlWebpackPlugin
    1. title
    2. any other custom fields

## Pruning
Several redundant features for pruning:
1. CSS decision. Prune in webpack.config and npm: 
  a. pure styled-components (with 'styled-normalize' and 'babel-plugin-styled-components'; may switch to Babel Macro later),
  b. the ol' CSS/SASS/PostCSS gang:
    1. 'mini-css-extract-plugin'
    2. 'css-loader',
    3. 'postcss-loader',
    4. 'sass-loader'?
2. d3 or { narrow set of d3 components }
3. Redux or React.Context