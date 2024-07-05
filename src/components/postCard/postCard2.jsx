import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases2.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคแอนแทรคโนส</h1>
        <p className={style.desc}>
          เกิดมาจากเชื้อรา Colletotrichum gloeosporioides  จะเข้าทำลายต้นทุเรียนในช่วงที่ช่อดอกเริ่มบาน ดังนั้นจะสังเกตเห็นได้โดยง่ายว่าดอกจะมีสีช้ำๆดำๆ และมีรอยราสีเทาๆด้วย
          ปัจจัยเสี่ยงที่จะทำให้โรคยิ่งลุกลาม คือการที่เกษตรกรปลูกทุเรียนติดกันมากเกินไป และพุ่มกิ่งทุเรียนรกเกินไป ดังนั้นหนึ่งในวิธีที่จะช่วยแก้ปัญหาได้ คือควรเว้นระยะห่างของทุเรียนแต่ละต้น อีกทั้งยังควรหมั่นตัดแต่งพุ่มกิ่งให้โปร่งๆ
        </p>
        <a href="https://www.happyfarmer.biz/article/25/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B9%83%E0%B8%9A%E0%B8%88%E0%B8%B8%E0%B8%94-%E0%B9%83%E0%B8%9A%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B9%89-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B9%81%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%97%E0%B8%A3%E0%B8%84%E0%B9%82%E0%B8%99%E0%B8%AA-leaf-spot-leaf-blight-anthracnose" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
