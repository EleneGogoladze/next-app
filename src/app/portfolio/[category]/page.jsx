import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((cat) => (
        <div key={cat.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{cat.name}</h1>
            <p className={styles.desc}>
             
            </p>
            <Button title={"See the memes"} url={"/portfolio"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              alt="Meme"
              fill={true}
              src={cat.src}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;