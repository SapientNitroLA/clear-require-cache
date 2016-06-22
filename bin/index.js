#!/usr/bin/env node

const program = require( 'commander' );
const clearCache = require( '../index' );
const packageJSON = require( '../package.json' );

//   Multiple paths can be watched by separating paths with spaces.
//   To prevent shell globbing, write paths inside quotes.
//   Guide to globs: https://github.com/isaacs/node-glob#glob-primer
//
//   Examples:
//
//     clearcache '**/*.js'
//     clearcache '**/*.js' --ignore '**/nope/*.js'
//     clearcache 'this/**/*.js' 'that/**/*.js' --ignore /pattern/i
//
//   Options:
//
//     -s, --follow-symlinks   When not set, only the symlinks themselves will be
//                             watched for changes instead of following the link
//                             references and bubbling events through the links path
//                                                         [boolean] [default: false]
//
//     -i, --ignore            Pattern for files which should be ignored. Needs to be
//                             surrounded with quotes to prevent shell globbing. The
//                             whole relative or absolute path is tested, not just
//                             filename. Supports glob patters or regexes using
//                             format: /yourmatch/i
//
//     -p, --polling           Whether to use fs.watchFile(backed by polling) instead
//                             of fs.watch. This might lead to high CPU utilization.
//                             It is typically necessary to set this to true to
//                             successfully watch files over a network, and it may be
//                             necessary to successfully watch files in other non-
//                             standard situations         [boolean] [default: false]
//
//     --poll-interval         Interval of file system polling. Effective when --
//                             polling is set                          [default: 100]
//
//     --poll-interval-binary  Interval of file system polling for binary files.
//                             Effective when --polling is set         [default: 300]
//
//     --verbose               When set, output is more verbose and human readable.
//                                                         [boolean] [default: false]
//
//     --silent                When set, internal messages of chokidar-cli won't be
//                             written.                    [boolean] [default: false]

program.usage( 'clearcache <path> [<path>...] [options]' );
program.version( packageJSON.version );
program.option( '--silent' );
program.option( '-p, --polling' );
program.option( '-s, --follow-symlinks' );
program.option( '-i, --ignore [pattern]', 'Pattern for files which should be ignored. Supports glob patters or regexes using format: /yourmatch/i' );
program.option( '--poll-interval [number]' );
program.option( '--poll-interval-binary [number]' );
program.parse( process.argv );

clearCache( program.args, {} );

