const input = '../raw-data/样本幼儿园人名名单.txt';
const output = ('../one-time-data/近年幼儿园人名分析结果.json');
const fs = require('fs');

var names = fs.readFileSync(input, 'utf-8').split('\n');
names.pop(); // remove last line witch is empty
names = [...new Set(names)];
var chars = [];
for (let i of names) {
  chars.push(i[1]);
  chars.push(i[2]);
}

var res = chars.reduce((accumulator, char) => {
  if (accumulator[char])
    accumulator[char]++;
  else
    accumulator[char] = 1;
  return accumulator;
}, {});

res = Object.entries(res);

res = res.sort((a, b) => b[1] - a[1]);

res = res.reduce((accumulator, i) => {
  accumulator[i[0]] = i[1];
  return accumulator;
}, {});
fs.writeFileSync(output, JSON.stringify(res, null, 2));

