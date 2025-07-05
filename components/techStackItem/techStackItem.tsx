import Image from "next/image";
import styles from "./techStackItem.module.css";

export default function TechStackItem({
  img,
  name,
  category,
  alt,
}: {
  img: string;
  name: string;
  category: string;
  alt: string;
}) {
  return (
    <div className={styles.container}>
      <Image src={img} width={55} height={55} alt={alt} />
      <p className={styles.header}>{name}</p>
      <p className={styles.category}>{category}</p>
    </div>
  );
}
