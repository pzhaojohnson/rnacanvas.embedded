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

// don't forget to add the RNAcanvas app to the document
// before drawing anything (see note below)
rnaCanvas.appendTo(document.body);

// control the size of the RNAcanvas app component
rnaCanvas.style.width = '600px';
rnaCanvas.style.height = '450px';

// the structure to draw (expressed in dot-bracket notation)
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

The RNAcanvas app can be added to any container node that is part of the document
(not just the document body itself as shown in the example above).
