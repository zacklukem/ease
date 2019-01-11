<h1 align='center'><code>ease</code></h1>

`ease` is a javascript/css web library for animations.  It allows you to add animations to html without writing your own javascript or css code.

### Usage
To use ease you must link the css file and the javascript file.  To link them just link the css in the header:
```html
<link type="text/css" rel="stylesheet" href=".../ease.css">
```
And link both the javascript file and jQuery in the end of the body:
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src=".../ease.js"></script>
```
There are many different classes for different animations, for example `.fade-right` fades in and slides in from the right,  however these animations are not activated until the `.ease-active` class is also present.  The `.animate-onclick` class uses javascript to reanimate on click.  More examples of different animations can be found in `examples/index.html`
### Building
1. Install dependencies by running `npm install`
2. Install [gulp](https://gulpjs.com/)
3. In the root directory run `gulp` to build
4. To build with file watching run `gulp watch`
The files are built in the `dist` directory