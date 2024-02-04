const path = require('path');

// The folder name that will be used in the concretecms themes directory.
let themeName = "flintstone";

// The export path to the actual concretecms theme directory.
// Default export path is: ../cms/application/themes/flintstone.
let parentDirectory = path.resolve(__dirname, '..');
let concreteThemePath = `${parentDirectory}/cms/application/themes/${themeName}`;

const assetsLoader = (mix) => {
  const cssLocation = "assets/css/presets"

  // lang('<1>', '<2>')
  // 1. Path of where the development scss can be found. 
  // 2. Path of where the production css should be exported to.
  mix
    .sass(`${cssLocation}/default/main.scss`, 'css/skins/default.css')
    .sass(`${cssLocation}/wilma/main.scss`, 'css/skins/wilma.css')
    .js('assets/js/main.js', 'js/main.js');
}

// Exports
exports.module = {
  parentDirectory,
  concreteThemePath,
  themeName,
  assetsLoader
}