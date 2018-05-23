import React from 'react';

const Ref = props => {
  if (props.nameObj.ref) {
    var 可能出处 = Object.entries(props.nameObj.ref);
  }
  if (props.nameObj.looseRef) {
    var 牵强出处 = Object.entries(props.nameObj.looseRef);
  }
  var char1 = props.nameObj.name[0];
  var char2 = props.nameObj.name[1];
  var 小名 = `阿${char1}, 阿${char2}, 小${char1}, 小${char2}, ${char1}${char1}, ${char2}${char2}`
  var 只喊名 = `${char1}${char2} / ${char2}${char1}`

  return (
    <div className='ref'>
      {可能出处 ?
        <dl>
          <dt>可能的出处: </dt>
          {可能出处.map((item, index) => <dd key={index}>{item.join(': ')}</dd>)}
        </dl>
        : null}
      {牵强出处 ?
        <dl>
          <dt>牵强的出处: </dt>
          {牵强出处.map((item, index) => <dd key={index}>{item.join(': ')}</dd>)}
        </dl>
        : null}
      <dl>
        <dt>如果省略姓, 只喊名: </dt>
        <dd>{只喊名}</dd>
      </dl>
      <dl>
        <dt>可能采用的小名: </dt>
        <dd>{小名}</dd>
      </dl>
    </div>
  );
};

// const Ref = props => {
//   var refs = [];
//   if (props.nameObj.ref) {
//     refs.push(...Object.entries(props.nameObj.ref));
//   }
//   if (props.nameObj.looseRef) {
//     refs.push(...Object.entries(props.nameObj.looseRef));
//   }
//   if (refs.length) {
//     refs = refs.map(i => i.join(': '));
//     refs.unshift('可能相关的出处:');
//   }
//   var char1 = props.nameObj.name[0];
//   var char2 = props.nameObj.name[1];
//   refs.push('可能采用的小名:');
//   refs.push(`阿${char1}, 阿${char2}, 小${char1}, 小${char2}, ${char1}${char1}, ${char2}${char2}`);
//   refs.push('如果只喊名: ');
//   refs.push(`${char1}${char2} / ${char2}${char1}`);

//   return (
//     <dl className='ref'>
//       {refs.map(i => (<p>{i}</p>))}
//     </dl>
//   );
// };

export default Ref;
