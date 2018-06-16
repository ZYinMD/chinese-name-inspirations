const db = require('../../db/db-connection.js');
module.exports = generateNames;



/*
pseudocode:
拿10个现成名字
凑10个名字
把20个混起来
*/




async function generateNames(req, res) {
  try {
    console.log('req.query: ', req.query);
    // var 现成names = await getNames(req, 10);
    // res.json(现成names);
    var constructedNames = await constructNames(req, 26, 3, 1);
    res.json(constructedNames);
  }
  catch(error) {
    console.error(error);
  }
}

async function getNames(req, number) { // get some names from names collection
  var nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '略土', '略俗', '略怪', '玉类']);
  if (req.query.allowed) {
    for (let i of req.query.allowed) {
      nin.delete(i);
    }
  }
  nin = [...nin];
  return findNames();

  async function findNames() {
    var pipeline = {};
    pipeline.stage1 = {$sample: { size: 5000 }};
    pipeline.stage2 = {$match:
                        {
                          labels:
                            {
                              $nin: nin
                            },
                        }
                      };
    if (req.query.mandate出处 == 'true') {
      pipeline.stage2.$match.$or =
                            [
                              {looseRef: {$exists: 1} },
                              {ref: {$exists: 1}}
                            ];
    }
    pipeline.stage3 = {$sample: { size: 1000 }};
    pipeline.stage4 = {$lookup:
                        {
                          from: 'opinions',
                          localField: 'name',
                          foreignField: 'name',
                          as: 'opinion'
                        }
                      };
    pipeline.stage5 = {$match:
                        {'opinion.0.rating': {$ne: 1}}
                      };
    pipeline.stage6 = {$sample: { size: number }};

    pipeline = Object.values(pipeline);

    var collection = await db.names;
    var names = await collection.aggregate(pipeline)
    .project({_id: 0, name:1, ref: 1, looseRef: 1})
    .toArray();
    return names;
  }
}

async function constructNames(req, num普通chars, num有意思chars, num优先chars) { // construct names from chars
  var nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '略土', '略俗', '略怪', '玉类']);
  if (req.query.allowed) {
    for (let i of req.query.allowed) {
      nin.delete(i);
    }
  }
  nin = [...nin];
  var result = await charsToNames();
  return result;


  async function charsToNames() { //
    var constructedNames = [];
    var chars = await mixChars();
    chars.forEach((char, index, chars) => {
      if (index % 2 == 1) return;
      var name = [char.char, chars[index + 1].char];
      name = name.sort().join('');
      constructedNames.push(name);
    });
    console.log('constructedNames: ', constructedNames);
    constructedNames = await pruneGeneratedNames(constructedNames); // remove some of the constructedNames
    return constructedNames;
  }

  async function pruneGeneratedNames(constructedNames) {
    var namesCollection = await db.names;
    // var opinionsCollection = await db.opinions;

    var existedNames = namesCollection.find({name: {$in: constructedNames}}).project({name: 1, _id: 0}).toArray();
    existedNames = await existedNames;

    constructedNames = new Set(constructedNames);
    for (let i of existedNames) {
      constructedNames.delete(i);
    }

    console.log('existedNames after prune: ', existedNames);
    return constructedNames;
  }

  async function mixChars() {
    var 普通chars = getChars(num普通chars);
    var 有意思chars = getChars(num有意思chars, '有意思');
    var 优先chars = getChars(num优先chars, '优先');
    普通chars = await 普通chars;
    有意思chars = await 有意思chars;
    优先chars = await 优先chars;
    return mixArray(mixArray(普通chars, 有意思chars), 优先chars);
  }

  async function getChars(number, type) {
    var labels = type ? {
      $in: [type],
      $nin: nin
    } : {
      $nin: nin
    };
    var collection = await db.chars;
    var chars = await collection.aggregate([
        {$match:
          {labels: labels}
        },
        {$sample:
          {size: number}
        }
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

