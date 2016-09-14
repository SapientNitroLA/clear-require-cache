/**
 * Simpler logging function.
 *
 * @param {String} tag The tag shows in brackets at the beginning of each log: "[text]".
 * @param {String} level One of the following: 'info', 'warn', or 'error'.
 * @param {String} prefix The prefix to prepend to the message.
 * @param {String} message The message to log.
 */
function logger( { tag, level, prefix, message } ) {

    const style = {
        reset: '\x1b[0m',
        hicolor: '\x1b[1m',
        invert: '\x1b[7m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        red: '\x1b[31m'
    };

    const levelColor = {
        info: `${style.green}`,
        warn: `${style.yellow}`,
        error: `${style.red}`
    };

    const heading = {
        info: `${levelColor[ level ]}[${tag}]${style.green}`,
        warn: `${levelColor[ level ]}[${tag}] ${style.yellow}${style.invert}WARN${style.reset}${style.yellow}`,
        error: `${levelColor[ level ]}[${tag}] ${style.red}${style.invert}ERROR${style.reset}${style.red}`
    };

    const output = `${heading[ level ]}${style.hicolor}${prefix}${style.reset}${levelColor[ level ]}`;

    if ( Array.isArray( message ) ) {

        message.forEach( msg => {
            process.stderr.write( `${output} ${msg}\n` );
        });

    }
    else {

        process.stderr.write( `${output} ${message}\n` );
    }

    process.stderr.write( `${style.reset}` );
}

/**
 * Set the log level.
 *
 * @param {String} tag The tag shows in brackets at the beginning of each log: "[text]".
 * @param {Number} [num] The logging levels to include: info: 1; warn: 2; error: 3; quiet: 4.
 * @returns {Object} The configured logging methods.
 */
module.exports = function ( tag, num ) {

    const levels = [ 'info', 'warn', 'error' ];

    // const methods = {
    //     info: ( prefix, message ) => logger( 'info', prefix, message ),
    //     warn: ( prefix, message ) => logger( 'warn', prefix, message ),
    //     error: ( prefix, message ) => logger( 'error', prefix, message )
    // };

    num = num ? Number.parseInt( num ) : 1;

    if ( !tag ) logger( 'logger', 'error', null, 'No tag text defined.' );

    return levels.reduce( ( accum,  level, index ) => {

        if ( num <= index + 1 ) {

            accum[ level ] = ( prefix, message ) => {

                if ( typeof message === 'undefined' ) {

                    message = prefix;
                    prefix = false;
                }

                prefix = prefix ? ` ${prefix} ➡︎` : '';

                logger( { tag, level, prefix, message } );
            };
        }

        else accum[ level ] = () => false;

        return accum;

    }, {} );
};
