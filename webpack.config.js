const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "min-max.js",
    library: "minMax",
    libraryTarget: "umd",
    globalObject: "this"
  }
};
