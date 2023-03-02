const componentResolver = require('./component.js');
const layoutResolver = require('./layout.js');
const alias = require('./alias.js');

module.exports = [
  { name: 'componentResolver', resolver: componentResolver },
  { name: 'layoutResolver', resolver: layoutResolver },
  ...alias,
];
