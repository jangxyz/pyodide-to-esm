# pyodide-to-esm

Even with [node.js support in pyodide](https://pyodide.org/en/stable/usage/index.html#node-js), I see some weird errors while importing pyodide, especially with ESM modules:

```javascript
// dynamically importing pyodide
(await import('pyodide')).loadPyodide;
```

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/PATH_TO_YOUR_PROJECT/file:/PATH_TO_YOUR_PROJECT/node_modules/pyodide/pyodide.asm.js' imported from /PATH_TO_YOUR_PROJECT/node_modules/pyodide/pyodide.mjs
```

Seems like a mismatch between ESM and CJS modules regarding handling the `import.meta.url`. Strangely enough, `require()` works, but there are cases when you cannot change the module system by yourself. 

This is an attempt to wrap a CJS-friendly pyodide module as a separate, ESM-friendly module.

## Usage

Install:

```bash
npm install github:jangxyz/pyodide-to-esm
```

Usage:

```javascript
import { loadPyodide } from 'pyodide-to-esm';
```

## Obsolete

Found out that you can use this instead in an ESM environment:

```javascript
const { createRequire } = await import('module');
const require = createRequire(import.meta.url);
const loadPyodide = require('pyodide').loadPyodide;
```

