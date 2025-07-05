import { servicesData } from "@/lib/servicesData";
import styles from "./myServicesSection.module.css";
import Highlight from "@/components/highlight/highlight";
import ServicesItem from "@/components/servicesItem/servicesItem";

export default function MyServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.headerContainer}>
        <h2>
          My <Highlight>Services</Highlight>
        </h2>
        <h6>
          Comprehensive development services to bring your digital vision to
          life
        </h6>
      </div>
      <div className={styles.servicesContainer}>
        {servicesData.map((service) => (
          <ServicesItem
            key={service.name}
            icon={service.icon}
            title={service.name}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
