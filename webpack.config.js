const path = require('path')
const merge = require('webpack-merge');
const Analyzer = require('webpack-bundle-analyzer');


const webpackConfig =  require("@talentui/webpack-config")({
    entry: {
        main: './src/index'
    },
    port: 3001,
    extractStyles: false,
    // alias: {
    //     "react": path.resolve(__dirname, 'node_modules/react')
    // }
    define: {
        __HEHE: false
    },
    projectType: 'module'
});

module.exports = merge(webpackConfig, {
    plugins: [
        new Analyzer.BundleAnalyzerPlugin({})
    ]
});