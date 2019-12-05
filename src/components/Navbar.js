export function setupNavbar () {
	//TOGGLE NAVLINKS
	const toggler = document.querySelector( ".navbar-toggler" );
	const navlinks = document.querySelector( ".navbar-navlinks" );
	const home = document.querySelector( "#home" );
	const logo = document.querySelector( ".navbar-logo" );

	window.addEventListener( "click", e => {
		if ( e.target === toggler ) {
			e.target.classList.toggle( "burger-cross" );
			navlinks.classList.toggle( "collapse" );
		} else if ( !navlinks.classList.contains( "collapse" ) ) {
			navlinks.classList.add( "collapse" );
			toggler.classList.remove( "burger-cross" );
		}
	} );
	//TOGGLE LOGO
	const homeObs = new IntersectionObserver( cb, { threshold: 0.05 } )
	function cb ( entries ) {
		entries.forEach( entry => {
			if ( entry.intersectionRatio > 0.05 && !logo.classList.contains( "hidden" ) ) {
				logo.classList.add( "hidden" )
			}
			else if ( entry.intersectionRatio < 0.05 && logo.classList.contains( "hidden" ) ) {
				logo.classList.remove( "hidden" )
			}
		} )
	}
	homeObs.observe( home )
}