import styles from "./testimonial.module.css";
import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";

export default function Testimonial({
  description,
  img,
  name,
  position,
  alt,
}: {
  description: string;
  img: string;
  name: string;
  position: string;
  alt: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <TiStarFullOutline className={styles.star} />
        <TiStarFullOutline className={styles.star} />
        <TiStarFullOutline className={styles.star} />
        <TiStarFullOutline className={styles.star} />
        <TiStarFullOutline className={styles.star} />
      </div>
      <p className={styles.description}>{`"${description}"`}</p>
      <div className={styles.author}>
        <Image
          src={img}
          width={60}
          height={60}
          alt={alt}
          className={styles.img}
        />
        <div className={styles.authorInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </div>
  );
}
