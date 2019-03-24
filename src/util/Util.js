'use strict';

const ThreadError = require('./ThreadError');

/**
 * Static Utility methods used within Thread
 */
class Util {
    constructor() {
        throw new ThreadError('STATIC_CLASS', this);
    }

    /**
     * Tests if a Clients token is correct
     * @param {string} token The token
     * @returns {boolean}
     */
    static testToken(token) {
        return /^[a-zA-Z0-9._-]{59}$/.test(token);
    }
}

module.exports = Util;