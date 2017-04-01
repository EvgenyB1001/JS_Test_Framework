var homepage = module.require('../pages/Homepage');

/**
 * Step to open homepage
 */
var openPage = function () {

    homepage.get();
};

/**
 * Step to search informaation
 *
 * @param {string} searchText text to search
 */
var typeSearchText = function (searchText) {
	
    homepage.typeTextToFind(searchText);
};

module.exports.openPage = openPage;
module.exports.typeSearchText = typeSearchText;