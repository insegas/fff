if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
			console.log('soy el service Worker registrado y funcionando.')
		})
	}
}
