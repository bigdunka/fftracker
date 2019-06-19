var characters = [false,false,false,false,false,false,false,false,false,false,false,false];
var keyitems = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var bosses = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var keyitemlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var characterlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var townlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var trappedchestlocations = [0,0,0,0,0,0,0,0,0,0];
var trappedchestnames = ['Castle Eblan','Eblan Cave','Giant of Babil','Tower of Zot','Upper Babil','Feymarch','Lower Babil','Sylph Cave','Lunar Path','Lunar Sub.'];
var bossnames = ['Mist Dragon','Baron Soldiers','Octomamm','Antlion','Waterhag','Mom Bomb','Fabul Gauntlet','Milon','MilonZ','Dark Knight Cecil','Baron Guards','Yang','Baigan','Kainazzo','Dark Elf','Magus Sisters','Valvalis','Calcabrina','Golbez','Dr Lugae','Dark Imps','K & Q Eblan','Rubicant','Evil Wall','Elementals','CPU','Odin','Asura','Leviathan','Bahamut','Pale Dim','Lunar Dragons','Plague','Ogopogo','Wyvern'];

var bestiarydata = [];

// 0 = Not available, 1 = Available, 2 = Checked, 3 = Hidden

var trappedchestcounts = [3,1,1,1,1,1,4,7,1,9];
var trappedchestmaxcounts = [3,1,1,1,1,1,4,7,1,9];
var currentitemlist = 0;
var items = [0,0,0,0,0,0,0,0,0,0];

var partymembers = [-1,-1,-1,-1,-1];

var maxitems = 17;

var viewactivekeyitems = true;
var viewactivecharacters = true;
var viewactivetowns = true;
var viewactivetrapped = true;

var imagedir = 'images/';
var cecil = false;
var rydia = false;
var mist = false;
var hookclear = false;
var ignorewarp = false;
var menutoggle = false;

//NEW FLAGS
var variant = 0;
var jitems = false;
var jspells = false;
var jabilities = false;
var krandomized = false;
var ksummons = false;
var kmoon = false;
var ktrapped = false;
var ksafety = false;
var pshop = false;
var pkey = false;
var ptreasure = false;
var cguaranteed = false;
var crestrict = false;
var cfive = false;
var cnodupes = false;
var crescue = false;
var chobs = false;
var treasures = 0;
var tgp = false;
var ttrapped = false;
var shops = 0;
var ssafety = false;
var sfree = false;
var squarter = false;
var sapples = false;
var ssirens = false;
var randombosses = false;
var bosssafety = false;
var wyvern = 0;
var fuchallenge = false;
var nflc = false;
var nflk = false;
var nflb = false;
var enemyencounters = 0;
var enemyforced = false;
var enemydangerous = false;
var enemyrun = false;
var expsharing = false;
var expkeyitems = false;
var explowlevel = false;
var expnoexp = false;
var gdwarfwarp = false;
var aagility = true;
var noadamants = true;
var wackymute = true;
var wackyspoon = true;
var wackyfab = true;
var wackyhuh = true;
var wackyzeromus = true;
var overridestarting = '';

var disableitemtracker = '0';
var disablelocationtracker = '0';
var disablebosstracker = '0';
var disablecharactertracker = '0';

var partyswap = 0;
var ignoreswap = false;

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
	$('#armoryModal').hide();
	$('#bestairyModal').hide();
	$('#characterModal').hide();
	
	disableitemtracker = getParameterByName('d');
	
	disableloctracker = getParameterByName('c');

	disablebosstracker = getParameterByName('s');
	
	disablelocationtracker = getParameterByName('l');
	
	disablecharactertracker = getParameterByName('h');
	
	if (disableloctracker === '1') {
		keyitemlocations = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		townlocations = [1,1,1,1,1,1,1,1,1,1,1,1,1];
		characterlocations = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		trappedchestlocations = [1,1,1,1,1,1,1,1,1,1];
		document.getElementById('keyitemlocation27').style.display = "none";
		document.getElementById('keyitemlocation28').style.display = "none";
	}
	
	if (disablelocationtracker === '1') {
		document.getElementById('trackingtable').style.display = "none";
		document.getElementById('wrapperdiv').style.width = "400px";
		document.getElementById('datadiv').style.display = "none";
		disablebosstracker = '1';
	}
	
	if (disablecharactertracker === '1') {
		document.getElementById('partydiv').style.display = "none";
		document.getElementById('partyhr').style.display = "none";		
	}
	
	var flags = getParameterByName('f');
	
	var flagsets = flags.split('|');
	var excludedCharacters = '';
	
	for (var fs in flagsets) {
		
		//Variants
		if (flagsets[fs].indexOf('V1') > -1) {
			variant = 1;
			document.getElementById("variant0").style.display = "none";
			document.getElementById("variant1").style.display = "block";
		} else if (flagsets[fs].indexOf('V2') > -1) {
			variant = 2;
			document.getElementById("variant0").style.display = "none";
			document.getElementById("variant2").style.display = "block";
		}
		
		//Japanese Content
		if (flagsets[fs].startsWith('J')) {
			if (flagsets[fs].indexOf('I') > -1) {
				document.getElementById("japanese0").style.display = "none";
				document.getElementById("japaneseI").style.display = "block";
				jitems = true;
			}
			if (flagsets[fs].indexOf('S') > -1) {
				document.getElementById("japanese0").style.display = "none";
				document.getElementById("japaneseS").style.display = "block";
				jspells = true;
			}
			if (flagsets[fs].indexOf('A') > -1) {
				document.getElementById("japanese0").style.display = "none";
				document.getElementById("japaneseA").style.display = "block";
				jabilities = true;
			}
		}
			
		//Key Items/Pass
		if (flagsets[fs].startsWith('K')) {
			krandomized = true;
			document.getElementById("keyitempass0").style.display = "none";
			document.getElementById("keyitempassR").style.display = "block";
			if (flagsets[fs].indexOf('Q') > -1) {
				ksummons = true;
				document.getElementById("keyitempassQ").style.display = "block";
			}
			if (flagsets[fs].indexOf('M') > -1) {
				kmoon = true;
				document.getElementById("keyitempassM").style.display = "block";
			}
			if (flagsets[fs].indexOf('T') > -1) {
				ktrapped = true;
				document.getElementById("keyitempassT").style.display = "block";
			}
			if (flagsets[fs].indexOf('!') > -1) {
				ksafety = true;
				document.getElementById("keyitempassSa").style.display = "block";
			}
		}		
		
		if (flagsets[fs].startsWith('P')) {
			if (flagsets[fs].indexOf('S') > -1) {
				pshop = true;
				document.getElementById("keyitempassS").style.display = "block";
				document.getElementById("townpass").style.display = "block";
				document.getElementById("itempass").style.display = "block";
				
			}
			if (flagsets[fs].indexOf('K') > -1) {
				document.getElementById("keyitempassK").style.display = "block";
				pkey = true;
			}
			if (flagsets[fs].indexOf('T') > -1) {
				document.getElementById("keyitempassTC").style.display = "block";
				ptreasure = true;
			}
		}
		
		//Characters
		if (flagsets[fs].startsWith('C')) {
			document.getElementById("characters0").style.display = "none";
			document.getElementById("charactersC").style.display = "block";
			if (flagsets[fs].indexOf('N') > -1) {
				cguaranteed = true;
				document.getElementById("charactersN").style.display = "block";
			}
			if (flagsets[fs].indexOf('X') > -1) {
				crestrict = true;
				document.getElementById("charactersX").style.display = "block";
			}
			if (flagsets[fs].indexOf('5') > -1) {
				cfive = true;
				document.getElementById("characters5").style.display = "block";
			}
		}
		
		//Exclude characters
		if (flagsets[fs].indexOf('-NO') > -1 && flagsets[fs] != '-NODUPES') {
			document.getElementById("charactersE").style.display = "block";
			switch (flagsets[fs]) {
				case '-NOCECIL':
					document.getElementById('character0_x').style.visibility = 'visible';
					excludedCharacters += 'Cecil ';
					break;
				case '-NOKAIN':
					document.getElementById('character1_x').style.visibility = 'visible';
					excludedCharacters += 'Kain ';
					break;
				case '-NORYDIA':
					document.getElementById('character2_x').style.visibility = 'visible';
					excludedCharacters += 'Rydia ';
					break;
				case '-NOTELLAH':
					document.getElementById('character3_x').style.visibility = 'visible';
					excludedCharacters += 'Tellah ';
					break;
				case '-NOEDWARD':
					document.getElementById('character4_x').style.visibility = 'visible';
					excludedCharacters += 'Edward ';
					break;
				case '-NOROSA':
					document.getElementById('character5_x').style.visibility = 'visible';
					excludedCharacters += 'Rosa ';
					break;
				case '-NOYANG':
					document.getElementById('character6_x').style.visibility = 'visible';
					excludedCharacters += 'Yang ';
					break;
				case '-NOPALOM':
					document.getElementById('character7_x').style.visibility = 'visible';
					excludedCharacters += 'Palom ';
					break;
				case '-NOPOROM':
					document.getElementById('character8_x').style.visibility = 'visible';
					excludedCharacters += 'Porom ';
					break;
				case '-NOCID':
					document.getElementById('character9_x').style.visibility = 'visible';
					excludedCharacters += 'Cid ';
					break;
				case '-NOEDGE':
					document.getElementById('character10_x').style.visibility = 'visible';
					excludedCharacters += 'Edge ';
					break;
				case '-NOFUSOYA':
					document.getElementById('character11_x').style.visibility = 'visible';
					excludedCharacters += 'FuSoYa ';
					break;
			}
		}

		//Starting character
		if (flagsets[fs].indexOf('-START') > -1) {
			document.getElementById("charactersS").style.display = "block";
			switch (flagsets[fs]) {
				case '-STARTCECIL':
					SwapCharacter(0);
					overridestarting = 'CECIL';
					document.getElementById('characterStart').innerHTML = 'Cecil';
					break;
				case '-STARTKAIN':
					SwapCharacter(1);
					overridestarting = 'KAIN';
					document.getElementById('characterStart').innerHTML = 'Kain';
					break;
				case '-STARTRYDIA':
					SwapCharacter(2);
					overridestarting = 'RYDIA';
					document.getElementById('characterStart').innerHTML = 'Rydia';
					break;
				case '-STARTTELLAH':
					SwapCharacter(3);
					overridestarting = 'TELLAH';
					document.getElementById('characterStart').innerHTML = 'Tellah';
					break;
				case '-STARTEDWARD':
					SwapCharacter(4);
					overridestarting = 'EDWARD';
					document.getElementById('characterStart').innerHTML = 'Edward';
					break;
				case '-STARTROSA':
					SwapCharacter(5);
					overridestarting = 'ROSA';
					document.getElementById('characterStart').innerHTML = 'Rosa';
					break;
				case '-STARTYANG':
					SwapCharacter(6);
					overridestarting = 'YANG';
					document.getElementById('characterStart').innerHTML = 'Yang';
					break;
				case '-STARTPALOM':
					SwapCharacter(7);
					overridestarting = 'PALOM';
					document.getElementById('characterStart').innerHTML = 'Palom';
					break;
				case '-STARTPOROM':
					SwapCharacter(8);
					overridestarting = 'POROM';
					document.getElementById('characterStart').innerHTML = 'Porom';
					break;
				case '-STARTCID':
					SwapCharacter(9);
					overridestarting = 'CID';
					document.getElementById('characterStart').innerHTML = 'Cid';
					break;
				case '-STARTEDGE':
					SwapCharacter(10);
					overridestarting = 'EDGE';
					document.getElementById('characterStart').innerHTML = 'Edge';
					break;
				case '-STARTFUSOYA':
					SwapCharacter(11);
					overridestarting = 'FUSOYA';
					document.getElementById('characterStart').innerHTML = 'FuSoYa';
					break;
			}
		}
		
		if (flagsets[fs].indexOf('-NODUPES') > -1) {
			cnodupes = true;
			document.getElementById("charactersD").style.display = "block";
		}
		
		if (flagsets[fs].indexOf('-RESCUE') > -1) {
			crescue = true;
			document.getElementById("charactersR").style.display = "block";
		}
		
		if (flagsets[fs].indexOf('-HOBS') > -1) {
			chobs = true;
			document.getElementById("charactersH").style.display = "block";
		}
		
		//Treasures
		if (flagsets[fs].indexOf('T1') > -1) {
			treasures = 1;
			document.getElementById("treasure0").style.display = "none";
			document.getElementById("treasure1").style.display = "block";
		} else if (flagsets[fs].indexOf('T2') > -1) {
			treasures = 2;
			document.getElementById("treasure0").style.display = "none";
			document.getElementById("treasure2").style.display = "block";
		} else if (flagsets[fs].indexOf('T3') > -1) {
			treasures = 3;
			document.getElementById("treasure0").style.display = "none";
			document.getElementById("treasure3").style.display = "block";
		} else if (flagsets[fs].indexOf('T4') > -1) {
			treasures = 4;
			document.getElementById("treasure0").style.display = "none";
			document.getElementById("treasure4").style.display = "block";
		} else if (flagsets[fs].indexOf('TX') > -1) {
			treasures = 5;
			document.getElementById("treasure0").style.display = "none";
			document.getElementById("treasureX").style.display = "block";
		}
		
		if (flagsets[fs].startsWith('T')) {
			if (flagsets[fs].indexOf('G') > -1) {
				tgp = true;
				document.getElementById("treasureG").style.display = "block";
			}
			if (flagsets[fs].indexOf('R') > -1) {
				ttrapped = true;
				document.getElementById("treasureR").style.display = "block";
			}
		}
		
		//Shops
		if (flagsets[fs].indexOf('S1') > -1) {
			shops = 1;
			document.getElementById("shop0").style.display = "none";
			document.getElementById("shop1").style.display = "block";
		} else if (flagsets[fs].indexOf('S2') > -1) {
			shops = 2;
			document.getElementById("shop0").style.display = "none";
			document.getElementById("shop2").style.display = "block";
		} else if (flagsets[fs].indexOf('S3') > -1) {
			shops = 3;
			document.getElementById("shop0").style.display = "none";
			document.getElementById("shop3").style.display = "block";
		} else if (flagsets[fs].indexOf('S4') > -1) {
			shops = 4;
			document.getElementById("shop0").style.display = "none";
			document.getElementById("shop4").style.display = "block";
		} else if (flagsets[fs].indexOf('SC') > -1 && flagsets[fs].indexOf('RESCUE') === -1) {
			shops = 5;
			document.getElementById("shop0").style.display = "none";
			document.getElementById("shopC").style.display = "block";
		} else if (flagsets[fs].indexOf('SX') > -1) {
			shops = 6;
			document.getElementById("shop0").style.display = "none";
			document.getElementById("shopX").style.display = "block";
		}
		
		if (flagsets[fs].startsWith('S')) {
			if (flagsets[fs].indexOf('!') > -1) {
				ssafety = true;
				document.getElementById("shopSa").style.display = "block";
			}
			if (flagsets[fs].indexOf('F') > -1) {
				sfree = true;
				document.getElementById("shopSf").style.display = "block";
			}
			if (flagsets[fs].indexOf('Q') > -1) {
				squarter = true;
				document.getElementById("shopSq").style.display = "block";
			}
		}

		if (flagsets[fs] === '-NOAPPLES') {
			sapples = true;
			document.getElementById("shopA").style.display = "block";
		}
		
		if (flagsets[fs] === '-NOSIRENS') {
			ssirens = true;
			document.getElementById("shopS").style.display = "block";
		}
		
		//Bosses
		if (flagsets[fs].startsWith('B')) {
			document.getElementById("bosses0").style.display = "none";
			document.getElementById("bossesB").style.display = "block";
			randombosses = true;
			if (flagsets[fs].indexOf('!') > -1) {
				bosssafety = true;
				document.getElementById("bossesX").style.display = "block";
			}
		}
		
		if (flagsets[fs].indexOf('-WHYBURN') > -1) {
			wyvern = 1;
			document.getElementById("bossesWyvern").style.display = "none";
			document.getElementById("bossesWhy").style.display = "block";
		} else if (flagsets[fs].indexOf('-WHICHBURN') > -1) {
			wyvern = 2;
			document.getElementById("bossesWyvern").style.display = "none";
			document.getElementById("bossesWhich").style.display = "block";
		}
		
		//Challenges
		if (flagsets[fs] === 'F') {
			fuchallenge = true;
			document.getElementById("challengesF").style.display = "block";
		}
		
		if (flagsets[fs].startsWith('N')) {
			document.getElementById("challenges0").style.display = "none";
			if (flagsets[fs].indexOf('C') > -1) {
				nflc = true;
				document.getElementById("challengesC").style.display = "block";
			}
			if (flagsets[fs].indexOf('K') > -1) {
				nflk = true;
				document.getElementById("challengesK").style.display = "block";
			}
			if (flagsets[fs].indexOf('B') > -1) {
				nflb = true;
				document.getElementById("challengesB").style.display = "block";
			}
		}
		
		//Battles
		if (flagsets[fs].startsWith('E')) {
			document.getElementById("battles0").style.display = "none";
			if (flagsets[fs].indexOf('T') > -1) {
				enemyencounters = 0;
				document.getElementById("battlesT").style.display = "block";
			} else if (flagsets[fs].indexOf('R') > -1) {
				enemyencounters = 1;
				document.getElementById("battlesR").style.display = "block";
			} else if (flagsets[fs].indexOf('X') > -1) {
				enemyencounters = 2;
				document.getElementById("battlesX").style.display = "block";
			}
			
			if (flagsets[fs].indexOf('F') > -1) {
				enemyforced = true;
				document.getElementById("battlesF").style.display = "block";
			}

			if (flagsets[fs].indexOf('D') > -1) {
				enemydangerous = true;
				document.getElementById("battlesD").style.display = "block";
			}

			if (flagsets[fs].indexOf('C') > -1) {
				enemyrun = true;
				document.getElementById("battlesC").style.display = "block";
			}
		}
		
		//Experience
		if (flagsets[fs].startsWith('X')) {
			document.getElementById("experience0").style.display = "none";
			if (flagsets[fs].indexOf('S') > -1) {
				expsharing = true;
				document.getElementById("experienceS").style.display = "block";
			}

			if (flagsets[fs].indexOf('K') > -1) {
				expkeyitems = true;
				document.getElementById("experienceK").style.display = "block";
			}

			if (flagsets[fs].indexOf('B') > -1) {
				explowlevel = true;
				document.getElementById("experienceB").style.display = "block";
			}

			if (flagsets[fs].lastIndexOf('X') > 0 ) {
				expnoexp = true;
				document.getElementById("experienceX").style.display = "block";
			}		
		}
		
		//Tweaks
		if (flagsets[fs].startsWith('G')) {
			if (flagsets[fs].indexOf('D') > -1) {
				gduplication = true;
				document.getElementById("tweaksD").style.display = "block";
			}
			if (flagsets[fs].indexOf('M') > -1) {
				gunderflow = true;
				document.getElementById("tweaksM").style.display = "block";
			}
			if (flagsets[fs].indexOf('W') > -1) {
				gdwarfwarp = true;
				document.getElementById("tweaksW").style.display = "block";
			}
			if (flagsets[fs].indexOf('L') > -1) {
				glife = true;
				document.getElementById("tweaksL").style.display = "block";
			}
			if (flagsets[fs].indexOf('64') > -1) {
				g64 = true;
				document.getElementById("tweaks64").style.display = "block";
			}
		}
		
		if (flagsets[fs] === '-AA') {
			aagility = true;
			document.getElementById("tweaksAA").style.display = "block";
		}
		
		if (flagsets[fs] === '-NOADAMANTS') {
			noadamants = true;
			document.getElementById("tweaksAd").style.display = "block";
		}
		
		//Wacky
		if (flagsets[fs] === '-SPOON') {
			wackyspoon = true;
			document.getElementById("wackyS").style.display = "block";
		}
		
		if (flagsets[fs] === '-FAB') {
			wackyfab = true;
			document.getElementById("wackyF").style.display = "block";
		}
		
		if (flagsets[fs] === '-HUH') {
			wackyhuh = true;
			document.getElementById("wackyH").style.display = "block";
		}
		
		if (flagsets[fs] === '-VINTAGE') {
			wackymute = true;
			document.getElementById("wackyV").style.display = "block";
		}
		
		if (flagsets[fs] === '-Z') {
			wackyzeromus = true;
			document.getElementById("wackyZ").style.display = "block";
		}
	}

	switch (overridestarting) {
		case 'CECIL':
			document.getElementById('character0_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character0_a.png\')';
			break;
		case 'KAIN':
			document.getElementById('character1_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character1_a.png\')';
			break;
		case 'RYDIA':
			document.getElementById('character2_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character2_a.png\')';
			break;
		case 'TELLAH':
			document.getElementById('character3_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character3_a.png\')';
			break;
		case 'EDWARD':
			document.getElementById('character4_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character4_a.png\')';
			break;
		case 'ROSA':
			document.getElementById('character5_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character5_a.png\')';
			break;
		case 'YANG':
			document.getElementById('character6_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character6_a.png\')';
			break;
		case 'PALOM':
			document.getElementById('character7_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character7_a.png\')';
			break;
		case 'POROM':
			document.getElementById('character8_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character8_a.png\')';
			break;
		case 'CID':
			document.getElementById('character9_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character9_a.png\')';
			break;
		case 'EDGE':
			document.getElementById('character10_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character10_a.png\')';
			break;
		case 'FUSOYA':
			document.getElementById('character11_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character11_a.png\')';
			break;
	}
	
	document.getElementById('charactersExcluded').innerHTML = excludedCharacters;
	
	if (variant === 0) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	} else if (variant === 1) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item12td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item13td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	} else if (variant === 2) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	}

	if (jitems === false) {
		document.getElementById('j1items').style.display = "none";
		document.getElementById('j1itemstown').style.display = "none";
	} 
	/* else {
		if (window.navigator.userAgent.indexOf("Firefox") > -1) {
			document.getElementById('itemModalInner').style.fontSize = "23px";
			document.getElementById('townModalInner').style.fontSize = "23px";
		}
	} */

	if (ktrapped === false) {
		document.getElementById('trappedchestsdiv').style.display = "none";
		//document.getElementById('trackingtable').style.fontSize = "24px";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
		document.getElementById('townsdiv').style.width = "160px";
	}
	
	if (ksummons === false) {
		keyitemlocations[3] = 3; //Odin
		keyitemlocations[15] = 3; //Asura
		keyitemlocations[16] = 3; //Leva
		keyitemlocations[20] = 3; //Slyph
		keyitemlocations[21] = 3; //Bahamut
	}
	
	if (kmoon === false) {
		keyitemlocations[22] = 3; //Lunar Crystal
		keyitemlocations[23] = 3; //Lunar Masa
		keyitemlocations[24] = 3; //Lunar Mura
		keyitemlocations[25] = 3; //Lunar Ribbon
		keyitemlocations[26] = 3; //Lunar White
	}
	
	if (shops > 4) {
		disableitemtracker = '1';
	}
	
	if (nflc === true) {
		characterlocations[2] = 3;
		characterlocations[8] = 3;
		characterlocations[9] = 3;
		characterlocations[11] = 3;		
	}
	
	if (nflk === true) {
		keyitemlocations[12] = 3;
	} else {
		if (disablebosstracker === '1') {
			document.getElementById('misttoggle').style.visibility = "hidden";
		}
		keyitemlocations[9] = 3;
	}

	var verticallayout = getParameterByName('v');
	
	if (verticallayout === '1' && disablelocationtracker === '0') {
		document.getElementById('wrapperdiv').style.width = "510px";
		document.getElementById('trackingtable').style.width = "510px";
		document.getElementById('trackingtable').style.float = "left";
		//document.getElementById('trackingtable').style.marginLeft = "20px";
		document.getElementById('leftdiv').style.margin = "0px 0px 20px 60px";
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
		//document.getElementById('trackingtable').style.fontSize = "24px";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
	}
	
	var browser = getParameterByName('b');
	
	if (browser === '1') {
		//if (verticallayout === '0') {
			//document.getElementById('flagstr').style.height = "70px";
			//document.getElementById('flagstr').style.verticalAlign = "text-top";
		//}
		document.getElementById('itemModal').style.fontSize = "22px";
		document.getElementById('flagsModalInner').style.fontSize = "18px";
	} else if (browser === '2') {
		var hrItems = document.getElementsByTagName("hr");

		for(var i = 0; i < hrItems.length; i++) {
			hrItems[i].style.marginTop = '10px';
			hrItems[i].style.marginBottom = '10px';
		}
	}	
	
	LoadBestiaryData();
}

function ApplyChecks(){
	var hasunderworldaccess = (keyitems[2] === true || (keyitems[6] === true && hookclear === true));
	
	// ****Key Items****
	if (disableloctracker === '0') {
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
		
		//Hook Route
		DeactivateKeyItemLocation(27);
		if (keyitems[6] === true && keyitems[2] === false && hookclear === false) {
			ActivateKeyItemLocation(27);
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
	}
	
	//Characters
	/*for (var i = 0; i < 12; i++) {
		var l = 'character' + i.toString();
		if (characters[i] === true) {
			if ((i === 0 && cecil) || (i === 2 && rydia)) { //If Cecil and Ordeals clear or If Rydia and Dwarf Castle clear
				document.getElementById(l).style = 'background-image: url(\'images/character' + i + '_2_a.png\')';
			} else { //All Others
				document.getElementById(l).style = 'background-image: url(\'images/character' + i + '_a.png\')';
			}
		} else {
			if ((i === 0 && cecil) || (i === 2 && rydia)) { //If Cecil and Ordeals clear or If Rydia and Dwarf Castle clear
				document.getElementById(l).style = 'background-image: url(\'images/character' + i + '_2.png\')';
			} else { //All Others
				document.getElementById(l).style = 'background-image: url(\'images/character' + i + '.png\')';
			}
		}
	} */
	
	if (cecil) { //If Cecil and Ordeals
		document.getElementById('character0').style = 'background-image: url(\'images/character0_2_a.png\')';
	} else { //All Others
		document.getElementById('character0').style = 'background-image: url(\'images/character0_a.png\')';
	}
	if (rydia) { //If Rydia and Dwarf Castle clear
		document.getElementById('character2').style = 'background-image: url(\'images/character2_2_a.png\')';
	} else { //All Others
		document.getElementById('character2').style = 'background-image: url(\'images/character2_a.png\')';
	}
	
	//Party Members
	for (var i = 0; i < 5; i++) {
		var l = 'characterempty';
		var p = 'party' + i;
		if (partymembers[i] != -1) {
			if ((partymembers[i] === 0 && cecil) || (partymembers[i] === 2 && rydia)) { //If Cecil and Ordeals clear or if Rydia and Dwarf 
				l = 'character' + partymembers[i] + '_2_a';
			} else { //All Others
				l = 'character' + partymembers[i] + '_a';
			}
		}
		document.getElementById(p).style = 'background-image: url(\'images/' + l + '.png\')';
	}
	
	//Items
	var itemcount = 0;
	for (var i = 0; i < 18; i++) {
		var l = 'item' + i.toString();
		if (keyitems[i] === true) {		
			//Check to see if Pass is a key item
			//if (pkey === true && i === 17) {
				//itemcount++;
			//}
			if (i != 17) {
				itemcount++;
			}
			document.getElementById(l).style = 'background-image: url(\'images/item' + i + '_a.png\')';
		} else {
			document.getElementById(l).style = 'background-image: url(\'images/item' + i + '.png\')';
		}
	}
	
	if (itemcount > maxitems) {
		itemcount = maxitems;
	}
	
	document.getElementById('itemtracker').innerHTML = itemcount + '/' + maxitems;
	if (itemcount > 9 && expkeyitems === true) {
		document.getElementById('itemtracker').style.color = "#0F0";
	} else {
		document.getElementById('itemtracker').style.color = "#FFF";
	}
	
	//Item Requirements
	if (variant === 0) {
		if (keyitems[16] === true) {
			document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		} else {
			document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		}

		if (keyitems[17] === true) {
			document.getElementById('item4td').style.backgroundImage = 'none';
			document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		} else {
			document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			if (keyitems[4] === true) {
				document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
				document.getElementById('item17td').style.backgroundImage = 'none';
			} else {
				document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			}
		}
	} else if (variant === 1) {
		if (keyitems[16] === true) {
			document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
			document.getElementById('item12td').style.backgroundImage = 'none';
			document.getElementById('item13td').style.backgroundImage = 'none';
		} else {
			document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			if (keyitems[12] === true) {
				document.getElementById('item12td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
			} else {
				document.getElementById('item12td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			}
			if (keyitems[13] === true) {
				document.getElementById('item13td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
			} else {
				document.getElementById('item13td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			}
		}
		
		if (keyitems[17] === true) {
			document.getElementById('item4td').style.backgroundImage = 'none';
			document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		} else {
			document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			if (keyitems[4] === true) {
				document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
				document.getElementById('item17td').style.backgroundImage = 'none';
			} else {
				document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
			}
		}		
	} else if (variant === 2) {
		if (keyitems[4] === true) {
			document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		} else {
			document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		}		
	}
	
	/*
		
		
		
	} else if (variant === 1) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item12td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item13td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	} else if (variant === 2) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';	
	
	*/
	
	//Key Item Locations
	if (viewactivekeyitems === true) {
		document.getElementById('keyitemlocationviewchecked').style.display = "block";
		document.getElementById('keyitemlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('keyitemlocationviewchecked').style.display = "none";
		document.getElementById('keyitemlocationviewunchecked').style.display = "block";
	}
		
	for (var i = 0; i < 29; i++) {
		var l = 'keyitemlocation' + i.toString();
		
		if (viewactivekeyitems === true) {
			if (keyitemlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (keyitemlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (keyitemlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (keyitemlocations[i] === 2 && i != 28) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
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
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (characterlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (characterlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
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
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (trappedchestlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			document.getElementById(l).innerHTML = trappedchestnames[i];
			if (trappedchestlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
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
		if (i === 27) {
			hookclear = true;
		}
		if (i === 13 && gdwarfwarp === true) {
			keyitemlocations[28] = 1;
		}
	} else if (keyitemlocations[i] === 2) {
		keyitemlocations[i] = 1;
		if (i === 27) {
			hookclear = false;
		}
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
	if (disablecharactertracker === '0') {
		if (i === 99) {
			ignoreswap = true;
		} else {
			if (ignoreswap === true) {
				ignoreswap = false;
			} else {
				characters[i] = !characters[i];
				partymembers[partyswap] = i;
				document.getElementById("partydiv").style.display = "block";
				document.getElementById("characterdiv").style.display = "none";
				ApplyChecks();
			}
		}
	}
}

function SwapParty(i) {
	if (disablecharactertracker === '0') {
		if (ignoreswap === true) {
			ignoreswap = false;
		} else {
			document.getElementById("partydiv").style.display = "none";
			document.getElementById("characterdiv").style.display = "block";
			partyswap = i;
		}
	}
}

function PartyClear(i) {
	partymembers[i] = -1;
	ignoreswap = true;
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
		CloseFlagDetail();
	} else {
		menutoggle = false;
	}	
}

function ExpandFlags(i) {
	document.getElementById('flagsselectdiv').style.display = 'none';
	document.getElementById('flagdetail' + i).style.display = 'block';
}

function CloseFlagDetail() {
	document.getElementById('flagdetail0').style.display = 'none';
	document.getElementById('flagdetail1').style.display = 'none';
	document.getElementById('flagdetail2').style.display = 'none';
	document.getElementById('flagdetail3').style.display = 'none';
	document.getElementById('flagdetail4').style.display = 'none';
	document.getElementById('flagdetail5').style.display = 'none';
	document.getElementById('flagdetail6').style.display = 'none';
	document.getElementById('flagdetail7').style.display = 'none';
	document.getElementById('flagdetail8').style.display = 'none';
	document.getElementById('flagdetail9').style.display = 'none';
	document.getElementById('flagdetail10').style.display = 'none';	
	document.getElementById('flagsselectdiv').style.display = 'block';
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




function LoadArmory() {
	if (disablelocationtracker === '0') {
		$('#armoryModal').show();
	}
}

function CloseArmory() {
	if (menutoggle === false) {
		$('#armoryModal').hide();
		//CloseFlagDetail();
	} else {
		menutoggle = false;
	}	
}

function LoadBestairy() {
	if (disablelocationtracker === '0') {
		$('#bestairyModal').show();
		var bossselect = document.getElementById("bossSelect"); 
		var locationselect = document.getElementById("locationSelect");
		for(var i = 0; i < bossnames.length; i++) {
			var opt = bossnames[i];
			var el = document.createElement("option");
			var el2 = document.createElement("option");
			el.textContent = opt;
			el.value = i + 1;
			el2.textContent = opt;
			el2.value = i + 1;
			bossselect.appendChild(el);
			locationselect.appendChild(el2);
		}
	}
}

function LoadBestairyDetails() {
	var bossselect = document.getElementById("bossSelect");
	var locationselect = document.getElementById("locationSelect");
	
	if (bossselect.value > 0 && locationselect.value > 0) {
		alert('!');
	}
	
}

function CloseBestairy() {
	if (menutoggle === false) {
		$('#bestairyModal').hide();
		//CloseFlagDetail();
	} else {
		menutoggle = false;
	}	
}

function LoadCharacter() {
	if (disablelocationtracker === '0') {
		$('#characterModal').show();
	}
}

function CloseCharacter() {
	if (menutoggle === false) {
		$('#characterModal').hide();
		//CloseFlagDetail();
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
			document.getElementById('misttoggle').style = 'background-image: url(\'images/mistdragon.png\')';
		} else {
			document.getElementById('misttoggle').style = 'background-image: url(\'images/mistdragon_2.png\')';
		}
		ApplyChecks();
	} else {
		$('#bossModal').show();
	}	
}

function WarpGlitch() {
	if (ignorewarp === false) {		
		keyitemlocations[19] = 2;
		keyitemlocations[28] = 2;
		ApplyChecks();
	}
	ignorewarp = false;
}

function ClearWarpGlitch() {
	keyitemlocations[28] = 2;
	ignorewarp = true;
	ApplyChecks();
}

function LoadBestiaryData() {
	bestiarydata.push({"lvl": 2, "hp": 1000});
	bestiarydata.push({"lvl": 63, "hp": 23000});
	
	
}