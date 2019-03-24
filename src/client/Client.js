'use strict';

const { Client, Util: { mergeDefault } } = require('discord.js');
const { ClientOptions } = require('../util/Constants');
const SpookyError = require('../util/SpookyError');

/**
 * The base client for Ghastly
 * @extends external:Client
 */
class SpookyClient extends Client {
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
     * Throws an error, use the {@link GhastlyClient#start start} method instead
     * @deprecated
     */
    login(token) {
        throw new SpookyError('DEPRECATED_METHOD', 'login', 'start');
    }
}

module.exports = SpookyClient;