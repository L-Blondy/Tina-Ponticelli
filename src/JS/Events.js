import { onVisible } from "lb-onvisible"
import { setup_lazyLoad } from "./_mixins"

export function Events ( pathList_cards, pathList_popup ) {
	this.pathList_cards = pathList_cards
	this.pathList_popup = pathList_popup
	this.container = document.querySelector( ".events__container" )
	this.sectionContainer = document.querySelector( ".section-container" )
	this.sliceBy = 0
	this.allEvents = []
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

		this.allEvents.push( this.a )

		if ( "IntersectionObserver" in window ) {
			this.setup_lazyLoad()
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
	this.setup_Animation()

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
			markupParse: function ( template, values, item ) {
				item.img[ 0 ].classList.add( "mfp-img-custom" )
			}
		},
	} );
}

Events.prototype.setup_Animation = function () {
	if ( ( window.matchMedia( "(min-width:599px)" ).matches && window.matchMedia( "(max-width:660.8px)" ).matches )
		|| ( window.matchMedia( "(min-width:679px)" ).matches && window.matchMedia( "(max-width:824.8px)" ).matches )
		|| ( window.matchMedia( "(min-width:1014px)" ).matches && window.matchMedia( "(max-width:1200.8px)" ).matches )
		|| ( window.matchMedia( "(min-width:1397px)" ).matches && window.matchMedia( "(max-width:1710.8px)" ).matches )
	) {
		this.sliceBy = 4
	}
	if ( ( window.matchMedia( "(min-width:661px)" ).matches && window.matchMedia( "(max-width:678.8px)" ).matches )
		|| ( window.matchMedia( "(min-width:901px)" ).matches && window.matchMedia( "(max-width:1013.8px)" ).matches )
	) {
		this.sliceBy = 3
	}
	if ( ( window.matchMedia( "(min-width:825px)" ).matches && window.matchMedia( "(max-width:900.8px)" ).matches )
		|| ( window.matchMedia( "(min-width:1201px)" ).matches && window.matchMedia( "(max-width:1396.8px)" ).matches )
		|| ( window.matchMedia( "(min-width:1711px)" ).matches )
	) {
		this.sliceBy = 5
	}
	this.allEvents = this.allEvents.reduce( ( res, cur, i ) => {
		if ( i % this.sliceBy == 0 ) {
			res.push( [] )
		}
		res[ res.length - 1 ].push( cur )
		return res
	}, [] )
	this.allEvents.forEach( ( line, i ) => {
		let newClass = ""
		let reverse = false
		if ( i % 2 == 0 ) {
			newClass = "fadeFromLeft"
		}
		else {
			newClass = "fadeFromRight"
			reverse = true
		}

		onVisible( line, { class: newClass, delay: 150, reverse } )
	} )
}

