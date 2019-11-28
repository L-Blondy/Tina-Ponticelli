const slider = document.querySelector( ".custom-slider" );
const sliderImages = sortImages( require( "./assets/slider/*.*" ) );
const sliderImagesLength = Object.keys( sliderImages ).length;

function sortImages ( obj ) {
	let key,
		tempArry = [],
		i,
		tempObj = {};

	for ( key in obj ) {
		tempArry.push( key );
	}

	tempArry.sort(
		function ( a, b ) {
			return a.toLowerCase().localeCompare( b.toLowerCase() );
		}
	);
	for ( i = 0; i < tempArry.length; i++ ) {
		tempObj[ tempArry[ i ] ] = obj[ tempArry[ i ] ];
	}
	return tempObj;
}


export default function loadSlides ( preload ) {
	let curIndex = 0;
	let loadedIndex = -1;
	if ( "Promise" in window ) {
		loadSlide( 0 )
	} else {
		loadAllSlides()
	}

	function loadSlide ( indexToLoad ) {
		const promise = new Promise( function ( resolve ) {
			const img_name = Object.keys( sliderImages )[ indexToLoad ]
			const img_path = sliderImages[ img_name ][ Object.keys( sliderImages[ img_name ] )[ 0 ] ]
			const img = document.createElement( "IMG" );
			img.src = img_path;
			img.className = ( indexToLoad === 0 ? "slide center" : "slide right" );
			img.setAttribute( "alt", "slide" + indexToLoad )
			slider.appendChild( img )
			img.onload = () => resolve( ++loadedIndex );
		} )
		if ( indexToLoad < curIndex + preload ) {
			promise.then( loadedIndex => loadSlide( loadedIndex + 1 ) )
		}
	}
	function loadAllSlides () {
		let current = 0;
		for ( let img_name in sliderImages ) {
			const img = document.createElement( "IMG" );
			const img_path = sliderImages[ img_name ][ Object.keys( sliderImages[ img_name ] )[ 0 ] ]
			img.src = img_path;
			img.className = ( current === 0 ? "slide center" : "slide right" );
			img.setAttribute( "alt", "slide" + current )
			slider.appendChild( img );
			current++;
		}
	}

	slider.addEventListener( "click", e => {
		const clicked_left = e.target.classList.contains( "slider-left-side" );
		const clicked_right = e.target.classList.contains( "slider-right-side" );;
		const currentCenter = document.querySelector( ".slide.center" );
		if ( clicked_left ) {
			const nextCenter = currentCenter.previousElementSibling;
			if ( nextCenter && nextCenter.classList.contains( "slide" ) ) {
				currentCenter.classList.remove( "center" )
				currentCenter.classList.add( "right" )
				nextCenter.classList.remove( "left" )
				nextCenter.classList.add( "center" );
				curIndex--;
			}
			document.querySelector( ".slider-right-side" ).classList.remove( "disabled" )
			if ( curIndex === 0 ) {
				document.querySelector( ".slider-left-side" ).classList.add( "disabled" )
			}
		}
		if ( clicked_right ) {
			const nextCenter = currentCenter.nextElementSibling;
			if ( nextCenter && nextCenter.classList.contains( "slide" ) ) {
				currentCenter.classList.remove( "center" )
				currentCenter.classList.add( "left" )
				nextCenter.classList.remove( "right" )
				nextCenter.classList.add( "center" );
				curIndex++;
				if ( "Promise" in window ) {
					if ( curIndex > loadedIndex - preload && loadedIndex < sliderImagesLength - 1 ) {
						loadSlide( curIndex + preload )
					}
				}
				document.querySelector( ".slider-left-side" ).classList.remove( "disabled" )
				if ( curIndex === sliderImagesLength - 1 ) {
					document.querySelector( ".slider-right-side" ).classList.add( "disabled" )
				}
			}
		}
	} )
}
