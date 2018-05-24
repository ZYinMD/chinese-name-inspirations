import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 略土的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='略土的字' headingLevel={3}/>
    <article>
      <h4>以下字被标有[略土]的标签:</h4>
      <p>英枝松山益广悦旺鸣王艺展祟通绢骏捷金菱梅爽河巧甘宝宙实详冬立跃崇甜妮玲珊辽发淑光屹荣栋柏勃婉绵琳琼优兆旭敬朝江兴宇香保寿韧孝晶峦亭芬杏杉杨辰皓美洪洋贺骄坚耿莲荷莺雷桂桃良锦峻纬玫腾颖靖坤茉缤碧彰蕊震蕾霞璧耀巍芊芍芸妍妩茱荃茹姣莓莎倩胭娴婀菁铠皎烽婕葶雯媛瑚蓓韬翡璠犟璐麒</p>
    </article>
  </div>
);

export default 略土的字;
