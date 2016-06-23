'use strict';

const path = require( 'path' );
const log = require( './lib/logger' );
const chokidar = require( 'chokidar' );

/**
 * @param srcPath {String|Array} The glob path(s).
 * @param options {Object} https://github.com/paulmillr/chokidar/blob/master/README.md#api
 */
module.exports = function ( srcPath, options ) {

    // Convert srcPath to array
    srcPath = [].concat.apply( [], [ srcPath ] ).map( value => {
        return path.isAbsolute( value ) ? value : path.join( process.cwd(), value );
    });

    const watcher = chokidar.watch( srcPath, options );

    log.info( 'watching', srcPath );

    watcher.on( 'change', function( file ) {

        if ( require.cache[ file ] ) {

            delete require.cache[ file ];
            log.info( 'cleared', file );
        }
    });
};