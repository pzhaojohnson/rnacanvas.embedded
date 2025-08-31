Here's a [live example](https://codepen.io/pzjohnson/pen/myezpzK) on CodePen.

# Quickstart

For example, to draw the following structure...

```
AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC
(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....
```

...one would set the `src` attribute of an `<iframe>` element to the following.

```javascript
// JavaScript code to construct the `src` attribute
var src = 'https://code.rnacanvas.app?'
  + 'sequence=AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC'
  + '&dot_bracket=(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....';
```

The resulting `<iframe>` element would be:

```html
<iframe
  src="https://code.rnacanvas.app?sequence=AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC&dot_bracket=(((((((....)))))))...(((((((((((.....(((((.......)))))..)))))))))))....."

  <!-- The dimensions of the RNA structure drawing. -->
  width="800"
  height="600"
></iframe>
```

In this case, we are making use of the RNAcanvas [URL interface](https://pzhaojohnson.github.io/rnacanvas.url-interface/)
and the `sequence` and `dot_bracket` URL parameters to draw a structure of interest.

## Hiding the peripheral UI

To hide things like the lower-left Toolbar and top-left `Open`, `Save` and `Export` buttons,
one can set the `peripheral_ui` URL parameter to `none`.

```javascript
// JavaScript code to construct the `src` attribute
var src = 'https://code.rnacanvas.app?'
  + 'sequence=AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC'
  + '&dot_bracket=(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....'

  // set to "none"
  + '&peripheral_ui=none';
```

## Hiding / styling the border

By default, `<iframe>` elements usually have an indented gray border.

To hide this, one can set the `border` CSS property to `none`.

```html
<iframe
  src="https://code.rnacanvas.app?sequence=AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC&dot_bracket=(((((((....)))))))...(((((((((((.....(((((.......)))))..)))))))))))....."

  width="800"
  height="600"

  <!-- Hide the border. -->
  style="border: none;"
></iframe>
```

Alternatively, the border can be styled as for any HTML element.

```html
<iframe
  src="https://code.rnacanvas.app?sequence=AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC&dot_bracket=(((((((....)))))))...(((((((((((.....(((((.......)))))..)))))))))))....."

  width="800"
  height="600"

  <!-- Light gray border. -->
  style="border: 1px solid #bbb;"
></iframe>
```

# The RNAcanvas app object

An alternative way to make 2D drawings of RNA structures
is using the JavaScript / TypeScript interface of the RNAcanvas app object.

Here's a [live example](https://codepen.io/pzjohnson/pen/xxoKvGp) on CodePen.

The `RNAcanvas` app object constructor
can be loaded using a `<script>` element.

```html
<script id="RNAcanvas" type="module" >
  import 'https://cdn.jsdelivr.net/npm/@rnacanvas/embedded@3.1.0';
</script>
```

This will inject the `RNAcanvas` app object constructor into the global scope.

<b>Downstream code must wait for the script to load
before using the</b> `RNAcanvas` <b>app object constructor.</b>

Things like [jQuery](https://releases.jquery.com/)'s `.ready()` method can accomplish this.

```javascript
$('#RNAcanvas').ready(() => {
  // RNA drawing code here...
});
```

Alternatively, the `RNAcanvas` app object constructor
can be imported from an `npm` package (see section below).

## Drawing a structure

```javascript
// create a new RNAcanvas app instance
var rnaCanvas = new RNAcanvas();

// the RNAcanvas app must be added to the document body
// before drawing anything (see note below)
rnaCanvas.appendTo(document.body);

// control the size of the RNAcanvas app component
rnaCanvas.domNode.style.width = '1000px';
rnaCanvas.domNode.style.height = '750px';

// the structure to draw (using dot-bracket notation)
var seq = 'AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC';
var dotBracket = '(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....';

rnaCanvas.drawDotBracket(seq, dotBracket);

// make the drawing big enough to fit the drawn structure
// (and include some extra space around the drawn structure)
rnaCanvas.drawing.setPadding(1000);

// bring the drawn structure into view
rnaCanvas.drawingView.fitToContent();
```

The RNAcanvas app must be added to the document body of a webpage
for its RNA drawing functionality to work properly.

(This is an inherent aspect of SVG drawing functionality in general for web browsers.)

The RNAcanvas app can be added to any container node present in the document body
(not just the document body itself as shown in the example above).

## `npm` installation

```
npm install @rnacanvas/app-object
```

The `RNAcanvas` app object constructor can be accessed as a named import.

```javascript
import { RNAcanvas } from '@rnacanvas/app-object';
```

# Further documentation

See the [full documentation](https://pzhaojohnson.github.io/rnacanvas.app-object/) for the RNAcanvas app object.
