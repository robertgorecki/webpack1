module.exports = {
    entry: {
        hmr: "webpack/hot/dev-server",
        js: "./src/main.js",
        html: "./src/index.html",
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    
    module: {
        loaders: [
            {
                test: /[\/\\]src[\/\\].*\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /[\/\\]src[\/\\].*\.js$/,
                loaders: ["babel"],
            }
        ],
    },
}