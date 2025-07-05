import Btn from "@/components/btn/btn";
import styles from "./heroSection.module.css";
import Highlight from "@/components/highlight/highlight";
import Image from "next/image";
import { BsDownload, BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.border}>
          <Image
            src={"/me.png"}
            className={styles.logo}
            width={200}
            height={200}
            alt="Ai generated picture of owner of the page"
          />
        </div>
        <h1 className={styles.header}>
          Luka <Highlight>Ramishvili</Highlight>
        </h1>
        <h4 className={styles.subHeader}>
          Web & App Developer, React Expert, Turning Ideas into Products
        </h4>
        <h6>
          Passionate full-stack developer specializing in modern web
          technologies. I create scalable, user-friendly applications that bring
          your vision to life.
        </h6>
        <div className={styles.btnsContainer}>
          <Btn
            title="Hire Me"
            icon={<BsArrowRight style={{ color: "#000", fontSize: 18 }} />}
            href="#contact"
            cta={true}
            download={false}
          />
          <Btn
            title="View Resume"
            icon={<BsDownload style={{ color: "#000", fontSize: 18 }} />}
            href="/cv.pdf"
            cta={false}
            download={true}
          />
        </div>
      </div>
    </section>
  );
}
