const phone_autoScroll = {
	setup_autoScroll () {
		this.attach_resizeListener()
		this.attach_touchListener()
		this.attach_IO_for_autoScroll()
	},
	attach_resizeListener () {
		const resizeHandler = () => {
			this.stop_autoScroll()
			if ( window.matchMedia( "(max-width: 598.9px)" ).matches ) {
				this.start_autoScroll()
			}
		}
		if ( !( "IntersectionObserver" in window ) )
			resizeHandler()
		window.addEventListener( "resize", () => resizeHandler() )
	},
	attach_touchListener () {
		this.container.addEventListener( "touchstart", () => this.stop_autoScroll() )
	},
	start_autoScroll () {
		this.autoScroll = setInterval( () => this.container.scrollBy( 1, 0 ), 100 );
	},
	stop_autoScroll () {
		clearInterval( this.autoScroll );
	},
	attach_IO_for_autoScroll () {
		const self = this
		const threshold = 0.6
		const IO = new IntersectionObserver( cb, { threshold } )
		function cb ( entries ) {
			entries.forEach( e => {
				if ( e.intersectionRatio > threshold )
					self.start_autoScroll()
				else if ( e.intersectionRatio < threshold )
					self.stop_autoScroll()
			} )
		}
		IO.observe( this.container )
	}
}
export { phone_autoScroll }