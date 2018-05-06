const input = '../raw-data/手存/手存.txt';
const output = '../one-time-data/手存在Evernote.json';
const fs = require('fs');
const dataStorage = new Set();
var content = fs.readFileSync(input, 'utf-8');
var lines = content.split('\n');
lines.pop(); // remove the last line since it may be empty
for (let line of lines) {
  if (line.length == 3) {
    let newName = [line[1], line[2]].sort();
    dataStorage.add(newName.join(''));
  }
  if (line.length == 2) {
    let newName = [line[0], line[1]].sort();
    dataStorage.add(newName.join(''));
  }
}

fs.writeFileSync(output, JSON.stringify([...dataStorage], null, 2));
