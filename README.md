# Quickstart

The `RNAcanvas` app object constructor
can be imported using a `<script>` element.

```html
<script id="RNAcanvas" type="module" >
  import 'https://cdn.jsdelivr.net/npm/@rnacanvas/embedded@2.0.2/dist/+esm';
</script>
```

This will inject the `RNAcanvas` app object constructor into the global scope.

<b>Downstream code must wait for the script to load
before the</b> `RNAcanvas` <b>app object constructor can be used.</b>

Things like jQuery's `.ready()` method can accomplish this.

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

// don't forget to add the RNAcanvas app to the document
// before drawing anything (see note below)
rnaCanvas.appendTo(document.body);

// control the size of the RNAcanvas app component
rnaCanvas.style.width = '1000px';
rnaCanvas.style.height = '750px';

// the structure to draw (using dot-bracket notation)
var seq = 'AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC';
var dotBracket = '(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....';

rnaCanvas.drawDotBracket(seq, dotBracket);

// make the drawing big enough to fit the drawn structure
// (and include some extra space around the drawn structure)
rnaCanvas.drawing.setPadding(500);

// bring the drawn structure into view
rnaCanvas.drawingView.fitToContent();
```

The RNAcanvas app must be added to the document of a webpage
before its underlying SVG drawing functionality can work properly.

The RNAcanvas app can be added to any container node present in the document
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
