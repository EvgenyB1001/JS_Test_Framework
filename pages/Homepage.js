var searchInput = $("input[id='q']");

/**
 * @description Method opens page with current URL
 */
var get = function() {
  
    browser.get('https://www.upwork.com');
};

/**
 * @description Method types text, got as parameter, to search information
 *
 * @param {string} text Text to search
 */
var typeTextToFind = function(text) {

    searchInput.sendKeys(text);
    searchInput.submit();
};

module.exports.get = get;
module.exports.typeTextToFind = typeTextToFind;