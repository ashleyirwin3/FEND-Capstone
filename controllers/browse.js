console.log('browse controller')



app.controller('BrowseCtrl', function($http, $scope) {
  $http.get(`https://www.googleapis.com/books/v1/volumes?q=holes+inauthor:sachar&key=AIzaSyByuWvTo_uYeZIdTq3NTknCjoi3yjQVkAE`)
  .then(function(response) {
        $scope.getBooks = response.data
    })
  })
