const input = '../raw-data/人名词库/';
const output = '../one-time-data/真人名from巨型词库.json';
const fs = require('fs');
const dataStorage = new Set();
const fileList = fs.readdirSync(input);
class File {
  constructor(path, fileName) {
    this.path = path;
    this.fileName = fileName;
  }
  get content() {
    return fs.readFileSync(this.path + this.fileName, 'utf-8');
  }
  get lines() {
    var lines = this.content.split('\r\n');
    lines.pop(); // remove the last line since it may be empty
    return lines;
  }
  processLines() {
    for (let line of this.lines) {
      if (line.length == 3) {
        let newName = [line[1], line[2]].sort();
        dataStorage.add(newName.join(''));
      }
    }
  }
}


for (let i in fileList) {
  let file = new File(input, fileList[i]);
  file.processLines();
}

fs.writeFileSync(output, JSON.stringify([...dataStorage], null, 2));
