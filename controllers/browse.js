console.log('browse controller')



app.controller('BrowseCtrl', function($http, $scope, $q) {
  $scope.getBooks = (title)=> {
        console.log('hey')
    $http.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyByuWvTo_uYeZIdTq3NTknCjoi3yjQVkAE`)
    .then(function(response) {
        console.log(response.data)
        $scope.data = response.data.items
        console.log($scope.data)
        // $scope.getBookTitle = response.data.items[0].volumeInfo.title
        // $scope.getBookImg = response.data.items[0].volumeInfo.imageLinks.thumbnail
        // $scope.getBookDes = response.data.items[0].volumeInfo.description
        // $scope.getBookAuthor = response.data.items[0].volumeInfo.authors[0]
     })
    }
  })
