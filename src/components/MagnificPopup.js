import { getPathList } from "../utils/getPathList.js"

window.addEventListener( "popstate", ( e ) => {
	$.magnificPopup.close()
} )

const baseLocation = document.location.pathname;

export function MFP ( target, delegate ) {
	this.pathList_additional_content = getPathList( require( "../assets/_additional_content/**/*.*" ), "details" )
	this.target = target;
	this.delegate = delegate
	this.details = this.getDetails()
}
MFP.prototype.setup = function () {
	$( this.target ).magnificPopup( {
		delegate: this.delegate,
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
			elementParse: ( item ) => this.loadPopup( item ),
			close: () => {
				document.location.pathname === baseLocation + "slide" && history.back();
			}
		}
	} );
}

MFP.prototype.loadPopup = function ( item ) {
	///Necessary data is stored on the "A" tag of the card (ad. es srcset)
	const { title, description, additionalContent } = this.getPopupData( item.src )
	const A = item.el[ 0 ]
	item.srcset = A.dataset.srcset
	const temp1 = item.srcset.split( " " )
	const temp2 = temp1[ temp1.length - 2 ]
	const lastW = temp2.substring( 0, temp2.length - 3 ) + 1
	item.srcset = A.dataset.srcset + item.src + " " + lastW + "w"
	//caching next images
	const img = document.createElement( "IMG" )
	img.src = item.src
	img.srcset = item.srcset

	item.type = "inline"
	item.src = `
	<button title="Close (Esc)" type="button" class="mfp-close" style="color:white;"></button>
	<div class="mfp-figure">
	<img class="mfp-img" alt="${ title }" src=${ item.src } srcset="${ item.srcset }"/>
	
		<div class="mfp-custom">
			<div class="mfp-bottom-bar">
				<div class="mfp-title">${ title }</div>
				<div class="mfp-description">${ description }</div>
				<div class="mfp-relative">
					<div class="mfp-additional-content">${ additionalContent || "" }</div>
				</div>
			</div>
		</div>
	</div>`
}

MFP.prototype.getDetails = function () {
	const path_5mari = this.pathList_additional_content[ "5mari" ]
	const path_moltitudine = this.pathList_additional_content[ "moltitudine" ]
	const path_comunione = this.pathList_additional_content[ "comunione" ]
	const path_molti_inks = this.pathList_additional_content[ "molti_inks" ]

	const _5mari = `
	<div class="mfp-additional-content__5mari">
		<img src=${path_5mari[ 0 ] } alt=${ path_5mari[ 0 ] } class=""/>
		<span class="mfp-title mfp-title--sub">I Cinque Mari</span>
		<div class="mfp-description mfp-description--sub">
			Costa Crociere, Napoli, 2007
		</div> 
	</div>
	`
	const _molti = ( function () {
		let HTML = ""
		path_moltitudine.forEach( path => {
			if ( "IntersectionObserver" in window ) {
				HTML += `<img class="moltitudune-detail" data-src="${ path }" alt="detail" />`
			} else {
				HTML += `<img class="moltitudune-detail" src="${ path }" alt="detail" />`
			}
		} )
		HTML += `
		<script>
			if("IntersectionObserver" in window){
				const io = new IntersectionObserver( cb, { threshold: 0.01,rootMargin:"0px 0px 150px 0px" } )
				function cb ( entries ) {
					entries.forEach( function( e ) {
						if ( e.intersectionRatio > 0 ) {
							e.target.src=e.target.dataset.src
							e.target.srcset=e.target.dataset.srcset || e.target.dataset.src
							io.unobserve(e.target)
						}
					} )
				}
				const details = [].slice.call(document.querySelectorAll(".moltitudune-detail"))
				details.forEach( function( detail ) { io.observe(detail) } )
			} 
		</script>`
		return HTML
	} )()

	const _comunione = `
	< p > This is Comunione</p >
	`
	const _molti_inks = `
	< p > This is Inks</p >
	`
	return { _5mari, _molti, _comunione, _molti_inks }
}

MFP.prototype.getPopupData = function ( src ) {
	const { _5mari, _molti, _comunione, _molti_inks } = this.details

	if ( src.indexOf( "moltitudine-main" ) !== -1 ) {
		return {
			title: "Moltitudine",
			description: "Installation <br/> Mixed media on canvas, 420 x 200 <br/>184 small canvas 18x24",
			additionalContent: _molti
		}
	}
	else if ( src.indexOf( "mare_di_riva" ) !== -1 ) {
		return {
			title: "Mare di Riva",
			description: "Acrylic on canvas, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( src.indexOf( "normare" ) !== -1 ) {
		return {
			title: "Normare",
			description: "Acrylic on canvas, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( src.indexOf( "alto_mare" ) !== -1 ) {
		return {
			title: "Altomare",
			description: "Acrylic on canvas, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( src.indexOf( "sott_acqua" ) !== -1 ) {
		return {
			title: "Sott'acqua",
			description: "Mixed media, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( src.indexOf( "abissi" ) !== -1 ) {
		return {
			title: "Abissi",
			description: "Mixed media, 100x100 <br/> 2007",
			additionalContent: _5mari
		}
	}
	else if ( src.indexOf( "touch_and_create" ) !== -1 ) {
		return {
			title: "Touch and Create",
			description: "Interactive Sculpture <br/> Mixed media on MDF, 120x20 <br/> 2010"
		}
	}
	else if ( src.indexOf( "maschera" ) !== -1 ) {
		return {
			title: "Maschera",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "feto" ) !== -1 ) {
		return {
			title: "Feto",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "sfere" ) !== -1 ) {
		return {
			title: "Sfere",
			description: "Acrylic on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "zig" ) !== -1 ) {
		return {
			title: "Zig",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "triade" ) !== -1 ) {
		return {
			title: "Triade",
			description: "Acrylic on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "contiene" ) !== -1 ) {
		return {
			title: "Contiene",
			description: "Mixed media on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "creativo" ) !== -1 ) {
		return {
			title: "Creativo",
			description: "Acrylic on canvas, 70x70"
		}
	}
	else if ( src.indexOf( "bianco" ) !== -1 ) {
		return {
			title: "Bianco",
			description: "Mixed media on canvas, 100x150"
		}
	}
	else if ( src.indexOf( "nero" ) !== -1 ) {
		return {
			title: "Nero",
			description: "Mixed media on canvas, 100x150"
		}
	}
	else if ( src.indexOf( "comunione_dei_beni" ) !== -1 ) {
		return {
			title: "Comunione dei Beni",
			description: "Installation <br/> Mixed media on PVC <br/> 2010",
			additionalContent: _comunione
		}
	}
	else if ( src.indexOf( "moltitudine_inchiostri" ) !== -1 ) {
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