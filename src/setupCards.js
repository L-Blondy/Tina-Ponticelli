export default function setupCards () {
	const cardsContainer = document.querySelector( ".cards.container" );
	const cards = require( "./assets/cards/*.*" );

	for ( let cardName in cards ) {
		const a = document.createElement( "A" );
		const img = document.createElement( "IMG" );
		a.className = "card__link";
		img.className = "card__img";
		img.dataset.src = "cards/" + cardName;
		img.setAttribute( "alt", cardName );
		img.setAttribute( "loadOnScroll", "" );
		a.appendChild( img )
		cardsContainer.appendChild( a )
	}
}
//setup cards 
setupCards()