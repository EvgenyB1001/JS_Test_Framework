var searchResultsPage = module.require('../pages/SearchResultsPage');

/**
 * Step to set filter by country
 *
 * @param {string} countryText country to set filter
 */
var setCountryFilter = function(countryText) {

	searchResultsPage.showAdvancedFilters();
  	searchResultsPage.typeCountryFilter(countryText);
  	searchResultsPage.clickUpdate();
};

/**
 * Step to check results of filtering
 *
 * @param {string} expectedResult text to match
 *
 * @return {number} true - results are correct
 */
var getFilteringResult = function(expectedResult) {

	return searchResultsPage.getFilteringResult(expectedResult);
};

module.exports.setCountryFilter = setCountryFilter;
module.exports.getFilteringResult = getFilteringResult;