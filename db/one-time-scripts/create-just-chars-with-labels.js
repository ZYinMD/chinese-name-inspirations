const input = require('../db-exports/characters.json');
const output = '../one-time-data/just-chars-with-labels.json';
const fs = require('fs');
const dataStorage = {};
input.sort((a, b) => Number(a._id.slice(-4)) - Number(b._id.slice(-4)));
for (let i of input) {
  dataStorage[i.char] = i.labels;
}
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));

