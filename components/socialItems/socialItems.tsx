import { ReactNode } from "react";
import styles from "./socialItem.module.css";

export default function SocialItem({
  href,
  icon,
}: {
  href: string;
  icon: ReactNode;
}) {
  return (
    <a href={href} target="_blank" className={styles.icon}>
      {icon}
    </a>
  );
}
