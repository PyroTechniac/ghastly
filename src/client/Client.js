'use strict';

const { Client, Util: { mergeDefault } } = require('discord.js');
const { ClientOptions } = require('../util/Constants');
const ThreadError = require('../util/ThreadError');
const Util = require('../util/Util');

/**
 * The base client for Ghastly
 * @extends external:Client
 */
class ThreadClient extends Client {
    /**
     * Initializes a new client
     * @param {ThreadClientOptions} options Options to use
     */
    constructor(options) {
        options = mergeDefault(ClientOptions, options);
        super(options);

        /**
         * The client's prefix, can be a string or an array of prefixes
         * @type {?string|string[]}
         */
        this.prefix = options.prefix;

        /**
         * The client's token
         * @type {string}
         * @private
         */
        this._token = options.token;
    }

    /**
     * Throws an error, use the {@link ThreadClient#start start} method instead
     * @deprecated
     */
    login(token) {
        throw new ThreadError('DEPRECATED_METHOD', 'login', 'start');
    }

    /**
     * Initializes and logs the Client in
     */
    async start() {
        await this.init();
        return super.login(this._token);
    }

    /**
     * Private initialization method
     * @private
     */
    async init() {
        if (!Util.testToken(this._token)) throw new ThreadError('PROVIDE_INVALID', 'token');
    }
}

module.exports = ThreadClient;