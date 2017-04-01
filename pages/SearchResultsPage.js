var locationInput = $("input[id='location-search']");

var advancedFiltersButton = $("div[data-callback='getAdvancedFacetsQuery'] button.btn-link");
var updateFilterButton = $("button.btn-primary");

var helpElement = $("span.ps-suggest-item__text>mark");

/**
 * @description Method opens advanced filters menu
 */
var showAdvancedFilters = function () {
    advancedFiltersButton.click();
};

/**
 * @description Method types advanced filter parameter - country
 *
 * @param {string} countryText Text of filter parameter
 */
var typeCountryFilter = function (countryText) {

    locationInput.sendKeys(countryText);
    helpElement.click();
};

/**
 * @description Method clicks the button to update data
 */
var clickUpdate = function () {

    updateFilterButton.click();
    browser.waitForAngular();
};

/**
 * @description Method types advanced filter parameter - country
 *
 * @param {string} countryText Text to compare results
 * @return {number} count of correct results
 */
var getFilteringResult = function (countryText) {

    return element.all(by.css("div[data-country='" + countryText +"']")).count();
}

module.exports.showAdvancedFilters = showAdvancedFilters;
module.exports.typeCountryFilter = typeCountryFilter;
module.exports.clickUpdate = clickUpdate;
module.exports.getFilteringResult = getFilteringResult;
