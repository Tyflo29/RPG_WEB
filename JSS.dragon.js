

ciblegoule1.onclick = function(){
	numerodetarget.innerHTML = 1
}

cibleboss.onclick = function(){
	numerodetarget.innerHTML = 2
}
ciblegoule2.onclick = function(){
	numerodetarget.innerHTML = 3
}

attaquePaladin.onclick = function(){
	degats = 20
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").style.visibility="hidden";
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").style.visibility="hidden";
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule1 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").style.visibility="hidden";
		}
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


//------------------------InfoBulle apparait--------------------------//
//--------goule1------------//
document.getElementById("goule1").onmouseover = function(){
	document.getElementById("statsgoule1").style.visibility = "visible"
}

document.getElementById("goule1").onmouseout = function(){
	document.getElementById("statsgoule1").style.visibility = "hidden"
}

//--------boss------------//
document.getElementById("goule2").onmouseover = function(){
	document.getElementById("statsgoule2").style.visibility = "visible"
}

document.getElementById("goule2").onmouseout = function(){
	document.getElementById("statsgoule2").style.visibility = "hidden"
}

//--------goule2------------//
document.getElementById("Boss").onmouseover = function(){
	document.getElementById("statsboss").style.visibility = "visible"
}

document.getElementById("Boss").onmouseout = function(){
	document.getElementById("statsboss").style.visibility = "hidden"
}

