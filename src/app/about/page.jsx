import Image from 'next/image'
import style from './about.module.css'

const AboutPage = () => {
  return (
    <div className={style.container}>

    <div className={style.imgContainer}>
      <Image src='/durian-fruit-with-cut-half-leaves-isolated-white-surface_252965-916.avif' alt='' fill/>
    </div>

    <div className={style.textContainer}>
      <div className={style.info}>
        <h1 className={style.title}>History Of Durian</h1>
        <p className={style.desc}>
          ทุเรียน (Durian) เป็นผลไม้เขตร้อนที่มีลักษณะเฉพาะตัวที่โดดเด่น มีกลิ่นแรงและเปลือกหนามแหลม จนได้รับการยกย่องว่าเป็น "ราชาแห่งผลไม้" (King of Fruits) ในภูมิภาคเอเชียตะวันออกเฉียงใต้ ทุเรียนมีความสำคัญทางเศรษฐกิจและวัฒนธรรมอย่างมากในหลายประเทศ เช่น ไทย มาเลเซีย อินโดนีเซีย ฟิลิปปินส์ และบรูไน
        </p>
      </div>

      <div className={style.info}>
        <h1 className={style.title}>ต้นกำเนิดและการแพร่กระจาย</h1>
        <p className={style.desc}>
          ทุเรียนมีต้นกำเนิดจากป่าฝนในภูมิภาคเอเชียตะวันออกเฉียงใต้ ซึ่งรวมถึงบริเวณเกาะบอร์เนียวและสุมาตรา คำว่า "ทุเรียน" มาจากคำว่า "duri" ในภาษามลายู ซึ่งแปลว่า "หนาม" เนื่องจากลักษณะเปลือกของทุเรียนที่มีหนามแหลม
        </p>
      </div>

      <div className={style.info}>
        <h1 className={style.title}>ประวัติการค้นพบและการบริโภค</h1>
        <p className={style.desc}>
          ทุเรียนมีการบันทึกครั้งแรกในศตวรรษที่ 15 โดย Niccolò de' Conti นักสำรวจชาวอิตาลีที่เดินทางไปยังเอเชียตะวันออกเฉียงใต้ ทุเรียนได้รับความนิยมในหมู่ชนชั้นสูงและราชวงศ์ในภูมิภาคนี้ โดยมีการใช้เป็นผลไม้ในพิธีต่างๆ และเป็นส่วนหนึ่งของอาหารว่างในราชสำนัก
          ในศตวรรษที่ 19 ทุเรียนเริ่มได้รับความสนใจจากนักสำรวจและนักพฤกษศาสตร์ชาวยุโรป ซึ่งได้ทำการศึกษาลักษณะและการเพาะปลูกทุเรียน และนำไปเผยแพร่ในแหล่งต่าง
        </p>
      </div>
    </div>

    </div>
  )
}

export default AboutPage