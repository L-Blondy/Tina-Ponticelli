window.addEventListener( "popstate", () => {
	$.magnificPopup.close()
} )

export function setMagnificPopup ( target, delegate ) {
	$( target ).magnificPopup( {
		delegate: delegate,
		type: 'image',
		gallery: {
			enabled: true,
			preload: [ 1, 2 ]
		},
		callbacks: {
			open: () => {
				history.pushState( {}, "", "/slide" )
			},
			close: () => {
				history.back()
			}
		}
	} );
}