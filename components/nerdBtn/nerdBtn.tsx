import styles from "./nerdBtn.module.css";
// import { IoCodeSlashOutline } from "react-icons/io5";
import { GoCommandPalette } from "react-icons/go";
import { RxExit } from "react-icons/rx";

export default function NerdBtn({
  nerdMode,
  setNerdMode,
}: {
  nerdMode: boolean;
  setNerdMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setNerdMode((prev) => !prev)}
      className={styles.container}
    >
      {nerdMode ? <RxExit /> : <GoCommandPalette />}
    </button>
  );
}
