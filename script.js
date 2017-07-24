// JavaScript Document
var current = 0;
var old;
var notFirst = 0;
var ready = true;

$(document).ready(function(){
	var pages = document.getElementsByClassName("page");
	erasePages();
	showPage(current);
	$('#home-tab').css('background-color', '#393939');
	$('#home-tab').css('box-shadow', 'inset 0 0 2px #000000');
	
	$('#home-tab').click(function(){
		if(ready){
			if(current !== 0){
				ready = false;
				updatePage(0);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});
	
	$('#about-tab').click(function(){
		if(ready){
			if(current !== 1){
				ready = false;
				updatePage(1);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});
	
	$('#hobbies-tab').click(function(){
		if(ready){
			if(current !== 2){
				ready = false;
				updatePage(2);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});
	
	$('#projects-tab').click(function(){
		if(ready){
			if(current !== 3){
				ready = false;
				updatePage(3);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});
	
	$('#contact-tab').click(function(){
		if(ready){
			if(current !== 4){
				ready = false;
				updatePage(4);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});
});

var winHeight = $(window).height();
var onlyOnce = true;
$(window).scroll(function(){
	var scrolls = $(window).scrollTop();
	if(scrolls > winHeight * 2){
		if(onlyOnce){
			window.scrollTo(0,0);
		}
		onlyOnce = false;
		$('#intro-container').css('display', 'none');		
	}
	/*$('.world-container').css('bottom', (scrolls * -0.2) - 300);
	$('.intro-text').css('bottom', scrolls * 0.6);*/
	$('.stars').css('bottom', scrolls * -0.2);
});

var updatePage = function(newTab){
	if(notFirst >= 1){
		getPage(old).find('.body-container').removeClass('shrink');
		if((current !== newTab) && (current < newTab)){
			shiftLeft(newTab);
			//alert("Left");
		}
		else{
			shiftRight(newTab);
			//("Right");
		}
	}
	else{
		notFirst++;
		if((current !== newTab) && (current < newTab)){
			shiftLeft(newTab);
			//alert("Left");
		}
		else{
			shiftRight(newTab);
			//("Right");
		}
	}
};

var erasePages = function(){
	var special = current;
	var pages = document.getElementsByClassName("page");
	for(var i = 0; i < pages.length; i++){
		if(i !== special){
			pages[i].style.display = "none";
		}
	}
}

/*
var erasePage = function(tab){
	var pages = document.getElementsByClassName("page");
	pages[tab].style.display = "none";
};*/

var showPage = function(tab){
	var pages = document.getElementsByClassName("page");
	pages[tab].style.display = "inline-block";
};

/*
var getCurPage = function(){
	var pages = document.getElementsByClassName("page");
	for(var i = 0; i < pages.length; i++){
		if(pages[i].style.display === "inline-block"){
			return i;
		}
	}
};*/

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

var shiftLeft = function(newTab){

	erasePages();
	
	var tempCur = getPage(current);
	var tempNew = getPage(newTab);
	
	var width = $(window).width();
	tempCur.css('left', 0);
	tempNew.css('left', 0);
	showPage(current);
	//var widthCur = tempCur.width() + parseInt(tempCur.css('margin-left'));
	//var widthNew = tempNew.width() + parseInt(tempCur.css('margin-right')) + parseInt(tempNew.css('margin-left'));
	var scrollDist = $(document).scrollTop();
	if(scrollDist !== 0){
		$('html, body').animate({scrollTop: 0}, 600, function(){
			$('.page').animate({left: -width}, 700, function(){
				tempCur.find('.body-container').addClass('shrink');
				ready = true;
			});
			//$(tempCur).animate({left: -width}, {duration: 700, queue: false});
			//$(tempNew).animate({left: -width}, {duration: 700, queue: false});
		});
	}
	else{
		$('.page').animate({left: -width}, 700, function(){
			tempCur.find('.body-container').addClass('shrink');
			ready = true;
		});
		//$(tempNew).animate({left: -width}, {duration: 700, queue: false});
	}
	
	//tempNew.css('left', -width);
	
	
	/*$(tempNew).promise().done(function(){
		erasePages();
		current = newTab;
		tempNew.css('left', '0');
		showPage(newTab);
	});*/
	old = current;
	current = newTab;
	showPage(current);	
};

var shiftRight = function(newTab){
	erasePages();
	
	var tempCur = getPage(current);
	var tempNew = getPage(newTab);
	
	var width = $(window).width();
	//$(tempNew).insertBefore(tempCur);
	tempCur.css('left', -width);
	tempNew.css('left', -width);
	showPage(current);
	//var widthCur = tempCur.width() + parseInt(tempCur.css('margin-right'));
	//var widthNew = tempNew.width() + parseInt(tempCur.css('margin-left')) + parseInt(tempNew.css('margin-right'));
	var scrollDist = $(document).scrollTop();
	if(scrollDist !== 0){
		$('html, body').animate({scrollTop: 0}, 600, function(){
			$('.page').animate({left: 0}, 700, function(){
				tempCur.find('.body-container').addClass('shrink');
				ready = true;
			});
			//$(tempNew).animate({left: 0}, {duration: 700, queue: false});
		});
	}
	else{
		$('.page').animate({left: 0}, 700, function(){
			tempCur.find('.body-container').addClass('shrink');
			ready = true;
		});
		//$(tempNew).animate({left: 0}, {duration: 700, queue: false});
	}
	
	old = current;
	current = newTab;
	showPage(current);
};

var deselectTabs = function(){
	$('#home-tab').css('background-color', 'inherit');
	$('#home-tab').css('box-shadow', 'none');
	$('#about-tab').css('background-color', 'inherit');
	$('#about-tab').css('box-shadow', 'none');
	$('#hobbies-tab').css('background-color', 'inherit');
	$('#hobbies-tab').css('box-shadow', 'none');
	$('#projects-tab').css('background-color', 'inherit');
	$('#projects-tab').css('box-shadow', 'none');
	$('#contact-tab').css('background-color', 'inherit');
	$('#contact-tab').css('box-shadow', 'none');
};



