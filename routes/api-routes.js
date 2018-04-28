const assert = require('assert');
module.exports = function (app, db) {
  app.get('/api/char/eval', eval);
}

async function eval(req, res) {
  try {
    let r = await db.collection('characters').aggregate(   { $sample: { size: 1 } }).toArray();
    if (r) res.json(r)
    else res.status(410).send('All characters have been evaluated. Unbelievable!');
  }
  catch(error) {
    console.error(error);
  }
}


