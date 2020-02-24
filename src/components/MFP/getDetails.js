export function getDetails ( pathList_additional_content ) {
	const _5mari = `
		<div class="mfp-additional-content__5mari">
			<img src=${pathList_additional_content[ "5mari" ][ 0 ] } alt=${ pathList_additional_content[ "5mari" ][ 0 ] } class=""/>
			<span class="mfp-title mfp-title--sub">I Cinque Mari</span>
			<div class="mfp-description mfp-description--sub">
				Costa Crociere, Napoli, 2007
			</div> 
		</div>
	`
	console.log( pathList_additional_content[ "moltitudine" ] )
	const _molti = `
	<p> This is Moltitudine</p >
	`
	const _comunione = `
	< p > This is Comunione</p >
	`
	const _molti_inks = `
	< p > This is Inks</p >
	`
	return { _5mari, _molti, _comunione, _molti_inks }
}