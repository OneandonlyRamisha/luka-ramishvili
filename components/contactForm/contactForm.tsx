import styles from "./contactForm.module.css";
import { BsSend } from "react-icons/bs";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Send a Message</h4>
      <form
        action="https://formsubmit.co/liziramishvilicello@gmail.com"
        method="POST"
        className={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={styles.input}
        />

        <textarea
          name="message"
          placeholder="Tell Me About Your Project..."
          required
          className={styles.textarea}
        />

        <button type="submit" className={styles.button}>
          <BsSend className={styles.icon} />
          <p className={styles.btnText}>Send Message</p>
        </button>
      </form>
    </div>
  );
}
