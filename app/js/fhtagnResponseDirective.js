app.directive('fhtagnResponse', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-response.html',
    controller : ['$scope', '$rootScope', function($scope, $rootScope) {
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
