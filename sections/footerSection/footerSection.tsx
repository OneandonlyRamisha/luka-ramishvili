import Highlight from "@/components/highlight/highlight";
import styles from "./footerSection.module.css";
import { FaRegHeart } from "react-icons/fa";
import SocialItem from "@/components/socialItems/socialItems";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

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
          href="www.github.com"
        />
        <SocialItem
          icon={<FiLinkedin className={styles.icon} />}
          href="www.linkedin.com"
        />
        <SocialItem
          icon={<AiOutlineInstagram className={styles.icon} />}
          href="www.instagram.com"
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
