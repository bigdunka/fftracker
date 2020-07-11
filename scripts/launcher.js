var version = '200';

function load_cookie() {
	var c = document.cookie;
	var cs = c.split(';');
	
	for (var co in cs) {
		if (cs[co].indexOf('200') > -1 && cs[co].indexOf('settings') > -1) {
			document.getElementById("remembersettings").checked = true;
			document.getElementById("itemswitch").checked = false;
			document.getElementById("locswitch").checked = false;
			document.getElementById("bossswitch").checked = false;
			document.getElementById("locationswitch").checked = false;
			document.getElementById("verticalswitch").checked = false;
			document.getElementById("charswitch").checked = false;
			if (cs[co].indexOf('i-1') > -1) {
				document.getElementById("itemswitch").checked = true;
			}
			if (cs[co].indexOf('c-1') > -1) {
				document.getElementById("locswitch").checked = true;
			}
			if (cs[co].indexOf('b-1') > -1) {
				document.getElementById("bossswitch").checked = true;
			}
			if (cs[co].indexOf('l-1') > -1) {
				document.getElementById("locationswitch").checked = true;
			}
			if (cs[co].indexOf('v-1') > -1) {
				document.getElementById("verticalswitch").checked = true;
			}
			if (cs[co].indexOf('h-1') > -1) {
				document.getElementById("charswitch").checked = true;
			}
		}
	}
}

function launch() {
	var flagsval = document.getElementById('flags').value;
	//flagsval = flagsval.replace(' ','|');
	flagsval = flagsval.replace(new RegExp(' ', 'g'), '|');
	
	var itemtracking = '0';
	var loctracking = '0';
	var bosstracking = '0';
	var verticallayout = '0';
	var locationtracking = '0';
	var charactertracking = '0';
	var objectivetracking = '0';
	var browser = '0';
	
	if (document.getElementById('itemswitch').checked) {
		itemtracking = '1';
	} 
	
	if (document.getElementById('locswitch').checked) {
		loctracking = '1';
	} 
	
	if (document.getElementById('bossswitch').checked) {
		bosstracking = '1';
	} 
	
	if (document.getElementById('locationswitch').checked) {
		locationtracking = '1';
	} 
	
	if (document.getElementById('verticalswitch').checked) {
		verticallayout = '1';
	}
	
	if (document.getElementById('charswitch').checked) {
		charactertracking = '1';
	}
	
	if (document.getElementById('objswitch').checked) {
		objectivetracking = '1';
	}
	
	if (document.getElementById("remembersettings").checked == true) {
		var settings = "i-" + itemtracking + "|c-" + loctracking + "|b-" + bosstracking + "|l-" + locationtracking + "|v-" + verticallayout + "|h-" + charactertracking + "|o-" + objectivetracking + '|ver=' + version;
		document.cookie = "settings=" + settings + "; expires=Sat, 1 Jan 2023 12:00:00 UTC";
	} else {
		document.cookie = "settings=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	}	
	
	//Chrome defaults
	var h = 450;
	var w = 930;
	
	if (verticallayout === '1') {
		var h = 910;
		var w = 490;
	}
	
	if (window.navigator.userAgent.indexOf("Firefox") > -1) {
		browser = '1';
		//Firefox
		h = 460;
		//w = 930;
		if (verticallayout === '1') {
			var h = 980;
			var w = 540;
		}
	} else if (window.navigator.userAgent.indexOf("Edge") > -1) {
		browser = '2';
		h = 460;
		//Edge
		if (verticallayout === '1') {
			var h = 920;
			//var w = 520;
		}
	}
	
	if (locationtracking === '1') {
		w = 420;
		h = 430;
	}
	
	open('tracker.html?f=' + flagsval.toUpperCase() + '&d=' + itemtracking + '&c=' + loctracking + '&s=' + bosstracking + '&l=' + locationtracking + '&v=' + verticallayout + '&h=' + charactertracking + '&o=' + objectivetracking + '&b=' + browser,
		'',
		'width=' + w + ',height=' + h + ',titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0');
}

function loadflags(f) {
	document.getElementById('flags').value = f;
	window.scrollTo(0, 0);
}