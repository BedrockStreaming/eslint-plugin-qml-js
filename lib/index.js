'use strict';

function makePathRelative(p) {
  var delimiter = p[0];

  // Remove delimiters
  p = p.slice(1, -1);

  // Add ./ if necessary
  if (p[0] !== '.') {
    p = `./${p}`;
  }

  return `${delimiter}${p}${delimiter}`;
}

module.exports.processors = {
  ".js": {
    preprocess: function(text) {
      text = text.replace(/^\.import .+$/gm, function (line) {
        var parts = line.split(' ');

        // Importing QML modules implies having 5 elements
        if (parts.length < 5) {
          return `var ${parts[3]} = require(${makePathRelative(parts[1])});`;
        }

        return `var ${parts[4]} = {};`;
      })

      text = text.replace(/^\.pragma.*$/gm, '// Ignored QML');

      return [text];
    },
    postprocess: function(messages) {
      // Do nothing
      return messages[0];
    }
  }
};

