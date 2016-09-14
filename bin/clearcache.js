#!/usr/bin/env node

const program = require( 'commander' );
const packageJSON = require( '../package.json' );
const clearCache = require( '../' );

program.version( packageJSON.version );

program.usage( '[options] <pattern> [patterns...]' );

program.description( `Multiple glob patterns can passed as a space delimited list.
  To prevent shell globbing, wrap each pattern in quotes.
  Glob primer: https://github.com/isaacs/node-glob#glob-primer`
);

program.option( '-q, --quiet', `Suppress all log messages.\n` );

// program.option( '-p, --use-polling', `Whether to use fs.watchFile(backed by polling) instead
//                           of fs.watch. This might lead to high CPU utilization.
//                           It is typically necessary to set this to true to
//                           successfully watch files over a network, and it may
//                           be necessary to successfully watch files in other
//                           non-standard situations.\n` );
//
// program.option( '-n, --no-follow-symlinks', `Only the symlinks themselves will be watched for
//                           changes instead of following the link references
//                           and bubbling events through the links path.\n` );
//
// program.option( '--interval [number]', `Interval of file system polling. Only effective
//                           when --use-polling is set. [default: 100]\n`, Number.parseInt );

program.on( '--help', () => {

    console.log(`  Examples:

    Watch all files with '.js' extension
    $ clearcache '**/*.js'

    Watch all files with '.js' extension, except ones in the "tests" directory
    $ clearcache '**/*.js' '!tests/*.js'
    ` );
});

program.parse( process.argv );

const options = [
    'quiet',
    'usePolling',
    'followSymlinks',
    'interval'
].reduce( ( accum, key ) => {

    if ( typeof program[ key ] !== 'undefined' ) {
        accum[ key ] = program[ key ];
    }

    return accum;

}, {} );

clearCache( program.args, options );
