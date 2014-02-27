angular.modules('sprang.controllers', [])

.controller('BookListController', function($scope, Book) {
	$scope.books = Book.query();

	$scope.deleteBook = function(book) {
		book.$delete(function() {
			$scope.books.splice($scope.books.indexOf(book), 1);
			toastr.success("Deleted");
		});
	}
})
.controller('BookDetailController', function($scope, $routeParams, $location, Book) {
	var bookId = $routeParams.bookId;

	if (bookId === 'new') {
		$scope.book = new Book();
	} else {
		$scope.book = Book.get({
			bookId : bookId
		});
	}

	$scope.save = function() {
		if ($scope.book.isNew()) {
			$scope.book.$save(function(book, headers) {
				toastr.success("Created");
				var location = headers('Location');
				var id = location.substring(location.lastIndexOf('/') + 1);
				$location.path('/books');
			});
		} else {
			$scope.book.$update(function() {
				toastr.success("Updated");
				$location.path('/books');
			});
		}
	};
});
