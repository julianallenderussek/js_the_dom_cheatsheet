# js_the_dom_cheatsheet
Cheatsheat for JS DOM


1. Creating a HTML DOC

2. Link CSS styles into your HTML file.

    <link rel="stylesheet" href="styles.css">

3. Adding our Javascript functionality
The question is were to put our Javascript Tag

The best practice is to put JavaScript <script> tags just before the closing </body> tag rather than in the <head> section of your HTML. The reason for this is that HTML loads from top to bottom. The head loads first, then the body, and then everything inside the body.

  Example of Script Tag:
     <script src="script.js"></script>

4. Some of your best friends, when working with the DOM (document) model.


Javascript Methods.
console.dir()
console.log()

SELECTORS:
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()

Adding Elements to the DOM
createElement()
appendChild()

EVENT LISTENERS

      

