var tour = 0;

//------Choix de la cible--------//
ciblegoule1.onclick = function(){
	numerodetarget.innerHTML = 1
}

cibleboss.onclick = function(){
	numerodetarget.innerHTML = 2
}
ciblegoule2.onclick = function(){
	numerodetarget.innerHTML = 3
}
//----------------------------------Mort-----------------------------------------//


//------Mort Héros--------//
hppaladin = document.getElementById("pvpaladin").innerHTML
if (hppaladin <= 0) {
	 document.getElementById("imagepaladin").style.filter = "grayscale(100%)"
	 document.getElementById("attaquePaladin").disabled = true
	 document.getElementById("defensePaladin").disabled = true
	 document.getElementById("soins").disabled = true
}

hpmage = document.getElementById("pvmage").innerHTML
if (hpmage <= 0) {
	 document.getElementById("imagemage").style.filter = "grayscale(100%)"
	 document.getElementById("attaqueMage").disabled = true
	 document.getElementById("defenseMage").disabled = true
	 document.getElementById("magie").disabled = true
}

hpguerrier = document.getElementById("pvguerrier").innerHTML
if (hpguerrier <= 0) {
	 document.getElementById("imageguerrier").style.filter = "grayscale(100%)"
	 document.getElementById("attaqueGuerrier").disabled = true
	 document.getElementById("defenseGuerrier").disabled = true
	 document.getElementById("rage").disabled = true
}

hprobot = document.getElementById("pvrobot").innerHTML
if (hpguerrier <= 0) {
	 document.getElementById("imagerobot").style.filter = "grayscale(100%)"
	 document.getElementById("attaqueRobot").disabled = true
	 document.getElementById("defenseRobot").disabled = true
	 document.getElementById("acide").disabled = true
}

//----------------------------------Tour monstre-----------------------------------------//

tourmonstre.onclick = function(){
	degats = 20;
	targetheros = Math.floor(Math.random() * (5 - 1)) + 1;
	for (let i = 0; i < 9; i++) { 
		if (targetheros == 1){
			pvpaladin = document.getElementById("pvpaladin").innerHTML
			pvpaladin= (pvpaladin - degats)
			document.getElementById("pvpaladin").innerHTML = pvpaladin
		} 
			//------cible mage--------//
		if (targetheros == 2){
			pvmage = document.getElementById("pvmage").innerHTML
			pvmage= (pvmage - degats)
			document.getElementById("pvmage").innerHTML = pvmage
			}
			//------cible guerrier--------//
		if (targetheros == 3){
			pvguerrier = document.getElementById("pvguerrier").innerHTML
			pvguerrier= (pvguerrier - degats)
			document.getElementById("pvguerrier").innerHTML = pvguerrier
		} 
			//------cible robot--------//
		if (targetheros == 4){
			pvrobot = document.getElementById("pvrobot").innerHTML
			pvrobot= (pvrobot - degats)
			document.getElementById("pvrobot").innerHTML = pvrobot
		}
	}
}

//----------------------------------Comptécence-----------------------------------------//
//------Comptécence paladin--------//

attaquePaladin.onclick = function(){
	document.getElementById("attaquePaladin").disabled = true
	document.getElementById("defensePaladin").disabled = false
	document.getElementById("soins").disabled = false
	if (tour <= 4){
		tour = 0
	}
	degats = 20
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").value = "Mort";
			document.getElementById("cibleboss").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").value = "Mort";
			document.getElementById("ciblegoule1").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule2 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").value ="Mort";
			document.getElementById("ciblegoule2").disabled = true;
		}
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}

}


defensePaladin.onclick = function(){
	tour = document.getElementById("numerodetour").innerHTML
	tour++
	document.getElementById("numerodetour").innerHTML = tour
	protection = 15
	document.getElementById("attaquePaladin").disabled = false
	 document.getElementById("defensePaladin").disabled = true
	 document.getElementById("soins").disabled = false
	armure = Number(document.getElementById("defpaladin").innerHTML)
	if (armure < 45){
		armure = (protection + armure)
		document.getElementById("defpaladin").innerHTML = armure
	}
}
//------Comptécence Mage--------//

attaqueMage.onclick = function(){
	degats = 20
	document.getElementById("attaqueMage").disabled = true
	 document.getElementById("defenseMage").disabled = false
	 document.getElementById("magie").disabled = false
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").value = "Mort";
			document.getElementById("cibleboss").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").value = "Mort";
			document.getElementById("ciblegoule1").disabled = true;;
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule2 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").value = "Mort";
			document.getElementById("ciblegoule2").disabled = true;
		}
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}
}

defenseMage.onclick = function(){
	tour = document.getElementById("numerodetour").innerHTML
	tour++
	document.getElementById("numerodetour").innerHTML = tour
	protection = 15
	document.getElementById("attaqueMage").disabled = false
	 document.getElementById("defenseMage").disabled = true
	 document.getElementById("magie").disabled = false
	armure = Number(document.getElementById("defmage").innerHTML)
	if (armure < 25){
		armure = (protection + armure)
		document.getElementById("defmage").innerHTML = armure
	}
	
}

magie.onclick = function(){
	degats = 35
	document.getElementById("attaqueMage").disabled = false
	 document.getElementById("defenseMage").disabled = false
	 document.getElementById("magie").disabled = true
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").value = "Mort";
			document.getElementById("cibleboss").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").value = "Mort";
			document.getElementById("ciblegoule1").disabled = true;;
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule2 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").value = "Mort";
			document.getElementById("ciblegoule2").disabled = true;
		}
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}
}
//------Comptécence Guerrier--------//

attaqueGuerrier.onclick = function(){
	tour = document.getElementById("numerodetour").innerHTML
	tour++
	document.getElementById("numerodetour").innerHTML = tour
	degats = 20
	document.getElementById("attaqueGuerrier").disabled = true
	document.getElementById("defenseGuerrier").disabled = false
	document.getElementById("rage").disabled = false
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").value = "Mort";
			document.getElementById("cibleboss").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").value = "Mort";
			document.getElementById("ciblegoule1").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule2 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").value = "Mort";
			document.getElementById("ciblegoule2").disabled = true;
		}
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}
}


defenseGuerrier.onclick = function(){
	tour = document.getElementById("numerodetour").innerHTML
	tour++
	document.getElementById("numerodetour").innerHTML = tour
	protection = 15
	document.getElementById("attaqueGuerrier").disabled = false
	document.getElementById("defenseGuerrier").disabled = true
	document.getElementById("rage").disabled = false
	armure = Number(document.getElementById("defguerrier").innerHTML)
	if (armure < 45){
		armure = (protection + armure)
		document.getElementById("defguerrier").innerHTML = armure
	}
}

rage.onclick = function(){
	degats = 35
	document.getElementById("attaqueGuerrier").disabled = false
	 document.getElementById("defenseGuerrier").disabled = false
	 document.getElementById("rage").disabled = true
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").value = "Mort";
			document.getElementById("cibleboss").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").value = "Mort";
			document.getElementById("ciblegoule1").disabled = true;;
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule2 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").value = "Mort";
			document.getElementById("ciblegoule2").disabled = true;
		}
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}
}
//------Comptécence Robot--------//

attaqueRobot.onclick = function(){
	tour = document.getElementById("numerodetour").innerHTML
	tour++
	document.getElementById("numerodetour").innerHTML = tour
	degats = 20
	document.getElementById("attaqueRobot").disabled = true
	document.getElementById("defenseRobot").disabled = false
	document.getElementById("Acide").disabled = false
	if (numerodetarget.innerHTML == 2){
		pvBoss = document.getElementById("pvBoss").innerHTML
		pvBoss= (pvBoss - degats)
		document.getElementById("pvBoss").innerHTML = pvBoss
		if (pvBoss <= 0){
			document.getElementById("Boss").style.visibility="hidden";
			document.getElementById("cibleboss").value = "Mort";
			document.getElementById("cibleboss").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 1){
		pvGoule1 = document.getElementById("pvGoule1").innerHTML
		pvGoule1= (pvGoule1 - degats)
		document.getElementById("pvGoule1").innerHTML = pvGoule1
		if (pvGoule1 <= 0){
			document.getElementById("goule1").style.visibility="hidden";
			document.getElementById("ciblegoule1").value = "Mort";
			document.getElementById("ciblegoule1").disabled = true;
		}
	}
	if (numerodetarget.innerHTML == 3){
		pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
		pvGoule2 = (pvGoule2 - degats)
		document.getElementById("pvGoule2").innerHTML = pvGoule2
		if (pvGoule1 <= 0){
			document.getElementById("goule2").style.visibility="hidden";
			document.getElementById("ciblegoule2").value = "Mort"
			document.getElementById("ciblegoule2").disabled = true;
		}
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}
}

defenseRobot.onclick = function(){
	protection = 15
	document.getElementById("attaqueRobot").disabled = false
	document.getElementById("defenseRobot").disabled = true
	document.getElementById("acide").disabled = false
	armure = Number(document.getElementById("defrobot").innerHTML)
	if (armure < 45){
		armure = (protection + armure)
		document.getElementById("defrobot").innerHTML = armure
	}
}

acide.onclick = function(){
	degats = 15
	document.getElementById("attaqueRobot").disabled = false
	document.getElementById("defenseRobot").disabled = false
	document.getElementById("bombe").disabled = true
	pvBoss = document.getElementById("pvBoss").innerHTML
	pvBoss= (pvBoss - degats)
	document.getElementById("pvBoss").innerHTML = pvBoss
	if (pvBoss <= 0){
		document.getElementById("Boss").style.visibility="hidden";
		document.getElementById("cibleboss").value = "Mort";
	document.getElementById("cibleboss").disabled = true;
	}
	pvGoule1 = document.getElementById("pvGoule1").innerHTML
	pvGoule1= (pvGoule1 - degats)
	document.getElementById("pvGoule1").innerHTML = pvGoule1
	if (pvGoule1 <= 0){
		document.getElementById("goule1").style.visibility="hidden";
		document.getElementById("ciblegoule1").value = "Mort";
		document.getElementById("ciblegoule1").disabled = true;;
	}
	pvGoule2 = Number(document.getElementById("pvGoule2").innerHTML)
	pvGoule2 = (pvGoule2 - degats)
	document.getElementById("pvGoule2").innerHTML = pvGoule2
	if (pvGoule2 <= 0){
		document.getElementById("goule2").style.visibility="hidden";
		document.getElementById("ciblegoule2").value = "Mort";
		document.getElementById("ciblegoule2").disabled = true;
	}
	if (pvGoule1 <=0 && pvGoule2 <=0 && pvBoss <=0 ){
		alert("Vous avez gagné!");
	}
}

//------------------------Monstre--------------------------//

//----------goule1------------//
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