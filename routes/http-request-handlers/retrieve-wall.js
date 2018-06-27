// handle GET wall messages

const db = require('../../db/db-connection.js');

async function retrieveWall (req, res) {
  try {
    var collection = await db.wall;
    let r = await collection.find(
                                 {}, // find all
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

module.exports = retrieveWall;
