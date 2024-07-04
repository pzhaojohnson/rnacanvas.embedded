Embed the RNAcanvas app in another webpage.

# Quickstart

### Installation

With `npm`:

```
npm install @rnacanvas/embedded
```

### Imports

When installed as an `npm` package:

```javascript
import { RNAcanvas } from '@rnacanvas/embedded';
```

### Drawing a structure

```javascript
// create a new RNAcanvas app instance
var rnaCanvas = RNAcanvas();

// the RNAcanvas app must be added to the document of the webpage
// for the underlying functionality related to SVG drawing to work
rnaCanvas.appendTo(document.body);

// control the size of the RNAcanvas app component
rnaCanvas.style.width = '600px';
rnaCanvas.style.height = '450px';

// the structure to draw (expressed in dot-bracket notation)
let seq = 'AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC';
let dotBracket = '(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....';

rnaCanvas.drawDotBracket(seq, dotBracket);

// make the drawing big enough to fit the drawn structure
// (and include some extra space around the drawn structure)
rnaCanvas.drawing.setPadding(500);

// bring the drawn structure into view
rnaCanvas.drawingView.fitToContent();
```
