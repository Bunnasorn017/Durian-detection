import Link from "next/link"
import Links from "./links/Links"
import style from "./navbar.module.css"


const Navbar = () => {
  return (
        <div className={style.container}>
        <Link href='/' className={style.logo_navbar}>Durian Disease Identification</Link>
          <Links />
        </div>
  )
}

export default Navbar