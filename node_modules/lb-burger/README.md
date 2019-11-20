# lb-effects-rand-opacity

`RandOpacity` will periodically trigger an opacity animation on random nodes

Compatible with IE11+

## install
> npm install --save-dev lb-effect-rand-opacity

## Usage
```
import RandOpacity from "lb-effect-rand-opacity/dist/bundle.js"
...
const container = document.querySelector( ".container" );

const nodeList =  document.querySelector( ".target" );

const options = {
	frequency: 8,  ( 1 < frequency < 10 )
	duration: 2000, (animation duration in "ms")
	fadeTo: 0, (targets opacity 0 or 1, sets random opacity with no fade if not defined)
}

let animation = new RandOpacity( container, nodeList, options );
animation.start();
animation.pause()
```