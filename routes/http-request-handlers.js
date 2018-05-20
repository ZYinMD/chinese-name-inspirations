const dbConnection = require('../db/db-connection.js');
module.exports = {constructNames, getNames};

async function getNames(allowedLabels, number) {
  var nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '略土', '略俗', '略怪', '玉类']);
  for (let i of allowedLabels) {
    nin.delete(i);
  }
  nin = [...nin];
  return findNames(number);

  async function namesCollection() {
    var connection = await dbConnection;
    var namesCollection = await connection.db().collection('names');
    return namesCollection;
  }

  async function findNames(number) {
    var collection = await namesCollection();
    var names = await collection.aggregate([
      {$match:
        {labels: {
          $in: ['普通', '有意思', '优先'],
          $nin: nin
        }}
      },
      {$sample: { size: number }}
      ])
    .toArray();
    return names;
  }

}

async function constructNames(allowedLabels, num普通chars, num有意思chars, num优先chars) {
  var nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '略土', '略俗', '略怪', '玉类']);
  for (let i of allowedLabels) {
    nin.delete(i);
  }
  nin = [...nin];
  return await charsToNames();

  async function charsToNames() {
    var names = [];
    var chars = await mixChars();
    chars.forEach((char, index, chars) => {
      if (index % 2 == 1) return;
      var name = [char.char, chars[index + 1].char];
      names.push(name.sort().join(''));
    });
    return names;
  }

  async function mixChars() {
    var 普通chars = getChars('普通', num普通chars);
    var 有意思chars = getChars('有意思', num有意思chars);
    var 优先chars = getChars('优先', num优先chars);
    普通chars = await 普通chars;
    有意思chars = await 有意思chars;
    优先chars = await 优先chars;
    return mixArray(mixArray(普通chars, 有意思chars), 优先chars);
  }

  async function getChars(type, number) {
    var collection = await charactersCollection();
    var chars = await collection.aggregate([
      {$match:
        {labels: {
          $in: [type],
          $nin: nin
        }}
      },
      {$sample: { size: number }}
      ])
    .project({char:1, _id: 0})
    .toArray();
    return chars;
  }

  async function charactersCollection() {
    var connection = await dbConnection;
    var charactersCollection = await connection.db().collection('characters');
    return charactersCollection;
  }
}

function mixArray(array1, array2) {
  for (let i of array2) {
    let randomIndex = Math.floor(Math.random() * array1.length);
    array1.splice(randomIndex, 0, i);
  }
  return array1;
}
