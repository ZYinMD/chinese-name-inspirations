// handle GET rated names

const db = require('../../db/db-connection.js');

async function retrieveOpinions (req, res) {
  try {
    var collection = await db.opinions;
    let r = await collection.find({rating: Number(req.query.rating)}).project({rating: 0}).toArray(); // req.query.rating is either 3 or 4. 3 is bulb, 4 is heart
    res.json(r);
  }
  catch(error) {
    console.error(error);
  }
}

module.exports = retrieveOpinions;
