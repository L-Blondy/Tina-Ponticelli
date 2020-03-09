export const text = {
	molti: {
		en: "english text here",
		it: "italiano qua",
		fr: `The work "Moltitudine" appears as a panel composed by 184 single frames of small sizes; inlays of a majestic picture but also single works, perfect for shape, style and contents.<br/>
		The peculiarity of Tina Ponticelli's work is her ability in different levels: the first one is chromatic-geometric kind with progressive colors' distances that follow one another along;
		the second one is symbolic kind with a series of signs, again composed through different combinations between shapes and colors, with some rare exegetic suggestions turned in main point in every single section of the assemblage;
		the third one has a stylistic quality: if we consider the single frames as freestanding works, we find the whole way of research of the artist, with her abstract and more seldom figurative outcomes that, all together, represent her characteristic dualism.`
	},
	comunione: {
		en: "english text here",
		it: "italiano qua",
		fr: `Con Comunione dei beni, Tina Ponticelli introduce il concetto dell’interattività prospettica, teso ad assegnare allo spettatore un ruolo attivo nella creazione della stessa attraverso una sua diretta partecipazione.
		La trasparenza dei supporti di plastica accresce la mutevolezza dell’istallazione che nei singoli elementi oscillanti, trova uno sfondo sempre diverso perché ciascun pezzo, rendendosi visibile attraverso l’elemento che lo precede, ne diventa parte integrante e viceversa. 
		L’artista non presenta un'unica opera, ma tante opere diverse, per quante saranno le diverse prospettive dalle quali sarà osservata l’installazione.
		Un’opera in itinere, dunque, per la quale il momento espositivo non giunge, come di consueto, a conclusione di un percorso prima (progettuale poi esecutivo) ma la mostra diventa solo l’inizio di un’ulteriore fase creativa: il tempo iniziale si unisce a quello finale. `
	}
}

export function get_lang () {
	const body = document.querySelector( "body" )
	return body.dataset.lang
}