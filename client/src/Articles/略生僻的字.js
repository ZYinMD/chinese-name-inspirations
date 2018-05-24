import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 略生僻的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='略生僻的字' headingLevel={3}/>
    <article>
      <h4>以下字被标有[可以用, 但稍微有点生僻]的标签:</h4>
      <p>苑顷逛壬琅侈刹乾庚怡诞匙笙迢挟徘徙羚淳屹茬祷堰椎峡钦玖喻赋柒竣羡渲瑟酌沁稚圃魁坦坤徒彰撰蕊幢澄踱瞭弋札丕仞玑亘夙坂抉芷芮佚奂狄炀汾忡怆纾玥玦苒苓杳鸢岿岬帔迤枭炜炝泱泓泾祇诣诩妲绉驿珐玳荞茯荏荃垩殇轲胄咤峒峋逅奕飒炯洱恓恺衿袂咫娆姝羿骁骅绛珥珞琤敖莅荼桓彧逦唏罡铄氤倏隽徕桀朔烨浯悭袢奘蚩骋掬掊菁萘萃萦桫晡晤晗皑舸翎孰翊旎袤焐焓渚淞悱婧翌绮绻绾缁琮葭殚斐犊鹄遑颌湛湮湍谡瑜蒿蒡楣裘蜃虞雎戥雉氲筠筱颔阙煨煺滟愫骞媲嫒璈榭霁踌僖銮塾韶旖漪骠璀墀蕙靥幡镌镏箴篆鹞馔麾熵熠潺憬熨璞靛璠熹磬醍邂羲燧寰缱璨檄翳簌皤鹫鬃曜鎏蘅霭霰骧颦灏</p>
    </article>
  </div>
);

export default 略生僻的字;
