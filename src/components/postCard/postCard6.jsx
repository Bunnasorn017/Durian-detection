import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases6.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคแอนแทรคโนส</h1>
        <p className={style.desc}>
          สาเหตุคือเชื้อรา Polychaeton sp., Tripospermum sp.  ส่วนที่จะเสียหายคือผล อาการที่พบคือผลจะมีรอยแผลสีดำๆประปราย ทำให้ผลทุเรียนราคาตกได้หรืออาจขายไม่ได้เลย เนื่องจากมีตำหนิ
          โรคราดำมีพาหะนำโรคที่สำคัญคือเพลี้ยหอย เพลี้ยแป้ง เพลี้ยไก่แจ้
        </p>
        <a href="https://www.aggrogroups.com/th/news/pest-problem/237-article-2022-2.html" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
