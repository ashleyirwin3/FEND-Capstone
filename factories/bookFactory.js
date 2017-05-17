angular.module('bookShelf')
.factory('bookFactory', function($http) {
  return{
    getBooks : (title) => { // Search for a book by title
      return $http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyABXoYA_J7ydIWLbzM5TsAGZrpVEVNRupM`)
      .then((res) => {
        return res.data.items
      })
      .catch((res) => {
        console.error(res)
      })
    }
  }
})
