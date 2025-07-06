import Highlight from "@/components/highlight/highlight";
import styles from "./footerSection.module.css";
import { FaRegHeart } from "react-icons/fa";
import SocialItem from "@/components/socialItems/socialItems";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.nameContainer}>
        <h4 className={styles.title}>
          Luka <Highlight>Ramishvili</Highlight>
        </h4>
        <p className={styles.subTitle}>
          Building the future, one line of code at a time.
        </p>
      </div>
      <div className={styles.socialsContainer}>
        <SocialItem
          icon={<LuGithub className={styles.icon} />}
          href="https://github.com/OneandonlyRamisha"
        />
        <SocialItem
          icon={<FiLinkedin className={styles.icon} />}
          href="https://www.linkedin.com/in/luka-ramishvili-329352373/"
        />
        <SocialItem
          icon={<FaXTwitter className={styles.icon} />}
          href="https://x.com/LukaRamishvili_"
        />
      </div>
      <div className={styles.copyrightContainer}>
        <div className={styles.madeBy}>
          <p>Made with</p>
          <FaRegHeart color={"red"} size={16} />

          <p>By Luka Ramishvili</p>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
