if ('serviceWorker' in navigator)	{
	window.addEventListener('load', () => {
		navigator.userAgentData
		navigator.serviceWorker.register('../sw.js').then(() => {
			console.log('soy el service Worker registrado y funcionando.')
		})
	})
}

