attaquePaladin.onclick = function(){
	degats = 25
	pvBoss = document.getElementById("pvBoss").innerHTML
	pvBoss= (pvBoss - degats)
	document.getElementById("pvBoss").innerHTML = pvBoss
}

defensePaladin.onclick = function(){
	protection = 15
	armure = document.getElementById("pvBoss").innerHTML
	pvBoss= (pvBoss - degats)
	document.getElementById("pvBoss").innerHTML = pvBoss
}



goule1.onmouseover = function(){
	document.getElementById("statsgoule1").style.visibility = "visible"
}
goule1.onmouseout = function(){
	document.getElementById("statsgoule1").style.visibility = "hidden"
}

goule2.onmouseover = function(){
	document.getElementById("statsgoule2").style.visibility = "visible"
}
goule2.onmouseout = function(){
	document.getElementById("statsgoule2").style.visibility = "hidden"
}

Boss.onmouseover = function(){
	document.getElementById("statsboss").style.visibility = "visible"
}
Boss.onmouseout = function(){
	document.getElementById("statsboss").style.visibility = "hidden"
}

