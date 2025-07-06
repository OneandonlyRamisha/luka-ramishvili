import ContactForm from "@/components/contactForm/contactForm";
import styles from "./contactSection.module.css";
import Highlight from "@/components/highlight/highlight";
import LinkItem from "@/components/linkItem/linkItem";
import { MdMailOutline } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.headerContainer}>
        <h2>
          {`Let's`} <Highlight>Connect</Highlight>{" "}
        </h2>
        <h6>
          Ready to start your next project? {`Let's`} discuss how I can help
          bring your ideas to life.
        </h6>
      </div>
      <div className={styles.contactContainer}>
        <ContactForm />
        <div className={styles.linksContainer}>
          <h4 className={styles.header}>Get in Touch</h4>
          <p className={styles.description}>
            {`I'm always interested in hearing about new projects and
            opportunities. Whether you're a company looking to hire, or you're
            someone with an idea that needs to be brought to life, I'd love to
            hear from you.`}
          </p>
          <LinkItem
            name="Email"
            cta="ramishvililukawork@gmail.com"
            href={`mailto:ramishvililukawork@gmail.com`}
            icon={<MdMailOutline size={25} color="#000" />}
          />
          <LinkItem
            name="LinkedIn"
            cta="Connect with me"
            href="https://www.linkedin.com/in/luka-ramishvili-329352373/"
            icon={<SlSocialLinkedin size={25} color="#000" />}
          />
        </div>
      </div>
    </section>
  );
}
