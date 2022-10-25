import pkg from '../util/util.js';

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
     */
    constructor(client, token) {
        super(client, token);

        this.client = pkg.client;
        this.token = pkg.token;
    }
}