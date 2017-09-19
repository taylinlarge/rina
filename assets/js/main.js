// loading screen

function loadPage(){
	var tl = new TimelineMax();

	tl.to('.loading-screen-white', 2, {width: "100vw"});
	tl.to('.loading-screen-title', 0.5, {color: "#01293D"}, "-=1.6");
	tl.to('.loading-container', 1.5, {top: "-100%"});
	tl.to('.loading-container', 1, {opacity: "0"}, "-=1.5");
	tl.to('.loading-container', 1, {display: 'none'});
	tl.to('.content-wrapper', 1, {display: "block"}, "-=1");
	tl.to('.content-wrapper', 0.5, {opacity: 1}, "-=0.8");
}

setTimeout(loadPage, 2000);

// video
 // onComplete: function(){
	// 	$('.video-container video').css("width", "auto"
function heroVideoAnimation(){
	var videoTL = new TimelineMax();
	$('.video-container video').css('width', 'auto');
	if (window.innerWidth <= 414) {
		TweenMax.to('.video-container', 1, {left: "75%"});
	} else {
		videoTL.to('.video-container', 1, {left: "50%"});
	}
	videoTL.to('.rina-title', 1, {css:{position: "absolute", top: "0%", color: "black"}});
	if (window.innerWidth > 414) {
		videoTL.to('.rina-title h1', 1, {fontSize:"1.4rem"}, "-=1");
	}
	videoTL.to('nav', 0.5, {height: "50px", opacity: 1, zIndex: "100"});
	$('.rina-title').addClass('rina-title-top');
	videoTL.to('.hero-description', 1, {display: "flex"});
	videoTL.to('.search-wrapper', 0.5, {display: "block"});
}

setTimeout(heroVideoAnimation, 9000);

$('form').on('submit', function(e) {
	e.preventDefault();
});

$('.p').on('click', function(e) {
	if( $('.init-search-area').hasClass('active') ) {
		TweenMax.to('.init-search-area', 0.5, {opacity: "0", display: "none", onComplete: function(){
			$('.init-search-area').removeClass('active');
		}});
		TweenMax.to('.pique-page', 0.5, {display: "block", opacity: "1", onComplete: function(){
			$('.pique-page').addClass('active');
		}});
	}

	if( $('.pique-page').hasClass('active') ) {
		TweenMax.to('.pique-page', 0.5, {opacity: "0", display: "none", onComplete: function(){
			$('.pique-page').removeClass('active');
		}});
		TweenMax.to('.init-search-area', 0.5, {display: "block", opacity: "1", onComplete: function(){
			$('.init-search-area').addClass('active');
		}});
	}

	if( $('.scorpion-page').hasClass('active') ) {
		TweenMax.to('.scorpion-page', 0.5, {opacity: "0", display: "none", onComplete: function(){
			$('.scorpion-page').removeClass('active');
		}});
		TweenMax.to('.pique-page', 0.5, {display: "block", opacity: "1", onComplete: function(){
			$('.pique-page').addClass('active');
		}});
	}
});

$('.s').on('click', function(e){
	if( $('.init-search-area').hasClass('active') ) {
		TweenMax.to('.init-search-area', 0.5, {opacity: "0", display: "none", onComplete: function(){
			$('.init-search-area').removeClass('active');
		}});
		TweenMax.to('.scorpion-page', 0.5, {display: "block", opacity: "1", onComplete: function(){
			$('.scorpion-page').addClass('active');
		}});
	}

	if( $('.pique-page').hasClass('active') ) {
		TweenMax.to('.pique-page', 0.5, {opacity: "0", display: "none", onComplete: function(){
			$('.pique-page').removeClass('active');
		}});
		TweenMax.to('.scorpion-page', 0.5, {display: "block", opacity: "1", onComplete: function(){
			$('.scorpion-page').addClass('active');
		}});
	}

	if( $('.scorpion-page').hasClass('active') ) {
		TweenMax.to('.scorpion-page', 0.5, {opacity: "0", display: "none", onComplete: function(){
			$('.scorpion-page').removeClass('active');
		}});
		TweenMax.to('.init-search-area', 0.5, {display: "block", opacity: "1", onComplete: function(){
			$('.init-search-area').addClass('active');
		}});
	}
})



// function transitionSearchMods(e){
	
// }
// var f = function() {

//};
// for (var i = $('.search-letters-menu').children().length - 1; i >= 0; i--) {
// 	$($('.search-letters-menu').children()[i]).on('click',function(){
// 		const searchWrapper = $('.search-wrapper').children();
// 		searchWrapper.each(function(index){
// 			if($(index).hasClass('active')){
// 				TweenMax.to($(index), 0.5, {opacity: "0", display: "none"});
// 				$(index).removeClass('active');
// 			}
// 		})
// 		$(this).addClass('active')
// 		console.log(this);
// 		console.log(this.classList[1] + "-page");
// 		$("." + this.classList[1] + "-page").addClass('active');
// 		TweenMax.to(this, 0.5, {display: "block", opacity: "1"});
// 	})
// }
// var f = () => {
// 	const searchWrapper = $('.search-wrapper').children();
// 	searchWrapper.each(function(index){
// 		if($(index).hasClass('active')){
// 			TweenMax.to($(index), 0.5, {opacity: "0", display: "none"});
// 			$(index).removeClass('active');
// 		}
// 		// $(this).addClass('active');
// 		// TweenMax.to('this', )
// 	})
// 		console.log(this);
// 		TweenMax.to(this, 0.5, {display: "block", opacity: "1"});
// }

// $('.s').on('click', f);

/*

1. when button clicks find element that has active class
	loop thru '.search-wrapper' for class active
2. run tween animation
3. remove class
4. run tween animation
5. add it to new element

*/




















