document.querySelector('#menu').a.addEventListener("click",revealA)
function revealA() {
	document.querySelector('#facts').innerHTML = "Oh My Girl orgianlly debuted with 8 members however due to health conditions JinE left Oh my Girl! Nevertheless there most recent album Shark has become a huge hit.  <img src = 'images/shark.jpg' alt = 'Oh my Girl' id = 'girl'>";
}

document.querySelector('#menu').b.addEventListener("click",revealB)
function revealB() {
	document.querySelector('#facts').innerHTML = "BTS song Butter has the record for the most viewed song in 24 hours with 110 million views!!  <img src = 'images/butter.png' alt = 'BTS' id = 'butter'>";
}

document.querySelector('#menu').c.addEventListener("click",revealC)
function revealC() {
	document.querySelector('#facts').innerHTML = "Squid game was written in 2008 however it was rejected by many studios. Eventuanlly Netflix was interested and accepted the project.  <img src = 'images/squid.jpg' alt = 'Squid Game' id = 'game'>";
}

document.querySelector('#menu').d.addEventListener("click",revealD)
function revealD() {
	document.querySelector('#facts').innerHTML = "In My Neighbor Totorofun many viewers have noticed the similarities in it compared to Alice's Adventures In Wonderland.  <img src = 'images/toto.jpg' alt = 'My Neighbor Totorofun' id = 'tot'>";
}

document.querySelector('#menu').e.addEventListener("click",revealE)
function revealE() {
	document.querySelector('#facts').innerHTML = "It is recorded that an average person spends $30 US on mangas each year.  <img src = 'images/manga.jpg' alt = 'Mangas' id = 'manga'>";
}

document.querySelector('#theme').f.addEventListener("click", goHeart);
function goHeart() {
	document.querySelector('body').style.backgroundColor = "#D71867";
	document.querySelector('section').style.backgroundColor = "#FF92D7";
	document.querySelector('section').style.borderColor = "#B5E3E3";
	document.querySelector('section').style.color = "#ff0080";
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].style.color = "#FF7BD6";
		inputs[i].style.backgroundColor = "#FEEED5";
		inputs[i].style.borderColor = "#B5E3E3";
		inputs[i].style.fontFamily = 'Brush Script MT';
	} 
}

document.querySelector('#theme').g.addEventListener("click", goDis);

function goDis() {
	document.querySelector('body').style.backgroundColor = "#1B3649";
	document.querySelector('section').style.backgroundColor = "#a6c4f5";
	document.querySelector('section').style.borderColor = "#FF2FB9";
	document.querySelector('section').style.color = "#000000";
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].style.color = "#f2f20a";
		inputs[i].style.backgroundColor = "#0FC0FC";
		inputs[i].style.borderColor = "#FF2FB9";
		inputs[i].style.fontFamily = 'Copperplate';
	} 
}

document.querySelector('#theme').h.addEventListener("click", goNight);
function goNight() {
	document.querySelector('body').style.backgroundColor = "#402158";
	document.querySelector('section').style.backgroundColor = "#e2e9ff";
	document.querySelector('section').style.borderColor = "#140e36";
	document.querySelector('section').style.color = "#0024d6";
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].style.color = "#402158";
		inputs[i].style.backgroundColor = "#b37fdb";
		inputs[i].style.borderColor = "#4c408e";
		inputs[i].style.fontFamily = 'Monaco';
	} 
}






	
