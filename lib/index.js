'use strict';

module.exports.processors = {
  ".js": {
    preprocess: function(text, filename) {
      // Ignore QML head lines and transform JS import in CommonJS require
      text = text
        .replace(/^\.import (['"])([^'"]+\.js)(['"]) as (.+)$/mg, 'var $4 = require($1./$2$3);')
        .replace(/^\.(pragma|import).*$/mg, '\/* Ignored QML */');

      return [text];
    },

    postprocess: function(messages, filename) {
      // Do nothing
      return messages[0];
    }
  }
};

