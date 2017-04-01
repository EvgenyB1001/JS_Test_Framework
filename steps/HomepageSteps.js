var homepage = module.require('../pages/Homepage');

/**
 * @description Step to open homepage
 */
var openPage = function () {

    homepage.get();
};

/**
 * @description Step to search informaation
 *
 * @param {string} searchText text to search
 */
var typeSearchText = function (searchText) {
	
    homepage.typeTextToFind(searchText);
};

module.exports.openPage = openPage;
module.exports.typeSearchText = typeSearchText;