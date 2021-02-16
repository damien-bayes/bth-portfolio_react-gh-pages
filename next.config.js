/**
 * Next.js Configurations
 * 
 * NOTE: It gets used by the Next.js server and build phases, and it's not
 * included in the browser build.
 * 
 * References:
 * 1. https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
 */

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      fs: 'fs',
    })

    config.module.rules.push({
        test: /\.md$/,
        loader: 'emit-file-loader',
        options: {
          name: 'out/[path][name].[ext]',
        },
    });

    config.module.rules.push({
      test: /\.md$/,
      loader: 'raw-loader',
    })

    // Important: return the modified config
    return config;
  }
}