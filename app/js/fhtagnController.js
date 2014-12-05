app.controller('fhtagnController', ['$scope', '$compile', 'fhtagnScript', function($scope, $compile, fhtagnScript) {
  this.visible = [];
  this.health = 5.0;

  this.renderNext = function(parentQuestionWithChosen) {
    var item = false;
    if(typeof(parentQuestionWithChosen) === "undefined") {
      item = fhtagnScript.getNextScriptItem();
    }
    else {
      response = fhtagnScript.getResponseItem(parentQuestionWithChosen);
      item = response;
      this.health = this.health + item.healthModifier;
    }
    if (item) {
      if (this.health <= 0) {
        this.visible = [window.SCRIPT['loss']]
      }
      else {
        this.visible = [item];
      }
    }
  }.bind(this);

  this.renderNext();
}]);
