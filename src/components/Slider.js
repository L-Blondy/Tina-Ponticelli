const slider = document.querySelector( ".custom-slider" );
const imgContainer = document.querySelector( ".custom-slider__images" );
const sliderImages = sortImages( require( "../assets/slider/*.*" ) );
const sliderImagesLength = Object.keys( sliderImages ).length;

export function Slider ( preload ) {
	this.preload = preload;
	this.curIndex = 0;
	this.loadedIndex = 0;
	this.slide_delay = 10000;
	this.autoSlide;
	this.shouldAutoSlide = true;
}

Slider.prototype.loadSlide = function ( indexToLoad ) {
	const img_name = Object.keys( sliderImages )[ indexToLoad ]
	const img_path = sliderImages[ img_name ][ Object.keys( sliderImages[ img_name ] )[ 0 ] ]

	const img = document.createElement( "IMG" );
	img.src = img_path;
	img.className = "slide-img"
	img.setAttribute( "alt", "slide" + indexToLoad )

	const a = document.createElement( "A" );
	a.href = img_path;
	a.className = ( indexToLoad === 0 ? "slide-link center" : "slide-link right" );
	a.setAttribute( "tabindex", -1 );
	a.appendChild( img )
	imgContainer.appendChild( a )
	img.onload = () => {
		this.loadedIndex++
		if ( indexToLoad < this.curIndex + this.preload ) {
			this.loadSlide( this.loadedIndex )
		}
	}
}
Slider.prototype.goLeft = function () {
	const curCenter = document.querySelector( ".slide-link.center" );
	const nextCenter = curCenter.previousElementSibling;
	if ( nextCenter && nextCenter.classList.contains( "slide-link" ) ) {
		curCenter.classList.remove( "center" )
		curCenter.classList.add( "right" )
		nextCenter.classList.remove( "left" )
		nextCenter.classList.add( "center" );
		this.curIndex--;
	}
	document.querySelector( ".custom-slider__arrow-right" ).classList.remove( "disabled" )
	if ( this.curIndex === 0 ) {
		document.querySelector( ".custom-slider__arrow-left" ).classList.add( "disabled" )
	}
}
Slider.prototype.goRight = function () {
	const curCenter = document.querySelector( ".slide-link.center" );
	const nextCenter = curCenter.nextElementSibling;
	if ( nextCenter && nextCenter.classList.contains( "slide-link" ) ) {
		curCenter.classList.remove( "center" )
		curCenter.classList.add( "left" )
		nextCenter.classList.remove( "right" )
		nextCenter.classList.add( "center" );
		this.curIndex++;
		document.querySelector( ".custom-slider__arrow-left" ).classList.remove( "disabled" )
		if ( this.curIndex === sliderImagesLength - 1 ) {
			document.querySelector( ".custom-slider__arrow-right" ).classList.add( "disabled" )
		}
		if ( this.curIndex > this.loadedIndex - this.preload - 1 && this.loadedIndex < sliderImagesLength ) {
			this.loadSlide( this.curIndex + this.preload )
		}
	}
}
Slider.prototype.startAutoSlide = function () {
	this.autoSlide = setInterval( () => this.goRight(), this.slide_delay )
}
Slider.prototype.stopAutoSlide = function () {
	clearInterval( this.autoSlide )
}
Slider.prototype.setup = function () {
	this.loadSlide( 0 )
	if ( "IntersectionObserver" in window ) {
		const slider_observer = new IntersectionObserver( cb, { threshold: 0.9 } )
		const that = this;
		function cb ( entries ) {
			entries.forEach( entry => {
				if ( entry.intersectionRatio > 0.9 ) {
					that.shouldAutoSlide = true
					that.startAutoSlide()
				} else {
					that.shouldAutoSlide = false;
					that.stopAutoSlide()
				}
			} )
		}
		slider_observer.observe( slider )
	} else {
		this.startAutoSlide()
	}

	slider.addEventListener( "click", e => {
		this.stopAutoSlide()
		const clicked_left = e.target.classList.contains( "custom-slider__arrow-left" );
		const clicked_right = e.target.classList.contains( "custom-slider__arrow-right" );;
		if ( clicked_left ) {
			this.goLeft()
		}
		if ( clicked_right ) {
			this.goRight();
		}
	} )
}

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
