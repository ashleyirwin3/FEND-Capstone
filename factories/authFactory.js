angular.module('bookShelf')
.factory('authFactory', function($location, $q) {
  return {
    login: (email, password) => {
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
    },
    register : (email, password) => {
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, password))
    },
    logOut : () => {
      firebase.auth().signOut()
    },
    logoutView : () => {
      return $q((resolve, reject) => {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
            resolve(null)
          } else if (user) {
            resolve(user)
          }
        })
      })
    },
    confirmLogout : () => {
      return $q((resolve, reject) => {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            resolve(null)
          } else if (user) {
            resolve(user)
          }
        })
      })
    }
  }
})
