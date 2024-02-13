const path = require('path');

const nextConfig = {
  webpack(config) {

    config.module.rules.push(
      {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] }
      }
    )
    // if not work, try `config.module.rules[2]...`
    config.module.rules[3].oneOf.forEach((one) => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
};

module.exports = nextConfig;
