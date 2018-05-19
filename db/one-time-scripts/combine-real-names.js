const fs = require('fs');
const input1 = require('../one-time-data/corpus-master的人名.json');
const input2 = require('../one-time-data/真人名from巨型词库.json');
const input3 = require('../one-time-data/手存在Evernote.json');
const output = '../one-time-data/real-names.json';
var dataStorage = new Set(input1.concat(input2).concat(input3));
fs.writeFileSync(output, JSON.stringify([...dataStorage], null, 2));



