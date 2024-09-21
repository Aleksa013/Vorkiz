import { resolve as _resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pages = ["index"];

const entry = pages.reduce((config, page) => {
  config[page] = `./src/${page}.js`;
  return config;
}, {});

const output = {
  path: _resolve(__dirname, "dist"),
  filename: "[name].js",
  assetModuleFilename: "assets/[name][ext]",
};

const mode = "development";

const resolve = {
  extensions: [".js", ".json"],
};

const optimization = {
  splitChunks: {
    chunks: "all",
  },
};

const module = {
  rules: [
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
          options: { minimize: false },
        },
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: "sass-resources-loader",
          options: {
            resources: ["src/styles/vars.scss"],
          },
        },
      ],
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
  ],
};

const plugins = [].concat(
  pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: `./src/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      })
  )
);

const devServer = {
  compress: true,
  port: 9000,
};

export default {
  entry,
  output,
  mode,
  resolve,
  optimization,
  module,
  plugins,
  devServer,
};
