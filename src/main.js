import "./setSVG.js";
import setScrollNav from "lb-scroll-nav";
import "lb-lazy-images";
import randOpacity from "lb-burger";
import "./main.css";

const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer )

const lines = document.querySelectorAll( ".line-container" );
[].forEach.call( lines, line => {
	for ( let i = 0; i < 23; i++ ) {
		const square = document.createElement( "div" );
		square.className = "square";
		line.querySelector( ".squares" ).appendChild( square )
	}
} )

const moltitudine = document.querySelector( ".moltitudine" );
const squares = document.querySelectorAll( ".square" );
const options = {
	frequency: 2,
	duration: 8000,
	fadeTo: 0,
}
randOpacity( moltitudine, squares, options )