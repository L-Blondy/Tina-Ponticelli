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


export function getPathList ( Obj ) {
	const orderObj = sortObject( Obj )
	const pathList = []
	for ( let prop in orderObj ) {
		pathList.push( orderObj[ prop ][ Object.keys( orderObj[ prop ] )[ 0 ] ] )
	}
	return pathList
}