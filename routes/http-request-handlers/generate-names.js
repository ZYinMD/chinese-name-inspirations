const db = require('../../db/db-connection.js');
module.exports = generateNames;

async function generateNames(req, res) {
  var nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很难用', '略土', '略俗', '难用', '玉类', '否定', '不真实', '小气', '宽泛']);
  if (req.query.allowed) {
    for (let i of req.query.allowed) {
      nin.delete(i);
    }
  }
  nin = [...nin];

  try {
    console.log('req.query: ', req.query);
    // 如果固定一字:
    if (req.query.fixedChar) {
      let result = await getNamesWithFixedChar();
      res.json(result);
      return;
    }
    // 如果只看有出处的名字:
    if (req.query.mandate出处) {
      res.json(await getNames(20));
      return;
    }
    // 正常情况:
    var 现成names = getNames(10);
    var constructedNames = constructNames(24);
    现成names = await 现成names;
    constructedNames = await constructedNames;
    res.json(mixArray(现成names, constructedNames));
  }
  catch(error) {
    console.error(error);
  }

  async function getNamesWithFixedChar() {
    var chars = await getChars(20);
    return await decorateConstructedNames(chars.map(i => [req.query.fixedChar, i.char].sort().join('')));
  }

  async function getChars(number) {
    var collection = await db.chars;
    var chars = await collection.aggregate([
        {$match:
          {labels: {$nin: nin}}
        },
        {$sample:
          {size: number}
        }
      ])
    .project({char:1, _id: 0})
    .toArray();
    return chars;
  }

  async function getNames(number) { // get some names from names collection
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
                          {
                            'opinion.0.username': {$ne: req.query.username},
                            'opinion.0.rating': {$ne: 1},
                          }
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

  async function constructNames(numChars) { // construct names from chars
    return await charsToNames();

    async function charsToNames() {
      var constructedNames = [];
      var chars = await getChars(numChars);
      chars.forEach((char, index, chars) => {
        if (index % 2 == 1) return;
        var name = [char.char, chars[index + 1].char];
        name = name.sort().join('');
        constructedNames.push(name);
      });
      constructedNames = await decorateConstructedNames(constructedNames); // remove some of the constructedNames
      return constructedNames;
    }
  }

  async function decorateConstructedNames(constructedNames) {
    var namesCollection = await db.names;
    var opinionsCollection = await db.opinions;

    // prune names that have been rated 1, or has been rated by same username before:
    var badlyRated = opinionsCollection.find(
      {
        name: {$in: constructedNames},
        $or: [{rating: 1}, {username: req.query.username}],
      })
    .project({name: 1, _id: 0})
    .toArray();
    // add refs to names that are already in names collection:
    var existed = namesCollection.find({name: {$in: constructedNames}}).project({_id: 0, name: 1, looseRef: 1, ref: 1}).toArray();
    var result = [];
    badlyRated = await badlyRated;
    existed = await existed;
    console.log('constructedNames: ', constructedNames);

    constructedNames.forEach(i => {
      for (let j of badlyRated) {
        if (j.name == i) return;
      }
      for (let j of existed) {
        if (j.name == i) {
          result.push(j);
          return;
        }
      }
      result.push({name: i});
    });

    return result;
  }
}


function mixArray(array1, array2) {
  for (let i of array2) {
    let randomIndex = Math.floor(Math.random() * array1.length);
    array1.splice(randomIndex, 0, i);
  }
  return array1;
}

