import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases3.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคใบติด</h1>
        <p className={style.desc}>
          เชื้อราที่เป็นต้นเหตุคือ Rhizoctonia solani  อาการที่พบได้เบื้องต้นคือใบจะมีรอยจุดๆ ไหม้ๆ เริ่มจากจุดเล็กๆ แล้วลุกลามได้ทั้งใบ และจะมีเส้นใยที่ดูเหมือนใยแมงมุมปกคลุมใบอยู่ด้วย
          ในช่วงหน้าฝน โรคนี้จะยิ่งระบาดง่ายมากเป็นพิเศษ และเพียงแค่ใบที่มีอาการของโรคไปสัมผัสถูกใบอื่นที่ปรกติดี ก็สามารถทำให้ใบอื่นติดโรคไปด้วย และก็จะลุกลามไปได้(เกือบ)ทั้งต้น ดังนั้นถ้าเกษตรกรคนไหนปลูกทุเรียนแบบติดแน่นกันเกินไป ก็เท่ากับเป็นการเพิ่มเปอร์เซ็นต์การลุกลามของโรค เพราะใบทุเรียนจะสีกันตลอดเวลา        </p>
        <a href="https://www.icpladda.com/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B9%83%E0%B8%88/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B9%83%E0%B8%9A%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99/" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
