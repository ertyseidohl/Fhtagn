app.controller('fhtagnController', ['$compile', 'fhtagnScript', function($compile, fhtagnScript) {
  this.visible = [];

  this.pushNext = function(index) {
    var item = fhtagnScript.getNextScriptItem()
    if (item) {
      this.visible.push(item);
    }
  }.bind(this);

  this.pushNext();
}]);
