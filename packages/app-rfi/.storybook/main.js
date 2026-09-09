const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");
const common = require("../webpack/webpack.common");

const config = {
  staticDirs: ['../dist'],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { legacyRootApi: false }
  },
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [".js", ".jsx"],
        alias: {
          ...((config.resolve && config.resolve.alias) || {}),
          ...common.resolve.alias,
          "@storybook/react-dom-shim": "@storybook/react-dom-shim/dist/react-18",
          Components: path.resolve(PROJECT_DIR, "src/components/"),
        },
      },
    };
  },

  docs: {
    autodocs: true
  }
};

export default config;
