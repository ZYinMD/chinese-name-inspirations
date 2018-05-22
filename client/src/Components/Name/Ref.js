import React from 'react';

const Ref = props => {
  var refs = [];
  if (props.nameObj.ref) {
    refs.push(...Object.entries(props.nameObj.ref));
  }
  if (props.nameObj.looseRef) {
    refs.push(...Object.entries(props.nameObj.looseRef));
  }
  if (refs.length) {
    refs = refs.map(i => i.join(': '));
    refs.unshift('可能相关的出处:');
  }
  var char1 = props.nameObj.name[0];
  var char2 = props.nameObj.name[1];
  refs.push('可能采用的小名:');
  refs.push(`阿${char1}, 阿${char2}, 小${char1}, 小${char2}, ${char1}${char1}, ${char2}${char2}`);
  refs.push('如果只喊名: ');
  refs.push(`${char1}${char2} / ${char2}${char1}`);

  return (
    <div className='ref'>
      {refs.map(i => (<p>{i}</p>))}
    </div>
  );
};

export default Ref;
