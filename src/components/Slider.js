import { loadImg_computed } from "../utils/loadImg_computed.js"
import { onVisible } from "lb-onvisible"

export function Slider ( pathList_slides, preload, autoSlideDelay = 10000, loadDelay = 300 ) {
	this.customSlider = document.querySelector( ".slider" );
	this.imgContainer = document.querySelector( ".slider__images" );
	this.leftArrow = document.querySelector( ".slider__arrow-left" );
	this.rightArrow = document.querySelector( ".slider__arrow-right" );
	this.pathList_slides = pathList_slides;
	this.pathList_popup = pathList_slides;
	this.preload = preload;
	this.autoSlideDelay = autoSlideDelay;
	this.loadDelay = loadDelay;
	this.index = 0;
	this.loadedIndex = 0;
	this.canClick = true;
}

Slider.prototype.setup = function () {
	this.slides = this.pathList_slides.map( ( path, index ) => {
		const A = document.createElement( "A" );
		const IMG = document.createElement( "IMG" );
		A.textContent = "loading...";
		A.className = index === 0 ? "slide__link slide__link--center" : "slide__link slide__link--right";
		A.href = this.pathList_popup[ index ];
		IMG.dataset.src = path;
		IMG.className = "slide__img";
		IMG.setAttribute( "alt", "slide" + index )
		IMG.style.opacity = "0"
		this.imgContainer.appendChild( A );
		A.appendChild( IMG );
		return IMG;
	} );
	this.center = this.slides[ 0 ].parentElement;
	this.loadImg( 0, this.preload );

	this.customSlider.addEventListener( "click", e => {
		this.stopAutoSlide();
		if ( e.target === this.leftArrow ) {
			this.goLeft();
		} else if ( e.target === this.rightArrow ) {
			this.goRight();
		}
	} );
	onVisible( this.leftArrow, {
		class: "fadeFromRight",
	} )
	onVisible( this.rightArrow, {
		class: "fadeFromLeft",
	} )
	onVisible( this.imgContainer, {
		class: "fadeFromBottom",
	} )
	return this;
};

Slider.prototype.loadImg = function ( loadIndex, stopIndex ) {

	if ( "Promise" in window && "IntersectionObserver" in window ) {
		const that = this
		const obs = new IntersectionObserver( cb, { threshold: 0.001 } )
		function cb ( entries ) {
			entries.forEach( function ( entry ) {
				if ( entry.intersectionRatio > 0 ) {
					that.startAutoSlide()
					obs.unobserve( that.customSlider )
				}
			} )
		}
		loadImg_computed( this.slides[ loadIndex ] ).then( () => {
			if ( loadIndex === 0 ) {
				obs.observe( this.customSlider )
			}
			this.loadedIndex = loadIndex;
			if ( loadIndex < stopIndex ) {
				this.loadImg( loadIndex + 1, stopIndex );
			}
		} );
	} else {
		for ( let i = 0; i < this.slides.length; i++ ) {
			loadImg_computed( this.slides[ i ] )
		}
	}
};

Slider.prototype.goLeft = function () {
	if ( !this.canClick )
		return
	if ( this.index > 0 ) {
		this.index--;
		this.center.classList.remove( "slide__link--center" );
		this.center.classList.add( "slide__link--right" );
		this.center.previousElementSibling.classList.remove( "slide__link--left" );
		this.center.previousElementSibling.classList.add( "slide__link--center" );
		this.center = this.center.previousElementSibling;
	}
	if ( this.rightArrow.classList.contains( "slider__arrow-right--disabled" ) ) {
		this.rightArrow.classList.remove( "slider__arrow-right--disabled" )
	}
	if ( this.index === 0 && !this.leftArrow.classList.contains( "slider__arrow-left--disabled" ) )
		this.leftArrow.classList.add( "slider__arrow-left--disabled" )
};

Slider.prototype.goRight = function () {
	if ( !this.canClick )
		return
	if ( this.index < this.slides.length - 1 ) {
		this.index++;
		this.center.classList.remove( "slide__link--center" );
		this.center.classList.add( "slide__link--left" );
		this.center.nextElementSibling.classList.remove( "slide__link--right" );
		this.center.nextElementSibling.classList.add( "slide__link--center" );
		this.center = this.center.nextElementSibling;
	}
	if ( "Promise" in window ) {
		const nextImgNotLoaded =
			this.index + this.preload > this.loadedIndex &&
			this.index + this.preload < this.slides.length;
		if ( nextImgNotLoaded ) {
			this.canClick = false;
			setTimeout(
				() => {
					this.canClick = true
					this.loadImg( this.index + this.preload, this.index + this.preload )
				}, this.loadDelay
			);
		}
	}
	if ( this.leftArrow.classList.contains( "slider__arrow-left--disabled" ) ) {
		this.leftArrow.classList.remove( "slider__arrow-left--disabled" )
	}
	if ( this.index === this.slides.length - 1 )
		this.rightArrow.classList.add( "slider__arrow-right--disabled" )

};

Slider.prototype.startAutoSlide = function () {
	this.autoSlide = setInterval( () => this.goRight(), this.autoSlideDelay );
	return this;
};
Slider.prototype.stopAutoSlide = function () {
	clearInterval( this.autoSlide );
};
