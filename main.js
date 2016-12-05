function get_urls(key, nb) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://www.veryfunfacts.com/app/querry.php?key=' + key + '&nb=' + nb, false);
	xhr.send(null);
	var urls = xhr.responseText
	urls.split(";")

	return urls
}

var urls = ["none"]
var urls_querry = 100
var key = 0

chrome.browserAction.onClicked.addListener(function(tab) { 
	if (urls[0] == "none") {
		urls = get_url(key, urls_querry);
	}
	var url = urls[0];
	urls.splice(0, 1);
	
	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
    	chrome.tabs.update(tab.id, {url: url});
	});
});