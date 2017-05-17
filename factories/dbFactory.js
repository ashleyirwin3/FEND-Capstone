angular.module('bookShelf')
.factory('dbFactory', function($http) {
  return {
    addBooks : (data) => { // Add a book to firebase
      return $http.
      post(`https://front-end-capstone-290ae.firebaseio.com/.json`, data)
      .then(function(response) {
        return response
      })
      .catch((res) => {
        console.error(res)
      })
    },
    newBookPost : () => { // Add a book to profile from Firebase
      return $http
      .get(`https://front-end-capstone-290ae.firebaseio.com/.json`)
      .catch((res) => {
        console.error(res)
      })
    },
    deleteBook : (key) => { // Delete a book from profile and firebase
      return $http
      .delete(`https://front-end-capstone-290ae.firebaseio.com/${key}.json`)
      .catch((res) => {
        console.error(res)
      })
    }
  }
})
