import { text, language } from "./utils/switch_lang.js"

const btn = document.createElement( "button" )
const wrap = document.createElement( "div" )
const en = document.createElement( "div" )
const it = document.createElement( "div" )

btn.className = "switch-lang__btn en"
wrap.className = "switch-lang__btn__wrap"
en.className = "switch-lang__btn__wrap__lang en"
it.className = "switch-lang__btn__wrap__lang it"

en.textContent = "EN"
it.textContent = "IT"

wrap.appendChild( en )
wrap.appendChild( it )
btn.appendChild( wrap )

export const Profile = {
	description: document.querySelector( ".profile__article.switch-lang" ),
	btn: btn.cloneNode( true ),
	init () {
		this.addListener()

	},
	reloadHTML () {
		this.description.innerHTML = text.profile[ language.cur ]
		this.btn = btn.cloneNode( true )
		if ( language.cur == "it" ) {
			this.btn.classList.toggle( "en" )
			this.btn.classList.toggle( "it" )
		}
		this.addListener()
	},
	addListener () {
		this.description.appendChild( this.btn )
		this.btn.addEventListener( "click", () => {
			this.switch_lang()
			this.reloadHTML()
		} )
	},
	switch_lang () {
		language.switch()
	}
}
