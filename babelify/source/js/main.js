import {moduleTest as MainController} from './module';

angular.module('angular.teste', [])	
	.controller("MainController", MainController);

angular.bootstrap(document, ['angular.teste']);

