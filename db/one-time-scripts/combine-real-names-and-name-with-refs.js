const nameWithRefs = require('../one-time-data/names-with-refs.json');
const realNames = require('../one-time-data/real-names.json');
const output = ('../one-time-data/real-names-and-names-with-refs.json');

for (let i in nameWithRefs) {
  nameWithRefs[i].isRealName = false; // first set everyone to false;
}

for (let i of realNames) {
  if (nameWithRefs[i]) {
    nameWithRefs[i].isRealName = true;
  } else {
    let entry = {};
    entry.name = i;
    entry.isRealName = true;
    nameWithRefs[i] = entry;
  }
}

const fs = require('fs');
fs.writeFileSync(output, JSON.stringify(Object.values(nameWithRefs), null, 2));



