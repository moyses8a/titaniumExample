var Util = require('lib/Util');
var BaseModel = require('model/BaseModel');

var _keyword = 'local_data';
var DataModel = new BaseModel('/master/data.json');
/**
 * returns the categories, if a callback is provided
 * then we will get the categories from the web service
 * otherwise we will just return the categories stores locally
 * 
 * @param {Function} callback
 */
DataModel.getData = function(callback) {
    if (callback) {
        this.GET({}, function(result) {
            Ti.App.Properties.setObject(_keyword, result);
            callback(result);
        });
        return;
    }
    return Ti.App.Properties.getObject(_keyword, null);
};

/**
 * Get categories, just the names, not the object
 * 
 * @return {Array<String>}
 */

// CategoryModel.getCategoryNames = function(callback) {
// 	var categories = this.getCategories();
// 	var names = [];
// 	for (var i=0; i < categories.length; i++) {
// 		var category = categories[i];
// 		names.push(category.name);
// 	};
// 	return names;
// };


/**
 * Helper method to return the category object by name
 * 
 * @return {Object}
 */

// CategoryModel.getCategoryByName = function(name) {
// 	var categories = this.getCategories();
// 	if (categories !== null) {
// 		for (var i=0; i < categories.length; i++) {
// 		  if (categories[i] === name) {
// 		  	return category;
// 		  }

// 		};
// 	};
// 	return null;
// };

module.exports = DataModel;