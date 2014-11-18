app.directive('fhtagnQuestion', function() {
  return {
    restrict : 'E',
    templateUrl : './templates/fhtagn-question.html',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    controller : ['$scope', function($scope) {
      $scope.select = function(chosenQuestionIndex) {
        $scope.renderNext({index: $scope.itemData.options[chosenQuestionIndex]});
      }
    }]
  };
});
