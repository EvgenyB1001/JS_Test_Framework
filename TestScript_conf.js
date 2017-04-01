exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['Spec.js'],

  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 40000
  }
  
};