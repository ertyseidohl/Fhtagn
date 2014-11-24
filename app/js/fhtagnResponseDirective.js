app.directive('fhtagnResponse', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-response.html',
    controller : ['$scope', function($scope) {
      $scope.select = function() {
        $scope.renderNext({});
      }
    }],
    link: function($rootScope) {
        $rootScope.keyPressed = 'no press :(';
        // For listening to a keypress event with a specific code
        $rootScope.$on('keypress:13', function(onEvent, keypressEvent) {
          $rootScope.keyPressed = 'Enter';
          console.log($rootScope.keyPressed);
        });
        // For listening to all keypress events
        $rootScope.$on('keypress', function(onEvent, keypressEvent) {
          if (keypressEvent.which === 120) {
            $rootScope.keyPressed = 'x';
            console.log($rootScope.keyPressed);
          }
          else {
            $rootScope.keyPressed = 'Keycode: ' + keypressEvent.which;
            console.log($rootScope.keyPressed);
          }
        });
      }
  };
});
