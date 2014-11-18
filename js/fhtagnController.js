app.controller('fhtagnController', ['$compile', 'fhtagnScript', function($compile, fhtagnScript) {
  this.visible = [];

  this.renderNext = function(index) {
    var item = false;
    if(typeof(index) === "undefined") {
      item = fhtagnScript.getNextScriptItem();
    }
    else {
      item = fhtagnScript.getQuestionAnswerItem(index);
    }
    if (item) {
      this.visible = [item];
    }
  }.bind(this);

  this.renderNext();
}]);
