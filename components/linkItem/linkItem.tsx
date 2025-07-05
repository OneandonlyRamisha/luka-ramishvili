import { ReactNode } from "react";
import styles from "./linkItem.module.css";

export default function LinkItem({
  icon,
  name,
  cta,
  href,
}: {
  icon: ReactNode;
  name: string;
  cta: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.dataContainer}>
        <p className={styles.header}>{name}</p>
        <p className={styles.cta}>{cta}</p>
      </div>
    </a>
  );
}
