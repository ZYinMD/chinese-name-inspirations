
const dbConnection = require('../db/db-connection.js');
module.exports = function (app) {
  app.get('/api/names', generateNames);
};

class ListOfNames {
  constructor(allowed) {
    let nin = new Set(['不适用于人名', '很生僻', '多音字', '男孩用', '女孩用', '无趣', '略生僻', '很土', '很俗', '很怪', '略土', '略俗', '略怪', '玉类']);
    for (let i of allowed) {
      nin.delete(i);
    }
    this.nin = [...nin];
  }

  async charactersCollection() {
    let connection = await dbConnection;
    let charactersCollection = await connection.db().collection('characters');
    return charactersCollection;
  }

  async randomChars() {
    let characters = await this.charactersCollection();
    let randomChars = await characters.aggregate([
      {$match:
        {labels: {
          $in: ['普通'],
          $nin: this.nin
        }}
      },
      {$sample: { size: 30 }}
      ])
    .project({char:1, _id: 0})
    .toArray();
    return randomChars;
  }

  async goodChars() {
    let characters = await this.charactersCollection();
    let goodChars = await characters.aggregate([
      {$match:
        {labels: {
          $in: ['有意思', '优先'],
          $nin: this.nin
        }}
      },
      {$sample: { size: 6 }}
      ])
    .project({char:1, _id: 0})
    .toArray();
    return goodChars;
  }

  async mixChars() {
    let randomChars = this.randomChars();
    let goodChars = this.goodChars();
    randomChars = await randomChars;
    goodChars = await goodChars;
    return mixIn(randomChars, goodChars);
  }

  async response() {
    return await this.mixChars();
  }

}

async function generateNames(req, res) {
  try {
    console.log(req.query);

    /*
    pseudocode:
    find 30 chars that match 普通 but not match 没开启的
    奇偶配对
    返回每一对
    */
    let randomChars = new ListOfNames([]);
    let response = await randomChars.response();
    res.json(response);


    // res.json(randomChars);
  }
  catch(error) {
    console.error(error);
  }
}


function mixIn(array1, array2) {
  for (let i of array2) {
    let randomIndex = Math.floor(Math.random() * array1.length);
    array1.splice(randomIndex, 0, i);
  }
  return array1;
}
