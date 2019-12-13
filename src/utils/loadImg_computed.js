export function loadImg_computed ( elem ) {
	if ( "Promise" in window ) {
		return new Promise( function ( resolve ) {
			const IMG = document.createElement( "IMG" );
			IMG.src = elem.dataset.src;
			IMG.className = elem.classList
			IMG.onload = () => {
				elem.parentElement.replaceChild( IMG, elem );
				resolve( IMG );
			};
		} );
	} else {
		const IMG = document.createElement( "IMG" );
		IMG.src = elem.dataset.src;
		IMG.className = elem.classList
		IMG.onload = () => {
			elem.parentElement.replaceChild( IMG, elem );
		};
	}
}