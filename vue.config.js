const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background.js',
      outputDir: 'dist_electron',
      builderOptions: {
        appId: 'com.example.yourapp',
        productName: 'YourApp',
        directories: {
          output: './dist_electron'
        },
        files: [
          'dist_electron/**/*'
        ],
        extraResources: [
          {
            from: 'src/background.js',
            to: 'background.js',
            filter: ['**/*']
          }
        ]
      }
    }
  }
})
