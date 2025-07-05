import styles from "./projectComponent.module.css";
import Image from "next/image";
import { LuGithub } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";

export default function ProjectComponent({
  gitHubLink,
  websiteLink,
  title,
  description,
  tags,
  imgUrl,
  alt,
  status,
  year,
}: {
  gitHubLink: string;
  websiteLink: string;
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  alt: string;
  status: string;
  year: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.statusContainer}>
          <div className={styles.status}>
            <span className={styles.ball}></span>
            <p className={styles.statusText}>{status}</p>
          </div>
          <div className={styles.calendar}>
            <BiCalendar className={styles.calendarIcon} />
            <p>{year}</p>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <a href={gitHubLink} target="_blank">
            <LuGithub className={styles.icon} />
          </a>
          <a href={websiteLink} target="_blank">
            <GoArrowUpRight className={styles.icon} />
          </a>
        </div>
        <Image
          src={imgUrl}
          alt={alt}
          width={100}
          height={100}
          className={styles.img}
        />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.header}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tagsContainer}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
