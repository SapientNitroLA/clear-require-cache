'use strict';

const path = require( 'path' );
const globby = require( 'globby' );
const chokidar = require( 'chokidar' );
const logger = require( './lib/logger' );

/**
 * Remove a module from `require.cache`.
 *
 * @param {String} filepath The file path.
 * @returns {Boolean} If the delete was successful.
 */
function clear( filepath ) {

    if ( !require.cache[ filepath ] ) return false;

    delete require.cache[ filepath ];

    return true;
}

/**
 * Watch a module and run the `clear` function whenever it changes.
 *
 * @param {String|Array} paths The file path(s).
 * @param {Object} options https://github.com/paulmillr/chokidar/blob/master/README.md#api
 */
function watch( paths, options ) {

    const watcher = chokidar.watch( paths, options );
    const log = logger( 'clear-require-cache', options.quiet ? 4 : undefined );

    watcher.on( 'ready', () => log.info( 'watching', paths.join( ', ' ) ) );

    watcher.on( 'error', ( err ) => log.error( err ) );

    watcher.on( 'change', filepath => {
        clear( path.resolve( filepath ) ) && log.info( 'cleared', filepath );
    });
}

/**
 * Remove a module from `require.cache` whenever it changes.
 *
 * @param {String|Array} patterns Glob patterns.
 * @param {Object} options https://github.com/paulmillr/chokidar/blob/master/README.md#api
 * @param {Object} options.quiet Suppress all log messages.
 */
module.exports = function ( patterns, options ) {

    globby( patterns.concat( '!node_modules/**' ) )
    .then( ( paths ) => {
        watch( paths, options );
    });
};
