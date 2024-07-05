import Image from 'next/image';
import style from './postCard.module.css';

const PostCard2 = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src='/diseases7.png' alt='' fill className={style.img} />
        </div>
        <span className={style.date}>7/4/2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>โรคผลเน่า</h1>
        <p className={style.desc}>
          สาเหตุคือเชื้อราชื่อ Phytophthora palmivora ซึ่งเป็นเชื้อตัวเดียวกับโรครากเน่าและโคนเน่า สามารถเข้าทำลายผลทุเรียนได้ทั้งช่วงอ่อนและช่วงแก่ อาการของโรคที่สังเกตได้คือ ผลทุเรียนจะมีรอยราขาวๆ ดูคล้ายผงแป้ง มีรอยช้ำเป็นจ้ำๆ เน่าไปถึงเนื้อได้ ทำให้ผลทุเรียนขายไม่ได้ราคา
        </p>
        <a href="https://www.icpladda.com/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B9%83%E0%B8%88/%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%9C%E0%B8%A5%E0%B9%80%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99/" target="_blank" rel="noopener noreferrer" className={style.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default PostCard2;
