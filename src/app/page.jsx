import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <div>
      <Image
        src="https://images.pexels.com/photos/17041911/pexels-photo-17041911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={500}
        height={500}
        className={styles.img}
      />
    </div>
  );
}
