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
  .when('/profile', {
    controller: 'ProfileCtrl',
    templateUrl: '/partials/profile.html',
  })
  .otherwise({
    redirectTo: ('/')
  })
})
