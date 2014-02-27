'use strict';

angular.module('sprang', ['ngResource', 'ngRoute', 'sprang.controllers', 'sprang.services']).config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/books', {
				templateUrl : '/views/books/list.html',
				controller : 'BookListController'
			}).when('/books/:bookId', {
				templateUrl : '/views/books/detail.html',
				controller : 'BookDetailController'
			});
		}]);



