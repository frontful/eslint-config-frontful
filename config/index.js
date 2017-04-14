const defaultConfig = require('./index.default')
const objectPath = require('object-path')

const customConfig = objectPath({})

const mergedConfig = (
  customConfig.get('config') ||
  require('../provider')(
    customConfig.get('options') ||
    defaultConfig.options
  )
)

module.exports = mergedConfig
