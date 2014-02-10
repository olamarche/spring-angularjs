app.factory('Book', function($resource) {
			var Book = $resource('/api/books/:bookId', {
				bookId : '@id'
			}, {
				update : {
					method : 'PUT'
				}
			});
			Book.prototype.isNew = function() {
				return (typeof (this.id) === 'undefined');
			}
			return Book;
		});
