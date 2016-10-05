import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Topnav from './topnav/topnav';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Topnav
])
.name;

export default componentModule;
