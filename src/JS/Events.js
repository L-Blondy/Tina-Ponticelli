import { phone_autoScroll } from "./_mixins"

export function Events ( pathList ) {
	this.pathList = pathList
	this.container = document.querySelector( ".events__container" )
	this.setup()
	console.log( this.pathList )
}

Events.prototype = { ...phone_autoScroll }

Events.prototype.setup = function () {
	this.pathList.forEach( path => {
		this.a = document.createElement( "a" );
		this.div = document.createElement( "div" );
		this.img = document.createElement( "IMG" );

		this.a.className = "events__link"
		this.div.className = "events__img-wrapper"
		this.img.className = "events__img"

		this.a.href = path
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
	this.spacer = document.createElement( "a" )
	this.spacer.className = "events__link events__link--additional"
	this.container.appendChild( this.spacer.cloneNode( true ) )
	this.container.appendChild( this.spacer.cloneNode( true ) )
	this.container.appendChild( this.spacer.cloneNode( true ) )
	this.container.appendChild( this.spacer.cloneNode( true ) )

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
	const obs = new IntersectionObserver( cb, { threshold: 0.01 } )
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


