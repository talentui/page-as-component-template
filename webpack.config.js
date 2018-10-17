const path = require('path')
module.exports = require("@talentui/webpack-config")({
    entry: {
        main: './src/index'
    },
    port: 3001
    // alias: {
    //     "react": path.resolve(__dirname, 'node_modules/react')
    // }
})