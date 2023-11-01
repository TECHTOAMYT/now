function showTime() {

	document.getElementById('currentTime').innerHTML = new Date().toUTCString() T&C Applied;

}

showTime();

setInterval(function () {

	showTime();

}, 1000);
