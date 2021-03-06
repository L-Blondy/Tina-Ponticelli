import { loadImg_computed } from "./utils/loadImg_computed.js"
import { onVisible } from "lb-onvisible"
import { setup_lazyLoad } from "./_mixins"

export function Cards ( pathList_cards, pathList_popup ) {
	this.container = document.querySelector( ".card-container" );
	this.cards = pathList_cards;
	this.popups = pathList_popup;
	this.allCards = []
	this.sectionContainer = document.querySelector( ".section-container" )
	this.placeholder = require( "../assets/placeholder/*.*" );
	this.sizes = [ 360, 768, 1000, 1920 ];
	this.setup()
}
Cards.prototype.setup_lazyLoad = setup_lazyLoad

Cards.prototype.setup = function () {
	this.cards.forEach( ( cardPath, index ) => {
		const index_to_char = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
		this.a = document.createElement( "A" );
		this.img = document.createElement( "IMG" );
		this.div = document.createElement( "DIV" );

		this.a.className = "card__link";
		this.img.className = `card__image ${ cardPath.indexOf( "-lg" ) !== -1 ? "card__image--lg" : cardPath.indexOf( "-xl" ) !== -1 ? "card__image--xl" : cardPath.indexOf( "-ht" ) !== -1 ? "card__image--ht" : cardPath.indexOf( "-xh" ) !== -1 ? "card__image--xh" : "" }`;

		this.a.href = this.popups[ index_to_char[ index ] ].main;
		this.a.dataset.srcset = this.popups[ index_to_char[ index ] ].srcset
		this.img.dataset.src = cardPath;
		this.img.src = this.placeholder[ "1x1_placeholder" ][ "png" ];
		this.img.setAttribute( "alt", cardPath );

		this.div.appendChild( this.img )
		this.a.appendChild( this.div )
		this.container.appendChild( this.a )

		this.allCards = [ ...this.allCards, this.a ]

		if ( "IntersectionObserver" in window ) {
			this.setup_lazyLoad()
		} else {
			loadImg_computed( this.img )
		}
	} )
	if ( "IntersectionObserver" in window ) {
		this.setup_animation()
	}
}

Cards.prototype.setup_animation = function () {
	//1560
	let mod;
	if ( window.matchMedia( "(max-width: 598.9px)" ).matches )
		return
	else if ( window.matchMedia( "(max-width: 955.8px)" ).matches )
		mod = 2
	else if ( window.matchMedia( "(max-width: 1562.8px)" ).matches )
		mod = 3
	else if ( window.matchMedia( "(min-width: 1921px)" ).matches )
		mod = 5
	else if ( window.matchMedia( "(min-width: 1560px)" ).matches )
		mod = 4

	const length = this.allCards.length
	this.allCards.forEach( ( card, i ) => {
		if ( length - i >= mod && i % mod === 0 ) {
			onVisible( card, { class: "fadeFromLeft" } )
		}
		else if ( i % mod === mod - 1 ) {
			onVisible( card, { class: "fadeFromRight" } )
		}
		else {
			onVisible( card, { class: "fadeFromBottom" } )
		}
	} )
}


