import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Habib. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="lamadev fb"
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src="/2.png"
          alt="lamadev insta"
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src="/3.png"
          alt="lamadev twitter"
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src="/4.png"
          alt="lamadev youtube"
          className={styles.icon}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
