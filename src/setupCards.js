export default function setupCards () {
	const cardsContainer = document.querySelector( ".card-container" );
	const cards = require( "./assets/cards/*.*" );

	for ( let cardName in cards ) {

		const a = document.createElement( "A" );
		const img = document.createElement( "IMG" );
		const div = document.createElement( "DIV" );
		a.className = "card-link";
		img.className = `card-image ${ cardName.indexOf( "-lg" ) !== -1 ? "card-image__lg" : cardName.indexOf( "-xl" ) !== -1 ? "card-image__xl" : cardName.indexOf( "-ht" ) !== -1 ? "card-image__ht" : cardName.indexOf( "-xh" ) !== -1 ? "card-image__xh" : "" }`;
		img.dataset.src = "cards/" + cardName;
		img.setAttribute( "alt", cardName );
		img.setAttribute( "loadOnScroll", "" );
		div.appendChild( img )
		a.appendChild( div )
		cardsContainer.appendChild( a )
	}
}
//setup cards 
setupCards()