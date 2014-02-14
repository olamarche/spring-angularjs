var app = angular.module('sprang', ["ngResource", "spang.services"]).config(
		function($routeProvider) {
			$routeProvider.when('/books', {
				templateUrl : '/views/books/list.html',
				controller : 'BookListController'
			}).when('/books/:bookId', {
				templateUrl : '/views/books/detail.html',
				controller : 'BookDetailController'
			});
		});



