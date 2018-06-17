// convert from:
const input = '../one-time-data/6463字表及音调.txt';
// convert to:
const output = '../db-seeds/6463-chars-pre-eval.json';

const fs = require('fs');
const dataStorage = [];
var charList = fs.readFileSync(input, 'utf-8').split('\n');
charList.pop(); // remove the last line which is empty
charList.forEach((line, index) => {
  let _id = ++index;
  let [char, tone] = line.split('');
  let evaluated = false;
  let document = {_id, char, tone, evaluated};
  dataStorage.push(document);
});
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));


