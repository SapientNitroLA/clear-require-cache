# Clear Require Cache #

[![Dependency Status](https://david-dm.org/sapientnitrola/clear-require-cache.svg)](https://david-dm.org/sapientnitrola/clear-require-cache)

Watch files and clear them from `require.cache` whenever changes are made.



## Installation ##

Install locally:

    $ npm install sapientnitrola/clear-require-cache --save-dev

Install globally to have `clearcache` available in your path:

    $ npm install sapientnitrola/clear-require-cache -g



## Usage ##

### Module ###

```javascript
const clearRequireCache = require( 'clear-require-cache' );
clearRequireCache( patterns, options );
```

### CLI ###

Globally installed:

```sh
clearcache [options] <pattern> [patterns...]
```

Locally installed:

```sh
./node_modules/.bin/clearcache [options] <pattern> [patterns...]
```



## Module Arguments ##


### `patterns` ###

File [glob](https://github.com/isaacs/node-glob#glob-primer) patterns. See supported [`minimatch`](https://github.com/isaacs/minimatch#features) patterns.

  - Type: `String`, `Array`
  - Required: true

**Example**:

```javascript
const clearRequireCache = require( 'clear-require-cache' );
clearRequireCache( '**/*.js' );
```

**Note**: The `node_modules` directory is ignored by default.


### `options` ###

Defaults to the options supported by [`chokidar`](https://github.com/paulmillr/chokidar#api). This object is passed directly to `chokidar`, but not all options will be relavent to the scope of `clear-require-cache`.

  - Type: `Object`
  - Required: false


#### `options.quiet` ####

Suppress all log messages.

   - Type: `Boolean`
   - Default: `false`



## CLI ##


```text
Usage: clearcache [options] <pattern> [patterns...]

Multiple glob patterns can passed as a space delimited list.
To prevent shell globbing, wrap each pattern in quotes.
Glob primer: https://github.com/isaacs/node-glob#glob-primer

Options:

  -h, --help     output usage information
  -V, --version  output the version number
  -q, --quiet    Suppress all log messages.


Examples:

  Watch all files with '.js' extension
  $ clearcache '**/*.js'

  Watch all files with '.js' extension, except ones in the "tests" directory
  $ clearcache '**/*.js' '!tests/*.js'
```


## TODO ##

  - [ ] Describe some common use cases.
  - [ ] Cross platform testing.
  - [ ] Test suite.
  - [ ] Travis CI

