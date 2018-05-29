const db = require('../db/db-connection.js');
module.exports = {constructNames, getNames, getOpinions, mixArray};

async function getNames(allowedLabels, number) {
  var nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '略土', '略俗', '略怪', '玉类']);
  if (allowedLabels) {
    for (let i of allowedLabels) {
      nin.delete(i);
    }
  }
  nin = [...nin];
  return findNames(number);

  async function findNames(number) {
    var collection = await db.names;
    var names = await collection.aggregate([
      {$match:
        {labels: {
          $in: ['普通', '有意思', '优先'],
          $nin: nin
        }}
      },
      {$sample: { size: number }}
      ])
    .project({_id: 0, name:1, ref: 1, looseRef: 1})
    .toArray();
    return names;
  }
}

async function getOpinions(req, res) {
  try {
    console.log('GET req.query: ', req.query);
    var collection = await db.opinions;
    let r = await collection.find({rating: Number(req.query.rating)}).project({rating: 0}).toArray(); // req.query.rating is either 3 or 4. 3 is bulb, 4 is heart
    res.json(r);
  }
  catch(error) {
    console.error(error);
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
      name = name.sort().join('');
      names.push({name});
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
    var collection = await db.chars;
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
}

function mixArray(array1, array2) {
  for (let i of array2) {
    let randomIndex = Math.floor(Math.random() * array1.length);
    array1.splice(randomIndex, 0, i);
  }
  return array1;
}
