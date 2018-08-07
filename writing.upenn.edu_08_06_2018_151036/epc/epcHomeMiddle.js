// ++++ CHANGE rate of author pages displayed

var msForAuthor = 10000;
var authorDiv;
var authorIndex = -1;
var authors = new Array();

var authorSlideType = 1;
//above selects method of flipping through authors. 0 is incremental, 1 is random (with no consecutive repeats allowed), 2 is totally random


//edit twitter feeds/text/menu in index.html
var twitDiv;
var feedDiv;
//make below true to have the twitter boxes flipped through at regular intervals
var autoScroll = true;
//scroll interval in milliseconds

// ++++ CHANGE time twitter feeds displayed
// ++++ CHANGE autocscroll above to FALSE to not scroll

var msForTwitterScroll = 10000;
var feedIndex = 1;


// ++++ CHANGE author pages in queue

function authorInit() {
	//author images should be 400px x 400px

	//arguments: name, image url, image credit, link url
	//use "" (empty string) for image credit if there is none
	//	authors[0] = new Author("John Cage", "http://www.rasmussenbindery.com/shop146/image/cache/data/chromo-rep-400x400.jpg","", "http://epc.buffalo.edu/authors/cage/");
	//	authors[1] = new Author("William Carlos Williams", "http://epc.buffalo.edu/authors/williams/williams.gif", "Photographer X", "http://epc.buffalo.edu/authors/williams/");
	//	authors[11] = new Author("Mary Rising Higgins", "http://epc.buffalo.edu/authors/400/mary_rising_higgins_theshop-free-jazz-net-400.jpg", "theshop.free-jazz.net", "http://epc.buffalo.edu/authors/higginsmr/");
	//	authors[5] = new Author("Charles Bernstein", "http://epc.buffalo.edu/authors/400/bernstein-Cecilia-Gronberg_2006-400.jpg", "Cecilia Gronberg", "http://epc.buffalo.edu/authors/bernstein/");
	//	authors[4] = new Author("Lyn Hejinian", "http://epc.buffalo.edu/authors/400/Lyn-Hejinian-Gloria-Graham-400", "Gloria Graham", "http://epc.buffalo.edu/authors/hejinian/");
	//	authors[6] = new Author("Jean Day", "http://epc.buffalo.edu/authors/400/Jean_Day-John_Sarsgard-400.jpg", "John Sarsgard", "http://epc.buffalo.edu/authors/day/");
	//	authors[7] = new Author("Lorenzo Thomas", "http://epc.buffalo.edu/authors/400/Lorenzo-Thomas_HiebertPhotography-400.jpg", "Hiebert Photography", "http://epc.buffalo.edu/authors/thomas/");
	//	authors[8] = new Author("Caroline Bergvall", "http://epc.buffalo.edu/authors/400/caroline-bergvall-websynradio-400.jpg", "websynradio", "http://epc.buffalo.edu/authors/bergvall/");
	//	authors[9] = new Author("Helen Adam", "http://epc.buffalo.edu/authors/400/adam-epc-400.jpg", "", "http://epc.buffalo.edu/authors/adam/");
	//	authors[10] = new Author("John Ashbery", "http://epc.buffalo.edu/authors/400/John-Ashbery-9190436-1-402-biography-com-400.jpg", "biography.com", "http://epc.buffalo.edu/authors/ashbery/");
	//	authors[11] = new Author("Bruce Andrews", "http://epc.buffalo.edu/authors/400/andrews-susan-bee-400.jpg", "Susan Bee", "http://epc.buffalo.edu/authors/andrews/");
	//	authors[12] = new Author("Harryette Mullen", "http://epc.buffalo.edu/authors/400/Harryette_Mullen_northwestern-edu-400.jpg", "northwestern.edu", "http://epc.buffalo.edu/authors/mullen/");
	//	authors[13] = new Author("Stacy Doris", "http://epc.buffalo.edu/authors/400/Doris-Stacy_Isabelle-Levy-Lehmann-400.jpg", "Isabelle Levy Lehmann", "http://epc.buffalo.edu/authors/doris/");
	//	authors[15] = new Author("Vanessa Place", "http://epc.buffalo.edu/authors/400/vanessa_place_40_Molly_Corey-02_400.jpg", "Molly Corey", "http://epc.buffalo.edu/authors/place/");
	//	authors[17] = new Author("Marjorie Perloff", "http://epc.buffalo.edu/authors/400/perloff-ndbooks-400.jpg", "ndbooks.com", "http://epc.buffalo.edu/authors/perloff/");
	//	authors[1] = new Author("Robert Duncan", "http://epc.buffalo.edu/authors/400/Duncan_Patricia-Jordan_1960_01_400.jpg", "Patricia Jordan, 1960", "http://epc.buffalo.edu/authors/duncan/");
	//	authors[1] = new Author("Robert Duncan", "http://epc.buffalo.edu/authors/400/duncan-noah-saterstrom-400.jpg", "Noah Saterstrom", "http://epc.buffalo.edu/authors/duncan/");
	//	authors[5] = new Author("Susan Howe", "http://epc.buffalo.edu/authors/400/susan-howe-writing-upenn-400.jpg", "writing.upenn", "http://epc.buffalo.edu/authors/howe/");
	//	authors[4] = new Author("Robert Creeley", "http://epc.buffalo.edu/authors/400/creeley-elsa-dorfman-400.jpg", "Elsa Dorfman", "http://epc.buffalo.edu/authors/creeley/");
	//	authors[17] = new Author("Pierre Joris", "http://epc.buffalo.edu/authors/400/PJ-Antre-Deux-400.jpg", "&nbsp;", "http://epc.buffalo.edu/authors/joris/");

	authors[0] = new Author("Cecilia Vicu&ntilde;a", "http://writing.upenn.edu/epc/authors/400/cecilia-vicuna_James-O-Hern-400.jpg", "James O'Hern", "http://writing.upenn.edu/epc/authors/vicuna/");
	authors[1] = new Author("Robert Duncan", "http://writing.upenn.edu/epc/authors/400/duncan_chicago-review_400.jpg", "Gerrit Lansing", "http://writing.upenn.edu/epc/authors/duncan/");
	authors[2] = new Author("Gertrude Stein", "http://writing.upenn.edu/epc/authors/400/stein_observer-com_400.jpg", "observer.com", "http://writing.upenn.edu/epc/authors/stein/");
	authors[3] = new Author("Loss Peque&ntilde;o Glazier", "http://writing.upenn.edu/epc/authors/400/glazier-fol-400.jpg", "F. Oliva Le&oacute;n", "http://writing.upenn.edu/epc/authors/glazier/");
	authors[4] = new Author("Robert Creeley", "http://writing.upenn.edu/epc/authors/400/creeley_sharon-cantillon_1996_400.jpg", "Sharon Cantillon", "http://writing.upenn.edu/epc/authors/creeley/");
	authors[5] = new Author("Susan Howe", "http://writing.upenn.edu/epc/authors/400/howe-vebidoo-400.jpg", "vebidoo.de", "http://writing.upenn.edu/epc/authors/howe/");
	authors[6] = new Author("Charles Bernstein, EPC@20", "http://writing.upenn.edu/epc/authors/400/bernstein-epc20_Alex-Niman-01-400.jpg", "Alex Niman", "http://writing.upenn.edu/epc/authors/bernstein/");
	authors[7] = new Author("EPC@20", "http://writing.upenn.edu/epc/authors/400/epc-at-20-L-400.jpg", "epc@20", "http://writing.upenn.edu/epc/e-poetry/2014/EPC-at-20/");
	authors[8] = new Author("EPC@20", "http://writing.upenn.edu/epc/authors/400/epc-at-20-R-400.jpg", "epc@20", "http://writing.upenn.edu/epc/e-poetry/2014/EPC-at-20/");
	authors[9] = new Author("cris cheek", "http://writing.upenn.edu/epc/authors/400/cris-cheek-toy-400.jpg", "cris cheek", "http://writing.upenn.edu/epc/authors/cheek/");
	authors[10] = new Author("Robin Blaser", "http://writing.upenn.edu/epc/authors/400/robin-blaser-von-Tiedemann-400.jpg", "Joy von Tiedemann", "http://writing.upenn.edu/epc/authors/blaser/");
	authors[11] = new Author("John Cage", "http://writing.upenn.edu/epc/authors/400/cage_tucsonsentinel_400.jpg", "Tucson Sentinel", "http://writing.upenn.edu/epc/authors/cage/");
	authors[12] = new Author("St&eacute;phane Mallarm&eacute;", "http://writing.upenn.edu/epc/authors/400/mallarme-400.jpg", "Paris-Valvins", "http://www.writing.upenn.edu/library/Mallarme.html");

	authorDiv = document.getElementById("authorDiv");
	setInterval(function(){authorSlide();}, msForAuthor);
	authorSlide();
}

function authorSlide() {
	switch (authorSlideType) {
		case 0: //increment
			authorIndex++;
			if (authorIndex >= authors.length) {
				authorIndex = 0;
			}
			break;
		case 1: //random, no consecutive repeats possible
			var oldIndex = authorIndex;
			
			while (oldIndex === authorIndex) {
				authorIndex = Math.floor(Math.random()*authors.length);
			}
			break;
		case 2: //random, consecutive repeats possible
			authorIndex = Math.floor(Math.random()*authors.length);
			break;
	
	}
	var authorNameString = authors[authorIndex].name;
	if (authors[authorIndex].credit != "") {
		authorNameString += " (Photo: "+authors[authorIndex].credit+")";
	}
	var textOverlayDivString = "<div style='float: right; padding: 3px; background-color: #FFFFFF; color: black; opacity: 0.7; text-decoration:none; width: 400px; height: auto; display: block; position: absolute; text-align: center; bottom: 5px;'>"+authorNameString+"</div>";
	authorDiv.innerHTML="<div target='_blank' onclick='openAuthor()'><img alt='"+authorNameString+"' src='http://writing.upenn.edu/epc/&quot;+authors[authorIndex].image+&quot;'></div>"+textOverlayDivString;
}

function openAuthor() {

	window.open(""+authors[authorIndex].link);
}

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function Author(name, imgUrl, linksTo) {
	this.name = name;
	this.image = imgUrl;
	this.link = linksTo;
	this.credit = "";
}
function Author(name, imgUrl, c, linksTo) {
	this.name = name;
	this.image = imgUrl;
	this.link = linksTo;
	this.credit = c;
}

function initTwitter () {
	twitDiv = document.getElementById("twitterBox");
	selectFeed(1);
	if (autoScroll) {
		setInterval(function(){twitterScrolling();}, msForTwitterScroll);
	}
}

function selectFeed(f) {
	for (var i = 1; i < 7; i++) {
		if (i === f) {
			document.getElementById("tm"+i).style.opacity="1";
			document.getElementById("tf"+i).style.visibility="visible";
		} else {
			document.getElementById("tm"+i).style.opacity=".5";
			document.getElementById("tf"+i).style.visibility="hidden";
		}
	}
}

function twitterScrolling() {
	feedIndex++;
	if (feedIndex >= 7) {
		feedIndex = 1;
	}
	selectFeed(feedIndex);
}