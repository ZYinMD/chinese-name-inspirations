const input = require('../one-time-data/古文.json');
const output = ('../one-time-data/names-with-references.json');
const fs = require('fs');
const dataStorage = {};

const _ = require('lodash');

class Entry {
  constructor(entry) {
    this.title = entry.title;
    this.body = entry.body;
    this.s = this.sentences;
  }

  get sentences() {
    let body = this.body.split('');
    body.forEach((char, index) => {
      if (char.match(/[。？！；]/)) {
        body[index] = char + '$';
      }
    });
    body = body.join('');
    body = body.split('$');
    return body;
  }

  process() {
    for (let sentence of this.sentences) {
      let clauses = _.split(sentence, /[：，。？！；]/);
      for (let clause of clauses) {
        this.processClause(clause, sentence);
      }
    }
  }

  processClause(clause, sentence) {
    for (let i in clause) {
      i = Number(i);
      for (let j = i + 1; j < clause.length; j++) {
        let name = [clause[i], clause[j]].sort().join('');
        if (!dataStorage[name]) {
          dataStorage[name] = {name};
        }
        if (j == i + 1) {
          if (!dataStorage[name].ref) dataStorage[name].ref = {};
          if (dataStorage[name].ref[this.title]) continue; // 如果本首已经有一句了, 就不再多收
          dataStorage[name].ref[this.title] = sentence;
        } else {
          if (!dataStorage[name].looseRef) dataStorage[name].looseRef = {};
          if (dataStorage[name].looseRef[this.title]) continue; // 如果本首已经有一句了, 就不再多收
          dataStorage[name].looseRef[this.title] = sentence;
        }
      }
    }
  }
}

for (let i of input) {
  let entry = new Entry(i);
  entry.process();
}

fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));


