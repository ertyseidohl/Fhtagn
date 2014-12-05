app.directive('fhtagnStatement', function() {
  return {
    restrict : 'E',
    scope : {
      itemData : "=",
      renderNext : "&"
    },
    templateUrl : './templates/fhtagn-statement.html',
    controller : ['$rootScope', '$scope', function($rootScope, $scope) {
      $scope.visibleItemText = 0;
      $scope.getText = function() {
        if (typeof(this.itemData.text) === "string") {
          return this.itemData.text;
        } else {
          return this.itemData.text[this.visibleItemText];
        }
      };
      $scope.select = function() {
        if (typeof(this.itemData.text) === "string") {
          $scope.renderNext({});
        } else {
          $scope.visibleItemText ++;
          if ($scope.visibleItemText >= $scope.itemData.text.length) {
            $scope.renderNext({});
          }
        }
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
