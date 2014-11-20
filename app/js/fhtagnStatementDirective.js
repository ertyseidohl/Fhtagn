app.directive('fhtagnStatement', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-statement.html',
    controller : ['$scope', function($scope) {
      $scope.select = function() {
        $scope.renderNext({});
      }
    }]
  };
});
