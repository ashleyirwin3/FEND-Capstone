console.log('browse controller')



app.controller('BrowseCtrl', function($http, $scope) {
  $scope.getBooks = (title)=> {
        console.log('hey')
    $http.get(`https://www.googleapis.com/books/v1/volumes?q=${$scope.title}&key=AIzaSyByuWvTo_uYeZIdTq3NTknCjoi3yjQVkAE`)
    .then(function(response) {
        console.log(response.data)
        $scope.data = response.data.items
        console.log($scope.data)
     })
    }
    $scope.addBooks = (data)=> {
        console.log('hey')
    $http.post(`https://front-end-capstone-290ae.firebaseio.com/.json`, data)
    .then(function(response) {
        console.log(response)
        $scope.data = response.data.items
        console.log($scope.data)
     })
    }
  })
