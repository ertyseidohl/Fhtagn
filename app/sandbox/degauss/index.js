function degauss() {
	var inner = document.getElementById('inner');

	var MAX_TIME = 2;

	var applyRandomShake = function(element) {
		if (element.nodeType == 1) {
			element.style.animationDuration = Math.random() * (MAX_TIME / 2) + "s";
			element.style.webkitAnimationDuration = Math.random() * (MAX_TIME / 2) + "s";
			console.log(element, element.nodeType, element.style.animationDuration);
			element.className = 'shake';
			if (element.childNodes.length) {
				for (var i = 0; i < element.childNodes.length; i++) {
					applyRandomShake(element.childNodes[i]);
				}
			}
		}
	};

	setTimeout(function() {
		var shaken = document.getElementsByClassName('shake');
		for (var i = 0; i < shaken.length; i++) {
			shaken[i].className = '';
		}
	}, MAX_TIME * 1000);

	applyRandomShake(inner);

}
