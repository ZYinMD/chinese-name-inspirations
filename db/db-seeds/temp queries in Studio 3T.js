Studio 3T 重启备份:
Tab Chars:
db.characters.aggregate([{
  $match: {labels: '有意思'}
}, {
  $sample: {size: 49}
}, {
  $group: {
    _id: '$_id',
    char: { $first: '$char'},
    labels: { $first: '$labels'}
    }
}]);

db.characters.aggregate([{
  $match: {labels: '优先'}
}, {
  $sample: {size: 49}
}
]);

db.characters.find({labels: '男孩用', "labels.1": {$exists: 1}})

db.characters.find({char: '琴'})

Tab names:
db.names.find({});
db.names.aggregate([
  {$lookup:
    {
      from: 'opinions',
      localField: 'name',
      foreignField: 'name',
      as: 'opinion'
    }
  }
]);

db.names.aggregate([
  {$sample: {size: 30}},
  {$lookup:
    {
      from: 'opinions',
      localField: 'name',
      foreignField: 'name',
      as: 'opinion'
    }
  },
  {$match:
    {'opinion.0.rating': {$ne: 1}}
  }
]);

db.names.aggregate([
      {$sample: { size: 1000 }
      },
      {$match:
        {
         labels:
          {
          $in: ['普通', '有意思', '优先']
        },
     $or:
       [
         {looseRef: {$exists: 1}},
         {ref: {$exists: 1}},

       ]
        }
      },
      {$sample: { size: 10 }
      },
      {$lookup:
        {
          from: 'opinions',
          localField: 'name',
          foreignField: 'name',
          as: 'opinion'
        }
      },
      {$match:
        {'opinion.0.rating': {$ne: 1}}
      }
    ]);


db.names.find({
  $or:
   [
     {looseRef: {$exists: 1}},
     {isRealName: true}
     ]
  });

db.names.find({isRealName: true});


Tab opinions:
db.opinions.find({})




db.names.find({labels:
  {
    $in: ['有意思', '优先'],
    $nin: ['很土', '略土', '很俗', '略俗', '很怪', '略怪', '略生僻', '女孩用', '男孩用', '不适用于人名', '多音字', '无趣', '很生僻']
  }
});

db.names.find(
{labels:
  {
    $in: ['普通'],
    $nin: ['很土', '略土', '很俗', '略俗', '很怪', '略怪', '略生僻', '女孩用', '男孩用', '不适用于人名', '多音字', '无趣', '很生僻']
  }
}
);
db.names.find({ref: {$exists: true},labels:
  {
    $in: ['普通'],
    $nin: ['很土', '略土', '很俗', '略俗', '很怪', '略怪', '略生僻', '女孩用', '男孩用', '不适用于人名', '多音字', '无趣', '很生僻']
  } });

db.names.find({
  $and: [
  	{$or:[{ref: {$exists: true}}, {looseRef: {$exists: true}}]},
  	{labels:{
	  $in: ['普通'],
	  $nin: ['很土', '略土', '很俗', '略俗', '很怪', '略怪', '略生僻', '女孩用', '男孩用', '不适用于人名', '多音字', '无趣', '很生僻']
	}}
  ]
});

db.names.find({
  $and: [
  	{$or:[{ref: {$exists: true}}, {looseRef: {$exists: true}}]},
  	{labels:{
	  $in: ['普通', '有意思', '优先'],
	  $nin: ['很土', '略土', '很俗', '略俗', '很怪', '略怪', '略生僻', '女孩用', '男孩用', '不适用于人名', '多音字', '无趣', '很生僻']
	}}
  ]
});

db.names.find({name:'之在'});

