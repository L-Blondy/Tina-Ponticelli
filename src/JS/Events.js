import { phone_autoScroll } from "./_mixins"

export function Events ( pathList_cards, pathList_popup ) {
	this.pathList_cards = pathList_cards
	this.pathList_popup = pathList_popup
	this.container = document.querySelector( ".events__container" )
	this.setup()
}

Events.prototype = { ...phone_autoScroll }

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
			this.setup_observer()
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
	if ( "IntersectionObserver" in window ) {
		this.setup_autoScroll()
	}
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
			}
		},
	} );
}
Events.prototype.setup_observer = function () {
	const opts = {
		threshold: 0.01,
		rootMargin: "0px 0px 350px 0px",
		root: document.querySelector( ".section-container" )
	}
	const obs = new IntersectionObserver( cb, opts )
	function cb ( entries ) {
		entries.forEach( e => {
			if ( e.intersectionRatio > 0 ) {
				e.target.src = e.target.dataset.src
				obs.unobserve( e.target )
			}
		} )
	}
	obs.observe( this.img )
}


