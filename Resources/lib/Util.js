var Util = {
	// underscore Library
	_ : require('lib/Underscore'),
	/**
	 * Is the divice running the iOS os
	 */
	isIOS : function () {
		return Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad';
	},
	/**
	 * Is the divice running the Android os
	 */
	isAndroid : function () {
		return Ti.Platform.osname == 'android';
	},
	/**
	 * Is the divice an iPhone
	 */
	isIPhone : function () {
		return Ti.Platform.osname == 'iphone';
	},
	/**
	 * Is the divice a Tablet
	 */
	isTablet : function () {
		var platform = Ti.Platform.osname;
		var isTablet = false;
		switch(platform) {
			case 'ipad': isTablet = true; break;
			case 'android':
				// For this example all devices are handheld
				// var psc = Ti.Platform.Android.physicalSizeCategory;
				// var tiAndroid = Ti.Platform.Android;
				// isTablet = psc === Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE ||
						   // psc === Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE;
			break;
			default:
			// isTablet = Math.min(Ti.Platform.DisplayCaps.platformHeight, Ti.Platform.DisplayCaps.platformWidth) >= 400;
		}
		return isTablet;
	},
	/**
	 * Returns a date formatted for our recipe table view cell
	 * @param {Date} date
	 */
	formatDate: function (date) {
		// if the date is not given then use the current datetime
		date = date || new Date();
		var minutes = date.getMinutes();
		if(parseInt(minutes) < 10) {
			minutes = "0" + minutes;
		}
		var datestr = ((date.getMonth() + 1) + "/" + date.getDay() + "/" + date.getFullYear())
		if (date.getHours() >= 12) {
			datestr += " " + (date.getHours() == 12 ? date.getHours() : date.getHours() - 12) + minutes + "PM";
		} else {
			datestr += " " + date.getHours() + ":" +  minutes + "AM";
		}
		return datestr;
	}
};

module.exports = Util;
