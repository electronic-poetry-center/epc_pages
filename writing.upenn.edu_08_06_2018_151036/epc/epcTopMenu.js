//milliseconds that a menu tab is highlighted (automatically)
var msForScroll = 7000;

var menuButtons = new Array();
//arguments are title (what is visible as  tab), description (what reads below if the tab is moused over or scrolled through), link
menuButtons[0] = new MenuButton("Authors", "EPC Author Pages / new & selected work of featured Authors", "http://writing.upenn.edu/epc/authors");
menuButtons[1] = new MenuButton("Library", "Innovative & contemporary literature: hundreds of full-text works", "http://writing.upenn.edu/epc/library");
menuButtons[2] = new MenuButton("E-Poetry", "E-Poetry Festivals -- Forthcoming: E-Poetry 2015, Buenos Aires, June 10-12, 2015", "http://writing.upenn.edu/epc/e-poetry/archive/");
menuButtons[3] = new MenuButton("Mags", "Extraordinary Little Magazine & Small Edition Projects", "http://writing.upenn.edu/epc/mags/");
menuButtons[4] = new MenuButton("Sound", "PennSound: 50 Years of Audio Full-Text Performances", "http://writing.upenn.edu/pennsound/");
menuButtons[5] = new MenuButton("Portals", "Key links to EPC sister sites & blogs of note", "http://writing.upenn.edu/epc/connects/portals.html");
menuButtons[6] = new MenuButton("Bernstein", "Commentaries: Charles Bernstein", "https://jacket2.org/commentary/charles-bernstein/");
menuButtons[7] = new MenuButton("Howe", "Featured EPC Resource: Susan Howe", "http://writing.upenn.edu/epc/authors/howe/");
menuButtons[8] = new MenuButton("Blog", "Occasional EPC Blog Posts / epoetrybuffalo.wordpress.com", "http://epoetrybuffalo.wordpress.com/");
menuButtons[9] = new MenuButton("epc_FB", "EPC on Facebook", "https://www.facebook.com/pages/Electronic-Poetry-Center/27997573411");
menuButtons[10] = new MenuButton("DP_Dance", "Digital Poetry & Dance, SUNY Buffalo", "http://writing.upenn.edu/epc/dance/");
menuButtons[11] = new MenuButton("Glazier", "Loss Peque&ntilde;o Glazier, EPC Director, Author Page", "http://writing.upenn.edu/epc/authors/glazier/");

//Loss Pequeño 

var menu;
var desc;
var descP;
var menuIndex = -1;
var menuElements = new Array();
var scroll = true;
var twitB;
var body;

function MenuButton(t,d,l) {
	this.title = t;
	this.description = d;
	this.link = l;
}


function initTopMenu() {
	var epcText = document.getElementById("EPCTextLogo");
	epcText.setAttribute("style","text-decoration:none; bottom-padding:5px");
	epcText.innerHTML='<font size="4" color="#0080A0"><font size=+3 color="#00A0C0" style="letter-spacing:3px">e</font><font size=+3 color="#FDFDFD">lectronic </font><font size=+3 color="#00A0C0" style="letter-spacing:3px">p</font><font size=+3 color="#FDFDFD">oetry </font><font size=+3 color="#00A0C0" style="letter-spacing:3px">c</font><font size=+3 color="#FDFDFD">enter </font></font>';
	menu = document.getElementById("topMenu");
	for (var m = 0; m < menuButtons.length; m++) {
		menuElements[m] = document.createElement("a");
		menuElements[m].setAttribute("class", "menuElement");
		menuElements[m].setAttribute("id","menu"+m);
		menuElements[m].setAttribute("onmouseover", "doNotScroll(); descUpdate("+m+");");
		menuElements[m].setAttribute("onmouseout", "scroll = true; scrolling();");
		menuElements[m].setAttribute("onclick", "location.href='"+menuButtons[m].link+"'");
		menuElements[m].innerHTML = menuButtons[m].title;
		menu.appendChild(menuElements[m]);
	}
	desc = document.createElement("div");
	desc.setAttribute("id","menuDesc");
	menu.appendChild(desc);
	descP = document.createElement("p");
	descP.setAttribute("id", "menuDescP");
	desc.appendChild(descP);
	setInterval(function(){scrolling();}, msForScroll);
	scrolling();
}

function scrolling() {
	if (scroll) {
		menuIndex++;
		if (menuIndex >= menuElements.length) {
			menuIndex = 0;
		}
		for (var m2 = 0; m2 < menuElements.length; m2++) {
			menuElements[m2].removeAttribute('style');
			if (m2 === menuIndex) {
				descUpdate(m2);	
				menuElements[m2].style.opacity = "1.0";
				//menuElements[m2].style.width = 1.0/menuElements.length;
				menuElements[m2].style.width = "auto";
			} else {
				menuElements[m2].style.opacity = 0.25;
			}
		}
	}
}

function doNotScroll() {
	scroll = false;
	for (var m2 = 0; m2 < menuElements.length; m2++) {
		menuElements[m2].removeAttribute('style');		
	}
}

function descUpdate(i) {
	descP.innerHTML = menuButtons[i].description;
}