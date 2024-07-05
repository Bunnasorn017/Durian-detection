import Image from "next/image";
import style from "./home.module.css"

const Page = () => {
  return (
    <div className={style.container}>

    <div className={style.imgContainer}>
      <Image src='/Animated_Sticker_Durian.gif' alt="" fill className={style.durianImage}/>
    </div>

    <div className={style.textContainer}>
        <h1 className={style.title}>Durian Disease Identification Service</h1>
          <p className={style.desc}>
            เว็บไซต์นี้ถูกสร้างขึ้นมาเพื่อให้บริการในการตรวจสอบเกี่ยวกับโรคของทุเรียน
          </p>
          <div className={style.buttons}>
            <button className={style.button}>Learn More (เรียนรู้เพิ่มเติม)</button>
            <button className={style.button}>Disease scan (ตรวจโรค)</button>
          </div>
      </div>
    </div>
  )
}

export default Page;