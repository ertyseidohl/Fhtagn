app.controller('fhtagnController', ['$scope', '$compile', 'fhtagnScript', function($scope, $compile, fhtagnScript) {
	$scope.visible = [];

	$scope.renderItems = function() {
		var render = '';
		for (index in $scope.visible) {
			var item = $scope.visible[index];
			if (item.type == "question") {
				render += '<fhtagn-question></fhtagn-question>';
			}
		}
		return $compile(render);
	}

	$scope.visible.push(fhtagnScript.getNextScriptItem());
}]);
