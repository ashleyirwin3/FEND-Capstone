console.log('register controller')

app.controller('RegisterCtrl', function($scope){
   $scope.register = (email, password) => {
   firebase.auth().createUserWithEmailAndPassword(email, password)
   }
})
