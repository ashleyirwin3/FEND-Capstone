console.log('login controller')

app.controller('LoginCtrl', function($scope) {
   $scope.login = (email, password) => {
        console.log('hey')
    firebase.auth().signInWithEmailAndPassword(email, password)
   }
   $scope.logout = function() {
        console.log('user clicked logout')
   firebase.auth().signOut()
   }
})
