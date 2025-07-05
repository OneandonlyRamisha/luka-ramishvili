import { testimonialData } from "@/lib/testimonialData";
import styles from "./testimonialSection.module.css";
import Highlight from "@/components/highlight/highlight";
import Testimonial from "@/components/testimonial/testimonial";

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.headerContainer}>
        <h2>
          Client <Highlight>Testimonials</Highlight>{" "}
        </h2>
        <h6>What clients say about working with me</h6>
      </div>
      <div className={styles.testimonialContainer}>
        {testimonialData.map((data) => (
          <Testimonial
            key={data.name}
            name={data.name}
            img={data.img}
            alt={data.alt}
            description={data.description}
            position={data.status}
          />
        ))}
      </div>
    </section>
  );
}
