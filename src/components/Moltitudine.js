import randOpacity from "lb-effect-rand-opacity";
import { loadImg } from "lb-lazy-images";

export function Moltitudine ( animationOptions ) {
	this.animationOptions = animationOptions;
	this.container = document.querySelector( ".moltitudine" );
	this.sizes = [ 480, 768, 1100, 1920 ];
	this.lines = document.querySelectorAll( ".line" );
	this.lineContainers = document.querySelectorAll( ".line-container" );

}

Moltitudine.prototype.setSrcset = function () {
	[].forEach.call( this.lines, ( line, index ) => {
		line.dataset.srcset = "";
		this.sizes.forEach( size => {
			line.dataset.srcset += `moltitudine${ size }/line${ index + 1 } ${ size }w, `;
		} )
	} )
}

Moltitudine.prototype.setWhiteSquares = function () {
	[].forEach.call( this.lineContainers, line => {
		for ( let i = 0; i < 23; i++ ) {
			const square = document.createElement( "div" );
			square.className = "square";
			line.querySelector( ".squares" ).appendChild( square )
		}
	} )
}

Moltitudine.prototype.setupRandOpacity = function () {
	//Moltitudine Animation
	const squares = document.querySelectorAll( ".square" );

	const moltiAnimation = new randOpacity( this.container, squares, this.animationOptions );
	//start / pause animation
	if ( "IntersectionObserver" in window ) {
		const moltiObs = new IntersectionObserver( handleAnimation, { threshold: 0.5 } )
		function handleAnimation ( entries ) {
			entries.forEach( entry => {
				if ( entry.intersectionRatio > 0.5 && window.matchMedia( "(min-width: 767px)" ).matches ) {
					moltiAnimation.start()
				}
				else {
					moltiAnimation.pause()
				}
			} )
		}
		moltiObs.observe( this.container )
	}
}
Moltitudine.prototype.setup = function () {
	this.setSrcset()
	this.setWhiteSquares()
	this.setupRandOpacity()
	return this;
}
Moltitudine.prototype.load = function ( options ) {

	if ( "Promise" in window ) {
		return loadImg( this.lines ).then( lines => {
			lines[ 0 ].parentElement.parentElement.className += " display ";
			document.querySelector( ".discover" ).classList.add( "display" );
		} )
	}
	else {
		loadImg( this.lines )
		setTimeout( () => this.lines[ 0 ].parentElement.parentElement.className += " display", 1000 )
	}
}