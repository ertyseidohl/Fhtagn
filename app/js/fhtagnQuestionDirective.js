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
          if (chosenQuestionIndex.answer){
            //do something shnazzy with that answer.
          }
          else {
            $scope.itemData.chosen = chosenQuestionIndex;
            $scope.renderNext({index: $scope.itemData});
          }
      }
    }]
  };
});
