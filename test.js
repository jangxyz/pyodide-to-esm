
import { loadPyodide } from './index.js';

const pyodide = await loadPyodide();
const answer = await pyodide.runPythonAsync("1+1");
console.log(answer);
