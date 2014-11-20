app.directive('fhtagnWifi', function() {
  return {
    restrict : 'E',
    templateUrl : './templates/fhtagn-wifi.html',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    controller : ['$scope', function($scope) {
      $scope.select = function(chosenQuestionIndex) {
        $scope.renderNext({});
      }
    }]
  };
});
