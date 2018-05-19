const chars = require('../db-exports/6463-chars-after-eval.json');
const output = '../db-seeds/6463-chars-with-reordered-labels.json';
const fs = require('fs');
const dataStorage = [];
const correctLabelOrder = ['普通', '有意思', '优先', '不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '禁用', '略土', '略俗', '略怪', '玉类'];
class Char {
  constructor(src) {
    Object.assign(this, src);
    this.updateLabels();
  }
  updateLabels() {
    let newLabels = [];
    for (let i of correctLabelOrder) {
      if (this.labels.includes(i)) {
        newLabels.push(i);
      }
    }
    this.labels = newLabels;
  }
}

for (let i of chars) {
  dataStorage.push(new Char(i));
}

fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));


