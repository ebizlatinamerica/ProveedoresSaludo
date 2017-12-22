/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
TweenLite.set("#container",{perspective:250})
//TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 300;

var warp = document.getElementById("container"),
		w = window.innerWidth,
		h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);
 }

	
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
	 TweenMax.to(elm,R(2,8),{opacity: .2,repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};


// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW

// Romain

var lightW = $('.light').width() / 2;

$( document ).on( "mousemove", function(e) {

	var pos = {x: e.pageX, y: e.pageY};
	
	var pushSnowXVal = ((pos.x - (window.innerWidth / 2)) / 25) * -1;
	var pushSnowYVal = ((pos.y - (window.innerHeight / 2)) / 25) * -1;
	
	//TweenMax.to($('#container'), 0, {x: pushSnowXVal, y:pushSnowYVal});
	TweenMax.to($('.light'), 0, {left: pos.x - lightW, top: pos.y - lightW});
	
});

var wish1 = $('.tree__xmas-txt--1'),
		wish2 = $('.tree__xmas-txt--2'),
		wish3 = $('.tree__xmas-txt--3'),
		wish4 = $('.tree__xmas-txt--4');


var animBg = new TimelineMax({paused: true, repeat:-1});
var animWord = new TimelineMax({paused: true, repeat:-1});
var sec = 2;

animBg.to($('body'), .75, {backgroundColor:"#6FC776", ease:Power3.easeOut}, sec)
				.to($('body'), .75, {backgroundColor:"#6F94C7", ease:Power3.easeOut}, '+=' + sec + '')
				.to($('body'), .75, {backgroundColor:"#1A1A1A", ease:Power3.easeOut}, '+=' + sec + '')
				.to($('body'), .75, {backgroundColor:"#BE3D3D", ease:Power3.easeOut}, '+=' + sec + '');

animWord.to(wish1, .75, {rotationY: 90, autoAlpha: 0, ease: Elastic.easeOut.config(1, 1)}, sec)
				.set(wish1, {rotationY: -90, autoAlpha: 0, ease: Elastic.easeOut.config(1, 1)})
				.to(wish2, .75, {rotationY: 0, autoAlpha: 1, ease: Elastic.easeOut.config(1, 1)}, '-=0.75')
				.to(wish2, .75, {rotationY: 90, autoAlpha: 0, ease: Elastic.easeOut.config(1, 1)}, '+=' + sec + '')
				.to(wish3, .75, {rotationY: 0, autoAlpha: 1, ease: Elastic.easeOut.config(1, 1)}, '-=0.75')
				.to(wish3, .75, {rotationY: 90, autoAlpha: 0, ease: Elastic.easeOut.config(1, 1)}, '+=' + sec + '')
				.to(wish4, .75, {rotationY: 0, autoAlpha: 1, ease: Elastic.easeOut.config(1, 1)}, '-=0.75')
				.to(wish4, .75, {rotationY: 90, autoAlpha: 0, ease: Elastic.easeOut.config(1, 1)}, '+=' + sec + '')
				.to(wish1, .75, {rotationY: 0, autoAlpha: 1, ease: Elastic.easeOut.config(1, 1)}, '-=0.75');



animBg.play();
animWord.play();

TweenMax.staggerTo($('.footer--text span'), 0.5, {opacity:1, rotationX: 0, scale:1, y:0, ease: Elastic.easeOut.config(1, 0.75), delay: sec}, 0.1);