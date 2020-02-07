const { sqrt, floor, ceil } = Math

function sortObject ( obj ) {
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


export function getPathList ( Obj, regroup ) {
	const orderObj = sortObject( Obj )
	const pathList = regroup ? {} : []
	let currentProp = "", prevProp = ""
	for ( let prop in orderObj ) {
		if ( regroup ) {
			const splittedPropName = prop.split( "-" )
			currentProp = splittedPropName[ 0 ]

			if ( currentProp !== prevProp ) {
				pathList[ currentProp ] = {
					"main": orderObj[ prop ][ Object.keys( orderObj[ prop ] )[ 0 ] ],
					"srcset": ""
				}
			}
			else {
				const size = parseInt( splittedPropName[ splittedPropName.length - 1 ].slice( 0, -1 ) ) * window.devicePixelRatio
				pathList[ currentProp ][ "srcset" ] += orderObj[ prop ][ Object.keys( orderObj[ prop ] )[ 0 ] ] + " " + size + "w, "
			}
			prevProp = currentProp
		}
		else {
			pathList.push( orderObj[ prop ][ Object.keys( orderObj[ prop ] )[ 0 ] ] )
		}
	}
	return pathList
}