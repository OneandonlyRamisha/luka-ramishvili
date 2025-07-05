import { ReactNode } from "react";
import styles from "./btn.module.css";

export default function Btn({
  title,
  cta,
  href,
  download,
  icon,
}: {
  title: string;
  cta: boolean;
  href: string;
  download: boolean;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      download={download ? true : false}
      className={`${styles.btn} ${cta ? styles.cta : styles.secondary}`}
    >
      {icon}

      <p className={styles.title}>{title}</p>
    </a>
  );
}
