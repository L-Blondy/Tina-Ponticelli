export function setupNavbar () {
	//TOGGLE NAVLINKS
	const toggler = document.querySelector( ".navbar__toggler" );
	const navlinks = document.querySelector( ".navbar__navlinks" );
	const home = document.querySelector( "#home" );
	const logo = document.querySelector( ".navbar__logo" );

	window.addEventListener( "click", e => {
		if ( e.target === toggler ) {
			e.target.classList.toggle( "burger-cross" );
			navlinks.classList.toggle( "navbar__navlinks--collapse" );
			if ( logo.classList.contains( "navbar__logo--hidden" ) )
				logo.classList.remove( "navbar__logo--hidden" )
		}
		else if ( !navlinks.classList.contains( "navbar__navlinks--collapse" ) ) {
			navlinks.classList.add( "navbar__navlinks--collapse" );
			toggler.classList.remove( "burger-cross" );
		}
	} );
	//TOGGLE LOGO
	if ( "IntersectionObserver" in window ) {
		const homeObs = new IntersectionObserver( cb, { threshold: 0.4 } )
		function cb ( entries ) {
			entries.forEach( entry => {
				if ( entry.intersectionRatio > 0.4 && !logo.classList.contains( "navbar__logo--hidden" ) ) {
					logo.classList.add( "navbar__logo--hidden" )
					logo.classList.remove( "navbar__logo--not-hidden" )
				}
				else if ( entry.intersectionRatio < 0.4 && logo.classList.contains( "navbar__logo--hidden" ) ) {
					logo.classList.remove( "navbar__logo--hidden" )
					logo.classList.add( "navbar__logo--not-hidden" )
				}
			} )
		}
		homeObs.observe( home )
	} else {
		logo.classList.remove( "navbar__logo--hidden" )
	}
}