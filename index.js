const fs = require('fs');
const cors = require('cors');
const express = require('express');
const parseArgs = require('minimist');
const consola = require('consola').default;
const package = require('./package.json');

/**
 * @typedef {Object} Args
 * @property {number} p port
 * @property {string} d directory
 */

/** @type {Args} */
const argv = parseArgs(process.argv.slice(2));

const port = argv.p || 3030;
const sourceDir = argv.d || './json';

const app = express();

app.use(cors());
app.use(express.json());

app.all('/', (_, res) => res.json({ Hello: 'from JSON Filepoints' }));

app.all('*', (req, res) => {
  const { method, path } = req;

  consola.info(`${method} ${path}`);

  try {
    const jsonFilePath = path
      .trim()
      .split('/')
      .filter(i => i && i !== '/')
      .join('/');

    let data = readFile(`${sourceDir}/${method}/${jsonFilePath}.json`);

    // Don't have a 'method' directory, try root directory
    if (!data) {
      data = readFile(`${sourceDir}/${jsonFilePath}.json`);
    }

    if (!data) {
      throw new Error('File not found');
    }

    res.json(JSON.parse(data));
  } catch (err) {
    consola.error(err);
    res.status(404).json({ path, error: err.message });
  }
});

app.listen(port, () => {
  consola.success(`JSON Filepoints v${package.version} running on http://localhost:${port}`);
});

app.on('error', error => {
  consola.error(error);
});

process.on('SIGINT', () => {
  console.log('');
  consola.info('Interrupted.');
  process.exit(0);
});

/**
 * Reads a file from the specified path.
 *
 * @param {string} path - The path of the file to be read.
 * @return {string | null} The contents of the file if it exists, or null if an error occurred.
 */
function readFile(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    return data;
  } catch (err) {
    return null;
  }
}
