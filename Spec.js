var homepageSteps = module.require('./steps/HomepageSteps');
var searchResultsPageSteps = module.require('./steps/SearchResultsPageSteps');

/** @const */
const COUNT_RESULT_ON_PAGE = 10;

describe('Upwork test', function() {

  it('test filtering', function() {
    
  	browser.driver.manage().window().maximize();
  	homepageSteps.openPage();
  	homepageSteps.typeSearchText("Web developers");
  	searchResultsPageSteps.setCountryFilter("Russia");
  	var result = searchResultsPageSteps.getFilteringResult("Russia");
    expect(result).toEqual(COUNT_RESULT_ON_PAGE);
  });

});