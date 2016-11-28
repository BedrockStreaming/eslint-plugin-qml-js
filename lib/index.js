'use strict';

module.exports.processors = {
  ".js": {
    preprocess: function(text, filename) {
      // Ignore QML head lines and transform JS import in ES6 import
      text = text
        .replace(/^\.import (['"][^'"]+\.js['"]) as (.+)$/mg, 'import $2 from $1;')
        .replace(/^\.(pragma|import).*$/mg, '\/* Ignored QML */');

      return [text];
    },

    postprocess: function(messages, filename) {
      // Do nothing
      return messages[0];
    }
  }
};

