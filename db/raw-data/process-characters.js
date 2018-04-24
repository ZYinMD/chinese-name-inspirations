// this file does some initial processing to the raw data, 把拼音换成音调1234, 因为平仄重要, 拼音不重要
const fs = require('fs');
var charList = fs.readFileSync('./常用3500汉字带拼音.txt', 'utf-8').split('\n');
// var charList = fs.readFileSync('./二级字表3000带拼音.txt', 'utf-8').split('\n');
charList.pop(); // remove last line which is empty
var output = '';
for (let line of charList) {
  let char, sound;
  [char, sound] = line.split('(');
  sound = determineTone(sound);
  output += char + sound + '\n';
}
fs.writeFileSync('./二级字表.txt', output);

function determineTone(char) {
  if (char.match(/[āēīōū]/)) return 1;
  if (char.match(/[áéíóúǘ]/)) return 2;
  if (char.match(/[ǎěǐǒǔǚü]/)) return 3;
  if (char.match(/[àèìòùǜ]/)) return 4;
  return 0;
}


