(function(){
	// stop default action on click
	document.addEventListener('click', function(e){e.preventDefault()});

	// process the touchend event
	document.addEventListener('touchend', function(e){
		console.log('sending: ' + e.target.getAttribute('href'));
		document.getElementsByName('key-sender')[0].setAttribute('src', e.target.getAttribute('href'));
	});

})();
