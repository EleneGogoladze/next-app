import Button from "src/app/components/button/Button";
import styles from "src/app/portfolio/page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";
import meme1 from "public/meme1.png";
import meme2 from "public/meme2.png";
import meme3 from "public/meme3.png";
import meme4 from "public/meme4.png";
import meme5 from "public/meme5.png";
import meme6 from "public/meme6.png";
import meme7 from "public/meme7.png";
import meme8 from "public/meme8.png";
import meme9 from "public/meme9.png";
import meme10 from "public/meme10.png";
import meme11 from "public/meme11.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          These are all the memes
        </h1>
        <p className={styles.desc}>
          Just pretend these are funny
        </p>
       </div>
      <div className={styles.item}>
        <Image src={ meme1 } alt="meme1" className={styles.img} width={1000} height={1000}/>
        <Image src={ meme2 } alt="meme2" className={styles.img}/>
        <Image src={ meme3 } alt="meme3" className={styles.img}/>
        <Image src={ meme4 } alt="meme4" className={styles.img}/>
        <Image src={ meme5 } alt="meme5" className={styles.img} width={1000} height={1000}/>
        <Image src={ meme6 } alt="meme6" className={styles.img} width={1000} height={1000}/>
        <Image src={ meme7 } alt="meme7" className={styles.img}/>
        <Image src={ meme8 } alt="meme8" className={styles.img}/>
        <Image src={ meme9 } alt="meme9" className={styles.img}/>
        <Image src={ meme10 } alt="meme10" className={styles.img} width={1000} height={1000}/>
        <Image src={ meme11 } alt="meme11" className={styles.img}/>
      </div>
    
    </main>
  );
}