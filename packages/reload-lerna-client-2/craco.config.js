const path = require("path");
// const { getLoader, loaderByName } = require("@craco/craco");
// const absolutePath = path.join(__dirname, "../components");
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const tsRule = webpackConfig.module.rules[1].oneOf[2];
      tsRule.include = undefined;
      tsRule.exclude = /node_modules/;
      // console.log(webpackConfig.module.rules[1].oneOf[2]);
      // process.exit();
      // const { isFound, match } = getLoader(
      //   webpackConfig,
      //   loaderByName("babel-loader")
      // );
      // if (isFound) {
      //   match.loader.options.presets.push(["@babel/preset-react"]);
      //   match.loader.options.presets.push([
      //     "@babel/preset-typescript",
      //     { allExtensions: true, isTSX: true },
      //   ]);

      //   //   const include = Array.isArray(match.loader.include)
      //   //     ? match.loader.include
      //   //     : [match.loader.include];
      //   //   match.loader.include = include.concat[absolutePath];
      // }
      return webpackConfig;
    },
  },
};
