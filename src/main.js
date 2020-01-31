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
	moltitudine.load().then( () => new Slider( pathList_slides, 2, 10000, 300 ).setup() )
} else {
	moltitudine.load()
	new Slider( pathList_slides, 2, 10000, 300 ).setup()
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
setMagnificPopup( '.slider', '.slide__link' )
setMagnificPopup( '.card-container', '.card__link' )



