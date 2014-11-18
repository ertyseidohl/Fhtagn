app.controller('fhtagnController', ['$compile', 'fhtagnScript', function($compile, fhtagnScript) {
  this.visible = [];

  this.pushNext = function(index) {
    var item = false;
    if(!index) {
      item = fhtagnScript.getNextScriptItem();
    }
    else {
      item = fhtagnScript.getQuestionAnswerItem(index);
    }
    if (item) {
      this.visible.push(item);
    }
  }.bind(this);

  this.pushNext();
}]);
