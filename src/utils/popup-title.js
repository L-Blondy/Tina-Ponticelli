//used in Slider.js and Cards.js

export function getPopupTitle ( path ) {
	console.log( 'loading title, see "src/utils/popup-title"' )

	if ( path.indexOf( "1-riva" ) !== -1 ) {
		return "Riva"
	}
	else if ( path.indexOf( "2-normare" ) !== -1 ) {
		return "Normare"
	}
	else if ( path.indexOf( "3-alto mare" ) !== -1 ) {
		return "Alto Mare"
	}
	else if ( path.indexOf( "ara-ht" ) !== -1 ) {
		return "Ara"
	}
	else if ( path.indexOf( "ARAN-ht" ) !== -1 ) {
		return "Aran"
	}
	else if ( path.indexOf( "comunione-ht" ) !== -1 ) {
		return "Comunione"
	}
	else if ( path.indexOf( "1-riva" ) !== -1 ) {
		return "Riva"
	}
	else if ( path.indexOf( "molti" ) !== -1 ) {
		return "molti"
	}
	else return "No title yet"
}