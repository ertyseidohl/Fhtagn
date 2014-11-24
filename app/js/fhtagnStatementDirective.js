app.directive('fhtagnStatement', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-statement.html',
    controller : ['$scope', '$rootScope', function($scope, $rootScope) {
      $scope.select = function() {
        $scope.renderNext({});
      };
      $rootScope.$on('keypress:13', function(onEvent, keypressEvent) {
        $rootScope.keyPressed = 'Enter';
        console.log("hereeee");
        $scope.$apply($scope.renderNext());
      });
  }]
  };
});
