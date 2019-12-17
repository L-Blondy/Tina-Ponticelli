export function loadImg_computed ( elem ) {
	const IMG = document.createElement( "IMG" );
	IMG.src = elem.dataset.src;
	if ( elem.dataset.srcset ) IMG.srcset = elem.dataset.srcset;
	//pass all attributes
	for ( let i = 0; i < elem.attributes.length; i++ ) {
		if ( elem.attributes[ i ].name !== "src" && elem.attributes[ i ].name !== "data-src" && elem.attributes[ i ].name !== "data-srcset" )
			IMG.setAttribute( elem.attributes[ i ].name, elem.attributes[ i ].value )
	}
	if ( "Promise" in window ) {
		return new Promise( function ( resolve ) {
			IMG.onload = () => {
				elem.parentElement.replaceChild( IMG, elem );
				resolve( IMG );
			};
		} );
	} else {
		IMG.onload = () => {
			elem.parentElement.replaceChild( IMG, elem );
		};
	}
}