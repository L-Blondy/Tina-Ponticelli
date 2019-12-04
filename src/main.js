import "./setSVG.js";
import setScrollNav from "lb-scroll-nav";
import randOpacity from "lb-effect-rand-opacity";
import "lb-icons";
import setupSlider from "./setupSlider.js"
import setupCards from "./setupCards.js"
import loadImg from "lb-lazy-images";
import "./main.scss";

//Scroll Nav
const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer );

//navbar behavior
const toggler = document.querySelector( ".navbar-toggler" );
const navlinks = document.querySelector( ".navbar-navlinks" );
document.documentElement.style.setProperty( "--links-count", navlinks.children.length )

window.addEventListener( "click", e => {
	if ( e.target === toggler ) {
		e.target.classList.toggle( "burger-cross" );
		navlinks.classList.toggle( "collapse" );
	} else if ( !navlinks.classList.contains( "collapse" ) ) {
		navlinks.classList.add( "collapse" );
		toggler.classList.remove( "burger-cross" );
	}
} );

//lazy load Moltitudine + load Slider after Moltitudine
const moltitudine = document.querySelector( ".moltitudine" );
const sizes = [ 480, 768, 1100, 1920 ];
const lines = document.querySelectorAll( ".line" );

[].forEach.call( lines, ( line, index ) => {
	line.dataset.srcset = "";
	sizes.forEach( size => {
		line.dataset.srcset += `moltitudine${ size }/line${ index + 1 } ${ size }w, `;
	} )
} )
if ( "Promise" in window )
	loadImg( lines ).then( lines => {
		lines[ 0 ].parentElement.parentElement.className += " display ";
		document.querySelector( ".discover" ).classList.add( "display" );
		window.matchMedia( "(min-width: 768px)" ).matches && setupSlider( 2 )
	} )
else {
	loadImg( lines )
	setTimeout( () => lines[ 0 ].parentElement.parentElement.className += " display", 1000 )
	window.matchMedia( "(min-width: 768px)" ).matches && setupSlider( 2 )
}

//Set white squares on top
const linesContainers = document.querySelectorAll( ".line-container" );
[].forEach.call( linesContainers, line => {
	for ( let i = 0; i < 23; i++ ) {
		const square = document.createElement( "div" );
		square.className = "square";
		line.querySelector( ".squares" ).appendChild( square )
	}
} )

//Moltitudine Animation
const squares = document.querySelectorAll( ".square" );
const opacityOptions = {
	frequency: 3,
	duration: 8000,
	fadeTo: 0,
}
const moltiAnimation = new randOpacity( moltitudine, squares, opacityOptions );
//start / pause animation
if ( "IntersectionObserver" in window ) {
	const moltiObs = new IntersectionObserver( handleAnimation, { threshold: 0.5 } )
	function handleAnimation ( entries ) {
		entries.forEach( entry => {
			if ( entry.intersectionRatio > 0.5 && window.matchMedia( "(min-width: 767px)" ).matches ) {
				moltiAnimation.start()
			}
			else {
				moltiAnimation.pause()
			}
		} )
	}
	moltiObs.observe( moltitudine )
}

//magnific popup
$( '.custom-slider' ).magnificPopup( {
	delegate: '.slide-link',
	type: 'image',
	gallery: {
		enabled: true,
		preload: [ 1, 2 ]
	}
} );