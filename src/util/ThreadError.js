'use strict';

const { Messages } = require('./Constants');

/**
 * Internal Error class for throwing universal error methods
 * @extends Error
 * @private
 */
class ThreadError extends Error {
    constructor(key, ...args) {
        // eslint-disable-next-line eqeqeq
        if (Messages[key] == null) throw new TypeError(`The key ${key} does not exist`);

        const message = typeof Messages[key] === 'function' ? Messages[key](...args) : Messages[key];

        super(message);

        this.code = key;
    }

    get name() {
        return `ThreadError [${this.code}]`;
    }
}

module.exports = ThreadError;