const common = require("../webpack/webpack.common");

const config = {
  staticDirs: ['../dist'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.js"],
  framework: {
    name: "@storybook/react-webpack5",
    options: { legacyRootApi: false }
  },
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: common.module.rules },
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

  docs: {
    autodocs: true
  }
};

export default config;
