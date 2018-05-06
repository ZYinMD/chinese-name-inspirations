const input = '../raw-data/巨型词库/';
const output = '../raw-data/人名词库/';

const fs = require('fs');

class File {
  constructor(path, fileName) {
    this.path = path;
    this.fileName = fileName;
  }
  get content() {
    return fs.readFileSync(this.path + this.fileName, 'utf-8');
  }
  get lines() {
    var lines = this.content.split('\n');
    lines.pop(); // remove the last line since it may be empty
    return lines;
  }
  isNames() {
    let frequentSurname = 0;
    let twoOrThreeChars = 0;

    for (let line of this.lines) {
      if (line[0] == '王' || line[0] == '李' || line[0] == '张' || line[0] == '刘' || line[0] == '陈' ) {
        frequentSurname++;
      }
      if (line.length == 3 || line.length == 4) { // line.length is number of chars + \n
        twoOrThreeChars++;
      }
    }
    if (frequentSurname / this.lines.length > 0.08 && twoOrThreeChars / this.lines.length > 0.98) {
      return true;
    }
    return false;
  }
}

const fileList = fs.readdirSync(input);
for (let i in fileList) {
  let file = new File(input, fileList[i]);
  if (file.isNames()) {
    fs.renameSync(file.path + file.fileName, output + file.fileName);
  }
}
