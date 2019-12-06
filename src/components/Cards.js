export function Cards () {
	this.cardsContainer = document.querySelector( ".card-container" );
	this.cards = require( "../assets/cards/*.*" );
	this.placeholder = require( "../assets/placeholder/*.*" );
	//[ Object.keys( sliderImages[ img_name ] )[ 0 ] ]
	this.setup = function () {
		for ( let cardName in this.cards ) {
			const cardPath = this.cards[ cardName ][ Object.keys( this.cards[ cardName ] )[ 0 ] ]
			const a = document.createElement( "A" );
			const img = document.createElement( "IMG" );
			const div = document.createElement( "DIV" );
			a.className = "card-link";
			a.href = cardPath;
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
