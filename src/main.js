import "./setSVG.js";
import "lb-icons";
import setScrollNav from "lb-scroll-nav";
import { getPathList } from "./utils/getPathList.js"
import { Slider } from "./components/Slider.js"
import { Cards } from "./components/Cards.js"
import { setupNavbar } from "./components/Navbar.js"
import { Moltitudine } from "./components/Moltitudine.js"
import { setMagnificPopup } from "./components/MagnificPopup.js";
import { onVisible } from "lb-onvisible"
import { getClassToAdd } from "./utils/getClassToAdd.JS"
import "./main.scss";

const pathList_cards = getPathList( require( "./assets/_cards/*.*" ) )
const pathList_slides = getPathList( require( "./assets/_slides/*.*" ) )
const pathList_additional_content = getPathList( require( "./assets/_additional_content/**/*.*" ) )
//Scroll Nav
const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer );

setupNavbar();

const moltitudine = new Moltitudine().setSrcset().setWhiteSquares()
if ( window.matchMedia( "(orientation:landscape)" ).matches ) {
	moltitudine.setupRandOpacity( {
		frequency: 3,
		duration: 8000,
		fadeTo: 0,
	} )
}

if ( "Promise" in window ) {
	moltitudine.load().then( () => {
		const setupSlider = () => {
			if ( window.matchMedia( "(min-width:992px)" ).matches ) {
				new Slider( pathList_slides, 2 ).setup()
				window.removeEventListener( "resize", setupSlider )
			}
		}
		if ( window.matchMedia( "(min-width:992px)" ).matches ) {
			new Slider( pathList_slides, 2 ).setup()
		}
		else {
			window.addEventListener( "resize", setupSlider )
		}
	} )
} else {
	moltitudine.load()
	new Slider( pathList_slides, 2 ).setup()
}
//setup cards 
new Cards( pathList_cards, pathList_slides ).setup();
const cards = document.querySelectorAll( ".card-container > .card-link" );

[].forEach.call( cards, ( card, index ) => {
	const classToAdd = getClassToAdd( index, cards.length );

	onVisible( card, {
		class: classToAdd,
		duration: 700,
	} );
} )

//magnific popup
setMagnificPopup( '.slider', '.slide__link', pathList_additional_content )
setMagnificPopup( '.card-container', '.card__link', pathList_additional_content )



