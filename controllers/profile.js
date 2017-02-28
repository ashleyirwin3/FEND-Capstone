console.log('profile controller')

app.controller('ProfileCtrl', function($scope, $http){
   $scope.newBookPost = () => {
        console.log('hey')
    $http.get(`https://front-end-capstone-290ae.firebaseio.com/.json`)
    .then(function(response) {
        console.log(response)
        $scope.data = response.data
        for (var i = 0; i < $scope.data.length; i++) {
            $scope.data.hiddenInput = 'true';
        }
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

   $scope.addReview = (key, review) => {
    console.log("each time", review)

    if(!review || review === '') {
        // show input field
        // return
        console.log(document.getElementById(key));
        // document.getElementById(key).removeAttribute('hidden');
        document.getElementById(key).classList.remove("hidden");
        return;
    }
    console.log('hey', review);
    console.log('key', key);

    var bookReviews =  {
        "myReview" : review
    }
    $http.patch(`https://front-end-capstone-290ae.firebaseio.com/${key}/.json`, bookReviews)
     .then(function(response) {
        document.getElementById(key).value = '';
        // document.getElementById(key).setAttribute('hidden', 'hidden')
        document.getElementById(key).classList.add("hidden");
        $scope.review = '';
        $scope.newBookPost()
     })

    console.log('asdfsafsa', $scope)
   }
       // populate modal
    $scope.loadDes = (description) => {
      console.log("description", description)
      $scope.description = description

    }
})
