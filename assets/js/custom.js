( function ( $ ) {
	
	"use strict";
	var wind = $( window );
	
	mouseCirMove();
	LoadingPage();
	data_overlay();
	background();
	parallaxImage();
	parallaxScroller( wind );
	dsn_slider();
	navMenu();
	gallery();
	
	
	Work();
	contactShow();
	commentShow();
	
	dsn_ajax().ajaxLoad();
	effectBackForward();
	parallax( wind );
	hoverPlayVideo();
	partixales();
	bgVideo();
	$( "a.vid" ).YouTubePopUp();
	progressBar( wind );
	typejs();
	isDemoVersion();
	
} )( jQuery );


/***
 *
 * Loading Page
 *
 */
function LoadingPage() {
	var preloader = $( '.preloader' );
	var preloader_block = preloader.find( '.preloader-block' );
	var progress_number = preloader_block.find( '.percent' );
	var progress_title = preloader_block.find( '.title' );
	var progress_loading = preloader_block.find( '.loading' );
	
	var preloader_bar = preloader.find( '.preloader-bar' );
	var preloader_progress = preloader_bar.find( '.preloader-progress' );
	
	var preloader_after = preloader.find( '.preloader-after' );
	var preloader_before = preloader.find( '.preloader-before' );
	
	
	var timer = dsnGrid.pageLoad( 0 , 100 , 300 , function ( val ) {
		progress_number.text( val );
		preloader_progress.css( 'width' , val + '%' )
		
	} );
	
	
	$( window ).on( 'load' , function () {
		
		
		clearInterval( timer );
		TweenMax.to( preloader_progress , .5 , {
			width : '100%' ,
			onUpdate : function ( $p ) {
				var f = preloader_progress.width() / preloader_progress.parent().width() * 100;
				progress_number.text( parseInt( f ) );
			} ,
			onComplete : function () {
				TweenMax.to( preloader_bar , .5 , { left : '100%' } );
				TweenMax.to( progress_title , 1 , { autoAlpha : 0 , y : -100 } );
				TweenMax.to( progress_loading , 1 , { autoAlpha : 0 , y : 100 } );
				TweenMax.to( progress_number , 1 , { autoAlpha : 0 } );
				
				TweenMax.to( preloader_before , 1 , { y : '-100%' , delay : .7 } );
				TweenMax.to( preloader_after , 1 , {
					y : '100%' , delay : .7 , onComplete : function () {
						finshedLoad();
					}
				} );
			}
		} );
	} );
	
	function finshedLoad() {
		preloader.addClass( 'hidden' );
		FilteringISO();
		effectScroller().start();
		swiperProj();
		effectScroller().isSlider();
		
		
	}
	
	
}

function isDemoVersion() {
	var $elemnt = $( '.dsn-c-wight' );
	if ( $elemnt.length > 0 ) {
		$( 'body' ).addClass( 'c-wight' );
	} else {
		$( 'body' ).removeClass( 'c-wight' );
	}
	
}

/* typejs
-------------------------------------------------------*/

function typejs() {
	$( '.hero .details h4 span' ).typed( {
		strings : [ "Designer" , "freelancer" , "Photographer" , "Web developer" ] ,
		loop : true ,
		startDelay : 1000 ,
		backDelay : 2000
	} );
}

/* progress bar
		-------------------------------------------------------*/
function progressBar( wind ) {
	
	wind.on( 'scroll' , function () {
		$( ".bar span" ).each( function () {
			var bottom_of_object =
				$( this ).offset().top + $( this ).outerHeight();
			var bottom_of_window =
				$( window ).scrollTop() + $( window ).height();
			var myVal = $( this ).attr( 'data-width' );
			if ( bottom_of_window > bottom_of_object ) {
				$( this ).css( {
					width : myVal
				} );
			}
		} );
	} );
}


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
function partixales() {
	var particles_js = 'particles-js';
	if ( $( '#' + particles_js ).length <= 0 )
		return;
	
	particlesJS( particles_js , {
		particles : {
			number : {
				value : 80 ,
				density : {
					enable : !0 ,
					value_area : 800
				}
			} ,
			color : {
				value : "#ffffff"
			} ,
			shape : {
				type : "circle" ,
				stroke : {
					width : 0 ,
					color : "#000000"
				} ,
				polygon : {
					nb_sides : 5
				} ,
				image : {
					src : "img/github.svg" ,
					width : 100 ,
					height : 100
				}
			} ,
			opacity : {
				value : .5 ,
				random : !1 ,
				anim : {
					enable : !1 ,
					speed : 1 ,
					opacity_min : .1 ,
					sync : !1
				}
			} ,
			size : {
				value : 5 ,
				random : !0 ,
				anim : {
					enable : !1 ,
					speed : 40 ,
					size_min : .1 ,
					sync : !1
				}
			} ,
			line_linked : {
				enable : !0 ,
				distance : 150 ,
				color : "#ffffff" ,
				opacity : .4 ,
				width : 1
			} ,
			move : {
				enable : !0 ,
				speed : 6 ,
				direction : "none" ,
				random : !1 ,
				straight : !1 ,
				out_mode : "out" ,
				attract : {
					enable : !1 ,
					rotateX : 600 ,
					rotateY : 1200
				}
			}
		} ,
		interactivity : {
			detect_on : "canvas" ,
			events : {
				onhover : {
					enable : !0 ,
					mode : "repulse"
				} ,
				onclick : {
					enable : !0 ,
					mode : "push"
				} ,
				resize : !0
			} ,
			modes : {
				grab : {
					distance : 400 ,
					line_linked : {
						opacity : 1
					}
				} ,
				bubble : {
					distance : 400 ,
					size : 40 ,
					duration : 2 ,
					opacity : 8 ,
					speed : 3
				} ,
				repulse : {
					distance : 200
				} ,
				push : {
					particles_nb : 4
				} ,
				remove : {
					particles_nb : 2
				}
			}
		} ,
		retina_detect : !0 ,
		config_demo : {
			hide_card : !1 ,
			background_color : "#b61924" ,
			background_image : "" ,
			background_position : "50% 50%" ,
			background_repeat : "no-repeat" ,
			background_size : "cover"
		}
	} );
	
}

function bgVideo() {
	var bg_v = $( '.bg-video' );
	if ( bg_v.length <= 0 )
		return;
	bg_v.c47bg( {
		type : 'youtube' ,
		container : 'div' ,
		source : 'CHlPQXyEe2Q' ,
		mute : false ,
		
	} );
}


/**
 *
 *  - Create an high quality justified gallery
 *    of image
 *
 */
function gallery() {
	var galleryPortfolio = $( '#gallery-portfolio' );
	
	if ( galleryPortfolio.length < 1 )
		return;
	
	galleryPortfolio.justifiedGallery( {
		rowHeight : 149 ,
		margins : 15
	} );
	
	galleryPortfolio.magnificPopup( {
		delegate : 'a' ,
		type : 'image' ,
		closeOnContentClick : false ,
		closeBtnInside : false ,
		gallery : {
			enabled : true
		} ,
		zoom : {
			enabled : true ,
			duration : 300 , // don't foget to change the duration also in CSS
			opener : function ( element ) {
				return element.find( 'img' );
			}
		}
		
	} );
}

function dsn_ajax( $off ) {
	var body = $( 'body' );
	var wind = $( window );
	var text_main_root = 'main.inner-wrap';
	var text_e_img = '[data-dsn-ajax="img"]';
	var isAjax = true;
	return {
		main_root : $( text_main_root ) ,
		ajax_click : $( 'a.effect-ajax' ) ,
		isEffectAjax : function () {
			return !body.hasClass( 'dsn-ajax' );
		} ,
		ajaxLoad : function () {
			var $parent = this;
			if ( $off ) {
				this.ajax_click.off( 'click' );
			}
			
			
			this.ajax_click.on( 'click' , function ( e ) {
				if ( $parent.isEffectAjax() ) return;
				e.preventDefault();
				if ( !isAjax ) return;
				isAjax = false;
				var _that = $( this );
				var url = _that.attr( 'href' );
				var _type = _that.data( 'dsn-ajax' );
				if ( url.indexOf( '#' ) >= 0 || url === undefined ) {
					return;
				}
				effectScroller().locked();
				
				if ( $( window ).width() <= 991 ) {
					$parent.ajaxNormal( url );
				} else if ( _type === 'about' ) {
					$parent.ajaxAbout( _that , url );
				} else if ( _type === 'slider' ) {
					$parent.ajaxSlider( _that , url );
				} else if ( _type === 'next' ) {
					$parent.ajaxNext( _that , url );
				} else if ( _type === 'work' ) {
					$parent.ajaxWork( _that , url );
				} else {
					$parent.ajaxNormal( url );
				}
				
				
			} );
			
		} ,
		ajaxNormal : function ( url ) {
			var _that = this;
			var elemnt_ajax = $( '<div class="class-ajax-loader"></div>' );
			body.append( elemnt_ajax );
			var height_d = $( document ).height() - wind.height() - 150;
			var s_t = wind.scrollTop();
			if ( s_t < height_d ) {
				TweenMax.fromTo( this.main_root , 1 , {
					y : 0
				} , {
					y : -150 ,
					ease : Expo.easeIn
				} );
				
			}
			
			
			TweenMax.to( elemnt_ajax , 1 , {
				y : 0 ,
				ease : Expo.easeIn ,
				onComplete : function () {
					_that.loader( url , function () {
						effectScroller().unlocked( true );
					} );
				}
			} );
		} ,
		
		loader : function ( url , callback ) {
			var _that = this;
			this.main_root.load( url + ' ' + text_main_root + ' > *' , function ( responseText , textStatus , jqXHR ) {
				var $elemnt = $( this );
				var footer = '.home-footer';
				var sidebar_right = $( '.sidebar.right' );
				
				if ( $elemnt.find( footer ).length > 0 ) {
					
					sidebar_right.addClass( 'home-footer' );
				} else {
					
					sidebar_right.removeClass( 'home-footer' );
				}
				
				
				if ( textStatus === 'error' ) {
					window.location = url;
					return;
				}
				history.pushState( null , null , url );
				setTimeout( function () {
					_that.animateAjaxEnd();
					if ( callback !== undefined ) {
						callback( $elemnt , responseText , jqXHR );
					}
					isAjax = true;
				} , 500 );
				
			} );
		} ,
		animateAjaxEnd : function () {
			
			this.main_root.css( 'transform' , '' );
			$( 'html, body' ).animate( {
				scrollTop : 0
			} , 0 );
			if ( $( "body" ).getNiceScroll( 0 ) ) {
				$( "body" ).getNiceScroll( 0 ).doScrollTop( 0 ); // Scroll X Axis
			}
			
			TweenMax.fromTo( $( '.class-ajax-loader' ) , 1 , {
				y : '0%'
			} , {
				y : '-100%' ,
				ease : Expo.easeIn ,
				onComplete : function () {
					$( '.class-ajax-loader' ).remove();
				} ,
				delay : 1
			} );
			reloadAjax();
			
			
		} ,
		createElement : function ( $e , url ) {
			var $parent = this;
			var container = $( '<div class="active-ajax"></div>' );
			var is_work = false;
			
			container.css( {
				position : 'fixed' ,
				width : '100%' ,
				height : '100%' ,
				top : 0 ,
				left : 0 ,
				zIndex : 999 ,
				visibility : 'hidden' ,
				opacity : 0
			} );
			var img_move = $e.clone();
			var position = $e.offset();
			var width = $e.width();
			if ( width === 100 ) {
				var position = $e[ 0 ].getBoundingClientRect();
				img_move.css( 'border-radius' , '50%' );
				container.css( 'background-color' , body.css( 'background-color' ) );
				is_work = true;
			}
			
			if ( position === undefined )
				position = {
					left : 0 ,
					top : 0
				};
			
			if ( $e.hasClass( 'dsn-imgs' ) ) {
				position = {
					left : 0 ,
					top : 0
				};
			} else {
				position.left = position.left - get_size_sidebar_right();
			}
			
			
			img_move.css( {
				position : 'absolute' ,
				top : position.top ,
				left : position.left ,
				width : $e.width() ,
				height : $e.height() ,
				'object-fit' : 'cover'
				
				
			} );
			
			container.append( img_move );
			
			body.append( container );
			
			
			var dealy = 0;
			var speed = .5;
			TweenMax.to( container , .5 , {
				
				autoAlpha : 1 ,
				onComplete : function () {
					
					$parent.loader( url , function ( $e , responseText , jqXHR ) {
						var img = $e.find( text_e_img );
						
						if ( img.length <= 0 ) {
							TweenMax.to( [ container , img_move ] , 1 , {
								height : 0 ,
								delay : 1
							} );
							return;
						}
						img = img.first();
						var position = img.offset();
						
						var left = 0;
						if ( position.left === 0 ) {
							left = position.left - get_size_sidebar_right();
						} else {
							left = position.left;
						}
						if ( is_work ) {
							dealy = .8;
							speed = 1;
						}
						
						
						TweenMax.to( img_move , 1 , {
							top : position.top ,
							left : left ,
							width : img.width() ,
							height : img.height() ,
							borderRadius : 0 ,
							onComplete : function () {
								TweenMax.to( container , speed , {
									height : 0 ,
									onComplete : function () {
										effectScroller().unlocked( true );
										reloadAjax();
									}
								} );
								TweenMax.to( img_move , speed , {
									autoAlpha : 0 ,
									delay : dealy ,
									onComplete : function () {
										container.remove();
										
									}
								} );
							}
						} );
						
						
					} );
				}
			} );
		} ,
		ajaxAbout : function ( $e , url ) {
			try {
				var $header = $e.parents( 'header.hero' );
				var position = $header.offset();
				$header.css( {
					position : 'fixed' ,
					top : position.top ,
					left : position.left ,
					width : this.main_root.width() ,
					zIndex : 999
				} );
				
				body.append( $header );
				var $details = $header.find( '.details' );
				var $bg = $header.find( '.bg' );
				
				TweenMax.to( $details , 1 , {
					autoAlpha : 0
				} );
				TweenMax.to( $e , 1.5 , {
					autoAlpha : 0 ,
					y : 100 ,
					ease : Expo.easeIn
				} );
				this.loader( url , function ( $e , responseText , jqXHR ) {
					var img = $e.find( text_e_img );
					
					if ( img.length <= 0 ) {
						TweenMax.to( $header , 1 , {
							height : 0 ,
							delay : 1
						} );
						return;
					}
					var position = img.offset();
					img = img.first();
					TweenMax.to( $bg , 1 , {
						top : position.top ,
						left : position.left - get_size_sidebar_right() ,
						width : img.width() ,
						height : img.height() ,
					} );
					TweenMax.to( $bg.find( '.bg-image' ) , 1 , {
						// backgroundSize: img.css('background-size'),
						width : '100%' ,
						height : '100%' ,
						margin : 0
					} );
					TweenMax.to( $header , 1 , {
						height : 0 ,
						delay : 1
					} );
					
					TweenMax.to( $bg , 1 , {
						autoAlpha : 0 ,
						delay : 2 ,
						onComplete : function () {
							effectScroller().unlocked( true );
							setTimeout( function () {
								$header.remove();
							} , 500 );
							
						}
					} );
					
					
				} );
				
				
			} catch ( e ) {
				this.ajaxNormal( url );
			}
			
		} ,
		ajaxSlider : function ( $e , url ) {
			var $parent = this;
			var projects__headline = $( '.slider-box .slider-item .inner-hero .info .veiw-c' );
			var swiper_slide_active_class = '.swiper-slide-active';
			var swiper_wrapper = $( '.swiper-wrapper' );
			
			var tl = new TimelineLite();
			
			if ( $off === true ) {
				projects__headline.off( 'mousedown' );
				projects__headline.off( 'mouseup' );
			}
			/***
			 *
			 * Ajax From Slider
			 *
			 */
			projects__headline.bind( 'mousedown touchstart' , function ( e ) {
				e.preventDefault();
				if ( e.type.toLowerCase() === 'mousedown' ) {
					if ( e.which === 3 ) {
						return;
					}
				}
				var info = swiper_wrapper.find( swiper_slide_active_class + ' .info' );
				var title = info.find( 'h1' );
				var veiw_c = info.find( '.veiw-c' );
				swiper().off();
				
				tl = new TimelineLite();
				
				
				tl.fromTo( title.find( 'span' ) , 1.5 , {
					width : '0%'
				} , {
					width : '100%' ,
					onComplete : function () {
						if ( url !== undefined ) {
							
							TweenMax.to( title , 1 , {
								autoAlpha : 0 ,
								x : -100
							} );
							TweenMax.to( info.find( '.tagline' ) , 1 , {
								autoAlpha : 0 ,
								y : -100
							} );
							TweenMax.to( veiw_c , 1 , {
								autoAlpha : 0 ,
								y : 100
							} );
							TweenMax.staggerTo( $( '.dsn-grid-nav-box > *' ) , 1 , {
									autoAlpha : 0 ,
									y : 100
								} , .3 ,
								function () {
									$parent.createElement( $( '.dsn-slider-img .active' ) , url );
								} );
							
							
							body.removeClass( 'stop-swiper' );
						}
					}
				} );
				
				
			} ).bind( 'mouseup touchend' , function ( e ) {
				e.preventDefault();
				tl.pause();
				swiper_wrapper.find( swiper_slide_active_class + ' .info h1 span' ).css( {
					width : '0%'
				} );
				swiper().on();
				
			} );
			
		} ,
		ajaxWork : function ( $e , url ) {
			var img_move = $e.parent().find( 'img' );
			var $parent = this;
			TweenMax.set( img_move , {
				scale : 1
			} );
			setTimeout( function () {
				$parent.createElement( img_move , url );
			} , 500 );
			
		} ,
		ajaxNext : function ( $e , url ) {
			var img_move = $e.find( '.dsn-imgs' );
			var $parent = this;
			if ( img_move.length <= 0 ) {
				$parent.ajaxNormal( url );
				return;
			}
			TweenMax.set( img_move , {
				autoAlpha : 1
			} );
			TweenMax.to( img_move , 1 , {
				top : 0 ,
				ease : Expo.easeInOut ,
				onComplete : function () {
					$parent.createElement( img_move , url );
				}
			} );
			
			
		} ,
		
		
	};
}

function swiper() {
	var sliderImgFullscreen = '.slider-box .swiper-container';
	var body = $( 'body' );
	var mySwiper = document.querySelector( sliderImgFullscreen ).swiper;
	
	return {
		on : function () {
			
			mySwiper.autoplay.start();
			body.removeClass( 'stop-swiper' );
		} ,
		off : function () {
			mySwiper.autoplay.stop();
			body.addClass( 'stop-swiper' );
		}
	}
}


function get_size_sidebar_right() {
	var width = $( window ).width();
	if ( width >= 992 ) {
		return $( '.sidebar.right' ).width();
	}
	return 0;
}

function parallax( wind ) {
	var parallax = $( '[data-dsn-grid="parallax"]' );
	if ( parallax.length === 0 || wind.width() < 992 ) {
		return;
	}
	parallax.each( function () {
		var _that = $( this ) ,
			dsn_grid = dsnGrid.removeAttr( _that , 'data-dsn-grid' ) ,
			speed = dsnGrid.removeAttr( _that , 'data-dsn-grid-speed' ) ,
			move = dsnGrid.removeAttr( _that , 'data-dsn-grid-move' );
		
		dsnGrid.parallaxMoveElemnt( _that , move , speed );
		
	} );
}


function reloadAjax() {
	
	var wind = $( window );
	data_overlay();
	background();
	parallaxImage();
	parallaxScroller( wind , true );
	dsn_slider();
	gallery();
	FilteringISO();
	Work();
	commentShow();
	dsn_ajax( true ).ajaxLoad();
	parallax( wind );
	hoverPlayVideo();
	partixales();
	bgVideo();
	$( "a.vid" ).YouTubePopUp();
	progressBar( wind );
	typejs();
	swiperProj();
	mouseCirMove( true );
	isDemoVersion();
	
}


/**
 *  - the function that move the cursor of an input element to the end
 *
 * @param $off
 *      $off is true stop event listener
 *
 */
function mouseCirMove( $off ) {
	var $elemnet = '.cursor';
	
	if ( $off !== undefined && $off === true ) {
		cursorEffect();
		return;
	}
	
	if ( $( 'body' ).hasClass( 'dsn-large-mobile' ) )
		return;
	
	dsnGrid.mouseMove( $( '.cursor' ) );
	
	cursorEffect();
	
	function cursorEffect() {
		dsnGrid.elementHover( $elemnet , ' a.veiw-c' , 'cursor-hold' );
		dsnGrid.elementHover( $elemnet , ' a.link-pop' , 'cursor-view' );
		dsnGrid.elementHover( $elemnet , 'a:not(.veiw-c):not(.work-effect) , #menu-toggle , .box-logo , .title-tab , .contact-btn , .custom-btn ' , 'cursor-link' );
	}
	
	
}


/**
 *  -   event will be triggered by doing browser action such as
 *  a click on the back or forward button
 */
function effectBackForward() {
	$( window ).on( 'popstate' , function ( e ) {
		$( "main.inner-wrap" ).load( document.location + ' main.inner-wrap > *' , function () {
			reloadAjax();
			effectScroller().unlocked( true );
		} );
	} );
}


function swiperProj() {
	var swiper = new Swiper( '.page-project .swiper-container' , {
		pagination : {
			el : '.swiper-pagination' ,
			type : 'progressbar' ,
		} ,
	} );
}

function effectScroller() {
	return {
		body_n : $( "body" ).getNiceScroll() ,
		isScroller : function () {
			var body = $( 'body' );
			var hasSc = !body.hasClass( 'dsn-effect-scroll' );
			if ( hasSc ) {
				body.addClass( 'dsn-mobile' );
			}
			return hasSc;
		} ,
		isMobile : function () {
			if ( navigator.userAgent.match( /Android/i )
				|| navigator.userAgent.match( /webOS/i )
				|| navigator.userAgent.match( /iPhone/i )
				|| navigator.userAgent.match( /iPad/i )
				|| navigator.userAgent.match( /iPod/i )
				|| navigator.userAgent.match( /BlackBerry/i )
				|| navigator.userAgent.match( /Windows Phone/i )
				|| navigator.userAgent.match( /Edge/i )
				|| navigator.userAgent.match( /MSIE 10/i )
				|| navigator.userAgent.match( /MSIE 9/i )
			) {
				$( 'body' ).addClass( 'dsn-mobile' );
				return true;
			}
			
			var isMobile = $( window ).width() <= 991;
			if ( isMobile ) $( 'body' ).addClass( 'dsn-mobile' );
			return isMobile;
		} ,
		
		start : function ( $e ) {
			if ( this.isMobile() ) return;
			if ( this.isScroller() ) return;
			$e = dsnGrid.getUndefinedVal( $e , "body , .contact-container , .comment-modal .comment-modal-container , .menu-full .menu-container > ul , .sub-menu" );
			
			$( $e ).niceScroll( {
				cursorcolor : "#424242" , // change cursor color in hex
				cursoropacitymin : 0 , // change opacity when cursor is inactive (scrollabar "hidden" state), range
				// from 1 to 0
				cursoropacitymax : 1 , // change opacity when cursor is active (scrollabar "visible" state), range from
				// 1 to 0
				cursorwidth : "5px" , // cursor width in pixel (you can also write "5px")
				cursorborder : "0px solid #fff" , // css definition for cursor border
				zindex : "99990" ,
				scrollspeed : 250 , // scrolling speed
				mousescrollstep : 25 , // scrolling speed with mouse wheel (pixel)
				touchbehavior : false , // DEPRECATED!! use "emulatetouch"
				emulatetouch : false , // enable cursor-drag scrolling like touch devices in desktop computer
				hwacceleration : true , // use hardware accelerated scroll when supported
				boxzoom : false , // enable zoom for box content
				dblclickzoom : true , // (only when boxzoom=true) zoom activated when double click on box
				gesturezoom : true , // (only when boxzoom=true and with touch devices) zoom activated when pinch
				// out/in on box
				grabcursorenabled : true , // (only when touchbehavior=true) display "grab" icon ,
				background : "" , // change css for rail background
				cursordragspeed : 0.3 , // speed of selection when dragged with cursor
				preservenativescrolling : false ,
				horizrailenabled : false
			} );
			
		} ,
		locked : function () {
			if ( this.isMobile() ) return;
			if ( this.isScroller() ) return;
			var _that = this;
			setTimeout( function () {
				_that.resize();
				_that.body_n.hide();
				_that.body_n[ 0 ].locked = true;
			} , 500 );
		} ,
		unlocked : function ( $is_remove ) {
			if ( this.isMobile() ) return;
			if ( this.isScroller() ) return;
			
			var _that = this;
			setTimeout( function () {
				_that.resize();
				_that.body_n.show();
				_that.body_n[ 0 ].locked = false;
				if ( $is_remove ) {
					_that.body_n.remove();
				}
				
				_that.start();
			} , 500 );
		} ,
		resize : function () {
			if ( this.isMobile() ) return;
			if ( this.isScroller() ) return;
			this.body_n.resize();
		} ,
		stop : function () {
			if ( this.isMobile() ) return;
			if ( this.isScroller() ) return;
			this.body_n.stop();
		} ,
		isSlider : function () {
			if ( this.isScroller() ) return;
			if ( this.isMobile() ) return;
			
			
			if ( $( '.slider-box .swiper-container' ).length > 0 ) {
				this.locked();
				setTimeout( function () {
					$( "body" ).getNiceScroll( 0 ).doScrollTop( 0 ); // Scroll X Axis
				} , 1000 )
				
				
			} else {
				this.unlocked( true );
			}
			
		}
		
	}
}


function contactShow() {
	var contact_btn = $( '.contact-btn' );
	
	
	var body = $( 'body' );
	contact_btn.on( 'click' , function () {
		var classes = 'dsn-show-contact';
		if ( body.hasClass( classes ) ) {
			body.removeClass( classes );
			effectScroller().unlocked();
		} else {
			body.addClass( classes );
			effectScroller().locked();
		}
		
		
	} );
}


function commentShow() {
	var contact_btn = $( '.comment-btn' );
	var body = $( 'body' );
	contact_btn.on( 'click' , function () {
		var classes = 'dsn-show-comment';
		if ( body.hasClass( classes ) ) {
			body.removeClass( classes );
			effectScroller().unlocked();
		} else {
			body.addClass( classes );
			effectScroller().locked();
		}
		
		
	} );
}


function Work() {
	var _hover = $( '.project-lest li' );
	
	_hover.on( 'mousemove' , function ( e ) {
		var _that = $( this );
		var _that_img = $( this ).find( 'img' );
		
		_that_img.css( {
			left : e.pageX - _that.offset().left ,
			top : e.pageY - _that.offset().top ,
		} );
		
	} );
}


function FilteringISO() {
	var $gallery = $( '.project-lest' );
	var $filtering = $( '.nav-pills.filtering' );
	
	
	if ( ( $gallery === undefined || $gallery.length < 1 ) || ( $filtering === undefined || $filtering.length < 1 ) ) {
		return;
	}
	
	
	/* isotope
	  -------------------------------------------------------*/
	// $gallery.isotope({});
	$gallery = $gallery.isotope( {
		// options
		itemSelector : 'li' ,
		transitionDuration : '.5s' ,
	} );
	
	
	/* filter items on button click
	-------------------------------------------------------*/
	$filtering.find( '.title-tab' ).off( 'click' );
	$filtering.find( '.title-tab' ).on( 'click' , function ( e ) {
		e.preventDefault();
		setTimeout( function () {
			effectScroller().resize();
		} , 500 );
		var filterValue = $( this ).attr( 'data-filter' );
		$gallery.isotope( {
			filter : filterValue
		} );
		$( this ).addClass( 'dsn-active' ).siblings().removeClass( 'dsn-active' );
	} );
	
	
}


function navMenu() {
	var button_menu = $( '#menu-toggle' );
	var body = $( 'body' );
	var menu_full = $( '.menu-full' );
	var menu_ajax = menu_full.find( 'a' );
	var nav_list_dropdown = menu_full.find( '.nav-list-dropdown > a' );
	var sub_menu = menu_full.find( '.sub-menu .menu-item-back a ' );
	
	
	button_menu.on( 'click' , function () {
		var _that = $( this );
		_that.toggleClass( 'open' );
		body.toggleClass( 'nav-active' );
		if ( body.hasClass( 'nav-active' ) ) {
			effectScroller().locked();
			return;
		}
		effectScroller().unlocked();
		
	} );
	
	nav_list_dropdown.off( 'click' );
	nav_list_dropdown.on( 'click' , function ( e ) {
		e.preventDefault();
		var _that = $( this );
		body.addClass( 'nav-dropdown-active' );
		_that.parent( '.nav-list-dropdown' ).find( '.sub-menu' ).addClass( 'active' );
		
	} );
	
	sub_menu.off( 'click' );
	sub_menu.on( 'click' , function ( e ) {
		e.preventDefault();
		var _that = $( this );
		body.removeClass( 'nav-dropdown-active' );
		_that.parents( '.sub-menu' ).removeClass( 'active' );
	} );
	
	
}

function dsn_slider() {
	
	var swiper_slide_active_class = '.swiper-slide-active';
	var swiper_slide_active_objet;
	
	var swiper_wrapper = $( '.swiper-wrapper' );
	var slider_box = $( '.slider-box' );
	var dsn_slider_img = $( '<div class="dsn-slider-img"></div>' );
	
	//---> Append slid Image
	swiper_wrapper.find( '.slider-item' ).each( function ( $index ) {
		var _that = $( this );
		
		var img = _that.find( '.bg-image' );
		
		img.attr( 'data-dsn-index' , $index );
		_that.attr( 'data-dsn-index' , $index );
		if ( $index === 0 ) {
			img.addClass( 'active' );
			img.css( 'top' , '0%' );
		}
		
		dsn_slider_img.append( img );
		slider_box.append( dsn_slider_img );
		
		//--- > change Text
		var info = _that.find( '.info' );
		var title = info.find( 'h1' );
		var veiw_c = info.find( '.veiw-c' );
		title.append( '<span>' + title.text() + '</span>' );
		
		
	} );
	
	
	var speed = 1500;
	//--> effect Slid Swiper
	var swiper = new Swiper( '.slider-box .swiper-container' , {
		direction : 'vertical' ,
		pagination : {
			el : '.dsn-grid-nav-box .boxnav-item-progress .number' ,
			type : 'custom' ,
			clickable : true ,
			renderCustom : function ( swiper , current , total ) {
				
				var out = '<span class="active ">' + dsnGrid.numberText( current ) + '</span>';
				out += '<span>/</span>';
				out += ' <span class="all">' + dsnGrid.numberText( total ) + '</span>';
				return out;
			}
		} ,
		
		loop : true ,
		autoplay : {
			delay : 5000
		} ,
		parallax : true ,
		fadeEffect : {
			crossFade : true
		} ,
		
		resistanceRatio : 0 ,
		allowTouchMove : false ,
		replaceState : true ,
		hashnav : true ,
		effect : "fade" ,
		simulateTouch : false ,
		resistance : false ,
		speed : speed
	} );
	
	
	swiper_slide_active_objet = $( swiper_slide_active_class );
	var is_active = true;
	
	
	dsnGrid.mouseWheel( $( '.slider-box' ) , function () {
		if ( is_active && !$( 'body' ).hasClass( 'stop-swiper' ) ) {
			swiper.slidePrev();
		}
	} , function () {
		if ( is_active && !$( 'body' ).hasClass( 'stop-swiper' ) ) {
			swiper.slideNext();
		}
	} );
	
	
	swiper.on( 'slideNextTransitionStart' , function () {
		startMoveSlider( true );
	} );
	
	swiper.on( 'slidePrevTransitionStart' , function () {
		startMoveSlider( false );
	} );
	
	$( '.dsn-grid-nav-box .to-next , .dsn-grid-nav-box .to-prev' ).on( 'click' , function () {
		var _taht = $( this );
		
		if ( _taht.hasClass( 'to-next' ) ) {
			if ( is_active ) {
				swiper.slideNext();
			}
		} else if ( _taht.hasClass( 'to-prev' ) ) {
			if ( is_active ) {
				swiper.slidePrev();
			}
		}
	} );
	
	
	function startMoveSlider( $is_next ) {
		
		var swiper = $( swiper_slide_active_class );
		is_active = false;
		var index = swiper.data( 'dsn-index' );
		var oldActive = dsn_slider_img.find( '.active' );
		var active = dsn_slider_img.find( '[data-dsn-index="' + index + '"]' );
		var speed_obj = speed / 1000;
		var moveActive = '-100%';
		
		if ( $is_next !== undefined && $is_next === true ) {
			moveActive = '100%'
		}
		oldActive.css( 'z-index' , 1 );
		active.css( 'z-index' , 2 );
		TweenMax.fromTo( active , speed_obj , {
			top : moveActive
		} , {
			top : '0%' ,
			onComplete : function () {
				is_active = true;
				oldActive.css( 'z-index' , '' );
			}
		} );
		oldActive.removeClass( 'active' );
		active.addClass( 'active' );
		
		
		swiper_slide_active_objet = swiper;
		
	}
	
	
}


function getTransform_Translate( obj ) {
	
	var transformMatrix = obj.css( "-webkit-transform" ) ||
		obj.css( "-moz-transform" ) ||
		obj.css( "-ms-transform" ) ||
		obj.css( "-o-transform" ) ||
		obj.css( "transform" );
	var matrix = transformMatrix.replace( /[^0-9\-.,]/g , '' ).split( ',' );
	var x = matrix[ 12 ] || matrix[ 4 ]; //translate x
	var y = matrix[ 13 ] || matrix[ 5 ]; //translate y
	
	return {
		x : x ,
		y : y
	};
}


function parallaxImage() {
	var parallax_img = $( '[data-parallex]' );
	parallax_img.each( function () {
		var _that = $( this );
		var elemnt_reverse = dsnGrid.getUndefinedVal( _that.data( 'parallex' ) , undefined );
		
		dsnGrid.parallaxMoveElemnt( _that , -30 , 1.5 , $( elemnt_reverse ) , true );
	} );
}

/**
 * Attr data overlay
 */
function data_overlay() {
	$( '[data-overlay-color]' ).each( function () {
		var _that = $( this );
		var _color = dsnGrid.removeAttr( _that , 'data-overlay-color' );
		_that.addClass( 'dsn-overlay' );
		$( 'body' ).append( '<style>.dsn-overlay[data-overlay]:before{background: ' + _color + ';}</style>' );
		
	} );
}

/**
 *
 * Function set background image from data background
 *
 */
function background() {
	
	var cover = $( ".cover-bg, section , [data-image-src]" );
	cover.each( function () {
		var attr = $( this ).attr( 'data-image-src' );
		
		if ( typeof attr !== typeof undefined && attr !== false ) {
			$( this ).css( 'background-image' , 'url(' + attr + ')' );
		}
		
	} );
}


function contactValidator() {
	var contact_form = $( '#contact-form' );
	if ( contact_form < 1 ) {
		return;
	}
	contact_form.validator();
	// when the form is submitted
	contact_form.on( 'submit' , function ( e ) {
		// if the validator does not prevent form submit
		if ( !e.isDefaultPrevented() ) {
			var url = "contact.php";
			
			// POST values in the background the the script URL
			$.ajax( {
				type : "POST" ,
				url : url ,
				data : $( this ).serialize() ,
				success : function ( data ) {
					// data = JSON object that contact.php returns
					
					// we recieve the type of the message: success x danger and apply it to the
					var messageAlert = 'alert-' + data.type;
					var messageText = data.message;
					
					// let's compose Bootstrap alert box HTML
					var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
					
					// If we have messageAlert and messageText
					if ( messageAlert && messageText ) {
						// inject the alert to .messages div in our form
						contact_form.find( '.messages' ).html( alertBox );
						// empty the form
						contact_form[ 0 ].reset();
					}
				}
			} );
			return false;
		}
	} );
}


/***
 *  - technique in computer graphics where background images  ,
 *  move past the camera more slowly than foreground images
 * @param wind
 */
function parallaxScroller( wind , $off ) {
	var tabs_about = $( '.title-tab[data-dsn-scroller]' );
	var dsn_parallax_move = $( '[data-dsn-grid="move-tabs"]' );
	
	if ( $off ) {
		wind.off( 'scroll' );
	}
	
	
	wind.on( 'scroll' , function () {
		scrollerIt();
	} );
	scrollerIt();
	
	var offset = false;
	
	function scrollerIt() {
		var page_content = $( '.post-content' );
		var filter_btn = $( '.comment-btn' );
		
		
		/**
		 * show and hide button filter
		 */
		
		
		if ( filter_btn !== undefined && filter_btn.length > 0 ) {
			var offsettop_filter = page_content.offset().top;
			
			
			if ( wind.scrollTop() >= ( offsettop_filter - 300 ) ) {
				
				TweenMax.to( filter_btn , .5 , { autoAlpha : 1 } );
				
			} else {
				TweenMax.to( filter_btn , .5 , { autoAlpha : 0 } );
				
				
			}
		}
		
		
		/**
		 * Move Section
		 */
		dsn_parallax_move.each( function () {
			var _that = $( this );
			if ( $( window ).width() <= 991 ) {
				_that.css( 'transform' , '' );
				return;
			}
			
			if ( offset === false ) {
				offset = _that.offset().top - 90;
			}
			
			
			var test = $( window ).scrollTop() - ( offset );
			
			if ( test < 0 ) {
				test = 0;
			}
			TweenMax.to( _that , .3 , {
				y : test ,
				ease : Power0.easeOut
			} );
			
			
		} );
		
		
		/**
		 *
		 * Scroller effect in abour
		 *
		 */
		var activition = null;
		var activition_image = null;
		tabs_about.each( function ( $index ) {
			var _taht = $( this );
			var get_active = _taht.data( 'dsn-scroller' );
			if ( get_active !== undefined ) {
				var offset = $( '.box-about-item' + get_active ).offset();
				
				
				if ( offset !== undefined ) {
					var winScrol = wind.scrollTop();
					if ( ( winScrol + 250 ) >= ( offset.top ) ) {
						activition = _taht;
						activition_image = $( '.bg-info-box' + get_active );
						
					}
				}
				
			}
		} );
		
		
		tabs_about.removeClass( 'dsn-active' );
		if ( activition !== null ) {
			activition.addClass( 'dsn-active' );
			$( '.bg-info-box' ).removeClass( 'active' );
			activition_image.addClass( 'active' );
			
		} else {
			tabs_about.first().addClass( 'dsn-active' );
			$( '.bg-info-box' ).first().addClass( 'active' );
		}
		
	}
	
	var page_slidei_left = $( '.page-sidebar .page-sidebar-media.dsn-about-imgs' );
	page_slidei_left.html( '' );
	tabs_about.each( function ( $index ) {
		var _that = $( this );
		var get_active = _that.data( 'dsn-scroller' );
		var data_image = _that.data( 'dsn-image-src' );
		var data_text = _that.find( 'h4' );
		var $url_img = dsnGrid.getUndefinedVal( data_image , '' );
		var $text = '';
		
		
		if ( data_text !== undefined ) {
			$text = data_text.text();
		}
		
		
		///-> box image
		var bg_info_box = $( '<div class="bg-info-box "></div>' );
		if ( get_active !== undefined ) {
			bg_info_box.addClass( get_active.replace( '.' , '' ) );
		}
		
		
		var bg_img = $( '<div class="cover-bg" data-dsn-ajax="img" style="background-image: url(&quot;' + $url_img + '&quot;);" data-overlay="5"></div>' );
		var text_e = $( '<div class="text"><h2>' + $text + '</h2></div>' );
		bg_info_box.css( 'z-index' , tabs_about.length - $index );
		if ( _that.hasClass( 'dsn-active' ) ) {
			bg_info_box.addClass( 'active' );
		}
		
		
		bg_img.append( text_e );
		bg_info_box.append( bg_img );
		page_slidei_left.append( bg_info_box );
		_that.off( 'click' );
		var complete = true;
		_that.on( 'click' , function () {
			var get_active = $( this ).data( 'dsn-scroller' );
			
			if ( get_active !== undefined && complete && !_that.hasClass( 'dsn-active' ) ) {
				complete = false;
				
				dsnGrid.scrollTop( $( '.box-about-item' + get_active ) , 1500 , -120 ,
					function () {
						complete = true;
					} )
			}
			
		} );
	} )
	
}


function hoverPlayVideo() {
	TweenMax.set( ".play-circle-01" , {
		rotation : 90 ,
		transformOrigin : "center"
	} );
	
	TweenMax.set( ".play-circle-02" , {
		rotation : -90 ,
		transformOrigin : "center"
	} );
	
	TweenMax.set( ".play-perspective" , {
		xPercent : -2 ,
		scale : .08 ,
		transformOrigin : "center 41%" ,
		perspective : 1
	} );
	
	TweenMax.set( ".play-video" , {
		visibility : "hidden" ,
		opacity : 0 ,
	} );
	
	TweenMax.set( ".play-triangle" , {
		transformOrigin : "left center" ,
		transformStyle : "preserve-3d" ,
		rotationY : 10 ,
		scaleX : 2
	} );
	
	const rotateTL = new TimelineMax( {
		paused : true
	} )
		.to( ".play-circle-01" , .7 , {
			opacity : .1 ,
			rotation : '+=360' ,
			strokeDasharray : "456 456" ,
			ease : Power1.easeInOut
		} , 0 )
		.to( ".play-circle-02" , .7 , {
			opacity : .1 ,
			rotation : '-=360' ,
			strokeDasharray : "411 411" ,
			ease : Power1.easeInOut
		} , 0 );
	
	const button = document.querySelector( ".play-button" );
	
	if ( button !== null ) {
		button.addEventListener( "mouseover" , function () {
			rotateTL.play();
		} );
		button.addEventListener( "mouseleave" , function () {
			rotateTL.reverse();
		} );
		
	}
	
}