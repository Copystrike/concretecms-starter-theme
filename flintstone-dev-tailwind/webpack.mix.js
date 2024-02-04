const properties = require('./properties.config.js');
const WatchExternalFilesPlugin = require('webpack-watch-external-files-plugin');
const mix = require('laravel-mix');

console.info(`Exporting ${properties.themeName} theme to: ${properties.concreteThemePath}`);

// Webpack configuration. 
mix.webpackConfig({
    externals: {
        jquery: 'jQuery',
        bootstrap: true,
        vue: 'Vue',
        moment: 'moment'
    },
    output: {
        path: properties.concreteThemePath,
    },
    plugins: [
        new WatchExternalFilesPlugin({
            files: [
                `${properties.concreteThemePath}**/*.{php,html}`,
                `!${properties.concreteThemePath}**/css/**/*`,
                `!${properties.concreteThemePath}**/js/**/*`
            ]
        })
    ]
});

mix.options({
    processCssUrls: false
});

properties.assetsLoader(mix);