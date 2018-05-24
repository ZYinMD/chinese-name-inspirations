import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 很土的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='很土的字' headingLevel={3}/>
    <article>
      <h4>以下字被标有[很土]的标签:</h4>
      <p>茂杰奋力大涛浩海祥虎昆国明忠凯飞娟娥绣欣朋丹凤萍彪东帅波诚建晨春民吉敏康贞团帆刚柱威伟华壮贵超博喜庆军钢顺红惠雄辉棠鹃俊胜亮志芙花芹芳劳丽锋锐洁娇娜勇耘岗牡秀兵富裕禄强瑞艳珠振莉彤勤蓉晓宏键峰铁鹏新健福静翠慧聪蝶德毅燕穗玮姗茜菏靓婷楠</p>
    </article>
  </div>
);

export default 很土的字;
