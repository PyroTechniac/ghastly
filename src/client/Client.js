'use strict';

const { Client } = require('discord.js');

/**
 * The base client for Ghastly
 * @extends external:Client
 */
class GhastlyClient extends Client {
    constructor(options) {
        super(options);
    }
}

module.exports = GhastlyClient;