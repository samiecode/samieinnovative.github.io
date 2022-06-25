var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("side_nav");
var menu = document.getElementById("menu");

sideNav.style.right = "-300px";

menuBtn.onclick = function () {
	if (sideNav.style.right == "-300px") {
		sideNav.style.right = "0";
		menu.src = "../assets/images/close.png";
	} else {
		sideNav.style.right = "-300px";
		menu.src = "../assets/images/menu.png";
	}
};

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});
