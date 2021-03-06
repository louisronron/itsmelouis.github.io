'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  
  app.import("vendor/bootstrap/bootstrap-4.5.0/css/bootstrap-greenyred.min.css");
  app.import("vendor/jquery/jquery-3.5.1.min.js");
  app.import("vendor/popperjs/popper.min.js");
  app.import("vendor/bootstrap/bootstrap-4.5.0/js/bootstrap.min.js");

  
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
