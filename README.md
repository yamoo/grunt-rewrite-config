# grunt-rewrite-config

> Rewrite grunt config.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rewrite-config --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rewrite-config');
```

## The "rewrite_config" task

### Overview
In your project's Gruntfile, add a section named `rewrite_config` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rewrite_config: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.rewrite
Type: `Function`
Default value: `function() {}`

A function that rewrite grunt config.

### Usage Examples

```js
grunt.initConfig({
  rewrite_config: {
    options: {
      rewrite: function(config) {
        config.foo = {};
      }
    }
  }
});
```

## Release History
Nov. 20 2016 - First release.
