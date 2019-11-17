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
const lines = document.querySelectorAll( ".line" );
const moltitudine = document.querySelector( ".moltitudine" );
const moltWidth = moltitudine.getBoundingClientRect().width;
const imgWidth = moltWidth < 480 ? 480 : moltWidth < 768 ? 768 : moltWidth < 1100 ? 1100 : 1920;
[].forEach.call( lines, ( line, index ) => {
	line.dataset.asset = `moltitudine x${ imgWidth }/line${ index + 1 }`;
} )
loadImg( lines ).then( lines => lines[ 0 ].parentElement.parentElement.className += " display" )

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