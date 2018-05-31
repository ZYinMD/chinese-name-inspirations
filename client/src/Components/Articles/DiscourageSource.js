import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import './Articles.css';

const DiscourageSource = () => (
    <div className='discourage-source'>
      <Header leftIcon={<Back/>} leftLink={'/settings'} title='不推荐只看有出处的名字' headingLevel={3}/>
      <article>
        <p>原因: </p>
        <ol>
          <li>1. 由于本软件的算法问题, 有出处的名字很可能不如没出处的名字好听</li>
          <li>2. 有出处的名字通常有着美好的寓意, 例如钱其琛出自《诗经·鲁颂·泮水》: “憬彼淮夷，来献其琛”; 周星驰出自王勃《滕王阁序》: “雄州雾列，俊采星驰”。但本软件的出处是电脑搜索的, 无法考虑到寓意。</li>
          <li>3. 在一生当中, 喊你名字的人成千上万, 但有心思了解你名字出处的人可能不超过10个。比起那10个人觉得你的名字好不好听, 那成千上万个人觉得你的名字好不好听显然更加重要。</li>
        </ol>
      </article>
    </div>
  );
export default DiscourageSource;
