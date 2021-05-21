// alert('Wtyczka Librus Anti-Logout jest aktywna!')
chrome.runtime.onMessage.addListener(function (request) {
	alert(request)
});
