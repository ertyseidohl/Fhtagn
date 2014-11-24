app.directive('fhtagnResponse', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-response.html',
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
