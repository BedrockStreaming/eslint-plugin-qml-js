'use strict';

module.exports.processors = {
  ".js": {
    preprocess: function(text, filename) {
      // For now, only ignore QML head lines
      text = text.replace(/^\.(pragma|import).*$/mg, '\/* Ignored QML */');

      return [text];
    },

    postprocess: function(messages, filename) {
      // Do nothing
      return messages[0];
    }
  }
};

