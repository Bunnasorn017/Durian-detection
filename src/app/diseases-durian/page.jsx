import style from './diseases.module.css'
import PostCard from '@/components/postCard/PostCard'
import PostCard2 from '@/components/postCard/PostCard2'
import PostCard3 from '@/components/postCard/PostCard3'
import PostCard4 from '@/components/postCard/PostCard4'
import PostCard5 from '@/components/postCard/PostCard5'
import PostCard6 from '@/components/postCard/PostCard6'
import PostCard7 from '@/components/postCard/PostCard7'

const Typediseases = () => {
  return (
    <div className={style.container}>
      <div className={style.post}>
        <PostCard />
     
      </div>
      <div className={style.post}>
        <PostCard2 />
     
      </div>
      <div className={style.post}>
        <PostCard3 />
     
      </div>
      <div className={style.post}>
        <PostCard4 />
     
      </div>
      <div className={style.post}>
        <PostCard5 />
     
      </div>
      <div className={style.post}>
        <PostCard6 />
     
      </div>
      <div className={style.post}>
        <PostCard7 />
     
      </div>
    </div>
  )
}

export default Typediseases