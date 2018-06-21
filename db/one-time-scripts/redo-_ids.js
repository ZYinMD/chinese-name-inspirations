const fs = require('fs');
const input = require('../db-exports/characters.json');
const output = '../db-seeds/characters.json';

input.sort((a, b) => Number(a._id.slice(1, 8)) - Number(b._id.slice(1, 8)));

input.forEach((char, index) => {
  let _id = char._id.slice(1,8);
  _id = 'c' + _id.padStart(4, '0');
  input[index]._id = _id;
  delete input[index].evaluated;
});

fs.writeFileSync(output, JSON.stringify(input, null, 2));
