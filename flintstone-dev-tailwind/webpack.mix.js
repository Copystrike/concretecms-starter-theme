const properties = require('./properties.config');
const WatchExternalFilesPlugin = require('webpack-watch-external-files-plugin');
const mix = require('laravel-mix');

console.info(`Exporting ${properties.themeName} theme to: ${properties.concreteCmsPath}`);

// Webpack configuration. 
mix.webpackConfig({
    externals: {
        jquery: 'jQuery',
        bootstrap: true,
        vue: 'Vue',
        moment: 'moment'
    },
    output: {
        path: properties.concreteCmsPath,
    },
    plugins: [
        new WatchExternalFilesPlugin({
            files: [
                `${properties.concreteCmsPath}**/*.{php,html}`,
                `!${properties.concreteCmsPath}**/css/**/*`,
                `!${properties.concreteCmsPath}**/js/**/*`
            ]
        })
    ]
});

mix.options({
    processCssUrls: false
});

properties.assetsLoader(mix);