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
        $scope.itemData.chosen = chosenQuestionIndex;
        $scope.renderNext({index: $scope.itemData});
      };
      $scope.$on('keypress:49', function(onEvent, keypressEvent) {
        $scope.itemData.chosen = 0;
        $scope.$apply($scope.renderNext({index: $scope.itemData}));
      });
      $scope.$on('keypress:50', function(onEvent, keypressEvent) {
        $scope.itemData.chosen = 1;
        $scope.$apply($scope.renderNext({index: $scope.itemData}));
      });
      $scope.$on('keypress:51', function(onEvent, keypressEvent) {
        $scope.itemData.chosen = 2;
        $scope.$apply($scope.renderNext({index: $scope.itemData}));
      });
      $scope.$on('keypress:52', function(onEvent, keypressEvent) {
        $scope.itemData.chosen = 3;
        $scope.$apply($scope.renderNext({index: $scope.itemData}));
      });
    }]
  };
});
