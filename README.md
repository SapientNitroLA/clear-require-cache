# Clear Require Cache #

And small wrapper around <https://github.com/paulmillr/chokidar> for clearing files from `require.cache` whenever they change.



## Installation ##

```
$ npm install --save-dev git+ssh://git@us.tools.sapient.com/cfdp/clear-require-cache.git
```



## Usage ##

```
const clearRequireCache = require( 'clear-require-cache' );

if ( process.env.NODE_ENV === 'development' ) {

    clearRequireCache( 'path/to/**/*.js', options );
}
```



## Options ##


### `srcPath` ###

Path to file(s) to watch.

  - type: `String|Array`
  - required: yes
  - default: `undefined`
  

### `options` ###

All [`chokidar`](https://github.com/paulmillr/chokidar/blob/master/README.md#api) options should be supported (TODO: test).

  - type: `Object`
  - required: no
  - default: `undefined`


