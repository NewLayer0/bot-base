import pkg from '../util/util.js';
import colors from '../util/Constants.js';

class Util {
    /**
     * @param {*} client 
     * @param {*} token 
     */
    constructor(client, token) {
        this.client = client;
        this.token = token;    
    }
}

export default class UtilSon extends Util {
    /**
     * @param {*} client 
     * @param {*} token 
     * @param {*} constants
     */
    constructor(client, token, constants) {
        super(client, token, constants);

        this.client = pkg.client;
        this.token = pkg.token;
        this.constants = colors;
    }
}
