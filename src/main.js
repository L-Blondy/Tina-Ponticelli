import "./setSVG.js";
import "lb-icons";
import setScrollNav from "lb-scroll-nav";
import { getPathList } from "./utils/getPathList.js"
import { Cards } from "./components/Cards.js"
import { Events } from "./components/Events.js"
import { setupNavbar } from "./components/Navbar.js"
import { Moltitudine } from "./components/Moltitudine.js"
import { MFP } from "./components/MagnificPopup.js";
import { onVisible } from "lb-onvisible"
import { getClassToAdd } from "./utils/getClassToAdd.JS"
import "./main.scss";

const pathList_cards = getPathList( require( "./assets/_cards/*.*" ), "cards" )
const pathList_popup = getPathList( require( "./assets/_popup/*.*" ), "popup" )
const pathList_Events = getPathList( require( "./assets/_events/*.*" ), "events" )

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

moltitudine.load()

//setup cards 
new Cards( pathList_cards, pathList_popup ).setup();
const cards = document.querySelectorAll( ".card-container > .card-link" );

[].forEach.call( cards, ( card, index ) => {
	const classToAdd = getClassToAdd( index, cards.length );

	onVisible( card, {
		class: classToAdd,
		duration: 700,
	} );
} )

//magnific popup
new MFP( '.card-container', '.card__link' ).setup()

//Events
new Events( pathList_Events ).setup()



