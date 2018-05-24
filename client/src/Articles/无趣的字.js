import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 无趣的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='无趣的字' headingLevel={3}/>
    <article>
      <h4>以下字被标有[可用于人名, 但很无趣]的标签:</h4>
      <p>茁杭事一凌衷高乃才苹丈万凡益兼义悍宽诺谅谊贤昌畅固咏岩岭制板卫刃习叉井元厂专木友巨仁恳陶能继培和秉岳丹方计尺允双菲营彬硕盛雪堂法卉功艾石龙平北田史治宗定肃禾代尔乐玄汉礼常绅驶辽加邦亚芝权协庸成尧尖早同廷革茵荫栋勃柬伍伦全厚鸥盼显品勋敬棕决汝弛阳钧矩禹好驰寿麦远运厦雳敞践律勉施严芦芭材杖励策济艇鲁馈敦渤冠祖逊垒坚旷利愉瑟载挚耿恭蒙献楷榄槐碑督桦虑庐辛汪沛睦跨峨积秩称阿附武规坤倡舰豹颂滨誉谨赫聚锻稳箫旗慷褐增樟磊霄澄憨豫辙赞儒瞩曙徽赢翼鹰露霹韦仞芍攸佗饫岿岱佼珏赳茱荟茗柯轶胄笃俨炳炯洱骅彧砺砥轼虔罡隼舫烨涟涓窈掊萃菀铮笞舸鸾旌窕绫琵琮萼掣犊筌傥舜谡媛蒿颐榈煦跻嗣嵩詹雍阙缜韬榛霆裴幛骠璋嶙镏羯磬橹霖翱羲寰襄鬃躇骥骧</p>
    </article>
  </div>
);

export default 无趣的字;
