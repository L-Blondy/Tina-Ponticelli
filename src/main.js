import "lb-icons";
import "./JS/setSVG.js";
import setScrollNav from "lb-scroll-nav";
import { getPathList } from "./JS/utils/getPathList.js"
import { Cards } from "./JS/Cards.js"
import { Events } from "./JS/Events.js"
import { setupNavbar } from "./JS/Navbar.js"
import { Moltitudine } from "./JS/Moltitudine.js"
import { MFP } from "./JS/MFP.js";
import { onVisible } from "lb-onvisible"
import { getClassToAdd } from "./JS/utils/getClassToAdd.JS"
import "./main.scss";

const pathList_cards = getPathList( require( "./assets/_cards/*.*" ), "cards" )
const pathList_popup = getPathList( require( "./assets/_popup/*.*" ), "popup" )
const pathList_Events = getPathList( require( "./assets/_events/*.*" ), "events" )

//SCROLL NAVIGATION
const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer );

//NAVBAR
setupNavbar();

//HOME
const moltitudine = new Moltitudine().setSrcset().setWhiteSquares()
if ( window.matchMedia( "(orientation:landscape)" ).matches ) {
	moltitudine.setupRandOpacity( {
		frequency: 3,
		duration: 8000,
		fadeTo: 0,
	} )
}

moltitudine.load()

//CARDS
new Cards( pathList_cards, pathList_popup );
const cards = document.querySelectorAll( ".card-container > .card-link" );

[].forEach.call( cards, ( card, index ) => {
	const classToAdd = getClassToAdd( index, cards.length );

	onVisible( card, {
		class: classToAdd,
		duration: 700,
	} );
} )

//EVENTS
new Events( pathList_Events )

//MFP
new MFP( '.card-container', '.card__link' )





