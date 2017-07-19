// JavaScript Document
var current = 0;

$(document).ready(function(){
	var pages = document.getElementsByClassName("page");
	erasePages();
	showPage(current);
});

var winHeight = $(window).height();
var onlyOnce = true;
$(window).scroll(function(){
	var scrolls = $(window).scrollTop();
	if(scrolls > winHeight){
		if(onlyOnce){
			window.scrollTo(0,0);
		}
		onlyOnce = false;
		$('#intro-container').css('display', 'none');		
	}
});

var updatePage = function(newTab){
	erasePages();
	if((current !== newTab) && (current < newTab)){
		shiftLeft(current, newTab);
	}
	else if((current !== newTab) && (current > newTab)){
		shiftRight(current, newTab);
	}
	else{
		showPage(current);
		alert("Wrong");
	}
};

var erasePages = function(){
	var pages = document.getElementsByClassName("page");
	for(var i = 0; i < pages.length; i++){
		pages[i].style.display = "none";
	}
}

var erasePage = function(tab){
	var pages = document.getElementsByClassName("page");
	pages[tab].style.display = "none";
};

var showPage = function(tab){
	var pages = document.getElementsByClassName("page");
	pages[tab].style.display = "inline-block";
};

var getCurPage = function(){
	var pages = document.getElementsByClassName("page");
	for(var i = 0; i < pages.length; i++){
		if(pages[i].style.display === "inline-block"){
			return i;
		}
	}
};

var getPage = function(num){
	var home = $('#home');
	var about_me = $('#about-me');
	var hobbies = $('#hobbies');
	var projects = $('#projects');
	var contact = $('#contact');
	switch(num){
		case 0:
			return home;
		case 1:
			return about_me;
		case 2:
			return hobbies;
		case 3:
			return projects;
		case 4:
			return contact;
	}
};

var shiftLeft = function(curTab, newTab){
	var tempCur = getPage(current);
	var tempNew = getPage(newTab);
	
	showPage(current);
	showPage(newTab);
	
	var width = $(window).width();
	//var widthCur = tempCur.width() + parseInt(tempCur.css('margin-left'));
	//var widthNew = tempNew.width() + parseInt(tempCur.css('margin-right')) + parseInt(tempNew.css('margin-left'));
	$(tempCur).animate({left: -width}, {duration: 5000, queue: false});
	$(tempNew).animate({left: -width}, {duration: 5000, queue: false});
	
	$(tempNew).promise().done(function(){
		erasePages();
		current = newTab;
		tempNew.css('left', '0');
		showPage(newTab);
	});
};

var shiftRight = function(curTab, newTab){
	var tempCur = getPage(current);
	var tempNew = getPage(newTab);
	
	var width = $(window).width();
	$(tempNew).insertBefore(tempCur);
	tempCur.css('left', -width);
	showPage(current);
	//var widthCur = tempCur.width() + parseInt(tempCur.css('margin-right'));
	//var widthNew = tempNew.width() + parseInt(tempCur.css('margin-left')) + parseInt(tempNew.css('margin-right'));
	$(tempCur).animate({left: 0}, {duration: 5000, queue: false});
	$(tempNew).animate({left: 0}, {duration: 5000, queue: false});
	showPage(newTab);
	current = newTab;
};

