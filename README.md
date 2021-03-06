[![npm](https://img.shields.io/npm/v/quill-mathlive-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathlive-blot)
[![npm bundle size](https://img.shields.io/bundlephobia/min/quill-mathlive-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathlive-blot)
[![npm](https://img.shields.io/npm/dt/quill-mathlive-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathlive-blot)
![GitHub Lint Workflow Status](https://img.shields.io/github/workflow/status/JonathanTreffler/Quill-mathLive-blot/Lint?label=Lint&style=flat-square)
![GitHub CodeQL Workflow Status](https://img.shields.io/github/workflow/status/JonathanTreffler/Quill-mathLive-blot/CodeQL?label=CodeQL&style=flat-square)
![GitHub Demo Deploy Workflow Status](https://img.shields.io/github/workflow/status/JonathanTreffler/Quill-mathLive-blot/Deploy%20Demo%20to%20GitHub%20Pages?label=Demo%20Deploy&style=flat-square)
![GitHub](https://img.shields.io/github/license/JonathanTreffler/Quill-mathLive-blot?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/JonathanTreffler/Quill-mathLive-blot?style=flat-square)
[![Maintenance](https://img.shields.io/maintenance/yes/2020?style=flat-square)](https://github.com/JonathanTreffler/Quill-mathQuill-blot/commits/)

# Quill-mathLive-blot

A Blot/Extension for Quill.js to embed editable formulas with mathLive.

## Installation:
```bash
npm install quill-mathlive-blot
```

## Usage:
- import Quill
```js
import mathLiveBlot from "quill-mathlive-blot";

// MathLive options can be modified before the initialisation.
// If changed later it only applies to mathLive Instances created after the change.
mathLiveBlot.options.virtualKeyboardMode = "off";

var quill = new Quill('#editor-container', {
	modules: {
		toolbar: {
			container: [
				['bold', 'italic', 'underline'],
				['mathLive']
			],
			handlers: {
				'mathLive': insert,
			}
		}
	},
	placeholder: '',
	theme: 'snow'
});

mathLiveBlot.register(Quill);

// This function gets called by the quill toolbar handler.
// It can also be called programmatically.
function insert() {
	let selection = quill.getSelection();
	// In this example a mathLive instance will start with the content "x"
	quill.insertEmbed(selection.index, "mathLive", "x");
}
```

## Configuration:
Options can be set through the mathLiveBlot.options variable.

The default values are:
```
smartMode: true,
virtualKeyboardMode: "manual",
virtualKeyboardLayout: "qwertz",
virtualKeyboardTheme: "material",
virtualKeyboards: "all",
inlineShortcuts: {
	"minus": "-",
	"-": "-",
	"plus": "+",
	"/": "\\frac",
	"super 1": "^1",
	"super 2": "^2",
	"super 3": "^3",
	"super 4": "^4",
	"super 5": "^5",
	"super 6": "^6",
	"super 7": "^7",
	"super 8": "^8",
	"super 9": "^8",
},
```

### [Demo](https://jonathan-treffler.de/Quill-mathLive-blot/)
