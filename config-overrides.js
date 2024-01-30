module.exports = (config, env) => {
  config.module.rules.push({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        // ...
      ],
    },
  });
  return config;
};
