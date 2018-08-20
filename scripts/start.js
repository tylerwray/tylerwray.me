// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// Ensure environment variables are read.
require('../config/env')

const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const {
  choosePort,
  createCompiler,
  prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const paths = require('../config/paths')
const config = require('../config/webpack.config.dev')
const createDevServerConfig = require('../config/webpackDevServer.config')

const useYarn = false

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1)
}

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  )
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  )
  console.log(`Learn more here: ${chalk.yellow('http://bit.ly/2mwWSwH')}`)
  console.log()
}

choosePort(HOST, PORT)
  .then(port => {
    if (port === null) {
      // We have not found a port.
      return
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
    const appName = require(paths.appPackageJson).name
    const urls = prepareUrls(protocol, HOST, port)
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler(webpack, config, appName, urls, useYarn)
    const serverConfig = createDevServerConfig(urls.lanUrlForConfig)
    const devServer = new WebpackDevServer(compiler, serverConfig)
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
      if (err) {
        console.log(err)
        return
      }
      console.log(chalk.cyan('Starting the development server...\n'))
      openBrowser(urls.localUrlForBrowser)
    })
    ;['SIGINT', 'SIGTERM'].forEach(sig => {
      process.on(sig, () => {
        devServer.close()
        process.exit()
      })
    })
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  })
