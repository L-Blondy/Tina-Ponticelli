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
			if ( typeof orderObj[ prop ][ Object.keys( orderObj[ prop ] )[ 0 ] ] === "string" ) {
				for ( let subProp in orderObj[ prop ] ) {
					pathList.push( orderObj[ prop ][ subProp ] )
				}
			}
			else {
				pathList[ prop ] = []
				for ( let subprop in orderObj[ prop ] ) {
					const file_extension = Object.keys( orderObj[ prop ][ subprop ] )[ 0 ]
					const path = orderObj[ prop ][ subprop ][ file_extension ]
					pathList[ prop ].push( path )
				}
			}
		}
	}
	return pathList
}