const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../../");

const config = {
  staticDirs: ['../../dist'],
  stories: [
    "../../tests/**/*.percy.mdx",
    "../../tests/**/*.percy.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { legacyRootApi: false }
  },
  webpackFinal: config => {
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
        ...config.resolve,
        alias: {
          ...((config.resolve && config.resolve.alias) || {}),
          "@storybook/react-dom-shim": "@storybook/react-dom-shim/dist/react-18",
          Components: path.resolve(PROJECT_DIR, "src/components/"),
          Vendor: path.resolve(PROJECT_DIR, "vendor/"),
        },
      },
    };
  },
};

export default config;
