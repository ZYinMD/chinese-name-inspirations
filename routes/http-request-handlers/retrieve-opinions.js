// handle GET rated names

const db = require('../../db/db-connection.js');

async function retrieveOpinions (req, res) {
  try {
    var collection = await db.opinions;
    let r = await collection.find(
                                 {rating: Number(req.query.rating)}, // req.query.rating is either 3 or 4. 3 is bulb, 4 is heart
                                 {sort: {_id: -1}} // so that newest rated would should up first
                               )
                          .project({rating: 0})
                          .toArray();
    res.json(r);
  }
  catch(error) {
    console.error(error);
  }
}

module.exports = retrieveOpinions;
