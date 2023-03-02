const path = require('path');

function templateTransformer(code, id) {
  // Set the layout attribute on the template element
  const match = /<template[^>]*>([\s\S]*?)<\/template>/i.exec(code);
  if (match) {
    const template = match[1].trim();
    const layout = /layout\s*=\s*"(.+?)"/i.exec(template)?.[1];
    if (layout) {
      return `<template layout="${layout}">\n${template}\n</template>\n`;
    }
  }
  return code;
}

module.exports = templateTransformer;
