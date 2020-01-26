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
				loadPopup( item )
			},
			close: () => {
				document.location.pathname === baseLocation + "slide" && history.back();
			}
		}
	} );
}

function loadPopup ( item ) {
	console.log( "loadPopup, see 'src/components/MagnificPopup.js', loadPopup" )
	const title = getPopupTitle( item.src )

	item.type = "inline"
	item.src = `
	<div class="mfp-figure">
		<button title="Close (Esc)" type="button" class="mfp-close" style="color:white;">×</button>
		<figure>
			<img class="mfp-img" alt=${title } src=${ item.src }>
			<figcaption>
				<div class="mfp-bottom-bar">
					<div class="mfp-title">${ title }</div>
					<div class="mfp-counter"> </div>
				</div>
			</figcaption>
		</figure>
	</div>
`
}

function getPopupTitle ( path ) {
	console.log( 'loading title, see "src/utils/popup-title"' )
	console.log( path )

	if ( path.indexOf( "1-riva" ) !== -1 ) {
		return "Riva"
	}
	else if ( path.indexOf( "2-normare" ) !== -1 ) {
		return "Normare"
	}
	else if ( path.indexOf( "3-alto mare" ) !== -1 ) {
		return "Alto Mare"
	}
	else if ( path.indexOf( "ara-ht" ) !== -1 ) {
		return "Ara"
	}
	else if ( path.indexOf( "ARAN-ht" ) !== -1 ) {
		return "Aran"
	}
	else if ( path.indexOf( "comunione-ht" ) !== -1 ) {
		return "Comunione"
	}
	else if ( path.indexOf( "1-riva" ) !== -1 ) {
		return "Riva"
	}
	else if ( path.indexOf( "molti" ) !== -1 ) {
		return "molti"
	}
	else return "No title yet"
}