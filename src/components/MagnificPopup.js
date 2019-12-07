window.addEventListener( "popstate", ( e ) => {
	$.magnificPopup.close()
} )

const baseLocation = document.location.pathname;

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
				history.pushState( {}, "", baseLocation + "slide" )
			},
			close: () => {
				document.location.pathname === baseLocation + "slide" && history.back();
			}
		}
	} );
}