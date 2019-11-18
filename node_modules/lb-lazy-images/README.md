# lb-lazy-images

Lazy load images, returns a `Promise` resolving when all images are loaded.
The return value is **always** an array

## Auto load (on Scroll)

Add the `loadOnScroll` prop to the `img` tag to load it on scroll

file.js
```
import "lb-lazy-images"
...
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-src=<<path from "src/asset", ex="subfolder/myImage">> 
	data-srcset=<<"path width, path width, ...">>
	loadOnScroll
/>
```

## Manual load (on event)

Just pass the target as an argument on the `loadImg` function to load the images when wanted.

file.js
```
import loadImg from "lb-lazy-images"
...
element.addEventListener("click", e => {
	loadImg(<image or NodeList here>)
		.then( images => images[0].parentNode.classList += "display"  )
})
```

index.html
```
<img 
	src="placeholder.jpg" 
	data-src=<<path from "src/asset", ex="subfolder/myImage">> 
	data-srcset=<<"path width, path width, ...">>
/>
```

## Notes
- Put no extension on the `data-src` && data-srcset properties
- Path begins from `src/assets` excluded

