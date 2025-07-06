"use client";

import FeaturedWork from "@/components/featuredWork/featuredWork";
import styles from "./projectsSection.module.css";
import Highlight from "@/components/highlight/highlight";
import { useState } from "react";
import { filterData } from "@/lib/filtersData";
import FilterBtn from "@/components/filterBtn/filterBtn";
import ProjectComponent from "@/components/projectComponent/projectComponent";
import { projectsData } from "@/lib/projectsData";
import { LuGithub } from "react-icons/lu";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projectsData
      : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.bgRadial1}></div>
      <div className={styles.bgRadial2}></div>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.container}>
        {/*Content goes here*/}
        <div className={styles.headerContainer}>
          <FeaturedWork />
          <h2>
            My <Highlight>Projects</Highlight>{" "}
          </h2>
          <h6>
            A curated collection of my most impactful projects, showcasing
            innovation, technical excellence, and user-centric design that
            pushes boundaries
          </h6>
          <div className={styles.filterContainer}>
            {filterData.map((filter) => (
              <FilterBtn
                key={filter.title}
                title={filter.title}
                icon={filter.icon}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            ))}
          </div>
        </div>
        <div className={styles.bodyContainer}>
          {filteredProjects.map((data) => (
            <ProjectComponent
              gitHubLink={data.github}
              websiteLink={data.website}
              title={data.title}
              key={data.id}
              description={data.description}
              tags={data.tags}
              imgUrl={data.image}
              alt={data.description}
              status={data.status}
              year={data.year}
            />
          ))}
        </div>
        <div className={styles.moreProjects}>
          <h2>
            Want to see <Highlight>more</Highlight>?
          </h2>
          <h6>
            Explore my complete portfolio of innovative projects and
            contributions.
          </h6>
          <a
            href="https://github.com/OneandonlyRamisha"
            className={styles.gitCta}
            target="_blank"
          >
            <LuGithub color="#000" fontSize={20} />
            <p>View All Projects On GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
}
