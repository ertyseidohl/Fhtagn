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
      };
      $scope.$on('keypress:13', function(onEvent, keypressEvent) {
        $scope.$apply($scope.renderNext());
      });
      $scope.$on('keypress:32', function(onEvent, keypressEvent) {
        $scope.$apply($scope.renderNext());
      });
    }]
  };
});
