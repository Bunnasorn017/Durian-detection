import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>someone</div>
      <div className={style.text}>
        Durian Disease Identification Service © All right reserved.
      </div>
    </div>
  )
}

export default Footer