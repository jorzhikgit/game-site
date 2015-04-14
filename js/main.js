(function() {
  var app = angular.module('main', ['ngCookies']);

  app.controller('MainController', ['$http', '$cookies', '$window', function($http, $cookies, $window) {
    this.newGame = {
      username: '',
      userid: '',
      lobbyUrl: ''
    };

    // create a new game on the server
    this.createGame = function(g) {
      console.log(this.newGame);
      console.log(g);
      $http({
        url: 'http://localhost:5000/create',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: g
      })
      .success(function(data,status,headers,config){
        $cookies.userId = data.userid;
        $window.location.href = data.lobbyUrl;
      });
    };
  }]);

})();
