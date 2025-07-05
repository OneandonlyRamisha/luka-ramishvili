import styles from "./featuredWork.module.css";
import { CiStar } from "react-icons/ci";

export default function FeaturedWork() {
  return (
    <div className={styles.container}>
      <CiStar size={24} color={"#fbbf24"} />
      <p className={styles.title}>Featured Work</p>
      <span className={styles.ball}></span>
    </div>
  );
}
