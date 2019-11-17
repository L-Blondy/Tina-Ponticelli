import "./setSVG.js";
import setScrollNav from "lb-scroll-nav";
import loadImg from "lb-lazy-images";
import randOpacity from "lb-burger";
import "./main.css";

const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer )

const moltitudine = document.querySelector( ".moltitudine" )
const moltitudineItems = new Array( 184 );

for ( let i = 0; i < moltitudineItems.length; i++ ) {
	const img = document.createElement( "img" );
	img.className = "moltitudine-item";
	img.dataset.asset = "moltitudine/" + i;
	moltitudineItems[ i ] = img;
	moltitudine.appendChild( img )
}
loadImg( moltitudineItems )

const options = {
	frequency: 1,
	duration: 8000,
	fadeTo: 1,
}
// randOpacity( moltitudine, options )