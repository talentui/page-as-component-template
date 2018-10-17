const path = require("path");
const merge = require("webpack-merge");
const Analyzer = require("webpack-bundle-analyzer");
const { appId, componentCode, name, version } = require("./package.json");
const library = name.replace(/@|\-|\//g, "_");
const buildProd =
    require("@talentui/webpack-config/src/helpers/parse-mode")() ===
    "production";
const webpackConfig = require("@talentui/webpack-config")({
    entry: {
        main: "@talentui/thunder-component-bootstrap/dynamic"
    },
    port: 3001,
    extractStyles: false,
    // alias: {
    //     "react": path.resolve(__dirname, 'node_modules/react')
    // }
    define: {
        "process.env": {
            library: JSON.stringify(library),
            packageName: JSON.stringify(name),
            appId: JSON.stringify(appId),
            componentCode: JSON.stringify(componentCode),
            componentEntry: JSON.stringify(path.resolve(__dirname, "src/index"))
        }
    },
    projectType: "module"
});

module.exports = merge(webpackConfig, {
    plugins: buildProd
        ? [
              new Analyzer.BundleAnalyzerPlugin({
                  analyzerMode: "static",
                  generateStatsFile: true,
                  reportFilename: `report-${version}.html`,
                  statsFilename: `stats-${version}.json`
              })
          ]
        : []
});
