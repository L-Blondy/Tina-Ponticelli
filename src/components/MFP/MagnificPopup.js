import { getDetails } from "./getDetails.js"

window.addEventListener( "popstate", ( e ) => {
	$.magnificPopup.close()
} )

const baseLocation = document.location.pathname;

export function setMagnificPopup ( target, delegate, pathList_additional_content ) {

	$( target ).magnificPopup( {
		delegate: delegate,
		type: 'image',
		image: {
			verticalFit: true,
			titleSrc: ( item ) => item.el[ 0 ].dataset.title
		},
		closeOnBgClick: false,
		closeBtnInside: false,
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
				loadPopup( item, pathList_additional_content )
			},
			close: () => {
				document.location.pathname === baseLocation + "slide" && history.back();
			}
		}
	} );
}

function loadPopup ( item, pathList_additional_content ) {
	const { title, description, additionalContent } = getPopupInfo( item.src, pathList_additional_content )
	item.srcset = item.el[ 0 ].dataset.srcset
	const temp = item.srcset.split( " " )
	const temp2 = temp[ temp.length - 2 ]
	const lastW = temp2.substring( 0, temp2.length - 3 ) + 1
	//caching next images
	const img = document.createElement( "IMG" )
	img.src = item.src
	img.srcset = item.el[ 0 ].dataset.srcset + item.src + " " + lastW + "w"

	item.type = "inline"
	item.src = `
	<button title="Close (Esc)" type="button" class="mfp-close" style="color:white;"></button>
	<div class="mfp-figure">
		<img class="mfp-img" alt="${ title }" src=${ item.src } srcset="${ item.el[ 0 ].dataset.srcset + item.src + " " + lastW + "w" }"/>
	
		<div class="mfp-custom">
			<div class="mfp-bottom-bar">
				<div class="mfp-title">${ title }</div>
				<div class="mfp-description">${ description }</div>
				<div class="mfp-relative">
					<div class="mfp-additional-content">${ additionalContent || "" }</div>
				</div>
			</div>
		</div>
	</div>
`
}

function getPopupInfo ( path, pathList_additional_content ) {
	const { _5mari, _molti, _comunione, _molti_inks } = getDetails( pathList_additional_content )

	if ( path.indexOf( "moltitudine-main" ) !== -1 ) {
		return {
			title: "Moltitudine",
			description: "Installation <br/> Mixed media on canvas, 420 x 200 <br/>184 small canvas 18x24",
			additionalContent: _molti
		}
	}
	else if ( path.indexOf( "mare_di_riva" ) !== -1 ) {
		return {
			title: "Mare di Riva",
			description: "Acrylic on canvas, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( path.indexOf( "normare" ) !== -1 ) {
		return {
			title: "Normare",
			description: "Acrylic on canvas, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( path.indexOf( "alto_mare" ) !== -1 ) {
		return {
			title: "Altomare",
			description: "Acrylic on canvas, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( path.indexOf( "sott_acqua" ) !== -1 ) {
		return {
			title: "Sott'acqua",
			description: "Mixed media, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( path.indexOf( "abissi" ) !== -1 ) {
		return {
			title: "Abissi",
			description: "Mixed media, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( path.indexOf( "touch_and_create" ) !== -1 ) {
		return {
			title: "Touch and Create",
			description: "Interactive Sculpture <br/> Mixed media on MDF, 120x20 <br/> 2010"
		}
	}
	else if ( path.indexOf( "maschera" ) !== -1 ) {
		return {
			title: "Maschera",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "feto" ) !== -1 ) {
		return {
			title: "Feto",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "sfere" ) !== -1 ) {
		return {
			title: "Sfere",
			description: "Acrylic on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "zig" ) !== -1 ) {
		return {
			title: "Zig",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "triade" ) !== -1 ) {
		return {
			title: "Triade",
			description: "Acrylic on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "contiene" ) !== -1 ) {
		return {
			title: "Contiene",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "creativo" ) !== -1 ) {
		return {
			title: "Creativo",
			description: "Acrylic on canvas, 70x70"
		}
	}
	else if ( path.indexOf( "bianco" ) !== -1 ) {
		return {
			title: "Bianco",
			description: "Mixed media on canvas, 100x150"
		}
	}
	else if ( path.indexOf( "nero" ) !== -1 ) {
		return {
			title: "Nero",
			description: "Mixed media on canvas, 100x150"
		}
	}
	else if ( path.indexOf( "comunione_dei_beni" ) !== -1 ) {
		return {
			title: "Comunione dei Beni",
			description: "Installation <br/> Mixed media on PVC <br/> 2010",
			additionalContent: _comunione
		}
	}
	else if ( path.indexOf( "moltitudine_inchiostri" ) !== -1 ) {
		return {
			title: "Moltitudine Inchiostri",
			description: "Installation <br/> Mixed media on cardboard, 250x200 <br/> 14.5x20 per cardboard",
			additionalContent: _molti_inks
		}
	}
	else return {
		title: "untitled"
	}
}
