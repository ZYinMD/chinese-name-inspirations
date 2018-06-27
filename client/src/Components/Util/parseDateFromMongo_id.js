export default function parseDateFromMongo_id(_id) {
  var date = new Date(parseInt(_id.substring(0, 8), 16) * 1000); // this line was copied from other people's code.
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day =date.getDate();
  return `${year}-${month}-${day}`;
}


