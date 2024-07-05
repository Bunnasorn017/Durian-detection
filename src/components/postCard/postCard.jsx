import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases1.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคแอนแทรคโนส</h1>
        <p className={style.desc}>
          เกิดมาจากเชื้อรา Colletotrichum gloeosporioides จะเข้าทำลายต้นทุเรียนในช่วงที่ช่อดอกเริ่มบาน ดังนั้นจะสังเกตเห็นได้โดยง่ายว่าดอกจะมีสีช้ำๆดำๆ และมีรอยราสีเทาๆด้วย
        </p>
        <a href="https://dynamicseeds.com/%E0%B8%94%E0%B8%B9%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1-18904-%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B9%84%E0%B8%9F%E0%B8%97%E0%B8%AD%E0%B8%9B%E0%B8%98%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-credit-vanidakaset-com.html" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
