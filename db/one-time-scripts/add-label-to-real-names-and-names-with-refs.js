const input = require('../one-time-data/real-names-and-names-with-refs.json');
const labelSource = require('../one-time-data/just-chars-with-labels.json');
const output = '../db-seeds/real-names-and-names-with-refs--labeled.json';
const dataStorage = [];
const correctLabelOrder = ['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很难搭配', '禁用', '略土', '略俗', '难搭配', '玉类', '否定', '不真实', '小气', '有意思', '优先', ];

var counter = 1;

for (let entry of input) {
  let [char1, char2] = [entry.name[0], entry.name[1]];
  if (labelSource[char1] && labelSource[char2]) {
    let newEntry = {};
    // re-order the keys
    newEntry._id = 'r' + String(counter++).padStart(6, '0');
    newEntry.name = entry.name;
    newEntry.isRealName = entry.isRealName;
    newEntry.labels = [];
    if (entry.ref) {
      newEntry.ref = entry.ref;
    }
    if (entry.looseRef) {
      newEntry.looseRef = entry.looseRef;
    }
    let combinedLabels = labelSource[char1].concat(labelSource[char2]);
    for (let j of correctLabelOrder) {
      if (combinedLabels.includes(j)) {
        newEntry.labels.push(j);
      }
    }
    dataStorage.push(newEntry);
  }
}

console.log('counter: ', counter);
const fs = require('fs');
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));
