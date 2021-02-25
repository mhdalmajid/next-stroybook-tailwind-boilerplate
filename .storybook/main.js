module.exports = {
  stories: [
    '../app/components/**/*.stories.mdx',
    '../app/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        //   localIdentName: '[name]__[local]--[hash:base64:5]'
        }
      }
    }
  ]

  //   webpackFinal: async (config) => {
  //     config.module.rules.push({
  //       test: /\.scss$/,
  //       use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  //     })

  //     return config
  //   }
}
