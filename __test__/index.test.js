import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import message from '..';

/* eslint no-underscore-dangle: [2, { "allow": ["__filename", "__dirname"] }] */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('', () => {
  expect(message).toEqual(readFile('expected.txt'));
});
