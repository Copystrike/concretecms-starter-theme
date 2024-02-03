let mix = require('laravel-mix');
const path = require('path');
const WatchExternalFilesPlugin = require('webpack-watch-external-files-plugin');

// Edit `themeName` and `concreteCmsPath` to your desires.

// The folder name that will be used in the concretecms themes directory.
let themeName = "flintstone";

// The export path to the actual concretecms.
// Default export path is: ../cms/application/themes/flintstone.
let parentDirectory = path.resolve(__dirname, '..');
let concreteCmsPath = `${parentDirectory}/cms/application/themes/${themeName}`;

console.info(`Exporting ${themeName} theme to: ${concreteCmsPath}`);

// Webpack configuration.

mix.webpackConfig({
    externals: {
        jquery: 'jQuery',
        bootstrap: true,
        vue: 'Vue',
        moment: 'moment'
    },
    output: {
        path: concreteCmsPath,
    },
    plugins: [
        new WatchExternalFilesPlugin({
            files: [
                `${concreteCmsPath}**/*.{php,html}`,
                `!${concreteCmsPath}**/css/**/*`,
                `!${concreteCmsPath}**/js/**/*`
            ]
        })
    ]
});

mix.options({
    processCssUrls: false
});


// This can be left as is, aslong as the variables at the top are set correctly or changes need to be made.
mix
    // lang('<1>', '<2>')
    // 1. Path of where the development scss can be found. 
    // 2. Path of where the production css should be exported to.
    .sass('assets/css/presets/default/main.scss', 'css/skins/default.css')
    .sass('assets/css/presets/wilma/main.scss', 'css/skins/wilma.css')
    .js('assets/js/main.js', 'js/main.js');
