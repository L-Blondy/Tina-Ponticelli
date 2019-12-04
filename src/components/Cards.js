export function Cards () {
	this.cardsContainer = document.querySelector( ".card-container" );
	this.cards = require( "../assets/cards/*.*" );
	this.placeholder = require( "../assets/placeholder/*.*" );
	this.setup = function () {
		for ( let cardName in this.cards ) {
			const a = document.createElement( "A" );
			const img = document.createElement( "IMG" );
			const div = document.createElement( "DIV" );
			a.className = "card-link";
			img.className = `card-image ${ cardName.indexOf( "-lg" ) !== -1 ? "card-image__lg" : cardName.indexOf( "-xl" ) !== -1 ? "card-image__xl" : cardName.indexOf( "-ht" ) !== -1 ? "card-image__ht" : cardName.indexOf( "-xh" ) !== -1 ? "card-image__xh" : "" }`;
			img.dataset.src = "cards/" + cardName;
			img.src = this.placeholder[ "1x1_placeholder" ][ "png" ];
			img.setAttribute( "alt", cardName );
			img.setAttribute( "loadOnScroll", "" );
			div.appendChild( img )
			a.appendChild( div )
			this.cardsContainer.appendChild( a )
		}
	}
}
