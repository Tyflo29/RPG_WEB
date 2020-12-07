attaquePaladin.onclick = function(){
	degats = 25
	pvBoss = document.getElementById("pvBoss").innerHTML
	pvBoss= (pvBoss - degats)
	document.getElementById("pvBoss").innerHTML = pvBoss
	if (pvBoss <= 0){
		document.getElementById("Boss").style.visibility="hidden";
	}
	if (pvGoule1 <= 0){
		document.getElementById("goule1").style.visibility="hidden";
	}
}

defensePaladin.onclick = function(){
	protection = 15
	armure = Number(document.getElementById("defpaladin").innerHTML)
	if (armure < 45){
		armure = (protection + armure)
		document.getElementById("defpaladin").innerHTML = armure
	}
}

//InfoBulle apparait//
document.getElementById("goule1").onmouseover = function(){
	document.getElementById("statsgoule1").style.visibility = "visible"
}
document.getElementById("goule1").onmouseout = function(){
	document.getElementById("statsgoule1").style.visibility = "hidden"
}

document.getElementById("goule2").onmouseover = function(){
	document.getElementById("statsgoule2").style.visibility = "visible"
}
document.getElementById("goule2").onmouseout = function(){
	document.getElementById("statsgoule2").style.visibility = "hidden"
}

document.getElementById("Boss").onmouseover = function(){
	document.getElementById("statsboss").style.visibility = "visible"
}
document.getElementById("Boss").onmouseout = function(){
	document.getElementById("statsboss").style.visibility = "hidden"
}

