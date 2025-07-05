import { stackData } from "@/lib/stackData";
import styles from "./techStackSection.module.css";
import Highlight from "@/components/highlight/highlight";
import TechStackItem from "@/components/techStackItem/techStackItem";

export default function TeckStackSection() {
  return (
    <section className={styles.techSection}>
      <div className={styles.headerContainer}>
        <h2>
          Tech <Highlight>Stack</Highlight>
        </h2>
        <h6>Technologies I work with to build amazing digital experiences</h6>
      </div>
      <div className={styles.stackContainer}>
        {stackData.map((data) => (
          <TechStackItem
            key={data.name}
            category={data.category}
            img={data.img}
            name={data.name}
            alt={data.alt}
          />
        ))}
      </div>
    </section>
  );
}
