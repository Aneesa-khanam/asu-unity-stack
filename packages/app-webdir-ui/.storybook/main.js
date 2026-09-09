const common = require("../webpack/webpack.common");

const config = {
  staticDirs: ['../dist'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.js"],
  framework: {
    name: "@storybook/react-webpack5",
    options: { legacyRootApi: false }
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        {
          loader: "sass-loader",
          options: {},
        },
      ],
    });
    return {
      ...config,
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          ...((config.resolve && config.resolve.alias) || {}),
          ...common.resolve.alias,
          "@storybook/react-dom-shim": "@storybook/react-dom-shim/dist/react-18",
        },
      },
    };
  },
};

export default config;
