export function getClassToAdd ( index, length ) {
	if ( window.matchMedia( "(min-width: 1560px)" ).matches ) {
		if ( index + 4 >= length - 1 )
			return "fadeFromBottom"
		switch ( index % 4 ) {
			case 0: return "fadeFromLeft";
			case 1: return "fadeFromBottom";
			case 2: return "fadeFromBottom";
			case 3: return "fadeFromRight";
			default: return "";
		}
	}
	else if ( window.matchMedia( "(min-width: 949px)" ).matches ) {
		if ( index + 3 >= length - 1 )
			return "fadeFromBottom"
		switch ( index % 3 ) {
			case 0: return "fadeFromLeft";
			case 1: return "fadeFromBottom";
			case 2: return "fadeFromRight";
			default: return "";
		}
	}
	else if ( window.matchMedia( "(min-width: 661px)" ).matches ) {
		if ( index + 2 >= length - 1 )
			return "fadeFromBottom"
		switch ( index % 4 ) {
			case 0: return "fadeFromLeft";
			case 1: return "fadeFromRight";
			case 2: return "fadeFromBottom";
			case 3: return "fadeFromBottom";
			default: return "";
		}
	}
}