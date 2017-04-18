const defaultConfig = require('./index.default')
const providerPackage = require('frontful-config/provider/package')
const objectPath = require('object-path')

const customConfig = objectPath(providerPackage('frontful.config') || {})

const mergedConfig = (
  customConfig.get('config') ||
  require('../provider')(
    customConfig.get('options') ||
    defaultConfig.options
  )
)

module.exports = mergedConfig
