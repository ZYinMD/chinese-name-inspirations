import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import './Articles.css';

const DiscourageSource = () => (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/settings'} title='不推荐只看有出处的名字' headingLevel={3}/>
      <article>
        <p>原因一: </p>
        <p>一般来讲, 名字的出处寄托了家长美好的寓意, 例如:</p>
        <p>周星驰: <br/>王勃《滕王阁序》: “雄州雾列，俊采星驰。”</p>
        <p>钱其琛: <br/>《诗经·鲁颂·泮水》: “憬彼淮夷，来献其琛。” </p>
        <p>但软件的出处是电脑搜索的, 无法考虑到寓意。</p>
        <p>原因二: </p>
        <p>在人的一生当中, 喊你名字的人成千上万, 但有心思了解你名字出处的人可能不超过10个。那10个人觉得你的名字好听固然很重要, 但那成千上万个人觉得你的名字好不好听显然更重要。所以说, 不要太过执着于典故, 舍本逐末</p>
      </article>
    </div>
  );
export default DiscourageSource;
