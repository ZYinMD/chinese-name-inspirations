const chars = require('../db-exports/characters.json');
const output = '../db-seeds/characters-labels-in-order.json';
const fs = require('fs');
const dataStorage = [];
const correctLabelOrder = ['有意思', '优先', '不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很难搭配', '禁用', '略土', '略俗', '难搭配', '玉类', '否定', '不真实', '小气', ];
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


