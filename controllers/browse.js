console.log('browse controller')



app.controller('BrowseCtrl', function($http, $scope) {
  $scope.getBooks = ()=> {
        console.log('hey')
    $http.get(`https://www.googleapis.com/books/v1/volumes?q=night+inauthor:wiesel&key=AIzaSyByuWvTo_uYeZIdTq3NTknCjoi3yjQVkAE`)
    .then(function(response) {
        console.log(response.data)
        $scope.getBookTitle = response.data.items[0].volumeInfo.title
        $scope.getBookImg = response.data.items[0].volumeInfo.imageLinks.thumbnail
     })
    }
  })


// ng-repeat=" bookInfo in getBooks"
