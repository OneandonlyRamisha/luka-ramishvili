import { ReactNode } from "react";
import styles from "./filterBtn.module.css";

export default function FilterBtn({
  activeFilter,
  setActiveFilter,
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <button
      className={`${styles.container} ${
        activeFilter === title ? styles.active : undefined
      }`}
      onClick={() => setActiveFilter(title)}
    >
      {icon}
      <p className={styles.title}>{title}</p>
    </button>
  );
}
