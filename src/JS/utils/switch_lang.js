export const text = {
	molti: {
		en: `The work "Moltitudine" appears as a panel composed by 184 single frames of small sizes; inlays of a majestic picture but also single works, perfect for shape, style and contents.
		<br/><br/>The peculiarity of Tina Ponticelli's work is her ability in different levels: the first one is chromatic-geometric kind with progressive colors' distances that follow one another along;
		the second one is symbolic kind with a series of signs, again composed through different combinations between shapes and colors, with some rare exegetic suggestions turned in main point in every single section of the assemblage;
		the third one has a stylistic quality: if we consider the single frames as freestanding works, we find the whole way of research of the artist, with her abstract and more seldom figurative outcomes that, all together, represent her characteristic dualism.`,
		it: `L’opera “Moltitudine” si presenta come un pannello formato da 184 singole tele, di ridotte dimensioni, tasselli di un maestoso quadro d’insieme, ma anche singole opere finite per forma, stile e contenuti. 
		<br/><br/>La particolarità del lavoro di Tina Ponticelli è la sua fruibilità a diversi livelli: il primo è di tipo cromatico-geometrico con progressivi stacchi di colori che si susseguono; 
		il secondo è di tipo simbolico con una serie di segni, anche questi realizzati attraverso diverse combinazioni tra forme e colori, con qualche raro suggerimento esegetico celato quale caposaldo in ogni singola sezione dell’assemblaggio; 
		il terzo livello è di carattere stilistico: considerate le singole tele come opere a sé stanti, si riscontra tutto il percorso di ricerca dell’artista Tina Ponticelli, con i suoi esiti astratti e più raramente figurativi che, insieme, rappresentano il suo caratteristico dualismo.`
	},
	comunione: {
		en: `With ‘Comunione dei beni’, Tina Ponticelli introduces the concept of perspective interactivity, aimed at assigning the viewer an active role in creating the artwork through its direct participation.
		<br/><br/>The transparency of the plastic supports increases the changeability of the installation which in the individual oscillating elements finds an always different background because each piece, making itself visible through the element that precedes it, becomes an integral part of it and vice versa.
		<br/><br/>The artist does not present a single work, but many different works, for how many different perspectives the installation will be observed from.
		<br/><br/>A work in progress, therefore, for which the exhibition moment does not come, as usual, at the end of a path but the exhibition becomes only the beginning of a further creative phase: the initial time joins the final one
		<br/><br/>`,
		it: `Con Comunione dei beni, Tina Ponticelli introduce il concetto dell’interattività prospettica, teso ad assegnare allo spettatore un ruolo attivo nella creazione della stessa attraverso una sua diretta partecipazione.
		<br/><br/>La trasparenza dei supporti di plastica accresce la mutevolezza dell’istallazione che nei singoli elementi oscillanti, trova uno sfondo sempre diverso perché ciascun pezzo, rendendosi visibile attraverso l’elemento che lo precede, ne diventa parte integrante e viceversa. 
		<br/><br/>L’artista non presenta un'unica opera, ma tante opere diverse, per quante saranno le diverse prospettive dalle quali sarà osservata l’installazione.
		<br/><br/>Un’opera in itinere, dunque, per la quale il momento espositivo non giunge, come di consueto, a conclusione di un percorso prima (progettuale poi esecutivo) ma la mostra diventa solo l’inizio di un’ulteriore fase creativa: il tempo iniziale si unisce a quello finale. 
		<br/><br/>`
	},
	profile: {
		en: "english text here",
		it: "italiano qua"
	}
}

export const language = {
	en: true,
	it: false,
	switch () {
		[ this.en, this.it ] = [ this.it, this.en ]
	},
	get cur () {
		return this.en ? "en" : "it"
	}
}