var characters = [false,false,false,false,false,false,false,false,false,false,false,false];
var keyitems = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var bosses = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var keyitemlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var characterlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var townlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var trappedchestlocations = [0,0,0,0,0,0,0,0,0,0];
var trappedchestnames = ['Castle Eblan','Eblan Cave','Giant of Babil','Tower of Zot','Upper Babil','Feymarch','Lower Babil','Sylph Cave','Lunar Path','Lunar Sub.'];
var bossnames = ['Mist Dragon','Baron Soldiers','Octomamm','Antlion','Waterhag','Mom Bomb','Fabul Gauntlet','Milon','MilonZ','Dark Knight Cecil','Baron Guards','Yang','Baigan','Kainazzo','Dark Elf','Magus Sisters','Valvalis','Calcabrina','Golbez','Dr Lugae','Dark Imps','K & Q Eblan','Rubicant','Evil Wall','Elementals','CPU','Odin','Asura','Leviathan','Bahamut','Pale Dim','Lunar Dragons','Plague','Ogopogo','Wyvern'];
var objectives = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
//0-98 and the last two being win/crystal objectives
//0 = Unchecked, 1 = Checked, 2 = Hidden
// 0 = Not available, 1 = Available, 2 = Checked, 3 = Hidden

var objectivenames = ['Get Cecil','Get Kain','Get Rydia','Get Tellah','Get Edward','Get Rosa','Get Yang','Get Palom','Get Porom','Get Cid','Get Edge','Get FuSoYa','Defeat D.Mist','Defeat Officer','Defeat Octomamm','Defeat Antlion','Defeat Waterhag (boss version)','Defeat MomBomb','Defeat the Fabul Gauntlet','Defeat Milon','Defeat Milon Z.','Defeat D.Knight','Defeat the Guards (boss)','Defeat Karate','Defeat Baigan','Defeat Kainazzo','Defeat the Dark Elf (dragon form)','Defeat the Magus Sisters','Defeat Valvalis','Defeat Calbrena','Defeat Golbez','Defeat Dr. Lugae','Defeat the Dark Imps (boss)','Defeat K.Eblan and Q.Eblan','Defeat Rubicant','Defeat EvilWall','Defeat Asura','Defeat Leviatan','Defeat Odin','Defeat Bahamut','Defeat Elements','Defeat CPU','Defeat Pale Dim','Defeat Wyvern','Defeat Plague','Defeat the D.Lunars','Defeat Ogopogo','Defeat the boss of the Mist Cave','Defeat the boss of the Waterfall','Complete the Antlion Nest','Rescue the hostage on Mt. Hobs','Defend Fabul','Complete Mt. Ordeals','Defeat the bosses of Baron Inn','Liberate Baron Castle','Complete Cave Magnes','Complete the Tower of Zot','Defeat the bosses of Dwarf Castle','Defeat the boss of Lower Bab-il','Launch the Falcon','Complete the Sealed Cave','Defeat the queen at the Town of Monsters','Defeat the king at the Town of Monsters','Defeat the Baron Castle basement throne','Complete the Giant of Bab-il','Complete Cave Bahamut','Conquer the vanilla Murasame altar','Conquer the vanilla Crystal Sword altar','Conquer the vanilla White Spear altar','Conquer the vanilla Ribbon room','Conquer the vanilla Masamune altar','Burn village Mist with the Package','Cure the fever with the SandRuby','Unlock the sewer with the Baron Key','Break the Dark Elf`s spell with the TwinHarp','Open the Toroia treasury with the Earth Crystal','Drop the Magma Key into the Agart well','Destroy the Super Cannon','Unlock the Sealed Cave','Raise the Big Whale','Trade away the Rat Tail','Have Kokkol forge Legend Sword with Adamant','Wake Yang with the Pan','Return the Pan to Yang\'s wife','Trade away the Pink Tail','Unlock the Pass door in Toroia'];

var trappedchestcounts = [3,1,1,1,1,1,4,7,1,9];
var trappedchestmaxcounts = [3,1,1,1,1,1,4,7,1,9];
var currentitemlist = 0;
var items = ['000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000','000000000000000000000000000000000000'];
var itemsnotes = ['','','','','','','','','','','','',''];

var partymembers = [-1,-1,-1,-1,-1];

var maxitems = 17;

var viewactivekeyitems = true;
var viewactivecharacters = true;
var viewactivetowns = true;
var viewactivetrapped = true;

var cecil = false;
var rydia = false;
var mist = false;
var hookclear = false;
var ignorewarp = false;
var menutoggle = false;

var dmcount = 0;
var objectivechange = 0;

//NEW NEW FLAGS
var modeflags = {
	omain: true,
	oforge: false,
	ogiant: false,
	ofiends: false,
	odarkmatter: false,
	oquests: false,
	oboss: false,
	ochar: false,
	oreq: '',
	kmain: false,
	ksummon: false,
	kmoon: false,
	ktrap: false,
	kunsafe: false,
	pshop: false,
	pkey: false,
	pchests: false,
	cvanilla: false,
	cstandard: false,
	crelaxed: false,
	cmaybe: false,
	cdistinct: 0,
	ccecil: true,
	ckain: true,
	crydia: true,
	ctellah: true,
	cedward: true,
	crosa: true,
	cyang: true,
	cpalom: true,
	cporom: true,
	ccid: true,
	cedge: true,
	cfusoya: true,
	cstart: '',
	cjspells: false,
	cjabilities: false,
	cnodupes: false,
	cbye: false,
	cpermajoin: false,
	cpermadeath: false,
	cpermadeader: false,
	tchests: 'tvanilla',
	tsparse: 0,
	tnoj: false,
	tjunk: false,
	sshops: 'svanilla',
	sunsafe: false,
	sfree: false,
	squarter: false,
	snoj: false,
	snoapples: false,
	snosirens: false,
	bvanilla: false,
	bstandard: false,
	bunsafe: false,
	baltgauntlet: false,
	bwhyburn: false,
	bwhichburn: false,
	nchars: false,
	nkey: false,
	nbosses: false,
	eencounters: 'evanilla',
	ekeepdoors: false,
	ekeepbehemoths: false,
	edanger: false,
	enosirens: false,
	enojdrops: false,
	ecantrun: false,
	enoexp: false,
	gdupe: false,
	gmp: false,
	gwarp: false,
	glife: false,
	g64: false,
	ostarterkit: '',
	onoadamants: false,
	ovintage: false,
	ospoon: false,
	ovanillafusoya: false,
	ovanillaagility: false,
	ovanillahobs: false,
	ovanillaexp: false,
	oexpsplit: false,
	oexpnoboost: false,
	oexpnokeybonus: false,
	ovanillafashion: false,
	ovanillatraps: false,
	ovanillaz: false
}

//NEW FLAGS
var overridestarting = '';

var disableitemtracker = '0';
var disablelocationtracker = '0';
var disablebosstracker = '0';
var disablecharactertracker = '0';
var disableobjectivetracker = '0';

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
	//$('#flagsModal').hide();
	$('#bossModal').hide();
	$('#townModal').hide();
	$('#objectiveModal').hide();
	
	disableitemtracker = getParameterByName('d');
	
	disableloctracker = getParameterByName('c');

	disablebosstracker = getParameterByName('s');
	
	disablelocationtracker = getParameterByName('l');
	
	disablecharactertracker = getParameterByName('h');
	
	disableobjectivetracker = getParameterByName('o');
	
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
		//document.getElementById('datadiv').style.display = "none";
		disablebosstracker = '1';
	}
	
	if (disablecharactertracker === '1') {
		document.getElementById('partydiv').style.display = "none";
		document.getElementById('itemdiv').style.top = "10px";
		//document.getElementById('partyhr').style.display = "none";
		if (disableobjectivetracker === '0') {
			document.getElementById('objectivediv').style.top = "210px";
		}
	}
	
	if (disableobjectivetracker === '1') {
		document.getElementById('objectivediv').style.display = "none";
	}
	
	var flags = getParameterByName('f');
	
	var flagsets = flags.split('|');
	var excludedCharacters = '';
	var includedCharacters = '';
	
	for (var fs in flagsets) {
		
		//Objectives
		if (flagsets[fs].startsWith('O')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'NONE':
						modeflags.kmain = true;
						break;
					default:
						
						if (keys[k].startsWith('MODE')) {
							var mode = keys[k].substring(5).split(',');
							for (var j in mode) {
								switch (mode[j]) {
									case 'CLASSICFORGE':
										modeflags.oforge = true;
										objectives[0] = 0;
										break;
									case 'CLASSICGIANT':
										modeflags.ogiant = true;
										objectives[1] = 0;
										break;
									case 'FIENDS':
										modeflags.ofiends = true;
										objectives[2] = 0;
										objectives[23] = 0;
										objectives[24] = 0;
										objectives[29] = 0;
										objectives[32] = 0;
										objectives[38] = 0;
										objectives[44] = 0;
										break;
									case 'DKMATTER':
										modeflags.odarkmatter = true;
										objectives[3] = 0;
										//document.getElementById('dkmatterspan').style.display = 'inherit';
										break;
								}
							}
						} else if (keys[k].startsWith('RANDOM')) {
							var randomquests = keys[k].split(',');
							for (var l in randomquests) {
								switch (randomquests[l]) {
									case 'QUEST':
										modeflags.oquests = true;
										break;
									case 'BOSS':
										modeflags.oboss = true;
										break;
									case 'CHAR':
										modeflags.ochar = true;
										break;
									default:
										if (randomquests[l].startsWith('RANDOM')) {
											var randomcount = randomquests[l].substring(7);
											for (var j = 0; j < randomcount; j++) {
												objectives[90 + j] = 0;
											}
										}
										break;
								}
							}
						} else if (keys[k].startsWith('WIN')) {
							var wincondition = keys[k].substring(4);
							if (wincondition === 'GAME') {
								objectives[98] = 0;
								objectives[99] = 2;
							} else {
								objectives[98] = 2;
								objectives[99] = 0;
							}
						} else if (keys[k].startsWith('REQ')) {
							var questreq = keys[k].substring(4);
							modeflags.oreq = questreq;
						} else {
							var currentkey = keys[k].substr(2).toLowerCase();
							switch (currentkey) {
								case 'char_cecil':
									objectives[4] = 0;
									break;
								case 'char_kain':
									objectives[5] = 0;
									break;
								case 'char_rydia':
									objectives[6] = 0;
									break;
								case 'char_tellah':
									objectives[7] = 0;
									break;
								case 'char_edward':
									objectives[8] = 0;
									break;
								case 'char_rosa':
									objectives[9] = 0;
									break;
								case 'char_yang':
									objectives[10] = 0;
									break;
								case 'char_palom':
									objectives[11] = 0;
									break;
								case 'char_porom':
									objectives[12] = 0;
									break;
								case 'char_cid':
									objectives[13] = 0;
									break;
								case 'char_edge':
									objectives[14] = 0;
									break;
								case 'char_fusoya':
									objectives[15] = 0;
									break;
								case 'boss_dmist':
									objectives[16] = 0;
									break;
								case 'boss_officer':
									objectives[17] = 0;
									break;
								case 'boss_octomamm':
									objectives[18] = 0;
									break;
								case 'boss_antlion':
									objectives[19] = 0;
									break;
								case 'boss_waterhag':
									objectives[20] = 0;
									break;
								case 'boss_mombomb':
									objectives[21] = 0;
									break;
								case 'boss_fabulgauntlet':
									objectives[22] = 0;
									break;
								case 'boss_milon':
									objectives[23] = 0;
									break;
								case 'boss_milonz':
									objectives[24] = 0;
									break;
								case 'boss_mirrorcecil':
									objectives[25] = 0;
									break;
								case 'boss_guard':
									objectives[26] = 0;
									break;
								case 'boss_karate':
									objectives[27] = 0;
									break;
								case 'boss_baigan':
									objectives[28] = 0;
									break;
								case 'boss_kainazzo':
									objectives[29] = 0;
									break;
								case 'boss_darkelf':
									objectives[30] = 0;
									break;
								case 'boss_magus':
									objectives[31] = 0;
									break;
								case 'boss_valvalis':
									objectives[32] = 0;
									break;
								case 'boss_calbrena':
									objectives[33] = 0;
									break;
								case 'boss_golbez':
									objectives[34] = 0;
									break;
								case 'boss_lugae':
									objectives[35] = 0;
									break;
								case 'boss_darkimp':
									objectives[36] = 0;
									break;
								case 'boss_kingqueen':
									objectives[37] = 0;
									break;
								case 'boss_rubicant':
									objectives[38] = 0;
									break;
								case 'boss_evilwall':
									objectives[39] = 0;
									break;
								case 'boss_asura':
									objectives[40] = 0;
									break;
								case 'boss_leviatan':
									objectives[41] = 0;
									break;
								case 'boss_odin':
									objectives[42] = 0;
									break;
								case 'boss_bahamut':
									objectives[43] = 0;
									break;
								case 'boss_elements':
									objectives[44] = 0;
									break;
								case 'boss_cpu':
									objectives[45] = 0;
									break;
								case 'boss_paledim':
									objectives[46] = 0;
									break;
								case 'boss_wyvern':
									objectives[47] = 0;
									break;
								case 'boss_plague':
									objectives[48] = 0;
									break;
								case 'boss_dlunar':
									objectives[49] = 0;
									break;
								case 'boss_ogopogo':
									objectives[50] = 0;
									break;
								case 'quest_mistcave':
									objectives[51] = 0;
									break;
								case 'quest_waterfall':
									objectives[52] = 0;
									break;
								case 'quest_antlionnest':
									objectives[53] = 0;
									break;
								case 'quest_hobs':
									objectives[54] = 0;
									break;
								case 'quest_fabul':
									objectives[55] = 0;
									break;
								case 'quest_ordeals':
									objectives[56] = 0;
									break;
								case 'quest_baroninn':
									objectives[57] = 0;
									break;
								case 'quest_baroncastle':
									objectives[58] = 0;
									break;
								case 'quest_magnes':
									objectives[59] = 0;
									break;
								case 'quest_zot':
									objectives[60] = 0;
									break;
								case 'quest_dwarfcastle':
									objectives[61] = 0;
									break;
								case 'quest_lowerbabil':
									objectives[62] = 0;
									break;
								case 'quest_falcon':
									objectives[63] = 0;
									break;
								case 'quest_sealedcave':
									objectives[64] = 0;
									break;
								case 'quest_monsterqueen':
									objectives[65] = 0;
									break;
								case 'quest_monsterking':
									objectives[66] = 0;
									break;
								case 'quest_baronbasement':
									objectives[67] = 0;
									break;
								case 'quest_giant':
									objectives[68] = 0;
									break;
								case 'quest_cavebahamut':
									objectives[69] = 0;
									break;
								case 'quest_murasamealtar':
									objectives[70] = 0;
									break;
								case 'quest_crystalaltar':
									objectives[71] = 0;
									break;
								case 'quest_whitealtar':
									objectives[72] = 0;
									break;
								case 'quest_ribbonaltar':
									objectives[73] = 0;
									break;
								case 'quest_masamunealtar':
									objectives[74] = 0;
									break;
								case 'quest_burnmist':
									objectives[75] = 0;
									break;
								case 'quest_curefever':
									objectives[76] = 0;
									break;
								case 'quest_unlocksewer':
									objectives[77] = 0;
									break;
								case 'quest_music':
									objectives[78] = 0;
									break;
								case 'quest_toroiatreasury':
									objectives[79] = 0;
									break;
								case 'quest_magma':
									objectives[80] = 0;
									break;
								case 'quest_supercannon':
									objectives[81] = 0;
									break;
								case 'quest_unlocksealedcave':
									objectives[82] = 0;
									break;
								case 'quest_bigwhale':
									objectives[83] = 0;
									break;
								case 'quest_traderat':
									objectives[84] = 0;
									break;
								case 'quest_forge':
									objectives[85] = 0;
									break;
								case 'quest_wakeyang':
									objectives[86] = 0;
									break;
								case 'quest_tradepan':
									objectives[87] = 0;
									break;
								case 'quest_tradepink':
									objectives[88] = 0;
									break;
								case 'quest_pass':
									objectives[89] = 0;
									break;
							}
						}
				}
			}
		}
		
		//Key Items
		if (flagsets[fs].startsWith('K')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'MAIN':
						modeflags.kmain = true;
						break;
					case 'SUMMON':
						modeflags.ksummon = true;
						break;
					case 'MOON':
						modeflags.kmoon = true;
						break;
					case 'TRAP':
						modeflags.ktrap = true;
						break;
					case 'UNSAFE':
						modeflags.kunsafe = true;
						break;
				}
			}
		}

		//Pass
		if (flagsets[fs].startsWith('P')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'SHOP':
						modeflags.pshop = true;
						document.getElementById("passtd").style.display = "block";
						break;
					case 'KEY':
						modeflags.pkey = true;
						break;
					case 'CHESTS':
						modeflags.pchests = true;
						break;
				}
			}
		}
		
		//Characters
		if (flagsets[fs].startsWith('C')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'VANILLA':
						modeflags.cvanilla = true;
						break;
					case 'STANDARD':
						modeflags.cstandard = true;
						break;
					case 'RELAXED':
						modeflags.crelaxed = true;
						break;
					case 'MAYBE':
						modeflags.cmaybe = true;
						break;
					case 'J:SPELLS':
						modeflags.cjspells = true;
						break;
					case 'ABILITIES':
						modeflags.cjabilities = true;
						break;
					case 'NODUPES':
						modeflags.cnodupes = true;
						break;
					case 'BYE':
						modeflags.cbye = true;
						break;
					case 'PERMAJOIN':
						modeflags.cpermajoin = true;
						break;
					case 'PERMADEATH':
						modeflags.cpermadeath = true;
						break;
					case 'PERMADEADER':
						modeflags.cpermadeader = true;
						break;
					default:
						if (keys[k].startsWith('DISTINCT')) {
							modeflags.cdistinct = keys[k].substring(9);
						}
						if (keys[k].startsWith('START')) {
							modeflags.cstart = keys[k].substring(6);
						}
						if (keys[k].startsWith('NO')) {
							var cha = keys[k].substring(3).split(',');
							for (var j in cha) {
								switch (cha[j]) {
									case 'CECIL':
										modeflags.ccecil = false;
										break;
									case 'KAIN':
										modeflags.ckain = false;
										break;
									case 'RYDIA':
										modeflags.crydia = false;
										break;
									case 'TELLAH':
										modeflags.ctellah = false;
										break;
									case 'EDWARD':
										modeflags.cedward = false;
										break;
									case 'ROSA':
										modeflags.crosa = false;
										break;
									case 'YANG':
										modeflags.cyang = false;
										break;
									case 'PALOM':
										modeflags.cpalom = false;
										break;
									case 'POROM':
										modeflags.cporom = false;
										break;
									case 'CID':
										modeflags.ccid = false;
										break;
									case 'EDGE':
										modeflags.cedge = false;
										break;
									case 'FUSOYA':
										modeflags.cfusoya = false;
										break;
								}
							}
						}
						
						if (keys[k].startsWith('ONLY')) {
							modeflags.ccecil = false;
							modeflags.ckain = false;
							modeflags.crydia = false;
							modeflags.ctellah = false;
							modeflags.cedward = false;
							modeflags.crosa = false;
							modeflags.cyang = false;
							modeflags.cpalom = false;
							modeflags.cporom = false;
							modeflags.ccid = false;
							modeflags.cedge = false;
							modeflags.cfusoya = false;
							
							var cha = keys[k].substring(5).split(',');
							for (var j in cha) {
								switch (cha[j]) {
									case 'CECIL':
										modeflags.ccecil = true;
										break;
									case 'KAIN':
										modeflags.ckain = true;
										break;
									case 'RYDIA':
										modeflags.crydia = true;
										break;
									case 'TELLAH':
										modeflags.ctellah = true;
										break;
									case 'EDWARD':
										modeflags.cedward = true;
										break;
									case 'ROSA':
										modeflags.crosa = true;
										break;
									case 'YANG':
										modeflags.cyang = true;
										break;
									case 'PALOM':
										modeflags.cpalom = true;
										break;
									case 'POROM':
										modeflags.cporom = true;
										break;
									case 'CID':
										modeflags.ccid = true;
										break;
									case 'EDGE':
										modeflags.cedge = true;
										break;
									case 'FUSOYA':
										modeflags.cfusoya = true;
										break;
								}
							}
						}
				}
			}
		}		
		
		//Treasures
		if (flagsets[fs].startsWith('T')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'VANILLA':
						modeflags.tchests = 'vanilla';
						break;
					case 'SHUFFLE':
						modeflags.tchests = 'shuffle';
						break;
					case 'STANDARD':
						modeflags.tchests = 'standard';
						break;
					case 'PRO':
						modeflags.tchests = 'pro';
						break;
					case 'WILD':
						modeflags.tchests = 'wild';
						break;
					case 'WILDISH':
						modeflags.tchests = 'wildish';
						break;
					case 'EMPTY':
						modeflags.tchests = 'empty';
						break;
					case 'NO:J':
						modeflags.tnoj = true;
						break;
					case 'JUNK':
						modeflags.tjunk = true;
						break;
					default:
						if (keys[k].startsWith('SPARSE')) {
							modeflags.tsparse = keys[k].substr(7);
						}
				}
			}
		}
		
		//Shops
		if (flagsets[fs].startsWith('S')) {
			var flagstring = flagsets[fs].substr(1).replace(',','/');
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'VANILLA':
						modeflags.sshops = 'vanilla';
						break;
					case 'SHUFFLE':
						modeflags.sshops = 'shuffle';
						break;
					case 'STANDARD':
						modeflags.sshops = 'standard';
						break;
					case 'PRO':
						modeflags.sshops = 'pro';
						break;
					case 'WILD':
						modeflags.sshops = 'wild';
						break;
					case 'CABINS':
						modeflags.sshops = 'cabins';
						break;
					case 'EMPTY':
						modeflags.sshops = 'empty';
						break;
					case 'FREE':
						modeflags.sfree = true;
						break;
					case 'QUARTER':
						modeflags.squarter = true;
						break;
					case 'NO:J':
						modeflags.snoj = true;
						break;
					case 'NO:APPLES':
					case 'APPLES':
						modeflags.snoapples = true;
						break;
					case 'NO:SIRENS':
					case 'SIRENS':
						modeflags.snosirens = true;
						break;
					case 'UNSAFE':
						modeflags.sunsafe = true;
						break;
				}
			}
		}
		
		//Bosses
		if (flagsets[fs].startsWith('B')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'VANILLA':
						modeflags.bvanilla = true;
						break;
					case 'STANDARD':
						modeflags.bstandard = true;
						break;
					case 'UNSAFE':
						modeflags.bunsafe = true;
						break;
					case 'ALT:GAUNTLET':
						modeflags.baltgauntlet = true;
						break;
					case 'WHYBURN':
						modeflags.bwhyburn = true;
						break;
					case 'WHICHBURN':
						modeflags.bwhichburn = true;
						break;
				}
			}
		}
		
		//Challenges
		if (flagsets[fs].startsWith('N')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'CHARS':
						modeflags.nchars = true;
						break;
					case 'KEY':
						modeflags.nkey = true;
						break;
					case 'BOSSES':
						modeflags.nbosses = true;
						break;
				}
			}
		}
		
		//Encounters
		if (flagsets[fs].startsWith('E')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'VANILLA':
						modeflags.eencounters = 'evanilla';
						break;
					case 'TOGGLE':
						modeflags.eencounters = 'etoggle';
						break;
					case 'REDUCE':
						modeflags.eencounters = 'ereduce';
						break;
					case 'NOENCOUNTERS':
						modeflags.eencounters = 'enoencounters';
						break;
					case 'KEEP:DOORS':
						modeflags.ekeepdoors = true;
						break;
					case 'KEEP:BEHEMOTHS':
					case 'BEHEMOTHS':
						modeflags.ekeepbehemoths = true;
						break;
					case 'DANGER':
						modeflags.edanger = true;
						break;
					case 'NO:SIRENS':
						modeflags.enosirens = true;
						break;
					case 'NO:JDROPS':
						modeflags.enojdrops = true;
						break;
					case 'CANTRUN':
						modeflags.ecantrun = true;
						break;
					case 'NOEXP':
						modeflags.enoexp = true;
						break;
				}
			}
		}
		
		//Glitches
		if (flagsets[fs].startsWith('G')) {
			var flagstring = flagsets[fs].substr(1);
			var keys = flagstring.split('/');
			
			for (var k in keys) {
				switch (keys[k]) {
					case 'DUPE':
						modeflags.gdupe = true;
						break;
					case 'MP':
						modeflags.gmp = true;
						break;
					case 'WARP':
						modeflags.gwarp = true;
						break;
					case 'LIFE':
						modeflags.glife = true;
						break;
					case '64':
						modeflags.g64 = true;
						break;
				}
			}
		}
		
		//Other
		if (flagsets[fs].startsWith('-')) {
			switch (flagsets[fs]) {
				case '-KIT:MINIMAL':
					modeflags.ostarterkit = 'minimal';
					break;
				case '-KIT:BASIC':
					modeflags.ostarterkit = 'basic';
					break;
				case '-KIT:BETTER':
					modeflags.ostarterkit = 'better';
					break;
				case '-KIT:LOADED':
					modeflags.ostarterkit = 'loaded';
					break;
				case '-KIT:SPITBALL':
					modeflags.ostarterkit = 'spitball';
					break;
				case '-NOADAMANTS':
					modeflags.onoadamants = true;
					break;
				case '-VINTAGE':
					modeflags.ovintage = true;
					break;
				case '-SPOON':
					modeflags.ospoon = true;
					break;
				default:
					if (flagsets[fs].startsWith('-VANILLA:')) {
						var flagstring = flagsets[fs].substr(9).replace('/', ',');
						var keys = flagstring.split(',');
						for (var k in keys) {
							switch (keys[k]) {
								case 'FUSOYA':
									modeflags.ovanillafusoya = true;
									break;
								case 'AGILITY':
									modeflags.ovanillaagility = true;
									break;
								case 'HOBS':
									modeflags.ovanillahobs = true;
									break;
								case 'FASHION':
									modeflags.ovanillafashion = true;
									break;
								case 'TRAPS':
									modeflags.ovanillatraps = true;
									break;
								case 'Z':
									modeflags.ovanillaz = true;
									break;
							}
						}
					}
					
					if (flagsets[fs].startsWith('-EXP:')) {
						var flagstring = flagsets[fs].substr(5).replace('/', ',');
						var keys = flagstring.split(',');
						for (var k in keys) {
							switch (keys[k]) {
								case 'SPLIT':
									modeflags.oexpsplit = true;
									break;
								case 'NOBOOST':
									modeflags.oexpnoboost = true;
									break;
								case 'NOKEYBONUS':
									modeflags.oexpnokeybonus = true;
									break;
							}
						}
					}					
					break;
			}
		}
	}
	
	
	
	
	
	
	
	
	//Exclude characters
	if (!modeflags.ccecil) {
		document.getElementById('character0').style.opacity = '0.2';
		document.getElementById('character0_x').style.visibility = 'visible';
		excludedCharacters += 'Cecil ';
	}
	if (!modeflags.ckain) {
		document.getElementById('character1').style.opacity = '0.2';
		document.getElementById('character1_x').style.visibility = 'visible';
		excludedCharacters += 'Kain ';
	}
	if (!modeflags.crydia) {
		document.getElementById('character2').style.opacity = '0.2';
		document.getElementById('character2_x').style.visibility = 'visible';
		excludedCharacters += 'Rydia ';
	}
	if (!modeflags.ctellah) {
		document.getElementById('character3').style.opacity = '0.2';
		document.getElementById('character3_x').style.visibility = 'visible';
		excludedCharacters += 'Tellah ';
	}
	if (!modeflags.cedward) {
		document.getElementById('character4').style.opacity = '0.2';
		document.getElementById('character4_x').style.visibility = 'visible';
		excludedCharacters += 'Edward ';
	}
	if (!modeflags.crosa) {
		document.getElementById('character5').style.opacity = '0.2';
		document.getElementById('character5_x').style.visibility = 'visible';
		excludedCharacters += 'Rosa ';
	}
	if (!modeflags.cyang) {
		document.getElementById('character6').style.opacity = '0.2';
		document.getElementById('character6_x').style.visibility = 'visible';
		excludedCharacters += 'Yang ';
	}
	if (!modeflags.cpalom) {
		document.getElementById('character7').style.opacity = '0.2';
		document.getElementById('character7_x').style.visibility = 'visible';
		excludedCharacters += 'Palom ';
	}
	if (!modeflags.cporom) {
		document.getElementById('character8').style.opacity = '0.2';
		document.getElementById('character8_x').style.visibility = 'visible';
		excludedCharacters += 'Porom ';
	}
	if (!modeflags.ccid) {
		document.getElementById('character9').style.opacity = '0.2';
		document.getElementById('character9_x').style.visibility = 'visible';
		excludedCharacters += 'Cid ';
	}
	if (!modeflags.cedge) {
		document.getElementById('character10').style.opacity = '0.2';
		document.getElementById('character10_x').style.visibility = 'visible';
		excludedCharacters += 'Edge ';
	}
	if (!modeflags.cfusoya) {
		document.getElementById('character11').style.opacity = '0.2';
		document.getElementById('character11_x').style.visibility = 'visible';
		excludedCharacters += 'FuSoYa ';
	}
	
	//Starting character
	if (modeflags.cstart != '') {
		switch (modeflags.cstart) {
			case 'CECIL':
				SwapCharacter(0);
				overridestarting = 'CECIL';
				document.getElementById('characterStart').innerHTML = 'Cecil';
				break;
			case 'KAIN':
				SwapCharacter(1);
				overridestarting = 'KAIN';
				document.getElementById('characterStart').innerHTML = 'Kain';
				break;
			case 'RYDIA':
				SwapCharacter(2);
				overridestarting = 'RYDIA';
				document.getElementById('characterStart').innerHTML = 'Rydia';
				break;
			case 'TELLAH':
				SwapCharacter(3);
				overridestarting = 'TELLAH';
				document.getElementById('characterStart').innerHTML = 'Tellah';
				break;
			case 'EDWARD':
				SwapCharacter(4);
				overridestarting = 'EDWARD';
				document.getElementById('characterStart').innerHTML = 'Edward';
				break;
			case 'ROSA':
				SwapCharacter(5);
				overridestarting = 'ROSA';
				document.getElementById('characterStart').innerHTML = 'Rosa';
				break;
			case 'YANG':
				SwapCharacter(6);
				overridestarting = 'YANG';
				document.getElementById('characterStart').innerHTML = 'Yang';
				break;
			case 'PALOM':
				SwapCharacter(7);
				overridestarting = 'PALOM';
				document.getElementById('characterStart').innerHTML = 'Palom';
				break;
			case 'POROM':
				SwapCharacter(8);
				overridestarting = 'POROM';
				document.getElementById('characterStart').innerHTML = 'Porom';
				break;
			case 'CID':
				SwapCharacter(9);
				overridestarting = 'CID';
				document.getElementById('characterStart').innerHTML = 'Cid';
				break;
			case 'EDGE':
				SwapCharacter(10);
				overridestarting = 'EDGE';
				document.getElementById('characterStart').innerHTML = 'Edge';
				break;
			case 'FUSOYA':
				SwapCharacter(11);
				overridestarting = 'FUSOYA';
				document.getElementById('characterStart').innerHTML = 'FuSoYa';
				break;
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
	
	/* if (modeflags.kmain === true) {
		document.getElementById('keyitemsKvanilla').style.display = "none";
		document.getElementById('keyitemsKmain').style.display = "block";
	}
	
	if (modeflags.ksummon === true) {
		document.getElementById('keyitemsKvanilla').style.display = "none";
		document.getElementById('keyitemsKsummon').style.display = "block";
	}

	if (modeflags.kmoon === true) {
		document.getElementById('keyitemsKvanilla').style.display = "none";
		document.getElementById('keyitemsKmoon').style.display = "block";
	}

	if (modeflags.ktrap === true) {
		document.getElementById('keyitemsKvanilla').style.display = "none";
		document.getElementById('keyitemsKtrap').style.display = "block";
	}
	
	if (modeflags.kunsafe === true) {
		document.getElementById('keyitemsKvanilla').style.display = "none";
		document.getElementById('keyitemsKunsafe').style.display = "block";
	}

	if (modeflags.pshop === true) {
		document.getElementById('passPshop').style.display = "block";
	}

	if (modeflags.pkey === true) {
		document.getElementById('passPkey').style.display = "block";
	}

	if (modeflags.pchests === true) {
		document.getElementById('passPchests').style.display = "block";
	}
	
	if (modeflags.cvanilla === true) {
		document.getElementById('charactersCvanilla').style.display = "block";
	}
	
	if (modeflags.cstandard === true) {
		document.getElementById('charactersCstandard').style.display = "block";
	}
	
	if (modeflags.crelaxed === true) {
		document.getElementById('charactersCrelaxed').style.display = "block";
	}
	
	if (modeflags.cmaybe === true) {
		document.getElementById('charactersCmaybe').style.display = "block";
	}
	
	if (modeflags.cvanilla === true) {
		document.getElementById('charactersCvanilla').style.display = "block";
	}
	
	if (modeflags.cvanilla === true) {
		document.getElementById('charactersCvanilla').style.display = "block";
	}
	
	if (modeflags.cvanilla === true) {
		document.getElementById('charactersCvanilla').style.display = "block";
	}
	
	if (modeflags.cdistinct > 0) {
		document.getElementById('charactersCdistinct').style.display = "block";
		document.getElementById('charactersCdistinctCount').innerHTML = modeflags.cdistinct;
	}

	if (excludedCharacters != '') {
		document.getElementById('charactersExcluded').style.display = "block";
		document.getElementById('charactersExcludedList').innerHTML = excludedCharacters;
	}*/
	
	if (modeflags.ccecil) {
		includedCharacters += 'Cecil ';
	}
	if (modeflags.ckain) {
		includedCharacters += 'Kain ';
	}
	if (modeflags.crydia) {
		includedCharacters += 'Rydia ';
	}
	if (modeflags.ctellah) {
		includedCharacters += 'Tellah ';
	}
	if (modeflags.cedward) {
		includedCharacters += 'Edward ';
	}
	if (modeflags.crosa) {
		includedCharacters += 'Rosa ';
	}
	if (modeflags.cyang) {
		includedCharacters += 'Yang ';
	}
	if (modeflags.cpalom) {
		includedCharacters += 'Palom ';
	}
	if (modeflags.cporom) {
		includedCharacters += 'Porom ';
	}
	if (modeflags.ccid) {
		includedCharacters += 'Cid ';
	}
	if (modeflags.cedge) {
		includedCharacters += 'Edge ';
	}
	if (modeflags.cfusoya) {
		includedCharacters += 'FuSoYa ';
	} 
	
	//if (includedCharacters != '') {
		//document.getElementById('charactersSpecific').style.display = "block";
		//document.getElementById('charactersSpecificList').innerHTML = includedCharacters;		
	//}
	
	//if (modeflags.cstart != '') {
		//document.getElementById('charactersStarting').style.display = "block";
		//document.getElementById('characterStart').innerHTML = modeflags.cstart;
	//}
	
	/* if (modeflags.cjspells === true) {
		document.getElementById('charactersCJspells').style.display = "block";
	}
	
	if (modeflags.cjabilities === true) {
		document.getElementById('charactersCJabilities').style.display = "block";
	}
	
	if (modeflags.cnodupes === true) {
		document.getElementById('charactersCnodupes').style.display = "block";
	}
	
	if (modeflags.cbye === true) {
		document.getElementById('charactersCbye').style.display = "block";
	}
	
	if (modeflags.cpermajoin === true) {
		document.getElementById('charactersCpermajoin').style.display = "block";
	}
	
	if (modeflags.cpermadeath === true) {
		document.getElementById('charactersCpermadeath').style.display = "block";
	}

	if (modeflags.cpermadeader === true) {
		document.getElementById('charactersCpermadeader').style.display = "block";
	}
	
	if (modeflags.tchests === 'vanilla') {
		document.getElementById('treasuresTvanilla').style.display = "block";
	}
	
	if (modeflags.tchests === 'shuffle') {
		document.getElementById('treasuresTshuffle').style.display = "block";
	}
	
	if (modeflags.tchests === 'standard') {
		document.getElementById('treasuresTstandard').style.display = "block";
	}
	
	if (modeflags.tchests === 'pro') {
		document.getElementById('treasuresTpro').style.display = "block";
	}
	
	if (modeflags.tchests === 'wild') {
		document.getElementById('treasuresTwild').style.display = "block";
	}
	
	if (modeflags.tchests === 'wildish') {
		document.getElementById('treasuresTwildish').style.display = "block";
	}

	if (modeflags.tchests === 'empty') {
		document.getElementById('treasuresTempty').style.display = "block";
	}

	if (modeflags.tsparse > 0) {
		document.getElementById('treasuresTsparse').style.display = "block";
		document.getElementById('tsparsecount').innerHTML = modeflags.tsparse;
	}
	
	if (modeflags.tnoj === true) {
		document.getElementById('treasuresTnoj').style.display = "block";
	}

	if (modeflags.tjunk === true) {
		document.getElementById('treasuresTjunk').style.display = "block";
	}

	if (modeflags.sshops === 'vanilla') {
		document.getElementById('shopsSvanilla').style.display = "block";
	}
	
	if (modeflags.sshops === 'shuffle') {
		document.getElementById('shopsSshuffle').style.display = "block";
	}
	
	if (modeflags.sshops === 'standard') {
		document.getElementById('shopsSstandard').style.display = "block";
	}
	
	if (modeflags.sshops === 'pro') {
		document.getElementById('shopsSpro').style.display = "block";
	}
	
	if (modeflags.sshops === 'wild') {
		document.getElementById('shopsSwild').style.display = "block";
	}
	
	if (modeflags.sshops === 'cabins') {
		document.getElementById('shopsScabins').style.display = "block";
	}
	
	if (modeflags.sshops === 'empty') {
		document.getElementById('shopsSempty').style.display = "block";
	}
	
	if (modeflags.sunsafe === true) {
		document.getElementById('shopsSunsafe').style.display = "block";
	}
	
	if (modeflags.sfree === true) {
		document.getElementById('shopsSfree').style.display = "block";
	}
	
	if (modeflags.squarter === true) {
		document.getElementById('shopsSquarter').style.display = "block";
	}

	if (modeflags.snoj === true) {
		document.getElementById('shopsSnoj').style.display = "block";
	}

	if (modeflags.snoapples === true) {
		document.getElementById('shopsSnoapples').style.display = "block";
	}

	if (modeflags.snosirens === true) {
		document.getElementById('shopsSnosirens').style.display = "block";
	}
	
	if (modeflags.bvanilla === true) {
		document.getElementById('bossesBvanilla').style.display = "block";
	}
	
	if (modeflags.bstandard === true) {
		document.getElementById('bossesBstandard').style.display = "block";
	}
	
	if (modeflags.bunsafe === true) {
		document.getElementById('bossesBunsafe').style.display = "block";
	}
	
	if (modeflags.baltgauntlet === true) {
		document.getElementById('bossesBaltgauntlet').style.display = "block";
	}
	
	if (modeflags.bwhyburn === true) {
		document.getElementById('bossesBwhyburn').style.display = "block";
	}

	if (modeflags.bwhichburn === true) {
		document.getElementById('bossesBwhichburn').style.display = "block";
	}
	
	if (modeflags.nchars === true) {
		document.getElementById('challengesNchars').style.display = "block";
	}
	
	if (modeflags.nkey === true) {
		document.getElementById('challengesNkey').style.display = "block";
	}
	
	if (modeflags.nbosses === true) {
		document.getElementById('challengesNbosses').style.display = "block";
	}
	
	if (modeflags.eencounters === 'evanilla') {
		document.getElementById('encountersEvanilla').style.display = "block";
	}
	
	if (modeflags.eencounters === 'etoggle') {
		document.getElementById('encountersEtoggle').style.display = "block";
	}
	
	if (modeflags.eencounters === 'ereduce') {
		document.getElementById('encountersEreduce').style.display = "block";
	}
	
	if (modeflags.eencounters === 'enoencounters') {
		document.getElementById('encountersEnoencounters').style.display = "block";
	}
	
	if (modeflags.ekeepdoors === true) {
		document.getElementById('encountersEkeepdoors').style.display = "block";
	}
	
	if (modeflags.ekeepbehemoths === true) {
		document.getElementById('encountersEkeepbehemoths').style.display = "block";
	}
	
	if (modeflags.edanger === true) {
		document.getElementById('encountersEdanger').style.display = "block";
	}
	
	if (modeflags.enosirens === true) {
		document.getElementById('encountersEnosirens').style.display = "block";
	}
	
	if (modeflags.enojdrops === true) {
		document.getElementById('encountersEnojdrops').style.display = "block";
	}
	
	if (modeflags.ecantrun === true) {
		document.getElementById('encountersEcantrun').style.display = "block";
	}

	if (modeflags.enoexp === true) {
		document.getElementById('encountersEnoexp').style.display = "block";
	}
	
	if (modeflags.gdupe === true) {
		document.getElementById('glitchesGdupe').style.display = "block";
	}
	
	if (modeflags.gmp === true) {
		document.getElementById('glitchesGmp').style.display = "block";
	}
	
	if (modeflags.gwarp === true) {
		document.getElementById('glitchesGwarp').style.display = "block";
	}
	
	if (modeflags.glife === true) {
		document.getElementById('glitchesGlife').style.display = "block";
	}
	
	if (modeflags.g64 === true) {
		document.getElementById('glitchesGG64').style.display = "block";
	}
	
	if (modeflags.ostarterkit === 'minimal') {
		document.getElementById('otherkitminimal').style.display = "block";
	}
	
	if (modeflags.ostarterkit === 'basic') {
		document.getElementById('otherkitbasic').style.display = "block";
	}
	
	if (modeflags.ostarterkit === 'better') {
		document.getElementById('otherkitbetter').style.display = "block";
	}
	
	if (modeflags.ostarterkit === 'loaded') {
		document.getElementById('otherkiloaded').style.display = "block";
	}
	
	if (modeflags.ostarterkit === 'spitball') {
		document.getElementById('otherkitspitball').style.display = "block";
	}
	
	if (modeflags.onoadamants === true) {
		document.getElementById('othernoadamants').style.display = "block";
	}
	
	if (modeflags.ovintage === true) {
		document.getElementById('othervintage').style.display = "block";
	}
	
	if (modeflags.ospoon === true) {
		document.getElementById('otherspoon').style.display = "block";
	}
	
	if (modeflags.ovanillafusoya === true) {
		document.getElementById('othervanillafusoya').style.display = "block";
	}
	
	if (modeflags.ovanillaagility === true) {
		document.getElementById('othervanillaagility').style.display = "block";
	}
	
	if (modeflags.ovanillahobs === true) {
		document.getElementById('othervanillahobs').style.display = "block";
	}
	
	if (modeflags.ovanillaexp === true) {
		document.getElementById('othervanillaexp').style.display = "block";
	}
	
	if (modeflags.oexpsplit === true) {
		document.getElementById('otherexpsplit').style.display = "block";
	}
	
	if (modeflags.oexpnoboost === true) {
		document.getElementById('otherexpnoboost').style.display = "block";
	}
	
	if (modeflags.oexpnokeybonus === true) {
		document.getElementById('otherexpnokeybonus').style.display = "block";
	}
	
	if (modeflags.ovanillafashion === true) {
		document.getElementById('othervanillafashion').style.display = "block";
	}
	
	if (modeflags.ovanillatraps === true) {
		document.getElementById('othervanillatraps').style.display = "block";
	}
	
	if (modeflags.ovanillaz === true) {
		document.getElementById('othervanillaz').style.display = "block";
	} */
	
	if (modeflags.oquests === false) {
		document.getElementById('objectivecategoryquestsspan').style.textDecoration = "line-through";
		document.getElementById('objectivecategoryquestsspan').style.cursor = "no-drop";
	}
	
	if (modeflags.oboss === false) {
		document.getElementById('objectivecategorybossspan').style.textDecoration = "line-through";
		document.getElementById('objectivecategorybossspan').style.cursor = "no-drop";
	}
	
	if (modeflags.ochar === false) {
		document.getElementById('objectivecategorycharacterspan').style.textDecoration = "line-through";
		document.getElementById('objectivecategorycharacterspan').style.cursor = "no-drop";
	}
	
	if (modeflags.oreq != "") {
		//document.getElementById('objectivesRequired').style.display = "";
		document.getElementById('objectivesRequiredCount').innerHTML = modeflags.oreq;
	}
	
	/* if (!modeflags.oforge && !modeflags.ogiant) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	} 
	
	if (modeflags.oforge) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item12td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item13td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item16td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		document.getElementById('item17td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	} 
	
	if (modeflags.ogiant) {
		document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
	} */

	if (modeflags.snoj) {
		document.getElementById('offensive1').style.display = "none";
		document.getElementById('offensive2').style.display = "none";
		document.getElementById('offensive3').style.display = "none";
		document.getElementById('offensive4').style.display = "none";
		document.getElementById('offensive5').style.display = "none";
		document.getElementById('utility1').style.display = "none";
		document.getElementById('utility2').style.display = "none";
		document.getElementById('utility3').style.display = "none";
		document.getElementById('utility4').style.display = "none";
		document.getElementById('othertd').style.display = "none";
		document.getElementById('notes1td').style.display = "none";
		document.getElementById('notes2td').style.display = "none";
	} 
	/*else if (shops === 1 || shops === 2) {
		document.getElementById('offensive3').style.display = "none";
		document.getElementById('offensive4').style.display = "none";
	}*/
	
	if (!modeflags.ktrap) {
		document.getElementById('trappedchestsdiv').style.display = "none";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
		document.getElementById('townsdiv').style.width = "160px";
	}
	
	if (!modeflags.ksummon) {
		keyitemlocations[3] = 3; //Odin
		keyitemlocations[15] = 3; //Asura
		keyitemlocations[16] = 3; //Leva
		keyitemlocations[20] = 3; //Slyph
		keyitemlocations[21] = 3; //Bahamut
	}
	
	if (!modeflags.kmoon) {
		keyitemlocations[22] = 3; //Lunar Crystal
		keyitemlocations[23] = 3; //Lunar Masa
		keyitemlocations[24] = 3; //Lunar Mura
		keyitemlocations[25] = 3; //Lunar Ribbon
		keyitemlocations[26] = 3; //Lunar White
	}
	
	if (modeflags.sshops == 'empty') {
		disableitemtracker = '1';
	}
	
	if (modeflags.nchars) {
		characterlocations[2] = 3;
		characterlocations[8] = 3;
		characterlocations[9] = 3;
		characterlocations[11] = 3;		
	}
	
	if (modeflags.nkey) {
		keyitemlocations[12] = 3;
	} else {
		if (disablebosstracker === '1') {
			document.getElementById('misttoggle').style.visibility = "hidden";
		}
		keyitemlocations[9] = 3;
	}

	var verticallayout = getParameterByName('v');
	
	if (verticallayout === '1' && disablelocationtracker === '0') {
		document.getElementById('wrapperdiv').style.width = "490px";
		document.getElementById('trackingtable').style.top = "430px";
		document.getElementById('trackingtable').style.left = "0px";
		//document.getElementById('trackingtable').style.marginLeft = "20px";
		document.getElementById('leftdiv').style.margin = "0px 0px 20px 60px";
		document.getElementById('itemModalInner').style.left = "34px";
		document.getElementById('itemModalInner').style.top = "460px";
		document.getElementById('objectiveModalInner').style.left = "36px";
		//document.getElementById('objectiveModalInner').style.top = "460px";
		document.getElementById('townModalInner').style.left = "34px";
		document.getElementById('townModalInner').style.top = "460px";
		document.getElementById('bossModalInner').style.left = "34px";
		
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
		document.getElementById('objectiveModalInner').style.fontSize = "18px";
	} else if (browser === '2') {
		//var hrItems = document.getElementsByTagName("hr");

		//for(var i = 0; i < hrItems.length; i++) {
			//hrItems[i].style.marginTop = '10px';
			//hrItems[i].style.marginBottom = '10px';
		//}
	}
	
	SetObjectives();
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
		if (!modeflags.ccecil) {
			document.getElementById('character0').style.opacity = '0.2';
		}		
	} else { //All Others
		document.getElementById('character0').style = 'background-image: url(\'images/character0_a.png\')';
		if (!modeflags.ccecil) {
			document.getElementById('character0').style.opacity = '0.2';
		}		
	}
	if (rydia) { //If Rydia and Dwarf Castle clear
		document.getElementById('character2').style = 'background-image: url(\'images/character2_2_a.png\')';
		if (!modeflags.crydia) {
			document.getElementById('character2').style.opacity = '0.2';
		}		
	} else { //All Others
		document.getElementById('character2').style = 'background-image: url(\'images/character2_a.png\')';
		if (!modeflags.crydia) {
			document.getElementById('character2').style.opacity = '0.2';
		}		
	}
	
	//Party Members
	for (var i = 0; i < 5; i++) {
		var l = '';
		var p = 'party' + i;
		if (partymembers[i] != -1) {
			if ((partymembers[i] === 0 && cecil) || (partymembers[i] === 2 && rydia)) { //If Cecil and Ordeals clear or if Rydia and Dwarf 
				l = 'character' + partymembers[i] + '_2_a';
			} else { //All Others
				l = 'character' + partymembers[i] + '_a';
			}
		}
		if (l != '') {
			document.getElementById(p).style = 'background-image: url(\'images/' + l + '.png\')';
		} else {
			document.getElementById(p).style = 'background-image: none';
		}
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
	if (itemcount > 9 && !modeflags.oexpnokeybonus) {
		document.getElementById('itemtracker').style.color = "#0F0";
	} else {
		document.getElementById('itemtracker').style.color = "#FFF";
	}
	
	//Item Requirements
	/* if (!modeflags.oforge && !modeflags.ogiant) {
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
	} 
	
	if (modeflags.oforge) {
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
	} 
	
	if (modeflags.ogiant) {
		if (keyitems[4] === true) {
			document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem.png\')';
		} else {
			document.getElementById('item4td').style.backgroundImage = 'url(\'./images/requireditem_off.png\')';
		}		
	}*/
	
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
				if (items[i] === '100000000000000000000000000000000000') {
					document.getElementById(l).style.display = "none";
				} else {
					document.getElementById(l).style.display = "block";
					if (items[i] != '000000000000000000000000000000000000' || itemsnotes[i] != '') {
						document.getElementById(l).style.color = "#0F0";
					} else {
						document.getElementById(l).style.color = "#FFF";
					}
					document.getElementById(l).style.setProperty("text-decoration", "none");
				}
			} else if (townlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (items[i] === '100000000000000000000000000000000000') {
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
		if (i === 13 && modeflags.gwarp) {
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
				//document.getElementById("partydiv").style.display = "block";
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
			//document.getElementById("partydiv").style.display = "none";
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
	CheckItems(i);
	$('#itemModal').show();
}

function CheckItems(i) {
	currentitemlist = i;
	
	for (var j = 0; j < 36; j++) {
		if (items[i].charAt(j) == '1') {
			document.getElementById('itemspan' + j).style.color = "#0F0";
		} else {
			document.getElementById('itemspan' + j).style.color = "#FFF";
		}
	}
	
	document.getElementById("townnotes").value = itemsnotes[i];
}

function CheckItemBox(i) {
	var l = 'itemlist' + i;
	document.getElementById(l).checked = !document.getElementById(l).checked;
}

function CheckItemSpan(i) {
	if (i == 0 && items[currentitemlist].charAt(0) == '0') {
		items[currentitemlist] = '100000000000000000000000000000000000';
		itemsnotes[currentitemlist] = '';
		townlocations[currentitemlist] = 2;
		CloseItems();
	} else {
		if (items[currentitemlist].charAt(i) == '0') {
			items[currentitemlist] = ReplaceItem(items[currentitemlist], i, '1');
		} else {
			items[currentitemlist] = ReplaceItem(items[currentitemlist], i, '0');
		}
		CheckItems(currentitemlist);
	}
}

function ReplaceItem(item, index, replace) {
	var returnitem = '0';
	for (var i = 1; i < 36; i++) {
		if (i == index) {
			returnitem = returnitem + replace;
		} else {
			returnitem = returnitem + item.charAt(i);
		}
	}
    return returnitem;
}

function CloseItems() {
	if (menutoggle === false) {
		itemsnotes[currentitemlist] = document.getElementById("townnotes").value;
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

/* function LoadFlags() {
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
} */

function SetObjectives() {
	if (disableobjectivetracker === '0') {
		for (var i = 0; i < 98; i++) {
			if (objectives[i] === 2) {
				document.getElementById('objective' + i).style.display = 'none';
				document.getElementById('objectiveCheck' + i).style.display = 'none';
			}
		}
		
		if (objectives[98] === 2) {
			document.getElementById('objectivesVictory').innerHTML = 'REQUIRED FOR CRYSTAL';
		}
		if (objectives[99] === 2) {
			document.getElementById('objectivesVictory').innerHTML = 'REQUIRED TO WIN';
		}
		
		if (modeflags.odarkmatter === false) {
			document.getElementById('objectivedm').style.display = 'none';
		}
	}
}

function checkOffObjective(i) {
	objectives[i] = (objectives[i] === 0 ? 1 : 0);
	if (objectives[i] === 1) {
		document.getElementById('objectiveCheck' + i).src = 'images/objectivechecked.png';
	} else {
		document.getElementById('objectiveCheck' + i).src = 'images/objectiveunchecked.png';
	}
}

function ChangeObjective(i) {
	objectivechange = i;
	$('#objectiveModal').show();
	document.getElementById('objectivescharacterdiv').style.display = 'none';
	document.getElementById('objectivesbossdiv').style.display = 'none';
	document.getElementById('objectivesquestsdiv').style.display = 'none';	
	
}

function CloseObjectives() {
	if (menutoggle === false) {
		$('#objectiveModal').hide();
	} else {
		menutoggle = false;
	}
}

function LoadObjectiveDetail(i) {
	if (i === 0 && modeflags.oquests === true) {
		document.getElementById('objectivesquestsdiv').style.display = '';
		document.getElementById('objectivesbossdiv').style.display = 'none';
		document.getElementById('objectivescharacterdiv').style.display = 'none';
	} else if (i === 1 && modeflags.oboss === true) {
		document.getElementById('objectivesbossdiv').style.display = '';
		document.getElementById('objectivesquestsdiv').style.display = 'none';
		document.getElementById('objectivescharacterdiv').style.display = 'none';
	} else if (i === 2 && modeflags.ochar === true) {
		document.getElementById('objectivescharacterdiv').style.display = '';
		document.getElementById('objectivesbossdiv').style.display = 'none';
		document.getElementById('objectivesquestsdiv').style.display = 'none';
	}
}

function SetObjective(i) {
	var objectivetochange = document.getElementById('randomobjective' + objectivechange).innerHTML = objectivenames[i];

	$('#objectiveModal').hide();
}

/* function ExpandFlags(i) {
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
	document.getElementById('flagsselectdiv').style.display = 'block';
} */

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
	var agart = '';
	var baron = '';
	var eblan = '';
	var fabul = '';
	var kaipo = '';
	var mysidia = '';
	var silvera = '';
	var troiaitem = '';
	var troiapub = '';
	var dwarf = '';
	var feymarch = '';
	var tomara = '';
	var hummingway = '';
	
	var summarystrings = ['','','','','','','','','','','','',''];	
	
	for (var i = 0; i < 13; i++) {
		for (var j = 1; j < 36; j++) {
			if (items[i].charAt(j) === '1') {
				switch (j) {
					case 1:
						summarystrings[i] += 'Life, ';
						break;
					case 2:
						summarystrings[i] += 'Cure1, ';
						break;
					case 3:
						summarystrings[i] += 'Cure2, ';
						break;
					case 4:
						summarystrings[i] += 'Cure3, ';
						break;
					case 5:
						summarystrings[i] += 'Ether1, ';
						break;
					case 6:
						summarystrings[i] += 'Ether2, ';
						break;
					case 7:
						summarystrings[i] += 'Tent, ';
						break;
					case 8:
						summarystrings[i] += 'Cabin, ';
						break;
					case 9:
						summarystrings[i] += 'Bomb, ';
						break;
					case 10:
						summarystrings[i] += 'Notus, ';
						break;
					case 11:
						summarystrings[i] += 'ThorRage, ';
						break;
					case 12:
						summarystrings[i] += 'Vampire, ';
						break;
					case 13:
						summarystrings[i] += 'Kamikaze, ';
						break;
					case 14:
						summarystrings[i] += 'BigBomb, ';
						break;
					case 15:
						summarystrings[i] += 'Boreas, ';
						break;
					case 16:
						summarystrings[i] += 'ZeusRage, ';
						break;
					case 17:
						summarystrings[i] += 'FireBomb, ';
						break;
					case 18:
						summarystrings[i] += 'Blizzard, ';
						break;
					case 19:
						summarystrings[i] += 'Lit-Bolt, ';
						break;
					case 20:
						summarystrings[i] += 'GaiaDrum, ';
						break;
					case 21:
						summarystrings[i] += 'Stardust, ';
						break;
					case 22:
						summarystrings[i] += 'Grimoire, ';
						break;
					case 23:
						summarystrings[i] += 'HrGlass1, ';
						break;
					case 24:
						summarystrings[i] += 'HrGlass2, ';
						break;
					case 25:
						summarystrings[i] += 'HrGlass3, ';
						break;
					case 26:
						summarystrings[i] += 'StarVeil, ';
						break;
					case 27:
						summarystrings[i] += 'MoonVeil, ';
						break;
					case 28:
						summarystrings[i] += 'Exit, ';
						break;
					case 29:
						summarystrings[i] += 'Illusion, ';
						break;
					case 30:
						summarystrings[i] += 'Coffin, ';
						break;
					case 31:
						summarystrings[i] += 'Siren, ';
						break;
					case 32:
						summarystrings[i] += 'Bacchus, ';
						break;
					case 33:
						summarystrings[i] += 'SilkWeb, ';
						break;
					case 34:
						summarystrings[i] += 'Pass, ';
						break;
					case 35:
						summarystrings[i] += 'Other, ';
						break;
				}
			}
		}
		if (summarystrings[i].charAt(summarystrings[i].length - 2) === ',') {
			summarystrings[i] = summarystrings[i].substring(0, summarystrings[i].length - 2);
		}
	}
	
	document.getElementById('townlistlocation1').innerHTML = summarystrings[0];
	document.getElementById('townlistlocation2').innerHTML = summarystrings[1];
	document.getElementById('townlistlocation3').innerHTML = summarystrings[2];
	document.getElementById('townlistlocation4').innerHTML = summarystrings[3];
	document.getElementById('townlistlocation5').innerHTML = summarystrings[4];
	document.getElementById('townlistlocation6').innerHTML = summarystrings[5];
	document.getElementById('townlistlocation7').innerHTML = summarystrings[6];
	document.getElementById('townlistlocation8').innerHTML = summarystrings[7];
	document.getElementById('townlistlocation9').innerHTML = summarystrings[8];
	document.getElementById('townlistlocation10').innerHTML = summarystrings[9];
	document.getElementById('townlistlocation11').innerHTML = summarystrings[10];
	document.getElementById('townlistlocation12').innerHTML = summarystrings[11];
	document.getElementById('townlistlocation13').innerHTML = summarystrings[12];
	
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

function DMTicker(x) {
	dmcount += x;
	if (dmcount < 0) { dmcount = 0 };
	if (dmcount > 30) { dmcount = 30 };
	document.getElementById('dmcountspan').innerHTML = dmcount;
}

function HighlightClear(x) {
	document.getElementById('partyClear' + x).style.backgroundColor = "rgb(255,255,255,1)";
}

function UnhighlightClear(x) {
	document.getElementById('partyClear' + x).style.backgroundColor = "rgb(255,255,255,.3)";
}