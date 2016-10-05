// external
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

// internal
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

// external styles
import 'normalize.css';
import 'angular-material/angular-material.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
