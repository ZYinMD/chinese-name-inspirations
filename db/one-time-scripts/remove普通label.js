const fs = require('fs');
const input = require('../db-exports/characters-new.json');
const output = ('../db-seeds/characters.json');
input.forEach((char, index) => {
  let labels = new Set(char.labels);
  labels.delete('普通');
  input[index].labels = [...labels];
});
fs.writeFileSync(output, JSON.stringify(input, null, 2));
