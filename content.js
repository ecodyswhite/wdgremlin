console.log("Chrome extension go?");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);
	if (message.txt === "hello") {

		let dividers = document.getElementsByTagName('div');
for (elt of dividers) {
	elt.style['font-family'] = 'wingdings';

		let body = document.getElementsByTagName('body');
for (elt of body) {
	elt.style['font-family'] = 'wingdings';
}
}

	}
}