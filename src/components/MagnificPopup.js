window.addEventListener( "popstate", ( e ) => {
	$.magnificPopup.close()
} )

const baseLocation = document.location.pathname;

export function setMagnificPopup ( target, delegate ) {
	$( target ).magnificPopup( {
		delegate: delegate,
		type: 'image',
		image: {
			verticalFit: true,
			titleSrc: ( item ) => item.el[ 0 ].dataset.title
		},
		closeOnBgClick: false,
		gallery: {
			enabled: true,
			preload: [ 1, 2 ],
			tCounter: ''
		},
		callbacks: {
			open: () => {
				history.pushState( {}, "", baseLocation + "slide" )
			},
			elementParse: function ( item ) {
				const title = item.el[ 0 ].dataset.title
				if ( title.indexOf( "molti" ) != -1 ) {
					loadMoltitudineDetails( item )
				}
			},
			close: () => {
				document.location.pathname === baseLocation + "slide" && history.back();
			}
		}
	} );
}

function loadMoltitudineDetails ( item ) {
	console.log( "Moltitudine details to load, see 'src/components/MagnificPopup.js', loadMoltitudinedetails" )
	item.type = "inline"
	item.src = `
		<img class="mfp-img" src=${ item.src } />
		<button> This is my test button </button>
	`
}