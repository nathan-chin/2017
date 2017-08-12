// JavaScript Document

//Global variables
var current = 0;
var old;
var notFirst = 0;
var ready = true;
var winHeight, scrolls, shiftHeight, titleHeight;
var aboutHeight, hobbiesHeight, projectsHeight, contactHeight;
var scrollDist = 0;
var maxScroll, numScroll;
var normWidth, scrollbarWidth;

//Perform as soon as the website has loaded
$(document).ready(function(){
	/*var wHeight = $(window).height();
	var wWidth = $(window).width();
	$('#home-section').css('height', wHeight);
	$('#home-section').css('width', wWidth);*/
	$('.tools-container').scrollLeft(9999);
	maxScroll = $('.tools-container').scrollLeft();
	numScroll = Math.round(maxScroll / $('.tools-container').width() + 1);
	$('.tools-container').scrollLeft(0);
	$('#start-nav').css('background-color', '#4A4E50');
	aboutHeight = $('#about-title').offset().top + 24;
	hobbiesHeight = $('#hobbies-title').offset().top + 24;
	projectsHeight = $('#projects-title').offset().top + 24;
	contactHeight = $('#contact-title').offset().top + 24;
	var pages = document.getElementsByClassName("page");
	$('.page-totals').text("| " + pages.length);
	erasePages();
	showPage(current);
	$('#project-1-tab').css('background-color', '#393939');
	$('#project-1-tab').css('box-shadow', 'inset 0 0 2px #000000');
	
	/* Uncomment to hide the horizontal scrollbar in the tools container*/
	if($('.section-title').css('position') !== 'sticky'){
		$('.tools-container').css('paddingBottom', '17px');
	}
	
	
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
	
	//Perform when the #about-tab is clicked
	
	$('#project-1-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 0){
				ready = false;
				updatePage(0);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
				$('.page-number').text(1);
				$('.tools-container').animate({scrollLeft: '0px'}, 700);
				scrollDist = 0;
			}
			$('#nav-container').hide();
		}
	});
	
	$('#project-2-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 1){
				ready = false;
				updatePage(1);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
				$('.page-number').text(2);
				$('.tools-container').animate({scrollLeft: '0px'}, 700);
				scrollDist = 0;
			}
			$('#nav-container').hide();
		}
	});
	
	$('#project-3-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 2){
				ready = false;
				updatePage(2);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
				$('.page-number').text(3);
				$('.tools-container').animate({scrollLeft: '0px'}, 700);
				scrollDist = 0;
			}
			$('#nav-container').hide();
		}
	});
	
	$('#project-4-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 3){
				ready = false;
				updatePage(3);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
				$('.page-number').text(4);
				$('.tools-container').animate({scrollLeft: '0px'}, 700);
				scrollDist = 0;
			}
			$('#nav-container').hide();
		}
	});
	
	$('#project-5-tab').click(function(e){
		e.preventDefault();
		if(ready){
			if(current !== 4){
				ready = false;
				updatePage(4);
				deselectTabs();
				$(this).css('background-color', '#393939');
				$(this).css('box-shadow', 'inset 0 0 2px #000000');
				$('.page-number').text(5);
				$('.tools-container').animate({scrollLeft: '0px'}, 700);
				scrollDist = 0;
			}
			$('#nav-container').hide();
		}
	});
	
	normWidth = window.innerWidth;
	scrollbarWidth = normWidth - $('body').width();
	
	$('#button-details-1').click(function(){
		if($('#details-1').css('display') === 'none'){
			$('#details-1').css('display', 'block');
			detailSelect();
		}
	});
	
	$('#button-details-2').click(function(){
		if($('#details-2').css('display') === 'none'){
			$('#details-2').css('display', 'block');
			detailSelect();
		}
	});
	
	$('#button-details-3').click(function(){
		if($('#details-3').css('display') === 'none'){
			$('#details-3').css('display', 'block');
			detailSelect();
		}
	});
	
	$('#button-details-4').click(function(){
		if($('#details-4').css('display') === 'none'){
			$('#details-4').css('display', 'block');
			detailSelect();
		}
	});
	
	$('#button-details-5').click(function(){
		if($('#details-5').css('display') === 'none'){
			$('#details-5').css('display', 'block');
			detailSelect();
		}
	});
	
	$('.details-overlay').click(function(){
		//if($('.details-overlay').css('display') === 'block'){
			$('.details-overlay').css('display', 'none');
			$('body').css('overflow', 'auto');
			$('.info-button').css('right', '30px');
			$('.logo').css('right', 0);
		//}
	});
	
	$('.right-arrow').mousedown(function(){
		var increment = maxScroll / numScroll;
		if(scrollDist + increment <= (maxScroll + 1)){
		scrollDist += increment;
		}
		else{
			scrollDist = maxScroll;
		}
		$('.tools-container').animate({scrollLeft: scrollDist + 'px'}, 400);
		//$('.tools-container').scrollLeft(scrollDist);	
	});
	
	$('.right-arrow').hover(function(){
		if($('.right').css('opacity') === '0.4'){
			$('.right').css('opacity', '0.7');
		}
		else{
			$('.right').css('opacity', '0.4');
		}
	});
	
	$('.left-arrow').mousedown(function(){
		var increment = maxScroll / numScroll;
		if(scrollDist - increment >= -1){
			scrollDist -= increment;
		}
		else{
			scrollDist = 0;
		}
		$('.tools-container').animate({scrollLeft: scrollDist + 'px'}, 400);
		//$('.tools-container').scrollLeft(scrollDist);	
	});
	
	$('.left-arrow').hover(function(){
		if($('.left').css('opacity') === '0.4'){
			$('.left').css('opacity', '0.7');
		}
		else{
			$('.left').css('opacity', '0.4');
		}
	});
	
	$('.nav-button').click(function(){
		if($('#open-nav').css('left') === '-280px'){
			$('#black-nav').fadeOut();
			$('#white-nav').fadeIn();
			$('#open-nav').css('left', '0px');
		}
		else{
			$('#black-nav').fadeIn();
			$('#white-nav').fadeOut();
			$('#open-nav').css('left', '-280px');
		}
	});
	
	$('.info-button').click(function(){
		if($('#open-info').css('right') === '-280px'){
			$('#open-info').css('right', '0px');
			$('#black-info').fadeOut();
			$('#white-info').fadeIn();
		}
		else{
			$('#open-info').css('right', '-280px');
			$('#black-info').fadeIn();
			$('#white-info').fadeOut();
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
			setTimeout(function(){
				$('#open-nav').css('left', '-280px');
				$('#black-nav').fadeIn();
				$('#white-nav').fadeOut();
			}, 200);
		});
		/* Uncomment to hide the horizontal scrollbar in the tools container */
		$('.tools-container').css('paddingBottom', '0');
		$('.tools-container').css('paddingTop', '0');
		
	}
	else{
		$('.nav-menu-item').click(function(e){
			var link = $(e.target).attr('href');
			$('html, body').animate({scrollTop: $(link).offset().top + 'px'}, 1000);
			$('html').scrollTop($(link).offset().top + 'px');
			e.preventDefault();
			//clearSelectMenu();
			//$(this).css('background-color', '#4A4E50');
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
	var timeHandleMenu;
	var popFade = function(){
		$('#nav-container').fadeOut(500);
	};
	
	$('.menu-button').click(function(){
		clearTimeout(timeHandleMenu);
		if($('#nav-container').css('display') === 'none'){
			$('#nav-container').css('display', 'block');
		}
		else{
			$('#nav-container').css('display', 'none');
		}
		//$('#nav-container').toggle();
		timeHandleMenu = setTimeout(popFade, 4000);
	});
	
	$('#nav-container').mouseenter(function(){
		clearTimeout(timeHandleMenu);
	});
	
	$('#nav-container').mouseleave(function(){
		timeHandleMenu = setTimeout(popFade, 4000);
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
	//var about_me = $('#about-me');
	//var hobbies = $('#hobbies');
	//var projects = $('#projects');
	//var contact = $('#contact');
	var project1 = $('#project-1');
	var project2 = $('#project-2');
	var project3 = $('#project-3');
	var project4 = $('#project-4');
	var project5 = $('#project-5');
	switch(num){
		case 0:
			return project1;
		case 1:
			return project2;
		case 2:
			return project3;
		case 3:
			return project4;
		case 4:
			return project5;
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
	$('#project-1-tab').css('background-color', 'inherit');
	$('#project-1-tab').css('box-shadow', 'none');
	$('#project-2-tab').css('background-color', 'inherit');
	$('#project-2-tab').css('box-shadow', 'none');
	$('#project-3-tab').css('background-color', 'inherit');
	$('#project-3-tab').css('box-shadow', 'none');
	$('#project-4-tab').css('background-color', 'inherit');
	$('#project-4-tab').css('box-shadow', 'none');
	$('#project-5-tab').css('background-color', 'inherit');
	$('#project-5-tab').css('box-shadow', 'none');
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
		clearSelectMenu();
		$('#start-nav').css('background-color', '#4A4E50');
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', '0');
		}
	}
	else if(scrolls >= aboutHeight && scrolls < hobbiesHeight){
		$('#hobbies-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		$('#about-title').addClass(insert);
		clearSelectMenu();
		$('#about-nav').css('background-color', '#4A4E50');
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	else if(scrolls >= hobbiesHeight && scrolls < projectsHeight){
		$('#about-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		$('#hobbies-title').addClass(insert);
		clearSelectMenu();
		$('#hobbies-nav').css('background-color', '#4A4E50');
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	else if(scrolls >= projectsHeight && scrolls < contactHeight){
		$('#about-title').removeClass(insert);
		$('#hobbies-title').removeClass(insert);
		$('#contact-title').removeClass(insert);
		$('#projects-title').addClass(insert);
		clearSelectMenu();
		$('#projects-nav').css('background-color', '#4A4E50');
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	else if(scrolls >= contactHeight){
		$('#hobbies-title').removeClass(insert);
		$('#projects-title').removeClass(insert);
		$('#about-title').removeClass(insert);
		$('#contact-title').addClass(insert);
		clearSelectMenu();
		$('#contacts-nav').css('background-color', '#4A4E50');
		if(insert === 'snapF'){
			$('.no-intro-container').css('padding-top', titleHeight);
		}
	}
	if(hobbiesHeight - scrolls < 10){
		$('#about-title').css('box-shadow', 'none');
		$('#about-title').css('background-color', '#E33539'); //Change to color of hobbies section
	}
	else if(scrolls < hobbiesHeight && scrolls > aboutHeight){
		$('#about-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
		$('#about-title').css('background-color', '#EEEEEE'); //Change to color of about section
	}
	else{
		$('#about-title').css('box-shadow', 'none');
		$('#about-title').css('background-color', '#EEEEEE'); //Change to color of about section
	}
	if(projectsHeight - scrolls < 10){
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
		$('#hobbies-title').css('background-color', '#EEEEEE');
	}
	else if(scrolls < projectsHeight && scrolls > hobbiesHeight){
		$('#hobbies-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
		$('#hobbies-title').css('background-color', '#E33539');
	}
	else{
		$('#hobbies-title').css('box-shadow', 'none');
		$('#hobbies-title').css('background-color', '#E33539');
	}
	if(contactHeight - scrolls < 10){
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0)');
		$('#projects-title').css('background-color', '#F6D14B');
	}
	else if(scrolls < contactHeight && scrolls > projectsHeight){
		$('#projects-title').css('box-shadow', '0 0.125rem 0.3125rem rgba(0,0,0,0.3)');
		$('#projects-title').css('background-color', '#EEEEEE');
	}
	else{
		$('#projects-title').css('box-shadow', 'none');
		$('#projects-title').css('background-color', '#EEEEEE');
	}
};

var clearSelectMenu = function(){
	$('.nav-menu-item').css('background-color', 'transparent');
};

var detailSelect = function(){
	$('body').css('overflow', 'hidden');
	$('.info-button').css('right', scrollbarWidth + 30 + 'px');
	$('.logo').css('right', scrollbarWidth + 'px');
	if($('#open-info').css('right') === '0px'){
		$('#open-info').css('right', '-280px');
		$('#black-info').fadeIn();
		$('#white-info').fadeOut();
	}
	if($('#open-nav').css('left') === '0px'){
		$('#black-nav').fadeIn();
		$('#white-nav').fadeOut();
		$('#open-nav').css('left', '-280px');
	}
};

