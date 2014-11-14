app.directive('fhtagnQuestion', function() {
  return {
    restrict : 'E',
    templateUrl : './templates/fhtagn-question.html',
    scope : {
      options : "=",
      next : "&"
    },
    controller : ['$scope', function($scope) {
      $scope.select = function(chosenQuestionIndex) {
        $scope.next({index : chosenQuestionIndex});
      }
    }]
  };
});
