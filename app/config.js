app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
  controller: 'HomeCtrl',
  templateUrl: '/partials/home.html'
  })
  .when('/', {
  controller: 'BrowseCtrl',
  templateUrl: '/partials/browse.html'
  })
  .when('/', {
  controller: 'GroupsCtrl',
  templateUrl: '/partials/groups.html'
  })
  .when('/', {
  controller: 'LoginCtrl',
  templateUrl: '/partials/login.html'
  })
  .when('/', {
  controller: 'ProfileCtrl',
  templateUrl: '/partials/profile.html'
  })
  .when('/', {
  controller: 'RegisterCtrl',
  templateUrl: '/partials/register.html'
  })
  .otherwise({
    redirectTo: ('/')
  })
})
