// convert from:
const input = '../one-time-data/能用的字.json';
// convert to:
const output = '../one-time-data/名表.json';
const fs = require('fs');
const chars = require(input);
const dataStorage = {};

chars.forEach((char1, index, chars) => {
  for (let char2Index = index; char2Index < chars.length; char2Index++) {
    let char2 = chars[char2Index];
    let name, tone, labels;
    if ([char1.char, char2.char].sort()[0] == char1.char) {
      name = char1.char + char2.char;
      tone = char1.tone + char2.tone;
    } else {
      name = char2.char + char1.char;
      tone = char2.tone + char1.tone;
    }
    labels = [...(new Set(char1.labels.concat(char2.labels)))];
    dataStorage[name] = {name, tone, labels};
  }
});

fs.writeFileSync(output, JSON.stringify(dataStorage, null, 1));


