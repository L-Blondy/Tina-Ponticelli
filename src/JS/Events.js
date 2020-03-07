import { onVisible } from "lb-onvisible"
import { setup_lazyLoad } from "./_mixins"

export function Events ( pathList_cards, pathList_popup ) {
	this.pathList_cards = pathList_cards
	this.pathList_popup = pathList_popup
	this.container = document.querySelector( ".events__container" )
	this.sectionContainer = document.querySelector( ".section-container" )
	this.setup()
}
Events.prototype.setup_lazyLoad = setup_lazyLoad

Events.prototype.setup = function () {
	this.pathList_cards.forEach( ( path, i ) => {
		this.a = document.createElement( "a" );
		this.div = document.createElement( "div" );
		this.img = document.createElement( "IMG" );

		this.a.className = "events__link"
		this.div.className = "events__img-wrapper"
		this.img.className = "events__img"

		this.a.href = this.pathList_popup[ i ]
		this.img.dataset.src = path

		this.div.appendChild( this.img )
		this.a.appendChild( this.div )
		this.container.appendChild( this.a )

		if ( "IntersectionObserver" in window ) {
			this.setup_lazyLoad()
			if ( !window.matchMedia( "(max-width:598.8px)" ).matches )
				onVisible( this.a, { class: "fadeFromBottom" } )
		}
		else {
			this.img.src = this.img.dataset.src
		}
	} )
	this.buffer = document.createElement( "a" )
	this.buffer.className = "events__link--buffer"
	this.container.appendChild( this.buffer.cloneNode( true ) )
	this.container.appendChild( this.buffer.cloneNode( true ) )
	this.container.appendChild( this.buffer.cloneNode( true ) )
	this.container.appendChild( this.buffer.cloneNode( true ) )

	this.setup_MFP()
}

Events.prototype.setup_MFP = function () {
	$( '.events__container' ).magnificPopup( {
		delegate: '.events__link',
		type: 'image',
		gallery: {
			enabled: true,
			preload: [ 1, 2 ]
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close">Back</button>',
		tClose: "Go Back (Esc)",
		callbacks: {
			open: function () {
				$( ".mfp-container" ).addClass( "mfp-container-events" )
			},
			imageLoadComplete: function ( e ) {
				document.querySelector( ".mfp-img" ).style.maxHeight = "60vh"
			},
		},
	} );
}

