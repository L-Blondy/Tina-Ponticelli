export function Slider ( pathList, preload, autoSlideDelay = 10000, loadDelay = 300 ) {
	this.customSlider = document.querySelector( ".custom-slider" );
	this.imgContainer = document.querySelector( ".custom-slider__images" );
	this.leftArrow = document.querySelector( ".custom-slider__arrow-left" );
	this.rightArrow = document.querySelector( ".custom-slider__arrow-right" );
	this.pathList = pathList;
	this.preload = preload;
	this.autoSlideDelay = autoSlideDelay;
	this.loadDelay = loadDelay;
	this.index = 0;
	this.loadedIndex = 0;
	this.canClick = true;
}

Slider.prototype.setup = function () {
	this.slides = this.pathList.map( ( path, index ) => {
		const A = document.createElement( "A" );
		const IMG = document.createElement( "IMG" );
		A.textContent = "loading...";
		A.className = index === 0 ? "slide-link center" : "slide-link right";
		A.href = path;
		IMG.dataset.src = path;
		IMG.className = "slide-img";
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
	return this;
};

Slider.prototype.loadImg = function ( loadIndex, stopIndex ) {
	if ( "Promise" in window ) {
		loadImg( this.slides[ loadIndex ] ).then( () => {
			if ( loadIndex === 0 ) {
				this.startAutoSlide();
			}
			this.loadedIndex = loadIndex;
			if ( loadIndex < stopIndex ) {
				this.loadImg( loadIndex + 1, stopIndex );
			}
		} );
	} else {
		/********************************************************************************************************/
		for ( let i = 0; i < this.slides.length; i++ ) {
			loadImg( this.slides[ i ] )
		}
		/********************************************************************************************************/
	}
};

Slider.prototype.goLeft = function () {
	if ( !this.canClick )
		return
	if ( this.index > 0 ) {
		this.index--;
		this.center.classList.remove( "center" );
		this.center.classList.add( "right" );
		this.center.previousElementSibling.classList.remove( "left" );
		this.center.previousElementSibling.classList.add( "center" );
		this.center = this.center.previousElementSibling;
	}
	if ( this.rightArrow.classList.contains( "disabled" ) )
		this.rightArrow.classList.remove( "disabled" )
	if ( this.index === 0 && !this.leftArrow.classList.contains( "disabled" ) )
		this.leftArrow.classList.add( "disabled" )
};

Slider.prototype.goRight = function () {
	if ( !this.canClick )
		return
	if ( this.index < this.slides.length - 1 ) {
		this.index++;
		this.center.classList.remove( "center" );
		this.center.classList.add( "left" );
		this.center.nextElementSibling.classList.remove( "right" );
		this.center.nextElementSibling.classList.add( "center" );
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
		if ( this.leftArrow.classList.contains( "disabled" ) )
			this.leftArrow.classList.remove( "disabled" )
		if ( this.index === this.slides.length - 1 )
			this.rightArrow.classList.add( "disabled" )
	}
};

Slider.prototype.startAutoSlide = function () {
	this.autoSlide = setInterval( () => this.goRight(), this.autoSlideDelay );
	return this;
};
Slider.prototype.stopAutoSlide = function () {
	clearInterval( this.autoSlide );
};

function loadImg ( elem ) {
	if ( "Promise" in window ) {
		return new Promise( function ( resolve ) {
			const IMG = document.createElement( "IMG" );
			IMG.src = elem.dataset.src;
			IMG.className = elem.classList
			IMG.onload = () => {
				elem.parentElement.replaceChild( IMG, elem );
				resolve( IMG );
			};
		} );
	} else {
		const IMG = document.createElement( "IMG" );
		IMG.src = elem.dataset.src;
		IMG.className = elem.classList
		IMG.onload = () => {
			elem.parentElement.replaceChild( IMG, elem );
		};
	}
}