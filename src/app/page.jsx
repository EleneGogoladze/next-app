import Button from "src/app/components/button/Button";
import styles from "src/app/page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Programmer memes
        </h1>
        <p className={styles.desc}>
          Random programmer memes, because why not?
        </p>
        <Button title={"See the memes"} url={"/portfolio"} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </main>
  );
}