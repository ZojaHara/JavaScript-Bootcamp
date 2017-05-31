const { resolve } = require("path");

module.exports = {

    entry: {
      polyfills:"babel-polyfill",
      app:"./js_start/scripts.js"
    },

    output: {
        path: resolve(__dirname + "/js_finish/"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }

};




// const { resolve } = require("path");
//
// module.exports = {
//
//     entry: {
//         eQuery: "./src/js/scripts.js"
//     },
//
//     output: {
//         path: resolve(__dirname + "/dist/js/"),
//         filename: "[name].js"
//     },
//
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         plugins: ["transform-runtime"],
//                         presets: ["es2015"]
//                     }
//                 }
//             }
//         ]
//     }
//
// };
