[![npm](https://img.shields.io/npm/v/quill-mathlive-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathlive-blot)
[![npm bundle size](https://img.shields.io/bundlephobia/min/quill-mathlive-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathlive-blot)
[![npm](https://img.shields.io/npm/dt/quill-mathlive-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathlive-blot)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/JonathanTreffler/Quill-mathLive-blot/Lint?label=Lint&style=flat-square)
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

var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
      ]
    },
    placeholder: '',
    theme: 'snow'
});

mathLiveBlot.register(Quill);

function insert() {
    let selection = quill.getSelection();
    quill.insertEmbed(selection.index, "mathLive", "");
}
```

## [Live Demo](https://jonathan-treffler.de/Quill-mathLive-blot/)
