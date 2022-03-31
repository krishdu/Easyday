const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    let cmd = args._[0];
   
    if (args.v || args.version) {
        cmd = 'version';
    }
   
    if (args.h || args.help) {
        cmd = 'help';
    }

    if (args.t || args.template) {
        cmd = 'template';
    }

    if (!cmd) {
        console.log('Please provide command, see help for more information.');
        return;
    }

    switch(cmd) {
        case 'template':
            require('./template')(args);
            break;
        case 'help':
            require('./help')();
            break;
        case 'version':
            require('./version')()
            break;
        default:     
            console.log(`Provide command ${cmd}, see help for more information.`);
            break;
    }

    
}