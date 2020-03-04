export function Events ( pathList ) {
	this.pathList = pathList
	this.eventsContainer = document.querySelector( ".events__container" )
	this.setup()
	console.log( this.pathList )
}

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

		this.a.appendChild( this.div )
		this.div.appendChild( this.img )
		this.eventsContainer.appendChild( this.a )

		if ( "IntersectionObserver" in window ) {
			this.setupObserver()
		}
		else {
			this.img.src = this.img.dataset.src
		}
	} )
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
			}
		},
	} );
}
Events.prototype.setupObserver = function () {
	const obs = new IntersectionObserver( cb, { threshold: 0.01 } )
	function cb ( entries ) {
		entries.forEach( e => {
			if ( e.intersectionRatio > 0 ) {
				e.target.src = e.target.dataset.src
				obs.unobserve( e.target )
				console.log( "loading ", e.target )
			}
		} )
	}
	obs.observe( this.img )
}