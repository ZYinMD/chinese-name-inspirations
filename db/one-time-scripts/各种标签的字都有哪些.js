const chars = require('../one-time-data/just-chars-with-labels.json');
const output = ('../../client/src/Components/Articles/各种标签的字都有哪些.json');
const dataStorage = {
  男孩用: '',
  女孩用: '',
  很土: '',
  略土: '',
  很俗: '',
  略俗: '',
  无趣: '',
  略生僻: '',
  略怪: '',
  很怪: '',
  多音字: '',
};

const labels = Object.keys(dataStorage);
for (let char in chars) {
  for (let label of labels) {
    if (chars[char].includes(label)) {
      dataStorage[label] += char;
    }
  }
}


const fs = require('fs');
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));
