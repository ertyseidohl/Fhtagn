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
    }]
  };
});
