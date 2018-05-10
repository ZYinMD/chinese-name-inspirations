const titles = require('../raw-data/古文/宋词300首标题.json');
const input = '../raw-data/古文/宋词300首.txt';
const output = '../one-time-data/宋词300首.txt';
const fs = require('fs');
var content = fs.readFileSync(input, 'utf-8');
var lines = content.split('\n');
lines.pop();

lines = [...(new Set(lines))];
lines.forEach((line, index) => {
  if (line.includes('%') || line.includes('：')) {
    lines[index] = '\n' + line + '\n';
  }
})

content = lines.join('\n')
fs.writeFileSync(output, content);


function match(line) {
  line = line.split('%');
  var numTitlesMatched = 0;
  var titleMatched = '';
  for (let title of titles) {
    if (title.includes(line[0]) && title.includes(line[1])) {
      numTitlesMatched++;
      if (numTitlesMatched == 1) titleMatched = title;
      else titleMatched = '';
    }
  }
  return titleMatched;
}
