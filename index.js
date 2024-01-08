import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pyodide = require('pyodide');
const { version, loadPyodide } = pyodide;

export default pyodide;
export { version, loadPyodide }
