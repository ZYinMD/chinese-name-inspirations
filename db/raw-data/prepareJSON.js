// this file converts the character list into JSON for MongoDB to import

const output = '../dbSeeds/characters.json';
const fs = require('fs');
const dataStorage = [];
var charList = fs.readFileSync('./一二级字及音调.txt', 'utf-8').split('\n');
charList.pop(); // remove the last line which is empty
charList.forEach((line, index) => {
  let id = String(++index).padStart(4, '0');
  let [char, tone] = line.split('');
  let evaluated = false;
  let document = {id, char, tone, evaluated};
  dataStorage.push(document);
})
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));


