module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:react-native-dotenv"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            ui: "./ui",
            components: "./components",
            screens: "./screens",
            store: "./redux",
            constants: "./constants",
						navigation: "./navigation",
						services: "./services",
						utils: "./utils"
          }
        }
      ]
    ]
  };
};
