import React from "react";
import styles from "src/app/components/footer/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <span>@all rights reserved</span>
      <div className={styles.socialNetworks}>
        <a href="https://facebook.com">
        <Image
          src="/1.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="facebook"
        />
        </a>
        
        <a href="https://instagram.com">
        <Image
          src="/2.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="instagram"
        />
        </a>

        <a href="https://x.com">
        <Image
          src="/3.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="x"
        />
        </a>
        
        <a href="https://youtube.com">
        <Image
          src="/4.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="youtube"
        />
        </a>
      </div>
    </div>
  );
}

export default Footer;