import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "src/app/components/button/Button";

function WhyImadeThisSite() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>yhw ot emoclew</h1>
          <h2 className={styles.imgDesc}>
        semem eht yojnE. nuf s'ti esauceb lla si sihT.
          </h2>
        </div>
      </div>
      <section className={styles.textContainer}>
        <div className={styles.item}>
          <p className={styles.desc}>
           Read backwards 
          </p>
          </div>
          <h6>yydpOoiyio</h6>
      </section>
    </main>
  );
}

export default WhyImadeThisSite;