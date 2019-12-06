import "./setSVG.js";
import "lb-icons";
import { Slider } from "./components/Slider.js"
import { Cards } from "./components/Cards.js"
import { setupNavbar } from "./components/Navbar.js"
import { Moltitudine } from "./components/Moltitudine.js"
import { loadOnScroll } from "lb-lazy-images";
import setScrollNav from "lb-scroll-nav";
import "./main.scss";

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
	moltitudine.load().then( () => new Slider( 2 ).setup() )
} else {
	moltitudine.load()
	new Slider( 2 ).setup()
}
//setup cards 
new Cards().setup();
//setup loadOnScroll
loadOnScroll( document.querySelector( ".section-container" ) )

//magnific popup
$( '.custom-slider' ).magnificPopup( {
	delegate: '.slide-link',
	type: 'image',
	gallery: {
		enabled: true,
		preload: [ 1, 2 ]
	}
} );

$( '.card-container' ).magnificPopup( {
	delegate: '.card-link',
	type: 'image',
	gallery: {
		enabled: true,
		preload: [ 1, 2 ]
	}
} );
