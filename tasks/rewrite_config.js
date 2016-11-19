/*
 * grunt-rewrite-config
 * https://github.com/yamoo/grunt-rewrite-config
 *
 * Copyright (c) 2016 Marty
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('rewrite_config', 'Rewrite grunt config.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      rewrite: function() {}
    });

    options.rewrite(grunt.config.data);
  });

};
