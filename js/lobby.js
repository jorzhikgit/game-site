(function() {
  var app = angular.module('lobby', ['ngCookies','ngWebsocket']);

  // Setup a websocket connection
  app.run(function ($websocket) {
    var ws = $websocket.$new('ws://localhost:5010');

    ws.$on('$open', function() {
      console.log('Connected');

      ws.$emit('echo', 'testing');

    });

    ws.$on('echo', function(data) {
      console.log('Returned..');
      console.log(data);

      ws.$close();
    });

    ws.$on('$close', function() {
      console.log('Disconnected');
    });
  });

  // Configure the location provider
  app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);

  app.directive("contenteditable", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attrs, ngModel) {

        function read() {
          ngModel.$setViewValue(element.html());
        }

        ngModel.$render = function() {
          element.html(ngModel.$viewValue || "");
        };

        element.bind("blur keyup change", function() {
          scope.$apply(read);
        });
      }
    };
  });

  app.controller("LobbyController", [ '$cookies', '$location', function($cookies, $location) {

    var lobbyId = $location.search().id;
    var userId = $cookies['userId'];

    var init = function() {
      // create websocket connection
      // use lobby code and user token to get lobby details
      // fill in page and user properties
    };

    init();

    // user attributes
    this.user = {
      isHost: true
    };

    // page representation
    this.page = {
      title: 'Boyle Bingo',
      players: [
        {name: "Timothy", isHost: false},
        {name: "Aaron", isHost: true},
      ],
      scenarios: [
        "A","B","C","D","E","F"
      ]
    };

  }]);

})();
