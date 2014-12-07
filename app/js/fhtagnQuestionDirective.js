app.directive('fhtagnQuestion', function() {
  return {
    restrict : 'E',
    templateUrl : './templates/fhtagn-question.html',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    controller : ['$scope', '$rootScope', function($scope, $rootScope) {
      $scope.select = function(chosenQuestionIndex) {
        $scope.itemData.chosen = chosenQuestionIndex;
        $scope.renderNext({index: $scope.itemData});
      };
      for (var i = 0; i < 4; i++) {
        $rootScope.$on('keypress:' + (i + 49), (function(i) {
          return function(onEvent, keypressEvent) {
            $scope.itemData.chosen = i;
            $scope.$apply($scope.renderNext({index: $scope.itemData}));
          }
        })(i));
      }
    }]
  };
});
