const input = require('../raw-data/古文/唐诗三百首.json');
const output = ('../one-time-data/唐诗三百首.json');
const fs = require('fs');
const dataStorage = [];

for (let caterogy of input.father) {
  for (let i of caterogy.des) {
    let poem = {};
    poem.title = i.detail_author + '：' + i.title;
    poem.body = i.detail_text;
    dataStorage.push(poem);
  }

}


fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));
