const slider = document.querySelector( ".custom-slider" );
const imgContainer = document.querySelector( ".custom-slider__images" );
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

export default function setupSlider ( preload ) {
	let curIndex = 0;
	let loadedIndex = 0;
	loadSlide( 0 )
	const slide_delay = 10000;
	let autoSlide;
	let shouldAutoSlide = true;

	function loadSlide ( indexToLoad ) {
		const img_name = Object.keys( sliderImages )[ indexToLoad ]
		const img_path = sliderImages[ img_name ][ Object.keys( sliderImages[ img_name ] )[ 0 ] ]

		const img = document.createElement( "IMG" );
		img.src = img_path;
		img.className = "slide-img"
		img.setAttribute( "alt", "slide" + indexToLoad )

		const a = document.createElement( "A" );
		a.href = img_path;
		a.className = ( indexToLoad === 0 ? "slide-link center" : "slide-link right" );
		a.setAttribute("tabindex", -1);
		a.appendChild( img )
		imgContainer.appendChild( a )
		img.onload = () => {
			loadedIndex++
			if ( indexToLoad < curIndex + preload ) {
				loadSlide( loadedIndex )
			}
		}
	}
	function goRight () {
		const curCenter = document.querySelector( ".slide-link.center" );
		const nextCenter = curCenter.nextElementSibling;
		if ( nextCenter && nextCenter.classList.contains( "slide-link" ) ) {
			curCenter.classList.remove( "center" )
			curCenter.classList.add( "left" )
			nextCenter.classList.remove( "right" )
			nextCenter.classList.add( "center" );
			curIndex++;
			document.querySelector( ".custom-slider__arrow-left" ).classList.remove( "disabled" )
			if ( curIndex === sliderImagesLength - 1 ) {
				document.querySelector( ".custom-slider__arrow-right" ).classList.add( "disabled" )
			}
			if ( curIndex > loadedIndex - preload - 1 && loadedIndex < sliderImagesLength ) {
				loadSlide( curIndex + preload )
			}
		}
	}
	function goLeft () {
		const curCenter = document.querySelector( ".slide-link.center" );
		const nextCenter = curCenter.previousElementSibling;
		if ( nextCenter && nextCenter.classList.contains( "slide-link" ) ) {
			curCenter.classList.remove( "center" )
			curCenter.classList.add( "right" )
			nextCenter.classList.remove( "left" )
			nextCenter.classList.add( "center" );
			curIndex--;
		}
		document.querySelector( ".custom-slider__arrow-right" ).classList.remove( "disabled" )
		if ( curIndex === 0 ) {
			document.querySelector( ".custom-slider__arrow-left" ).classList.add( "disabled" )
		}
	}
	function startAutoSlide () {
		autoSlide = setInterval( goRight, slide_delay )
	}
	function stopAutoSlide () {
		clearInterval( autoSlide )
	}

	if ( "IntersectionObserver" in window ) {
		const slider_observer = new IntersectionObserver( cb, { threshold: 0.9 } )
		function cb ( entries ) {
			entries.forEach( entry => {
				if ( entry.intersectionRatio > 0.9 ) {
					shouldAutoSlide = true
					startAutoSlide()
				} else {
					shouldAutoSlide = false;
					stopAutoSlide()
				}
			} )
			console.log( shouldAutoSlide )
		}
		slider_observer.observe( slider )
	} else {
		startAutoSlide()
	}

	slider.addEventListener( "click", e => {
		stopAutoSlide()
		const clicked_left = e.target.classList.contains( "custom-slider__arrow-left" );
		const clicked_right = e.target.classList.contains( "custom-slider__arrow-right" );;
		if ( clicked_left ) {
			goLeft()
		}
		if ( clicked_right ) {
			goRight();
		}
	} )
}

