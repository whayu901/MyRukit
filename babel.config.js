module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@hooks": "./src/utils/hooks/index",
          "@themes": "./src/themes/index",
          "@store": ["./src/store/store"],
          "@actions": "./src/store/actions/",
          "@component-moleculs": "./src/component/moleculs",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
