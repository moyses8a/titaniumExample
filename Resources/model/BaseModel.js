var HttpService = require('lib/HttpService');
var Util = require('lib/Util');

/**
 * @param {String} path, Php file path, will always have .php
 */

var BaseModel = function(path) {
    this.path = path;
    this.httpService = new HttpService();
};

/**
 * Inserts into database
 * 
 * @params {Object} data
 * @params {Function} callback
 * @param {UserModel} auth
 */

BaseModel.prototype.POST = function(data, callback, auth) {
    this.httpService.httpRequest('POST', this.httpService.url + this.path, data, callback, auth);
};

/**
 * Selects or gets from database
 * @params {Object|String} data, can be an object or a querystring
 * @params {Function} callback
 * @param {UserModel} auth
 */

BaseModel.prototype.GET = function(data, callback) {
    data = data || {};
    var querystring;
    if (Util._.isObject(data)) {
        querystring = '?';
        // foreach loop
        for (var property in data) {
            querystring += '&' + property + '=' + data[property];
        }
    } else {
        querystring = (data.indexOf('?') === -1 ? '?' : '') + data;
    }

    var url = this.httpService.url + this.path + querystring;
    this.httpService.httpRequest('GET', url, null, callback);
};

/**
 * 
 * Updates database
 * @params {Object|String} data, can be an object or a querystring
 * @params {Function} callback
 * @param {UserModel} auth
 */

BaseModel.prototype.PUT = function(data, callback, auth) {
    this.httpService.httpRequest('PUT', this.httpService.url + this.path, data, callback, auth);
};

module.exports = BaseModel;