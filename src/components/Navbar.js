import setScrollNav from "lb-scroll-nav";

export function setupNav () {
	//Scroll Nav
	const sections = document.querySelectorAll( "section" );
	const sectionContainer = document.querySelector( ".section-container" );
	setScrollNav( sections, sectionContainer );

	//navlinks toggle
	const toggler = document.querySelector( ".navbar-toggler" );
	const navlinks = document.querySelector( ".navbar-navlinks" );
	document.documentElement.style.setProperty( "--links-count", navlinks.children.length )

	window.addEventListener( "click", e => {
		if ( e.target === toggler ) {
			e.target.classList.toggle( "burger-cross" );
			navlinks.classList.toggle( "collapse" );
		} else if ( !navlinks.classList.contains( "collapse" ) ) {
			navlinks.classList.add( "collapse" );
			toggler.classList.remove( "burger-cross" );
		}
	} );
}