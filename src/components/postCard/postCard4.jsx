import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases4.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคราสีชมพู</h1>
        <p className={style.desc}>
          เกิดมาจากเชื้อราชื่อ Cortricium Salmonicolor อาการของโรคจะสังเกตได้ชัดที่กิ่ง คือกิ่งจะดูแห้งๆ มีจุดสีเหลืองๆขึ้นตะปุ่มตะป่ำและร่วงหล่นลงไปเป็นครั้งๆ นอกจากนี้จะมีเส้นใยเชื้อราเป็นขุยๆสีชมพูด้วย ถ้าปล่อยไว้นานๆกิ่งจะเริ่มแตก และแห้งตายได้
          ดังนั้นเกษตรกรจึงต้องตาไว สังเกตให้ดีว่ากิ่งไหนมีอาการของโรค ให้รีบตัดออกและนำไปเผาทิ้ง เพื่อไม่ให้โรคแพร่กระจาย นอกจากนี้การตัดแต่งกิ่งทุเรียนให้อากาศถ่ายเทง่ายก็เป็นอีกหนทางที่ดี        </p>
        <a href="https://erawanagri.com/2022/10/09/durion-plant-pathology-02/" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
