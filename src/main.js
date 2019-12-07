import "./setSVG.js";
import "lb-icons";
import setScrollNav from "lb-scroll-nav";
import { Slider } from "./components/Slider.js"
import { Cards } from "./components/Cards.js"
import { setupNavbar } from "./components/Navbar.js"
import { Moltitudine } from "./components/Moltitudine.js"
import { setMagnificPopup } from "./components/MagnificPopup.js";
import { loadOnScroll } from "lb-lazy-images";
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

//magnific popup
setMagnificPopup( '.custom-slider', '.slide-link' )
setMagnificPopup( '.card-container', '.card-link' )

//setup loadOnScroll => AT BOTTOM
loadOnScroll( document.querySelector( ".section-container" ) )
