// convert from:
const input = '../db-exports/6463-chars-after-eval.json';
// convert to:
const output = '../one-time-data/能用的字.json';

const chars = require(input);
const fs = require('fs');

var usableChars = chars.filter(char => {
  for (let i of ['不适用于人名', '很生僻', '多音字', '很怪', '很土', '很俗', '略土', '略俗', '无趣', '略生僻']) {
    if (char.labels.includes(i)) return false;
  }
  return true;
});

for (let char of usableChars) {
  delete char._id;
  delete char.evaluated;
}



console.log('usableChars.length: ', usableChars.length);

fs.writeFileSync(output, JSON.stringify(usableChars, null, 2));
