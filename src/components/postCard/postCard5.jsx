import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases5.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคราแป้ง</h1>
        <p className={style.desc}>
          เชื้อราที่เป็นตัวการคือ Oidium sp. โดยสามารถเข้าทำลายทุเรียนได้ตั้งแต่ช่วงดอกบานจนถึงช่วงเริ่มติดผล อาการที่พบคือ บริเวณดอกหรือผลจะมีผงเชื้อราสีขาวๆคล้ายแป้ง ทำให้ไปรบกวนการเจริญเติบโตของทุเรียน ผลออกมาไม่สวย รสชาติไม่ดี ไม่สามารถนำไปขายได้
        </p>
        <a href="https://www.icpladda.com/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B9%83%E0%B8%88/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B9%81%E0%B8%9B%E0%B9%89%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99/" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
