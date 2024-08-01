import * as path from 'path'
const isRspack = process.argv[1].split('/').pop().includes('rspack')
let __dirname = path.dirname(new URL(import.meta.url).pathname)

/** @type {import("@rspack/core").Configuration} */
export default {
  entry: {
    main: './index.js',
  },
  devtool: false,
  output: {
    clean: true,
    path: path.resolve(
      __dirname,
      isRspack ? `./dist-rspack` : `./dist-webpack`
    ),
    filename: '[name].js',
    umdNamedDefine: true,
    libraryTarget: 'umd',
    library: {
      name: `[name]`,
      type: 'umd',
      umdNamedDefine: true,
    },
  },
  optimization: {
    minimize: false,
  },
  experiments: isRspack
    ? {
        rspackFuture: {
          bundlerInfo: {
            force: false,
          },
        },
      }
    : {},
}
