console.log('browse controller')



app.controller('BrowseCtrl', function($http, $scope) {
  $scope.getBooks = ()=> {
    console.log('hey', $scope.title)
    $http.get(`https://www.googleapis.com/books/v1/volumes?q=${$scope.title}&key=AIzaSyCmHJVb8WKdom8Jgct9MqQe7cbPliDujwk`)
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
    // populate modal
    $scope.loadDes = (description) => {
      console.log("description", description)
      $scope.description = description

    }
  })
