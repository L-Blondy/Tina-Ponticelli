import {loadImg} from "lb-lazy-images";

export function Cards () {
	this.cardsContainer = document.querySelector( ".card-container" );
	this.cards = require( "../assets/cards/*.*" );
	this.placeholder = require( "../assets/placeholder/*.*" );
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
			div.appendChild( img )
			a.appendChild( div )
			this.cardsContainer.appendChild( a )

			if("IntersectionObserver" in window){
				const O2 = new IntersectionObserver(cb2, {root:this.cardsContainer, rootMargin: "0px 500px 500px 0px", threshold: 0.05})
				function cb2 (entries) {
					entries.forEach(entry => {
						if(entry.intersectionRatio > 0.05 ){
							loadImg(entry.target)
							O2.unobserve(img)
						}
					})
				}
				O2.observe(img)
			} else {
				loadImg(img)
			}
		}
	}
}
