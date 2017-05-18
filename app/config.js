app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: '/partials/home.html',
  })
  .when('/browse', {
    controller: 'BrowseCtrl',
    templateUrl: '/partials/browse.html',
  })
  .when('/login', {
    controller: 'LoginCtrl',
    templateUrl: '/partials/login.html',
  })
  .when('/profile', {
    controller: 'ProfileCtrl',
    templateUrl: '/partials/profile.html',
  })
  .when('/register', {
    controller: 'RegisterCtrl',
    templateUrl: '/partials/register.html',
  })
  .otherwise({
    redirectTo: ('/')
  })
})
