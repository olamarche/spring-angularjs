'use strict';

var app = angular.module('sprang', ['ngResource', 'ngRoute']).config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/books', {
				templateUrl : '/views/books/list.html',
				controller : 'BookListController'
			}).when('/books/:bookId', {
				templateUrl : '/views/books/detail.html',
				controller : 'BookDetailController'
			});
		}]);



