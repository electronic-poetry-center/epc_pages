var bottomMenuButtons = new Array();
bottomMenuButtons[0] = new BottomMenuButton("About the EPC", "http://www.writing.upenn.edu/epc/about/");
bottomMenuButtons[1] = new BottomMenuButton("PennSound", "http://www.writing.upenn.edu/pennsound");
bottomMenuButtons[2] = new BottomMenuButton("Kelly Writers House", "http://www.writing.upenn.edu/wh");
/*bottomMenuButtons[3] = new BottomMenuButton("Support the EPC", "https://ubfoundation.buffalo.edu/giving/v4/?gift_allocation=9311504326");*/
bottomMenuButtons[3] = new BottomMenuButton("Poetics Program", "http://www.writing.upenn.edu/epc/poetics/");
bottomMenuButtons[4] = new BottomMenuButton("CPCW", "http://www.writing.upenn.edu");

function initBottomMenu() {
	var htmlString = '<div id="bottomStripe"></div>';
	for (var i = 0; i < bottomMenuButtons.length; i++) {
		htmlString+= '<a id="'+(i+1)+'" class="menuElement bme" href="http://writing.upenn.edu/epc/'+bottomMenuButtons[i].link+'">'+bottomMenuButtons[i].title+'</a>';
	}
	
	//google search
	htmlString+='<div style="float:right; padding:5px"><form id="cse-search-box" action="http://google.com/cse"><input type="hidden" name="cx" value="010871193995679092018:b4sjfpfvvps" /><input type="hidden" name="ie" value="UTF-8" /><input type="text" name="q" size="31" /><input type="submit" name="sa" value="Search" /></form><img style="margin-left:5px; border-style: solid; border-color: #FFFFFF; border-width:2px;" src="http://www.google.com/cse/images/google_custom_search_smwide.gif"></div>';
	
	var bMenu = document.getElementById("bottomMenu");
	//bMenu.setAttribute("style","position: relative;text-shadow: 1px 1px 4px #A0A0A0;background-color: #667755;padding: 2px;padding-top: 0px;width: 1024px;height: 60px;-moz-border-bottom-left-radius: 15px;border-bottom-left-radius: 15px;-moz-border-bottom-right-radius: 15px;border-bottom-right-radius: 15px;display: block;");
	bMenu.innerHTML=htmlString+bMenu.innerHTML;
	
	
	//copyright notice
	var curDate = new Date();
	var curYear = curDate.getFullYear();
	var cr = document.getElementById("copyr");
	cr.style.textAlign = "center";
	cr.innerHTML = "&copy; 1994-"+curYear;
}

function BottomMenuButton (t,l) {
	this.title = t;
	this.link = l;
}


