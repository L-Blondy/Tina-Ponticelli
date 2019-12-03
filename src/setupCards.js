export default function setupCards () {
	const cardsContainer = document.querySelector( ".card-container" );
	const cards = require( "./assets/cards/*.*" );

	for ( let cardName in cards ) {

		const a = document.createElement( "A" );
		const img = document.createElement( "IMG" );
		a.className = "card-link";
		img.className = `card-image ${ cardName.includes( "-lg" ) ? "card-image__lg" : cardName.includes( "-xl" ) ? "card-image__xl" : "" }`;
		img.dataset.src = "cards/" + cardName;
		img.setAttribute( "alt", cardName );
		img.setAttribute( "loadOnScroll", "" );
		a.appendChild( img )
		cardsContainer.appendChild( a )
	}
}
//setup cards 
setupCards()