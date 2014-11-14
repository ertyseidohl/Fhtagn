app.directive('fhtagnStatement', function() {
  return {
    restrict : 'E',
    scope : {
      options : "=",
      next : "&"
    },
    templateUrl : './templates/fhtagn-statement.html',
    controller : ['$scope', function($scope) {
      $scope.select = function(chosenQuestionIndex) {
        $scope.next({index : chosenQuestionIndex});
      }
    }]
  };
});
