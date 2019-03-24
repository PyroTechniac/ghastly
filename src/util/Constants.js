'use strict';

/**
 * @typedef {Object} ThreadClientOptions
 * @property {string|string[]} [prefix] The prefix for the client
 * @property {string} token The client's token
 */
exports.ClientOptions = {
    prefix: String.fromCharCode(8203),
    token: ''
};

exports.Messages = {
    DEPRECATED_METHOD: (deprecated, newMethod) => `The ${deprecated} method is deprecated, use the ${newMethod} instead`
};