console.log('profile controller')

app.controller('ProfileCtrl', function($scope, $http){
   $scope.newBookPost = () => {
        console.log('hey')
    $http.get(`https://front-end-capstone-290ae.firebaseio.com/.json`)
    .then(function(response) {
        console.log(response)
        $scope.data = response.data
        console.log($scope.data)
     })
    }
    $scope.newBookPost()

   $scope.deleteBook = (key) => {
        console.log('hey')
    $http.delete(`https://front-end-capstone-290ae.firebaseio.com/${key}/.json`)
    .then(function(response) {
        $scope.newBookPost()
        console.log(response)
     })
    }
})
