const input = '../raw-data/别人的代码/Chinese-Names-Corpus-master/Chinese_Names_Corpus（120W）.txt';
const output = '../one-time-data/corpus-master的人名.json';
const fs = require('fs');
const dataStorage = new Set();
var content = fs.readFileSync(input, 'utf-8');
var lines = content.split('\r\n');
lines.pop(); // remove the last line since it may be empty
for (let line of lines) {
  if (line.length == 3) {
    let newName = [line[1], line[2]].sort();
    dataStorage.add(newName.join(''));
  }
}

fs.writeFileSync(output, JSON.stringify([...dataStorage], null, 2));
