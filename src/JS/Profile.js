import { text, language } from "./utils/switch_lang.js"

export const Profile = {
	description: document.querySelector( ".profile__article.switch-lang" ),
	btn: document.querySelector( ".profile__article .switch-lang__btn" ),
	init () {
		this.addListener()
	},
	reloadHTML () {
		this.description.innerHTML = text.profile[ language.cur ]
		this.btn.classList.toggle( "en" )
		this.btn.classList.toggle( "it" )
		this.description.prepend( this.btn )
	},
	addListener () {
		this.btn.addEventListener( "click", () => this.switch_lang() )
	},
	switch_lang () {
		language.switch()
		this.reloadHTML()
		console.log( this )
	}
}
