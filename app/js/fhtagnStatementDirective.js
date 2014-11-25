app.directive('fhtagnStatement', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-statement.html',
    controller : ['$rootScope', '$scope', function($rootScope, $scope) {
      $rootScope.select = function() {
        $scope.renderNext({});
      };
      $rootScope.$on('keypress:13', function(onEvent, keypressEvent) {
        $scope.$apply($scope.renderNext());
      });
      $rootScope.$on('keypress:32', function(onEvent, keypressEvent) {
        $scope.$apply($scope.renderNext());
      });
    }]
  };
});
