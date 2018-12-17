var characters = [false,false,false,false,false,false,false,false,false,false,false,false];
var keyitems = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var bosses = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var keyitemlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var characterlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var townlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var trappedchestlocations = [0,0,0,0,0,0,0,0,0,0];
var trappedchestnames = ['Castle Eblan','Eblan Cave','Giant of Babil','Tower of Zot','Upper Babil','Feymarch','Lower Babil','Sylph Cave','Lunar Path','Lunar Sub.'];

// 0 = Not available, 1 = Available, 2 = Checked, 3 = Hidden

var trappedchestcounts = [3,1,1,1,1,1,4,7,1,9];
var trappedchestmaxcounts = [3,1,1,1,1,1,4,7,1,9];
var currentitemlist = 0;
var items = [0,0,0,0,0,0,0,0,0,0];

var maxitems = 17;

var viewactivekeyitems = true;
var viewactivecharacters = true;
var viewactivetowns = true;
var viewactivetrapped = true;

var imagedir = 'images/';
var cecil = false;
var rydia = false;
var mist = false;

var menutoggle = false;

var vflag = 0;
var jflag = 0;
var kflag = 0;
var pflag = 0;
var cflag = 0;
var tflag = 0;
var sflag = 0;
var bflag = 0;
var fflag = 0;
var nflag = 0;
var eflag = 0;
var mflag = 0;
var xflag = 0;
var yflag = 0;
var gflag = 0;
var wflag = 0;
var zflag = 0;
var disableitemtracker = '0';
var disablelocationtracker = '0';
var disablebosstracker = '0';

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}				

function SetModes() {
	$('#itemModal').hide();
	$('#flagsModal').hide();
	$('#bossModal').hide();
	$('#townModal').hide();
	
	disableitemtracker = getParameterByName('d');
	
	disablebosstracker = getParameterByName('s');
	
	disablelocationtracker = getParameterByName('l');
	
	if (disablelocationtracker === '1') {
		document.getElementById('trackingtable').style.display = "none";
		document.getElementById('wrapperdiv').style.width = "400px";
		disablebosstracker = '1';
	}
	
	var flags = getParameterByName('f');
	
	document.getElementById('flagscontainer').innerHTML = 'Flags: ' + flags;
	
	document.getElementById('vflagmodal').innerHTML = '0: No Variants';
	if (flags.indexOf('V') > -1) {
		if (flags.indexOf('V2') > -1) {
			vflag = 2;
			document.getElementById('vflagmodal').innerHTML = '2: Giant %';
		} else {
			vflag = 1;
			document.getElementById('vflagmodal').innerHTML = '1: Forge The Crystal';
		}
	}
	
	if (vflag === 0) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
	} else if (vflag === 1) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		document.getElementById('item12td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		document.getElementById('item13td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
	} else if (vflag === 2) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
	}
		
	document.getElementById('jflagmodal').innerHTML = '0: No Japanese Content';
	if (flags.indexOf('J') > -1) {
		if (flags.indexOf('J2') > -1) {
			jflag = 2;
			document.getElementById('jflagmodal').innerHTML = '2: Japanese Items and Abilities';
		} else {
			jflag = 1;
			document.getElementById('jflagmodal').innerHTML = '1: Japanese Items';
		}
	}
						
	if (jflag === 0) {
		document.getElementById('j1items').style.display = "none";
		document.getElementById('j1itemstown').style.display = "none";
	}
	
	document.getElementById('kflagmodal').innerHTML = '0: No Key Items';
	if (flags.indexOf('K') > -1) {
		if (flags.indexOf('K4') > -1) {
			kflag = 4;
			document.getElementById('kflagmodal').innerHTML = '4: Key Items/Summons + Lunar/Trapped/Any Path';
		} else if (flags.indexOf('K3') > -1) {
			kflag = 3;
			document.getElementById('kflagmodal').innerHTML = '3: Key Items/Summons + Lunar/Trapped';
		} else if (flags.indexOf('K2') > -1) {
			kflag = 2;
			document.getElementById('kflagmodal').innerHTML = '2: Key Items/Summons + Lunar';
		} else {
			kflag = 1;
			document.getElementById('kflagmodal').innerHTML = '1: Key Items Shuffled';
		}
	}
	
	if (kflag < 3) {
		document.getElementById('trappedchestsdiv').style.display = "none";
		document.getElementById('trackingtable').style.fontSize = "24px";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
		document.getElementById('townsdiv').style.width = "160px";
	}
	if (kflag < 2) {
		keyitemlocations[3] = 3;
		keyitemlocations[15] = 3;
		keyitemlocations[16] = 3;
		keyitemlocations[20] = 3;
		keyitemlocations[21] = 3;
		keyitemlocations[22] = 3;
		keyitemlocations[23] = 3;
		keyitemlocations[24] = 3;
		keyitemlocations[25] = 3;
		keyitemlocations[26] = 3;
	}
	
	document.getElementById('pflagmodal').innerHTML = '0: Pass in Shop';
	if (flags.indexOf('P') > -1) {
		if (flags.indexOf('P2') > -1) {
			pflag = 2;
			document.getElementById('pflagmodal').innerHTML = '2: 3 Passes in Random Chests (Not on Moon)';
		} else {
			pflag = 1;
			document.getElementById('pflagmodal').innerHTML = '1: Pass Mixed with Key Items';
		}
	}
	
	if (kflag > 1 && pflag === 1) {
		maxitems = 18;
	}
	
	document.getElementById('cflagmodal').innerHTML = '0: Characters Normal';
	if (flags.indexOf('C') > -1) {
		if (flags.indexOf('C3') > -1) {
			cflag = 3;
			document.getElementById('cflagmodal').innerHTML = '3: Five Unique Characters';
		} else if (flags.indexOf('C2') > -1) {
			cflag = 2;
			document.getElementById('cflagmodal').innerHTML = '2: Characters Randomized';
		} else {
			cflag = 1;
			document.getElementById('cflagmodal').innerHTML = '1: Characters Randomized/Edge + Fu Harder to Find';
		}
	}
	
	document.getElementById('tflagmodal').innerHTML = '0: Treasures Normal';
	if (flags.indexOf('T') > -1) {
		if (flags.indexOf('T5') > -1) {
			tflag = 5;
			document.getElementById('tflagmodal').innerHTML = '5: Untrapped Chests are Empty';
		} else if (flags.indexOf('T4') > -1) {
			tflag = 4;
			document.getElementById('tflagmodal').innerHTML = '4: Treasure Totally Randomized';
		} else if (flags.indexOf('T3') > -1) {
			tflag = 3;
			document.getElementById('tflagmodal').innerHTML = '3: Treasure Randomized Excluding Highest Level';
		} else if (flags.indexOf('T2') > -1) {
			tflag = 2;
			document.getElementById('tflagmodal').innerHTML = '2: Treasure Balanced Randomized';
		} else {
			tflag = 1;
			document.getElementById('tflagmodal').innerHTML = '1: Trapped Shuffled/Biased Shuffle';
		}
	}
	
	document.getElementById('sflagmodal').innerHTML = '0: Shops Normal';
	if (flags.indexOf('S') > -1) {
		if (flags.indexOf('S5') > -1) {
			sflag = 5;
			document.getElementById('sflagmodal').innerHTML = '5: All Cabins, All The Time!';
			disableitemtracker = '1';
		} else if (flags.indexOf('S4') > -1) {
			sflag = 4;
			document.getElementById('sflagmodal').innerHTML = '4: Shops Totally Randomized';
		} else if (flags.indexOf('S3') > -1) {
			sflag = 3;
			document.getElementById('sflagmodal').innerHTML = '3: Shops Totally Randomized Excluding Highest Level';
		} else if (flags.indexOf('S2') > -1) {
			sflag = 2;
			document.getElementById('sflagmodal').innerHTML = '2: Shops Balanced Randomized';
		} else {
			sflag = 1;
			document.getElementById('sflagmodal').innerHTML = '1: Shops Shuffled/Biased Shuffle';
		}
	}
	
	document.getElementById('bflagmodal').innerHTML = '0: Bosses Normal';
	if (flags.indexOf('B') > -1) {
		if (flags.indexOf('B2') > -1) {
			bflag = 2;
			document.getElementById('bflagmodal').innerHTML = '2: Complete Shuffle';
		} else {
			bflag = 1;
			document.getElementById('bflagmodal').innerHTML = '1: Bosses Shuffled/Underworld Restricted';
		}
	}

	document.getElementById('fflagmodal').innerHTML = '0: FuSoYa Full Powered';
	if (flags.indexOf('F') > -1) {
		if (flags.indexOf('F2') > -1) {
			fflag = 2;
			document.getElementById('fflagmodal').innerHTML = '2: FuSoYa Powered on Boss Kills';
		} else {
			fflag = 1;
			document.getElementById('fflagmodal').innerHTML = '1: FuSoYa Powered at Ordeals';
		}
	}

	document.getElementById('nflagmodal').innerHTML = '0: Free Office Lunch for Everybody';
	if (flags.indexOf('N') > -1) {
		if (flags.indexOf('N2') > -1) {
			nflag = 2;
			document.getElementById('nflagmodal').innerHTML = '2: No Free Lunches/No Alternate Win/Boss Bit';
		} else {
			nflag = 1;
			document.getElementById('nflagmodal').innerHTML = '1: No Free Lunches';
		}
	}
	
	if (nflag === 0) {
		if (disablebosstracker === '1') {
			document.getElementById('misttoggle').style.visibility = "hidden";
		}
		keyitemlocations[9] = 3;
	} else {
		keyitemlocations[12] = 3;
		characterlocations[2] = 3;
		characterlocations[8] = 3;
		characterlocations[9] = 3;
		characterlocations[11] = 3;
	}
	

	document.getElementById('eflagmodal').innerHTML = '0: Normal Encounters';
	if (flags.indexOf('E') > -1) {
		if (flags.indexOf('E4') > -1) {
			eflag = 4;
			document.getElementById('eflagmodal').innerHTML = '4: Encounters Permanently Disabled';
		} else if (flags.indexOf('E3') > -1) {
			eflag = 3;
			document.getElementById('eflagmodal').innerHTML = '3: Encounters Disabled/Can Be Toggled';
		} else if (flags.indexOf('E2') > -1) {
			eflag = 2;
			document.getElementById('eflagmodal').innerHTML = '2: Encounters Reduced';
		} else {
			eflag = 1;
			document.getElementById('eflagmodal').innerHTML = '1: Encounters Reduced/Trap Door + Behemoth Lowered';
		}
	}

	document.getElementById('moneyflagmodal').innerHTML = '0: Money Normal';
	if (flags.indexOf('$') > -1) {
		if (flags.indexOf('$3') > -1) {
			mflag = 3;
			document.getElementById('moneyflagmodal').innerHTML = '3: Everything is FREE!';
		} else if (flags.indexOf('$2') > -1) {
			mflag = 2;
			document.getElementById('moneyflagmodal').innerHTML = '2: Weak and Moderate turn to GP';
		} else {
			mflag = 1;
			document.getElementById('moneyflagmodal').innerHTML = '1: Weak turn to GP';
		}
	}
	
	document.getElementById('xflagmodal').innerHTML = '0: Experience Normal (And Painful)';
	if (flags.indexOf('X') > -1) {
		if (flags.indexOf('X2') > -1) {
			xflag = 2;
			document.getElementById('xflagmodal').innerHTML = '2: XP Not Divided/2x at 10 Key Items';
		} else {
			xflag = 1;
			document.getElementById('xflagmodal').innerHTML = '1: XP Not Divided';
		}
	}
	
	document.getElementById('yflagmodal').innerHTML = '0: Hold Y to Dash';
	if (flags.indexOf('Y') > -1) {
		if (flags.indexOf('Y2') > -1) {
			yflag = 2;
			document.getElementById('yflagmodal').innerHTML = '2: Dashing/Hold Y to Walk/Fast Battle + Message';
		} else {
			yflag = 1;
			document.getElementById('yflagmodal').innerHTML = '1: Hold Y to Dash/Fast Battle + Message';
		}
	}
	
	document.getElementById('gflagmodal').innerHTML = '0: Glitches Enabled';
	if (flags.indexOf('G') > -1) {
		gflag = 1;
		document.getElementById('gflagmodal').innerHTML = '1: Glitches Disabled';
	}
	
	document.getElementById('wflagmodal').innerHTML = '0: Wyvern BURN! (The W is for WHY?!)';
	if (flags.indexOf('W') > -1) {
		if (flags.indexOf('W2') > -1) {
			wflag = 2;
			document.getElementById('wflagmodal').innerHTML = '2: Wyvern MegaNuke Randomized';
		} else {
			wflag = 1;
			document.getElementById('wflagmodal').innerHTML = '1: Wyvern MegaNuke Disabled';
		}
	}
	
	document.getElementById('zflagmodal').innerHTML = '0: Zeromus is BORING';
	if (flags.indexOf('Z') > -1) {
		zflag = 1;
		document.getElementById('zflagmodal').innerHTML = '1: Zeromus is FUN!';
	}
	
	var verticallayout = getParameterByName('v');
	
	if (verticallayout === '1' && disablelocationtracker === '0') {
		document.getElementById('wrapperdiv').style.width = "510px";
		document.getElementById('trackingtable').style.width = "510px";
		document.getElementById('trackingtable').style.float = "left";
		document.getElementById('trackingtable').style.marginLeft = "20px";
		document.getElementById('toptable').style.margin = "0px 0px 20px 60px";
		document.getElementById('itemModalInner').style.left = "60px";
		document.getElementById('itemModalInner').style.top = "460px";
		document.getElementById('flagsModalInner').style.left = "60px";
		document.getElementById('flagsModalInner').style.top = "460px";
		document.getElementById('townModalInner').style.left = "60px";
		document.getElementById('townModalInner').style.top = "460px";
		document.getElementById('bossModalInner').style.left = "60px";
	}
	
	if (disableitemtracker === '1') {
		document.getElementById('townsdiv').style.display = "none";
		document.getElementById('trackingtable').style.fontSize = "24px";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
	}
	
	var browser = getParameterByName('b');
	
	if (browser === '1') {
		if (verticallayout === '0') {
			document.getElementById('flagstr').style.height = "70px";
			document.getElementById('flagstr').style.verticalAlign = "text-top";
		}
		document.getElementById('itemModal').style.fontSize = "22px";
		document.getElementById('flagsModalInner').style.fontSize = "18px";
	} else if (browser === '2') {
		var hrItems = document.getElementsByTagName("hr");

		for(var i = 0; i < hrItems.length; i++) {
			hrItems[i].style.marginTop = '10px';
			hrItems[i].style.marginBottom = '10px';
		}
	}	
}

function ApplyChecks(){
	var hasunderworldaccess = (keyitems[2] === true || keyitems[6] === true);
	
	// ****Key Items****
	
	//Adamant Cave
	DeactivateKeyItemLocation(0);
	if (keyitems[6] === true && keyitems[11] === true) {
		ActivateKeyItemLocation(0);
	}
	
	//Antlion Cave
	ActivateKeyItemLocation(1);
	
	//Baron Castle [King]
	DeactivateKeyItemLocation(2);
	if (keyitems[0] === true) {
		ActivateKeyItemLocation(2);
	}
	
	//Baron Castle [Odin]
	DeactivateKeyItemLocation(3);
	if (keyitems[0] === true) {
		ActivateKeyItemLocation(3);
	}
	
	//Town of Baron
	ActivateKeyItemLocation(4);

	//Fabul [Defend]
	ActivateKeyItemLocation(5);

	//Fabul [Yang/Slyph]
	DeactivateKeyItemLocation(6);
	if (hasunderworldaccess) {
		ActivateKeyItemLocation(6);
	}

	//Fabul [Yang/Pan]
	DeactivateKeyItemLocation(7);
	if (keyitems[9] === true && hasunderworldaccess) {
		ActivateKeyItemLocation(7);
	}

	//Magnes Cave
	DeactivateKeyItemLocation(8);
	if (keyitems[7] === true) {
		ActivateKeyItemLocation(8);
	}
	
	//Mist Village
	DeactivateKeyItemLocation(9);
	if (mist === true) {
		ActivateKeyItemLocation(9);
	}	

	//Mt Ordeals
	ActivateKeyItemLocation(10);
	
	if (keyitemlocations[10] === 2) {
		cecil = true;
	} else {
		cecil = false;
	}

	//Tower of Zot
	DeactivateKeyItemLocation(11);
	if (keyitems[5] === true) {
		ActivateKeyItemLocation(11);
	}	

	//Troia Castle
	ActivateKeyItemLocation(12);
	
	//Dwarf Castle
	DeactivateKeyItemLocation(13);
	if (hasunderworldaccess) {
		ActivateKeyItemLocation(13);
	}	
	
	//Feymarch [Chest]
	DeactivateKeyItemLocation(14);
	if (hasunderworldaccess) {
		ActivateKeyItemLocation(14);
	}	
	
	//Feymarch [Asura]
	DeactivateKeyItemLocation(15);
	if (hasunderworldaccess) {
		ActivateKeyItemLocation(15);
	}

	//Feymarch [Leviathan]
	DeactivateKeyItemLocation(16);
	if (hasunderworldaccess) {
		ActivateKeyItemLocation(16);
	}
	
	//Lower Babil [Boss]
	DeactivateKeyItemLocation(17);
	if (hasunderworldaccess) {
		ActivateKeyItemLocation(17);
	}
	
	//Lower Babil [Tower]
	DeactivateKeyItemLocation(18);
	if (keyitems[3] === true && hasunderworldaccess) {
		ActivateKeyItemLocation(18);
	}
	
	//Sealed Cave
	DeactivateKeyItemLocation(19);
	if (keyitems[1] === true && hasunderworldaccess) {
		ActivateKeyItemLocation(19);
	}
	
	//Slyph Cave
	DeactivateKeyItemLocation(20);
	if (keyitems[9] === true && hasunderworldaccess) {
		ActivateKeyItemLocation(20);
	}
	
	//Bahamut
	DeactivateKeyItemLocation(21);
	if (keyitems[4] === true) {
		ActivateKeyItemLocation(21);
	}
	
	//Lunar [Crystal]
	DeactivateKeyItemLocation(22);
	if (keyitems[4] === true) {
		ActivateKeyItemLocation(22);
	}
	
	//Lunar [Masamune]
	DeactivateKeyItemLocation(23);
	if (keyitems[4] === true) {
		ActivateKeyItemLocation(23);
	}
	
	//Lunar [Murasame]
	DeactivateKeyItemLocation(24);
	if (keyitems[4] === true) {
		ActivateKeyItemLocation(24);
	}
	
	//Lunar [Ribbon]
	DeactivateKeyItemLocation(25);
	if (keyitems[4] === true) {
		ActivateKeyItemLocation(25);
	}
	
	//Lunar [White]
	DeactivateKeyItemLocation(26);
	if (keyitems[4] === true) {
		ActivateKeyItemLocation(26);
	}
	
	// ****Characters****
	
	//Baron Castle
	DeactivateCharacterLocation(0);
	if (keyitems[0] === true) {
		ActivateCharacterLocation(0);
	}
	
	//Town of Baron
	ActivateCharacterLocation(1);
	
	//Damcyan
	ActivateCharacterLocation(2);
	
	//Eblan Cave
	DeactivateCharacterLocation(3);
	if (keyitems[6] === true) {
		ActivateCharacterLocation(3);
	}	
	
	//Giant of Babil
	DeactivateCharacterLocation(4);
	if (keyitems[4] === true) {
		ActivateCharacterLocation(4);
	}
	
	//Kaipo
	DeactivateCharacterLocation(5);
	if (keyitems[10] === true) {
		ActivateCharacterLocation(5);
	}
	
	//Mist Village
	DeactivateCharacterLocation(6);
	if (keyitems[8] === true) {
		ActivateCharacterLocation(6);
	}
	
	//Mt Hobbs
	ActivateCharacterLocation(7);

	//Mt Ordeals
	ActivateCharacterLocation(8);
	
	//Mysidia
	ActivateCharacterLocation(9);
	
	//Tower of Zot
	DeactivateCharacterLocation(10);
	if (keyitems[5] === true) {
		ActivateCharacterLocation(10);
	}
	
	//Waterway
	ActivateCharacterLocation(11);	
	
	//Dwarf Castle
	DeactivateCharacterLocation(12);
	if (hasunderworldaccess) {
		ActivateCharacterLocation(12);
	}
	
	if (characterlocations[12] === 2) {
		rydia = true;
	} else {
		rydia = false;
	}

	//Lunar Sub.
	DeactivateCharacterLocation(13);
	if (keyitems[4] === true) {
		ActivateCharacterLocation(13);
	}
	
	// ****Towns/Shops****

	//Agart
	ActivateTownLocation(0);
	
	//Town of Baron
	ActivateTownLocation(1);

	//Eblan Cave
	DeactivateTownLocation(2);
	if (keyitems[6] === true) {
		ActivateTownLocation(2);
	}
	
	//Fabul
	ActivateTownLocation(3);
	
	//Kaipo
	ActivateTownLocation(4);
	
	//Mysidia
	ActivateTownLocation(5);
	
	//Silvera
	ActivateTownLocation(6);
	
	//Troia [Item]
	ActivateTownLocation(7);
	
	//Troia [Pub]
	ActivateTownLocation(8);
	
	//Dwarf Castle
	DeactivateTownLocation(9);
	if (hasunderworldaccess) {
		ActivateTownLocation(9);
	}
	
	//Feymarch
	DeactivateTownLocation(10);
	if (hasunderworldaccess) {
		ActivateTownLocation(10);
	}
	
	//Tomara
	DeactivateTownLocation(11);
	if (hasunderworldaccess) {
		ActivateTownLocation(11);
	}
	
	//Hummingway
	DeactivateTownLocation(12);
	if (keyitems[4] === true) {
		ActivateTownLocation(12);
	}
	
	
	// ****Trapped Chests****
	
	//Castle Eblan
	ActivateTrappedLocation(0);

	//Eblan Cave
	DeactivateTrappedLocation(1);
	if (keyitems[6] === true) {
		ActivateTrappedLocation(1);
	}

	//Giant of Babil
	DeactivateTrappedLocation(2);
	if (keyitems[4] === true) {
		ActivateTrappedLocation(2);
	}

	//Tower of Zot
	ActivateTrappedLocation(3);
	
	//Upper Babil
	DeactivateTrappedLocation(4);
	if (keyitems[6] === true) {
		ActivateTrappedLocation(4);
	}

	//Feymarch
	DeactivateTrappedLocation(5);
	if (hasunderworldaccess) {
		ActivateTrappedLocation(5);
	}

	//Lower Babil
	DeactivateTrappedLocation(6);
	if (hasunderworldaccess) {
		ActivateTrappedLocation(6);
	}

	//Slyph Cave
	DeactivateTrappedLocation(7);
	if (hasunderworldaccess) {
		ActivateTrappedLocation(7);
	}

	//Lunar Path
	DeactivateTrappedLocation(8);
	if (keyitems[4] === true) {
		ActivateTrappedLocation(8);
	}

	//Lunar Sub.
	DeactivateTrappedLocation(9);
	if (keyitems[4] === true) {
		ActivateTrappedLocation(9);
	}
	
	//Characters
	for (var i = 0; i < 12; i++) {
		var l = 'character' + i.toString();
		if (characters[i] === true) {
			if (i === 0 && cecil) { //If Cecil and Ordeals clear
				document.getElementById(l).src = imagedir + 'character' + i + '_2_a.png'
			} else if (i === 2 && rydia) { //If Rydia and Dwarf Castle clear
				document.getElementById(l).src = imagedir + 'character' + i + '_2_a.png'
			} else { //All Others
				document.getElementById(l).src = imagedir + 'character' + i + '_a.png'
			}
		} else {
			if (i === 0 && cecil) { //If Cecil and Ordeals clear
				document.getElementById(l).src = imagedir + 'character' + i + '_2.png'
			} else if (i === 2 && rydia) { //If Rydia and Dwarf Castle clear
				document.getElementById(l).src = imagedir + 'character' + i + '_2.png'
			} else { //All Others
				document.getElementById(l).src = imagedir + 'character' + i + '.png'
			}
		}
	}
	
	//Items
	var itemcount = 0;
	for (var i = 0; i < 18; i++) {
		var l = 'item' + i.toString();
		if (keyitems[i] === true) {
		
			//Check to see if Pass is a key item
			if (pflag === 1 && i === 17) {
				itemcount++;
			}
			if (i != 17) {
				itemcount++;
			}
			
			document.getElementById(l).src = imagedir + 'item' + i + '_a.png'
		} else {
			document.getElementById(l).src = imagedir + 'item' + i + '.png'
		}
	}
	
	if (itemcount > maxitems) {
		itemcount = maxitems;
	}
	
	document.getElementById('itemtracker').innerHTML = itemcount + '/' + maxitems;
	if (itemcount > 9 && xflag === 2) {
		document.getElementById('itemtracker').style.color = "#0F0";
	}
	
	//Key Item Locations
	if (viewactivekeyitems === true) {
		document.getElementById('keyitemlocationviewchecked').style.display = "block";
		document.getElementById('keyitemlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('keyitemlocationviewchecked').style.display = "none";
		document.getElementById('keyitemlocationviewunchecked').style.display = "block";
	}
		
	for (var i = 0; i < 27; i++) {
		var l = 'keyitemlocation' + i.toString();
		
		if (viewactivekeyitems === true) {
			if (keyitemlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (keyitemlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (keyitemlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (keyitemlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}
			
		}
	}
	
	//Character Locations
	if (viewactivecharacters === true) {
		document.getElementById('characterlocationviewchecked').style.display = "block";
		document.getElementById('characterlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('characterlocationviewchecked').style.display = "none";
		document.getElementById('characterlocationviewunchecked').style.display = "block";
	}

	for (var i = 0; i < 14; i++) {
		var l = 'characterlocation' + i.toString();
		
		if (viewactivecharacters === true) {
			if (characterlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (characterlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (characterlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (characterlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}			
		}
	}
	
	//Town/Shop Locations
	if (viewactivetowns === true) {
		document.getElementById('townlocationviewchecked').style.display = "block";
		document.getElementById('townlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('townlocationviewchecked').style.display = "none";
		document.getElementById('townlocationviewunchecked').style.display = "block";
	}

	for (var i = 0; i < 13; i++) {
		var l = 'townlocation' + i.toString();
		
		if (viewactivetowns === true) {
			if (townlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (townlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				if (items[i] > 1) {
					document.getElementById(l).style.color = "#0F0";
				} else {
					document.getElementById(l).style.color = "#FFF";
				}
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (townlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (townlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}			
		}
	}
	
	//Trapped Chest Locations
	if (viewactivetrapped === true) {
		document.getElementById('trappedlocationviewchecked').style.display = "block";
		document.getElementById('trappedlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('trappedlocationviewchecked').style.display = "none";
		document.getElementById('trappedlocationviewunchecked').style.display = "block";
	}

	for (var i = 0; i < 10; i++) {
		var l = 'trappedlocation' + i.toString();
		
		if (viewactivetrapped === true) {
			document.getElementById(l).innerHTML = trappedchestnames[i] + ' [' + trappedchestcounts[i] + ']';
			if (trappedchestlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (trappedchestlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (trappedchestlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			document.getElementById(l).innerHTML = trappedchestnames[i];
			if (trappedchestlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}
		}
	}

	//Boss Tracker
	if (disablebosstracker === '0') {
		for (var i = 0; i < 35; i++) {
			var l = 'bossmodal' + i.toString();
			
			if (bosses[i] === true) {
				document.getElementById(l).style.color = "#666";
				document.getElementById(l).style.setProperty("text-decoration", "line-through");
			} else {
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			}
		}	
	}
	
}

function SwapKeyItemLocation(i) {
	if (keyitemlocations[i] === 1) {
		keyitemlocations[i] = 2;
	} else if (keyitemlocations[i] === 2) {
		keyitemlocations[i] = 1;
	}
	ApplyChecks();
}

function SwapCharacterLocation(i) {
	if (characterlocations[i] === 1) {
		characterlocations[i] = 2;
	} else if (characterlocations[i] === 2) {
		characterlocations[i] = 1;
	}	
	ApplyChecks();
}

function SwapTrappedLocation(i) {
	if (trappedchestlocations[i] === 1) {
		trappedchestcounts[i]--;
		if (trappedchestcounts[i] === 0) {
			trappedchestlocations[i] = 2;
		}
	} else if (trappedchestlocations[i] === 2) {
		trappedchestlocations[i] = 1;
		trappedchestcounts[i] = trappedchestmaxcounts[i];
	}
	ApplyChecks();
}

function ActivateKeyItemLocation(i) {
	if (keyitemlocations[i] === 0) {
		keyitemlocations[i] = 1;
	}
}

function DeactivateKeyItemLocation(i) {
	if (keyitemlocations[i] === 1) {
		keyitemlocations[i] = 0;
	}
}

function ActivateCharacterLocation(i) {
	if (characterlocations[i] === 0) {
		characterlocations[i] = 1;
	}
}

function DeactivateCharacterLocation(i) {
	if (characterlocations[i] === 1) {
		characterlocations[i] = 0;
	}
}

function ActivateTownLocation(i) {
	if (townlocations[i] === 0) {
		townlocations[i] = 1;
	}
}

function DeactivateTownLocation(i) {
	if (townlocations[i] === 1) {
		townlocations[i] = 0;
	}
}

function ActivateTrappedLocation(i) {
	if (trappedchestlocations[i] === 0) {
		trappedchestlocations[i] = 1;
	}
}

function DeactivateTrappedLocation(i) {
	if (trappedchestlocations[i] === 1) {
		trappedchestlocations[i] = 0;
	}
}

function ViewCheckedKeyItems() {
	viewactivekeyitems = false;
	ApplyChecks();
}

function ViewUncheckedKeyItems() {
	viewactivekeyitems = true;
	ApplyChecks();
}

function ViewCheckedCharacters() {
	viewactivecharacters = false;
	ApplyChecks();
}

function ViewUncheckedCharacters() {
	viewactivecharacters = true;
	ApplyChecks();
}
function ViewCheckedTowns() {
	viewactivetowns = false;
	ApplyChecks();
}

function ViewUncheckedTowns() {
	viewactivetowns = true;
	ApplyChecks();
}

function ViewCheckedTrapped() {
	viewactivetrapped = false;
	ApplyChecks();
}

function ViewUncheckedTrapped() {
	viewactivetrapped = true;
	ApplyChecks();
}

function SwapBoss(i) {
	bosses[i] = !bosses[i];
	if (i === 0) {
		mist = !mist;
	}
	ApplyChecks();
}

function IgnoreMenuClose() {
	menutoggle = true;
}

function SwapItem(i) {
	keyitems[i] = !keyitems[i];
	ApplyChecks();
}				

function SwapCharacter(i) {
	characters[i] = !characters[i];
	ApplyChecks();
}

function LoadItems(i) {	
	currentitemlist = i;
	var modalx = items[i];
	
	if (modalx >= 8192) {
		document.getElementById('itemlist13').checked = true;
		document.getElementById('itemspan13').style.color = "#0F0";
		modalx -= 8192;
	} else {
		document.getElementById('itemlist13').checked = false;
		document.getElementById('itemspan13').style.color = "#FFF";
	}
	if (modalx >= 4096) {
		document.getElementById('itemlist12').checked = true;
		document.getElementById('itemspan12').style.color = "#0F0";
		modalx -= 4096;
	} else {
		document.getElementById('itemlist12').checked = false;
		document.getElementById('itemspan12').style.color = "#FFF";
	}
	if (modalx >= 2048) {
		document.getElementById('itemlist11').checked = true;
		document.getElementById('itemspan11').style.color = "#0F0";
		modalx -= 2048;
	} else {
		document.getElementById('itemlist11').checked = false;
		document.getElementById('itemspan11').style.color = "#FFF";
	}
	if (modalx >= 1024) {
		document.getElementById('itemlist10').checked = true;
		document.getElementById('itemspan10').style.color = "#0F0";
		modalx -= 1024;
	} else {
		document.getElementById('itemlist10').checked = false;
		document.getElementById('itemspan10').style.color = "#FFF";
	}
	if (modalx >= 512) {
		document.getElementById('itemlist9').checked = true;
		document.getElementById('itemspan9').style.color = "#0F0";
		modalx -= 512;
	} else {
		document.getElementById('itemlist9').checked = false;
		document.getElementById('itemspan9').style.color = "#FFF";
	}
	if (modalx >= 256) {
		document.getElementById('itemlist8').checked = true;
		document.getElementById('itemspan8').style.color = "#0F0";
		modalx -= 256;
	} else {
		document.getElementById('itemlist8').checked = false;
		document.getElementById('itemspan8').style.color = "#FFF";
	}
	if (modalx >= 128) {
		document.getElementById('itemlist7').checked = true;
		document.getElementById('itemspan7').style.color = "#0F0";
		modalx -= 128;
	} else {
		document.getElementById('itemlist7').checked = false;
		document.getElementById('itemspan7').style.color = "#FFF";
	}
	if (modalx >= 64) {
		document.getElementById('itemlist6').checked = true;
		document.getElementById('itemspan6').style.color = "#0F0";
		modalx -= 64;
	} else {
		document.getElementById('itemlist6').checked = false;
		document.getElementById('itemspan6').style.color = "#FFF";
	}
	if (modalx >= 32) {
		document.getElementById('itemlist5').checked = true;
		document.getElementById('itemspan5').style.color = "#0F0";
		modalx -= 32;
	} else {
		document.getElementById('itemlist5').checked = false;
		document.getElementById('itemspan5').style.color = "#FFF";
	}
	if (modalx >= 16) {
		document.getElementById('itemlist4').checked = true;
		document.getElementById('itemspan4').style.color = "#0F0";
		modalx -= 16;
	} else {
		document.getElementById('itemlist4').checked = false;
		document.getElementById('itemspan4').style.color = "#FFF";
	}
	if (modalx >= 8) {
		document.getElementById('itemlist3').checked = true;
		document.getElementById('itemspan3').style.color = "#0F0";
		modalx -= 8;
	} else {
		document.getElementById('itemlist3').checked = false;
		document.getElementById('itemspan3').style.color = "#FFF";
	}
	if (modalx >= 4) {
		document.getElementById('itemlist2').checked = true;
		document.getElementById('itemspan2').style.color = "#0F0";
		modalx -= 4;
	} else {
		document.getElementById('itemlist2').checked = false;
		document.getElementById('itemspan2').style.color = "#FFF";
	}
	if (modalx >= 2) {
		document.getElementById('itemlist1').checked = true;
		document.getElementById('itemspan1').style.color = "#0F0";
		modalx -= 2;
	} else {
		document.getElementById('itemlist1').checked = false;
		document.getElementById('itemspan1').style.color = "#FFF";
	}
	if (modalx >= 1) {
		document.getElementById('itemlist0').checked = true;
		document.getElementById('itemspan0').style.color = "#0F0";
	} else {
		document.getElementById('itemlist0').checked = false;
		document.getElementById('itemspan0').style.color = "#FFF";
	}
	
	$('#itemModal').show();
}

function CheckItems() {
	items[currentitemlist] = 0;
	if (document.getElementById('itemlist0').checked === true) {
		items[currentitemlist] += 1;
		document.getElementById('itemspan0').style.color = "#0F0";
	} else {
		document.getElementById('itemspan0').style.color = "#FFF";
	}
	
	if (items[currentitemlist] != 1) {
		if (document.getElementById('itemlist1').checked === true) {
			items[currentitemlist] += 2;
			document.getElementById('itemspan1').style.color = "#0F0";
		} else {
			document.getElementById('itemspan1').style.color = "#FFF";
		}
		if (document.getElementById('itemlist2').checked === true) {
			items[currentitemlist] += 4;
			document.getElementById('itemspan2').style.color = "#0F0";
		} else {
			document.getElementById('itemspan2').style.color = "#FFF";
		}
		if (document.getElementById('itemlist3').checked === true) {
			items[currentitemlist] += 8;
			document.getElementById('itemspan3').style.color = "#0F0";
		} else {
			document.getElementById('itemspan3').style.color = "#FFF";
		}
		if (document.getElementById('itemlist4').checked === true) {
			items[currentitemlist] += 16;
			document.getElementById('itemspan4').style.color = "#0F0";
		} else {
			document.getElementById('itemspan4').style.color = "#FFF";
		}
		if (document.getElementById('itemlist5').checked === true) {
			items[currentitemlist] += 32;
			document.getElementById('itemspan5').style.color = "#0F0";
		} else {
			document.getElementById('itemspan5').style.color = "#FFF";
		}
		if (document.getElementById('itemlist6').checked === true) {
			items[currentitemlist] += 64;
			document.getElementById('itemspan6').style.color = "#0F0";
		} else {
			document.getElementById('itemspan6').style.color = "#FFF";
		}
		if (document.getElementById('itemlist7').checked === true) {
			items[currentitemlist] += 128;
			document.getElementById('itemspan7').style.color = "#0F0";
		} else {
			document.getElementById('itemspan7').style.color = "#FFF";
		}
		if (document.getElementById('itemlist8').checked === true) {
			items[currentitemlist] += 256;
			document.getElementById('itemspan8').style.color = "#0F0";
		} else {
			document.getElementById('itemspan8').style.color = "#FFF";
		}
		if (document.getElementById('itemlist9').checked === true) {
			items[currentitemlist] += 512;
			document.getElementById('itemspan9').style.color = "#0F0";
		} else {
			document.getElementById('itemspan9').style.color = "#FFF";
		}
		if (document.getElementById('itemlist10').checked === true) {
			items[currentitemlist] += 1024;
			document.getElementById('itemspan10').style.color = "#0F0";
		} else {
			document.getElementById('itemspan10').style.color = "#FFF";
		}
		if (document.getElementById('itemlist11').checked === true) {
			items[currentitemlist] += 2048;
			document.getElementById('itemspan11').style.color = "#0F0";
		} else {
			document.getElementById('itemspan11').style.color = "#FFF";
		}
		if (document.getElementById('itemlist12').checked === true) {
			items[currentitemlist] += 4096;
			document.getElementById('itemspan12').style.color = "#0F0";
		} else {
			document.getElementById('itemspan12').style.color = "#FFF";
		}
		if (document.getElementById('itemlist13').checked === true) {
			items[currentitemlist] += 8192;
			document.getElementById('itemspan13').style.color = "#0F0";
		} else {
			document.getElementById('itemspan13').style.color = "#FFF";
		}
	} else {
		CloseItems();
	}
}

function CheckItemBox(i) {
	var l = 'itemlist' + i;
	document.getElementById(l).checked = !document.getElementById(l).checked;
}

function CheckItemSpan(i) {
	var l = 'itemlist' + i;
	document.getElementById(l).checked = !document.getElementById(l).checked;
	CheckItems();
}

function CloseItems() {
	if (menutoggle === false) {
		if (items[currentitemlist] === 1) {
			townlocations[currentitemlist] = 2;
		} else {
			townlocations[currentitemlist] = 1;
		}
		$('#itemModal').hide();
		ApplyChecks();
	} else {
		menutoggle = false;
	}
}

function LoadFlags() {
	if (disablelocationtracker === '0') {
		$('#flagsModal').show();
	}
}

function CloseFlags() {
	if (menutoggle === false) {
		$('#flagsModal').hide();
	} else {
		menutoggle = false;
	}	
}

function CloseBoss() {
	if (menutoggle === false) {
		$('#bossModal').hide();
	} else {
		menutoggle = false;
	}
}

function ViewTown() {
	LoadKnownTownLocations();
	$('#townModal').show();
}

function CloseTown() {
	if (menutoggle === false) {
		$('#townModal').hide();
	} else {
		menutoggle = false;
	}
}

function LoadKnownTownLocations() {
	var passstring = '';
	var lifestring = '';
	var curestring = '';
	var etherstring = '';
	var tentstring = '';
	var coffinstring = '';
	var sirenstring = '';
	var bacchusstring = '';
	var illusionstring = '';
	var starveilstring = '';
	var starduststring = '';
	var bigbombstring = '';
	var otherstring = '';
	
	for (var i = 0; i < 13; i++) {
		var modalx = items[i];
			
		if (modalx >= 8192) {
			otherstring = AddTownLocation(otherstring, i);
			modalx -= 8192;
		}
		if (modalx >= 4096) {
			bigbombstring = AddTownLocation(bigbombstring, i);
			modalx -= 4096;
		}
		if (modalx >= 2048) {
			starduststring = AddTownLocation(starduststring, i);
			modalx -= 2048;
		}
		if (modalx >= 1024) {
			starveilstring = AddTownLocation(starveilstring, i);
			modalx -= 1024;
		}
		if (modalx >= 512) {
			illusionstring = AddTownLocation(illusionstring, i);
			modalx -= 512;
		}
		if (modalx >= 256) {
			bacchusstring = AddTownLocation(bacchusstring, i);
			modalx -= 256;
		}
		if (modalx >= 128) {
			sirenstring = AddTownLocation(sirenstring, i);
			modalx -= 128;
		}
		if (modalx >= 64) {
			coffinstring = AddTownLocation(coffinstring, i);
			modalx -= 64;
		}
		if (modalx >= 32) {
			tentstring = AddTownLocation(tentstring, i);
			modalx -= 32;
		}
		if (modalx >= 16) {
			etherstring = AddTownLocation(etherstring, i);
			modalx -= 16;
		}
		if (modalx >= 8) {
			curestring = AddTownLocation(curestring, i);
			modalx -= 8;
		}
		if (modalx >= 4) {
			lifestring = AddTownLocation(lifestring, i);
			modalx -= 4;
		}
		if (modalx >= 2) {
			passstring = AddTownLocation(passstring, i);
			modalx -= 2;
		}
	}
	
	document.getElementById('townlistlocation1').innerHTML = passstring;
	document.getElementById('townlistlocation2').innerHTML = lifestring;
	document.getElementById('townlistlocation3').innerHTML = curestring;
	document.getElementById('townlistlocation4').innerHTML = etherstring;
	document.getElementById('townlistlocation5').innerHTML = tentstring;
	document.getElementById('townlistlocation6').innerHTML = coffinstring;
	document.getElementById('townlistlocation7').innerHTML = sirenstring;
	document.getElementById('townlistlocation8').innerHTML = bacchusstring;
	document.getElementById('townlistlocation9').innerHTML = illusionstring;
	document.getElementById('townlistlocation10').innerHTML = starveilstring;
	document.getElementById('townlistlocation11').innerHTML = starduststring;
	document.getElementById('townlistlocation12').innerHTML = bigbombstring;
	document.getElementById('townlistlocation13').innerHTML = otherstring;
	
}

function AddTownLocation(locationdata, i) {

	if (locationdata.length > 0) {
		locationdata += ', ';
	}
	
	switch(i) {
		case 0:
			locationdata += 'Agart';
			break;
		case 1:
			locationdata += 'Town of Baron';
			break;
		case 2:
			locationdata += 'Eblan Cave';
			break;
		case 3:
			locationdata += 'Fabul';
			break;
		case 4:
			locationdata += 'Kaipo';
			break;
		case 5:
			locationdata += 'Mysidia';
			break;
		case 6:
			locationdata += 'Silvera';
			break;
		case 7:
			locationdata += 'Troia [Item]';
			break;
		case 8:
			locationdata += 'Troia [Pub]';
			break;
		case 9:
			locationdata += 'Dwarf Castle';
			break;
		case 10:
			locationdata += 'Feymarch';
			break;
		case 11:
			locationdata += 'Tomara';
			break;
		case 12:
			locationdata += 'Hummingway';
			break;
	}
	
	return locationdata;
}

function ToggleMist() {
	if (disablebosstracker === '1') {
		mist = !mist;
		if (mist) {
			document.getElementById('misttoggle').src = imagedir + 'mistdragon.png'
		} else {
			document.getElementById('misttoggle').src = imagedir + 'mistdragon_2.png'
		}
		ApplyChecks();
	} else {
		$('#bossModal').show();
	}
	
}
