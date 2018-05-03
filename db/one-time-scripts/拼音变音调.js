// 把拼音换成音调1234, 因为平仄重要, 拼音不重要

// convert from:
const input = '../one-time-data/6463字表带拼音.txt';
// convert to:
const output ='../one-time-data/6463字表及音调.txt'

const fs = require('fs');
var charList = fs.readFileSync(input, 'utf-8').split('\n');
charList.pop(); // remove last line which is empty
var dataStorage = '';
for (let line of charList) {
  let char, sound;
  [char, sound] = line.split('(');
  sound = determineTone(sound);
  dataStorage += char + sound + '\n';
}
fs.writeFileSync(output, dataStorage);

function determineTone(char) {
  if (char.match(/[āēīōū]/)) return 1;
  if (char.match(/[áéíóúǘ]/)) return 2;
  if (char.match(/[ǎěǐǒǔǚü]/)) return 3;
  if (char.match(/[àèìòùǜ]/)) return 4;
  return 0;
}


