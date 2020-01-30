import { loadImg_computed } from "../utils/loadImg_computed.js"

export function Cards ( pathList_cards, pathList_popup ) {
	this.cardsContainer = document.querySelector( ".card-container" );
	this.cards = pathList_cards;
	this.popups = pathList_popup;
	this.placeholder = require( "../assets/placeholder/*.*" );
	this.sizes = [ 360, 768, 1000, 1920 ];

	this.setup = function () {
		this.cards.forEach( ( cardPath, index ) => {
			const a = document.createElement( "A" );
			const img = document.createElement( "IMG" );
			const div = document.createElement( "DIV" );
			a.className = "card-link";
			a.href = this.popups[ index ];
			img.className = `card-image ${ cardPath.indexOf( "-lg" ) !== -1 ? "card-image__lg" : cardPath.indexOf( "-xl" ) !== -1 ? "card-image__xl" : cardPath.indexOf( "-ht" ) !== -1 ? "card-image__ht" : cardPath.indexOf( "-xh" ) !== -1 ? "card-image__xh" : "" }`;
			img.dataset.src = cardPath;
			img.src = this.placeholder[ "1x1_placeholder" ][ "png" ];
			img.setAttribute( "alt", cardPath );
			div.appendChild( img )
			a.appendChild( div )
			this.cardsContainer.appendChild( a )

			if ( "IntersectionObserver" in window ) {
				const O1 = new IntersectionObserver( cb1, { root: document.querySelector( ".section-container" ), rootMargin: "0px 0px 500px 0px", threshold: 0.001 } )
				function cb1 ( entries ) {
					entries.forEach( entry => {
						if ( entry.intersectionRatio > 0 && !( window.matchMedia( "(max-width:660px)" ).matches ) ) {
							loadImg_computed( entry.target )
							O1.unobserve( img )
							O2.unobserve( img )
						}
					} )
				}
				const O2 = new IntersectionObserver( cb2, { root: this.cardsContainer, rootMargin: "0px 500px 0px 0px", threshold: 0.001 } )
				function cb2 ( entries ) {
					entries.forEach( entry => {
						if ( entry.intersectionRatio > 0 && ( window.matchMedia( "(max-width:660px)" ).matches ) ) {
							loadImg_computed( entry.target )
							O1.unobserve( img )
							O2.unobserve( img )
						}
					} )
				}
				O1.observe( img )
				O2.observe( img )
			} else {
				loadImg_computed( img )
			}
		} )
	}
}


