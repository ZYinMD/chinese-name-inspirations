const output = '../one-time-data/古文.json';
const fs = require('fs');
const dataStorage = [];

const 诗经 = require('../raw-data/别人的代码/gushi_namer-master/json/shijing.json');
const 诗经标题 = require('../one-time-data/诗经标题.json');
诗经.forEach((i, index) => {
  for (let j of 诗经标题) {
    if (j.includes(i.title)) {
      诗经[index].title = j;
    }
  }
});
keepBookAndTitle(诗经, '诗经');

const 楚辞 = require('../raw-data/别人的代码/gushi_namer-master/json/chuci.json');
keepBookAndTitle(楚辞, '楚辞');

const 宋词 = require('../raw-data/别人的代码/gushi_namer-master/json/songci.json');
keepAuthorAndTitle(宋词, '宋词三百首');

const 唐诗 = require('../raw-data/别人的代码/gushi_namer-master/json/tangshi.json');
keepAuthorAndTitle(唐诗, '唐诗三百首');

const 辞赋 = require('../raw-data/别人的代码/gushi_namer-master/json/cifu.json');
keepAuthorAndTitle(辞赋, '辞赋');

const 乐府 = require('../raw-data/别人的代码/gushi_namer-master/json/yuefu.json');
keepAuthorAndTitle(乐府, '乐府诗集');

const 古诗 = require('../raw-data/别人的代码/gushi_namer-master/json/gushi.json');
keepAuthorAndTitle(古诗, '古诗三百首');




function keepAuthorAndTitle(book, bookName) {
  loop1:
  for (let i of book) {
    if (!i.content) continue;

    for (let j of dataStorage) {
      if (j.body.slice(0, 10) == i.content.slice(0, 10)) {
        continue loop1; // duplicate
      }
    }

    let entry = {};
    entry.title = (i.author? i.author : bookName) + ' 《' + i.title + '》';
    entry.body = i.content;
    dataStorage.push(entry);
  }
}

function keepBookAndTitle(book, bookName) {
  loop1:
  for (let i of book) {
    if (!i.content) continue;

    for (let j of dataStorage) {
      if (j.body.slice(0, 10) == i.content.slice(0, 10)) {
        continue loop1; // duplicate
      }
    }

    let entry = {};
    entry.title = '《' + bookName + '·' + i.title + '》';
    entry.body = i.content;
    dataStorage.push(entry);
  }

}
fs.writeFileSync(output, JSON.stringify(dataStorage, null, 2));
