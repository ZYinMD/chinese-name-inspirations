const input = '../raw-data/别人的代码/baby-master/data/';
const output = '../one-time-data/baby-master的人名.json';
const fs = require('fs');
const dataStorage = new Set();
const fileList = fs.readdirSync(input);

class File {
  constructor(path, fileName) {
    this.path = path;
    this.fileName = fileName;
  }
  get content() {
    return require(this.path + this.fileName);
  }
  get names() {
    return this.content.data.split(' ');
  }

  processNames() {
    for (let name of this.names) {
      if (name.length == 3) {
        let newName = [name[1], name[2]].sort();
        dataStorage.add(newName.join(''));
      }
    }
  }
}

for (let file of fileList) {
  file = new File(input, file);
  file.processNames();
}

/*for (let i in fileList) {
  a = require(input + fileList[i]);
  // let file = new File(input, fileList[i]);
  // // file.processLines();
  // console.log('file.content: ', file.content);
}

*/
fs.writeFileSync(output, JSON.stringify([...dataStorage], null, 2));

