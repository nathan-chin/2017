// JavaScript Document
var current = 0;
var old;
var notFirst = 0;
var ready = true;
var winHeight, scrolls, shiftHeight, titleHeight;
var aboutHeight, hobbiesHeight, projectsHeight, contactHeight;


$(document).ready(function(){
	aboutHeight = $('#about-title').offset().top + 24;
	hobbiesHeight = $('#hobbies-title').offset().top + 24;
	projectsHeight = $('#projects-title').offset().top + 24;
	contactHeight = $('#contact-title').offset().top + 24;
	var pages = document.getElementsByClassName("page");
	erasePages();
	showPage(current);
	$('#about-tab').css('background-color', '#393939');
	$('#about-tab').css('box-shadow', 'inset 0 0 2px #000000');
	
	/*$('#home-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 0){
				ready = false;
				updatePage(0);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});*/
	
	$('#about-tab').click(function(e){
		e.preventDefault();
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
	
	$('#hobbies-tab').click(function(e){
		e.preventDefault();
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
	
	$('#projects-tab').click(function(e){
		e.preventDefault();
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
	
	/*$('#contact-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 4){
				ready = false;
				updatePage(4);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
			}
		}
	});*/
});

window.addEventListener('resize', function(e){
	//$('#home-section').height($(window).height());
	/*winHeight = document.documentElement.clientHeight;
	scrolls = $(window).scrollTop();
	shiftHeight = $('.shift-container').height();
	erasePages();
	var temp = getPage(current);
	temp.css('left', 0);
	showPage(current);
	aboutHeight = $('.about-title').offset().top + 24;
	hobbiesHeight = $('.hobbies-title').offset().top + 24;
	projectsHeight = $('.projects-title').offset().top + 24;
	contactHeight = $('.contact-title').offset().top + 24;
	if($('.about-title').css('position') === 'fixed'){
		$('.about-title').css({
			position: 'relative',
			top: '0'
		});
		aboutHeight = $('.about-title').offset().top + 24;
		$('.about-title').css({
			position: 'fixed',
			top: '-24px',
			left: '0'
		});
	}
	if($('.hobbies-title').css('position') === 'fixed'){
		$('.about-title').css({
			position: 'relative',
			top: '0'
		});
		$('.hobbies-title').css({
			position: 'relative',
			top: '0'
		});
		hobbiesHeight = $('.hobbies-title').offset().top + 24;
		$('.hobbies-title').css({
			position: 'fixed',
			top: '-24px',
			left: '0'
		});
	}
	if($('.projects-title').css('position') === 'fixed'){
		$('.about-title').css({
			position: 'relative',
			top: '0'
		});
		$('.hobbies-title').css({
			position: 'relative',
			top: '0'
		});
		$('.projects-title').css({
			position: 'relative',
			top: '0'
		});
		projectsHeight = $('.projects-title').offset().top + 24;
		$('.projects-title').css({
			position: 'fixed',
			top: '-24px',
			left: '0'
		});
	}
	if($('.contacts-title').css('position') === 'fixed'){
		$('.about-title').css({
			position: 'relative',
			top: '0'
		});
		$('.hobbies-title').css({
			position: 'relative',
			top: '0'
		});
		$('.projects-title').css({
			position: 'relative',
			top: '0'
		});
		$('.contacts-title').css({
			position: 'relative',
			top: '0'
		});
		contactHeight = $('.contact-title').offset().top + 24;	
		$('.contact-title').css({
			position: 'fixed',
			top: '-24px',
			left: '0'
		});
	}
	if(Math.abs(scrolls - aboutHeight) < 50 || Math.abs(scrolls - hobbiesHeight) < 50 || Math.abs(scrolls - projectsHeight) < 50 || Math.abs(scrolls - contactHeight) < 50){
		console.log("About" + Math.abs(scrolls - aboutHeight));
		console.log("Hobbies" + Math.abs(scrolls - hobbiesHeight));
		console.log("Projects" + Math.abs(scrolls - projectsHeight));
		console.log("Contact" + Math.abs(scrolls - contactHeight));
		//alert('Refresh');
		location.reload();
	}
	//aboutHeight = $('.about-title').offset().top + 24;
	//hobbiesHeight = $('.hobbies-title').offset().top + 24;
	//projectsHeight = $('.projects-title').offset().top + 24;
	//contactHeight = $('.contact-title').offset().top + 24;
	titleHeight = $('.title').height();
	console.log("Resize scrolls is " + scrolls);
	console.log("Position about is " + $('.about-title').css('position'));
	console.log("Resize aboutH is " + aboutHeight);
	console.log("Position hobbies is " + $('.hobbies-title').css('position'));
	console.log("Resize hobbiesH is " + hobbiesHeight);
	console.log("Resize paddingTop is " + titleHeight);*/
	location.reload();
});

var onlyOnce = true;
$(window).scroll(function(){
	/*console.log("Scroll scrolls is " + scrolls);
	console.log("Scroll aboutH is " + aboutHeight);
	console.log("Scroll hobbiesH is " + hobbiesHeight);
	console.log("Resize paddingTop is " + titleHeight);
	console.log("Position about is " + $('#about-title').css('position'));
	console.log("Position hobbies is " + $('#hobbies-title').css('position'));
	console.log("Position projects is " + $('#projects-title').css('position'));
	console.log("Position contact is " + $('#contact-title').css('position'));*/
	winHeight = document.documentElement.clientHeight;
	scrolls = $(window).scrollTop();
	shiftHeight = $('.shift-container').height();
	titleHeight = $('.title').outerHeight();
	if(scrolls < aboutHeight){
		//alert('1');
		$('#about-title').removeClass('snap');
		$('#hobbies-title').removeClass('snap');
		$('#projects-title').removeClass('snap');
		$('#contact-title').removeClass('snap');
		$('.no-intro-container').css('padding-top', '0');
	}
	else if(scrolls >= aboutHeight && scrolls < hobbiesHeight){
		//alert('2');
		$('#hobbies-title').removeClass('snap');
		$('#projects-title').removeClass('snap');
		$('#contact-title').removeClass('snap');
		$('#about-title').addClass('snap');
		$('.no-intro-container').css('padding-top', titleHeight);
	}
	else if(scrolls >= hobbiesHeight && scrolls < projectsHeight){
		//alert('3');
		$('#about-title').removeClass('snap');
		$('#projects-title').removeClass('snap');
		$('#contact-title').removeClass('snap');
		$('#hobbies-title').addClass('snap');
		$('.no-intro-container').css('padding-top', titleHeight);
	}
	else if(scrolls >= projectsHeight && scrolls < contactHeight){
		//alert('4');
		$('#about-title').removeClass('snap');
		$('#hobbies-title').removeClass('snap');
		$('#contact-title').removeClass('snap');
		$('#projects-title').addClass('snap');
		$('.no-intro-container').css('padding-top', titleHeight);
	}
	else if(scrolls >= contactHeight){
		//alert('5');
		$('#hobbies-title').removeClass('snap');
		$('#projects-title').removeClass('snap');
		$('#about-title').removeClass('snap');
		$('#contact-title').addClass('snap');
		$('.no-intro-container').css('padding-top', titleHeight);
	}
	if(hobbiesHeight - scrolls < 50){
		$('#about-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	else if(scrolls < hobbiesHeight && scrolls > aboutHeight){
		$('#about-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
	}
	else{
		$('#about-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	if(projectsHeight - scrolls < 50){
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	else if(scrolls < projectsHeight && scrolls > hobbiesHeight){
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
	}
	else{
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	if(contactHeight - scrolls < 50){
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	else if(scrolls < contactHeight && scrolls > projectsHeight){
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
	}
	else{
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	/*if(scrolls > winHeight){
		$('.shift-container').css('position', 'fixed');
		$('.shift-container').css('width', '100%');
		$('#no-intro-container').css('padding-top', shiftHeight);
	}
	else{
		$('.shift-container').css('position', 'relative');
		$('.shift-container').css('width', 'auto');
		$('#no-intro-container').css('padding-top', '0');
	}*/
	/*if(scrolls > winHeight){
		if(onlyOnce){
			window.scrollTo(0,0);
		}
		onlyOnce = false;
		$('#intro-container').css('display', 'none');		
	}*/
	/*$('.world-container').css('bottom', (scrolls * -0.2) - 300);
	$('.intro-text').css('bottom', scrolls * 0.6);
	$('.stars').css('bottom', scrolls * -0.2);
});*/
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
};

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
	//var home = $('#home');
	var about_me = $('#about-me');
	var hobbies = $('#hobbies');
	var projects = $('#projects');
	//var contact = $('#contact');
	switch(num){
		case 0:
			return about_me;
		case 1:
			return hobbies;
		case 2:
			return projects;
	}
};

var shiftLeft = function(newTab){

	erasePages();
	
	var tempCur = getPage(current);
	var tempNew = getPage(newTab);
	
	var width = $(window).width() + 4;
	var height = $(window).outerHeight(true);
	tempCur.css('left', 0);
	tempNew.css('left', 0);
	showPage(current);
	//var widthCur = tempCur.width() + parseInt(tempCur.css('margin-left'));
	//var widthNew = tempNew.width() + parseInt(tempCur.css('margin-right')) + parseInt(tempNew.css('margin-left'));
	var scrollDist = $(document).scrollTop();
	if(scrollDist !== 0){
		//$('html, body').animate({scrollTop: 0}, 600, function(){
			$('.page').animate({left: -width}, 700, function(){
				tempCur.find('.body-container').addClass('shrink');
				ready = true;
			});
			//$(tempCur).animate({left: -width}, {duration: 700, queue: false});
			//$(tempNew).animate({left: -width}, {duration: 700, queue: false});
		//});
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
	
	var width = $(window).width() + 4;
	var height = $(window).outerHeight(true);
	//$(tempNew).insertBefore(tempCur);
	tempCur.css('left', -width);
	tempNew.css('left', -width);
	showPage(current);
	//var widthCur = tempCur.width() + parseInt(tempCur.css('margin-right'));
	//var widthNew = tempNew.width() + parseInt(tempCur.css('margin-left')) + parseInt(tempNew.css('margin-right'));
	var scrollDist = $(document).scrollTop();
	if(scrollDist !== 0){
		//$('html, body').animate({scrollTop: 0}, 600, function(){
			$('.page').animate({left: 0}, 700, function(){
				tempCur.find('.body-container').addClass('shrink');
				ready = true;
			});
			//$(tempNew).animate({left: 0}, {duration: 700, queue: false});
		//});
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
	//$('#home-tab').css('background-color', 'inherit');
	//$('#home-tab').css('box-shadow', 'none');
	$('#about-tab').css('background-color', 'inherit');
	$('#about-tab').css('box-shadow', 'none');
	$('#hobbies-tab').css('background-color', 'inherit');
	$('#hobbies-tab').css('box-shadow', 'none');
	$('#projects-tab').css('background-color', 'inherit');
	$('#projects-tab').css('box-shadow', 'none');
	//$('#contact-tab').css('background-color', 'inherit');
	//$('#contact-tab').css('box-shadow', 'none');
};



