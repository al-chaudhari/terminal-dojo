const readline = require('readline')
/**
 * Base Argument Class
 */
class Argv {
    constructor() {
        const args = process.argv;
        console.log(args);
    }
}

const arg = new Argv();