import React from "react";
import styles from "src/app/components/footer/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <span>@all rights reserved</span>
      <div className={styles.socialNetworks}>
        <a href="https://guthib.com">
        <Image
          src="/CLICKIT.png"
          width={100}
          className={styles.icon}
          height={100}
          alt="guthib"
        />
        </a>
      </div>
    </div>
  );
}

export default Footer;