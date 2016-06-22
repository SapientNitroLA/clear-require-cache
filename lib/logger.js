/**
 * Simpler logging utility
 */
function logger( level, prefix, message ) {

    if ( !message ) {
        message = prefix;
        prefix = null;
    }

    prefix = prefix ? ` ${prefix} ➡︎` : '';

    const tag = '[clear-require-cache]';

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
        info: `${levelColor[ level ]}${tag}${style.green}`,
        warn: `${levelColor[ level ]}${tag} ${style.yellow}${style.invert}WARN${style.reset}${style.yellow}`,
        error: `${levelColor[ level ]}${tag} ${style.red}${style.invert}ERROR${style.reset}${style.red}`
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

module.exports = {
    info: ( prefix, message ) => logger( 'info', prefix, message ),
    warn: ( prefix, message ) => logger( 'warn', prefix, message ),
    error: ( prefix, message ) => logger( 'error', prefix, message )
};