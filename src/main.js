// import $ from "jquery";
import "./setSVG.js";
import setScrollNav from "lb-scroll-nav";
import loadImg from "lb-lazy-images";
import randOpacity from "lb-effect-rand-opacity";
import "lb-icons";
import loadSlides from "./loadSlider.js"
import "./main.scss";

//Scroll Nav
const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer );

//navbar behavior
$( ".navbar a" ).click( ( e ) => {
	$( '#navlinks' ).collapse( 'hide' );
	e.target.parentElement.parentElement.classList.add( "collapse" );
	$( ".burger-burger" ).removeClass( "burger-cross" )
} )
$( ".navbar-toggler" ).click( ( e ) => {
	$( ".burger-burger" ).toggleClass( "burger-cross" )
} )

//lazy load Moltitudine
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
		loadSlides( 2 )
	} )
else {
	loadImg( lines )
	setTimeout( () => lines[ 0 ].parentElement.parentElement.className += " display", 1000 )
	loadSlides( 2 )
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

if ( "IntersectionObserver" in window ) {
	const moltiObs = new IntersectionObserver( handleAnimation, {} )
	function handleAnimation ( entries ) {
		entries.forEach( entry => {
			if ( entry.intersectionRatio > 0 ) {
				moltiAnimation.start()
			}
			else {
				moltiAnimation.pause()
			}
		} )
	}
	moltiObs.observe( moltitudine )
}