const input = require('../db-exports/6463-chars-v1.0.json');
const output = '../one-time-data/just-chars-with-labels.json';
const fs = require('fs');
const dataStorage = {};
for (let i of input) {
  dataStorage[i.char] = i.labels;
}
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));

