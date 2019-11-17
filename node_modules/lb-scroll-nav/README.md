# Scroll Nav setup

## Install 
>npm install --save-dev lb-scroll-nav

## Description
- implements smooth scrool on modern browsers
- updates the navbar state on scroll
- removes # history spam

## Usage
index.html
```
<nav ...>
	<a href="#targetID_1" class="navbar-active">
	<a href="#targetID_2">
	<a href="#targetID_3">
	<a href="#targetID_4">
</nav>
...
<div class="sectionsContainer" >
	<section id="targetID_1">
	<section id="targetID_2">
	<section id="targetID_3">
	<section id="targetID_4">
</div>

```

myfile.js
```
import setScrollNav from "lb-scroll-nav"
...
setScrollNav(sections, sectionContainer, threshold)
```

`SectionContainer` defaults to BODY <br/>
`Threshold` defaults to 0.5 => location will update when 50% of the section at least is displayed

## Default styling

Done with inline JS:
```
sectionsContainer {
	overflow-y: "hidden";
	overflow-x: "scroll";
	scrollBehavior: smooth;
}
body {
	height: 100vh;
	width: 100%;
	overflow: hidden;
}
nav {
	width: 100%; //for IE
}
