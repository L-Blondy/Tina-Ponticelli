# lb-effects-rand-opacity

`randOpacity` will target the children of the container (1st arg) and will periodically trigger an opacity animation on random children

Compatible with IE10+

## install
> npm install --save-dev lb-effect-rand-opacity

## Usage
```
import randOpacity from "lb-effect-rand-opacity/dist/bundle.js"
...
const container = document.querySelector( ".container" );
const options = {
	frequency: 8,  ( 1 < frequency < 10 )
	duration: 2000, (animation duration in "ms")
	fadeTo: 0, (targets opacity 0 or 1, sets random opacity with no fade if not defined)
}
randOpacity( container, options )
```