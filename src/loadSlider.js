const sliderImages = require( "./assets/slider/*.*" );
const slider = document.querySelector( ".custom-slider" )
const sliderImagesLength = Object.keys( sliderImages ).length;
let curIndex = 0

slider.addEventListener( "click", e => {
	const clicked_left = e.target.classList.contains( "slider-left-side" );
	const clicked_right = !clicked_left;
	const currentCenter = document.querySelector( ".slide.center" );
	if ( clicked_left ) {
		const nextCenter = currentCenter.nextElementSibling;
		if ( nextCenter && nextCenter.classList.contains( "slide" ) ) {
			currentCenter.classList.remove( "center" )
			currentCenter.classList.add( "left" )
			nextCenter.classList.remove( "right" )
			nextCenter.classList.add( "center" );
			curIndex++;
		}
	}
	if ( clicked_right ) {
		const nextCenter = currentCenter.previousElementSibling;
		if ( nextCenter && nextCenter.classList.contains( "slide" ) ) {
			currentCenter.classList.remove( "center" )
			currentCenter.classList.add( "right" )
			nextCenter.classList.remove( "left" )
			nextCenter.classList.add( "center" );
			curIndex--;
		}
	}
	console.log( curIndex )
} )

function loadSliderRecursivly ( index ) {
	const promise = new Promise( function ( resolve ) {
		const imgName = Object.keys( sliderImages )[ index ]
		const img = document.createElement( "IMG" );
		const imgPath = sliderImages[ imgName ][ Object.keys( sliderImages[ imgName ] )[ 0 ] ]
		img.src = imgPath;
		img.className = index > 0 ? "slide right" : "slide center";
		img.setAttribute( "alt", "slide" + index )
		slider.appendChild( img )
		img.onload = () => resolve();
	} )
	if ( index < sliderImagesLength - 1 ) {
		promise.then( () => {
			loadSliderRecursivly( index + 1 )
		} )
	}
}
loadSliderRecursivly( 0 );