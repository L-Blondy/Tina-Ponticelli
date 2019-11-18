import "./setSVG.js";
import setScrollNav from "lb-scroll-nav";
import loadImg from "lb-lazy-images";
import randOpacity from "lb-burger";
import "./main.css";

//Scroll Nav
const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer );

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
if("Promise" in window)
	loadImg( lines ).then( lines => { lines[ 0 ].parentElement.parentElement.className += " display" } )
else {
	loadImg( lines )
	setTimeout(()=> lines[ 0 ].parentElement.parentElement.className += " display", 1000)
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

//Molutitudine Animation
const squares = document.querySelectorAll( ".square" );
const options = {
	frequency: 2,
	duration: 8000,
	fadeTo: 0,
}
randOpacity( moltitudine, squares, options )