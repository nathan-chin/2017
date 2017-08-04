// JavaScript Document
var current = 0;
var old;
var notFirst = 0;
var ready = true;
var winHeight, scrolls, shiftHeight, titleHeight;
var aboutHeight, hobbiesHeight, projectsHeight, contactHeight;

$(document).ready(function(){
	/*var wHeight = $(window).height();
	var wWidth = $(window).width();
	$('#home-section').css('height', wHeight);
	$('#home-section').css('width', wWidth);*/
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
			$('#nav-container').hide();
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
			$('#nav-container').hide();
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
			$('#nav-container').hide();
		}
	});
	
	$('.nav-button').click(function(){
		if($('#open-nav').css('width') === '0px'){
			$('#open-nav').css('width', '280px');
		}
		else{
			$('#open-nav').css('width', '0px');
		}
	});
	
	$('.info-button').click(function(){
		if($('#open-info').css('width') === '0px'){
			$('#open-info').css('width', '280px');
		}
		else{
			$('#open-info').css('width', '0px');
		}
	});
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		setInterval(function(){
			if($('#about-title')[0].getBoundingClientRect().top === -24){
				$('#about-title').css('transition', 'box-shadow 0.2s ease-in-out');
				$('#about-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,.3)');
			}
			else
				$('#about-title').css('box-shadow', 'none');
		}, 100);
		$('.nav-menu-item').click(function(){
			clearSelectMenu();
			$(this).css('background-color', '#4A4E50');
			$(this).css('color', '#FAFAFA');
		});
	}
	else{
		$('.nav-menu-item').click(function(e){
		var temp = $(e.target).attr('href');
		$('html, body').animate({scrollTop: $(temp).offset().top + 'px'}, 1000);
		$('html').scrollTop($(temp).offset().top + 'px');
		e.preventDefault();
		clearSelectMenu();
		$(this).css('background-color', '#4A4E50');
	});
	}
	
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
	var timeHandle;
	var popFade = function(){
		$('#nav-container').fadeOut(500);
	};
	
	$('.menu-button').click(function(){
		if($('#nav-container').css('display') === 'none'){
			$('#nav-container').css('display', 'block');
		}
		else{
			$('#nav-container').css('display', 'none');
		}
		//$('#nav-container').toggle();
		timeHandle = setTimeout(popFade, 4000);
	});
	
	$('#nav-container').mouseenter(function(){
		clearTimeout(timeHandle);
	});
	
	$('#nav-container').mouseleave(function(){
		timeHandle = setTimeout(popFade, 4000);
	});
	
	$(".logo").click(function(){
		alert($('#about-title')[0].getBoundingClientRect().top);
		//$('html, body').animate({scrollTop: '300px'}, 2000);
	});
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
	stickTitles($('.section-title').css('position'));
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

var stickTitles = function(position){
	var insert = 'snapF'
	if(position === 'sticky'){
		insert = 'snapS';
	}
	if(scrolls < aboutHeight){
		$('#about-title').removeClass(insert);
		$('#hobbies-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', '0');
		}
	}
	else if(scrolls >= aboutHeight && scrolls < hobbiesHeight){
		$('#hobbies-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		$('#about-title').addClass(insert);
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	else if(scrolls >= hobbiesHeight && scrolls < projectsHeight){
		$('#about-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		$('#hobbies-title').addClass(insert);
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	else if(scrolls >= projectsHeight && scrolls < contactHeight){
		$('#about-title').removeClass(insert);
		$('#hobbies-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		$('#projects-title').addClass(insert);
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	else if(scrolls >= contactHeight){
		$('#hobbies-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#about-title').removeClass(insert);
		$('#contact-title').addClass(insert);
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	if(hobbiesHeight - scrolls < 10){
		$('#about-title').css('box-shadow', 'none');
		//$('#about-title').css('background-color', 'limegreen'); //Change to color of hobbies section
	}
	else if(scrolls < hobbiesHeight && scrolls > aboutHeight){
		$('#about-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
		//$('#about-title').css('background-color', 'orange'); //Change to color of about section
	}
	else{
		$('#about-title').css('box-shadow', 'none');
		//$('#about-title').css('background-color', 'orange'); //Change to color of about section
	}
	if(projectsHeight - scrolls < 10){
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	else if(scrolls < projectsHeight && scrolls > hobbiesHeight){
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
	}
	else{
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	if(contactHeight - scrolls < 10){
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
	else if(scrolls < contactHeight && scrolls > projectsHeight){
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
	}
	else{
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
	}
};

var clearSelectMenu = function(){
	$('.nav-menu-item').css('background-color', '#262829');
};



