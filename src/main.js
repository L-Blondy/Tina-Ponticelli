import "./setSVG.js";
import "lb-icons";
import setScrollNav from "lb-scroll-nav";
import { getPathList } from "./utils/getPathList.js"
import { Slider } from "./components/Slider.js"
import { Cards } from "./components/Cards.js"
import { setupNavbar } from "./components/Navbar.js"
import { Moltitudine } from "./components/Moltitudine.js"
import { setMagnificPopup } from "./components/MagnificPopup.js";
import { loadOnScroll } from "lb-lazy-images";
import "./main.scss";

const sliderImages = require( "./assets/slider/*.*" );
const pathList = getPathList( sliderImages )

//Scroll Nav
const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer );

setupNavbar();

const lines = document.querySelectorAll( ".line" );

const moltitudine = new Moltitudine( {
	frequency: 3,
	duration: 8000,
	fadeTo: 0,
} ).setup()

if ( "Promise" in window ) {
	moltitudine.load().then( () => new Slider( pathList, 2, 10000, 300 ).setup() )
} else {
	moltitudine.load()
	new Slider( pathList, 2, 10000, 300 ).setup()
}
//setup cards 
new Cards().setup();

//magnific popup
setMagnificPopup( '.custom-slider', '.slide-link' )
setMagnificPopup( '.card-container', '.card-link' )

//setup loadOnScroll => AT BOTTOM
loadOnScroll( document.querySelector( ".section-container" ) )















// function sortObject ( obj ) {
// 	let key,
// 		tempArry = [],
// 		i,
// 		tempObj = {};

// 	for ( key in obj ) {
// 		tempArry.push( key );
// 	}

// 	tempArry.sort(
// 		function ( a, b ) {
// 			return a.toLowerCase().localeCompare( b.toLowerCase() );
// 		}
// 	);
// 	for ( i = 0; i < tempArry.length; i++ ) {
// 		tempObj[ tempArry[ i ] ] = obj[ tempArry[ i ] ];
// 	}
// 	return tempObj;
// }


// function getPathList ( Obj ) {
// 	const pathList = []
// 	for ( let prop in Obj ) {
// 		pathList.push( Obj[ prop ][ Object.keys( Obj[ prop ] )[ 0 ] ] )
// 	}
// 	return pathList
// }