app.directive('fhtagnKeypress', [
  '$document',
  '$rootScope',
  function($document, $rootScope) {
    return {
      restrict: 'A',
      link: function() {
        $document.bind('keypress', function(e) {
          console.log('Got keypress:', e.which);
          $rootScope.$broadcast('keypress', e);
          $rootScope.$broadcast('keypress:' + e.which, e);
        });
      }
    };
  }
]);
