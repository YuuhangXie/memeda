const { override, fixBabelImports, addWebpackAlias, addBabelPlugins } = require('customize-cra')
const path = require('path')

module.exports = override(
  ...addBabelPlugins(     // 装饰器@
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ),
  fixBabelImports('import', {    // antd-mobile 组件库
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({    // 添加通用路径
    ['assets']: path.resolve(__dirname, 'src/assets'),
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['pages']: path.resolve(__dirname, 'src/pages'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
    ['components']: path.resolve(__dirname, 'src/components'),
    ['utils']: path.resolve(__dirname, 'src/utils'),
    ['store']: path.resolve(__dirname, 'src/store')
  })
)