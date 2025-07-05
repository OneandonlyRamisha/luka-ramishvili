import React, { useEffect, useState, useLayoutEffect } from "react";
import styles from "./terminalRenderer.module.css";

// interface CommandOutputItem {
//   type: string;
//   content: any;
// }
export type CommandOutputItem =
  | TextItem
  | ProfileItem
  | ContactItem
  | ProjectListItem
  | SkillsItem;

interface Props {
  output: CommandOutputItem[];
  scrollRef?: React.RefObject<HTMLDivElement> | any;
}

interface TypewriterState {
  itemIndex: number;
  charIndex: number;
  isComplete: boolean;
}

interface Project {
  name: string;
  description: string;
  tech?: string[];
  link: string;
  status?: string;
  users?: number;
  contributors?: number;
  downloads?: number;
}
interface ProjectListItem {
  type: "projectList";
  content: Project[];
}

// 5. Skills blocks
interface SkillsItem {
  type: "skills";
  content: {
    languages?: { name: string; level: string }[];
    frameworks?: { name: string; level: string }[];
    databases?: { name: string; level: string }[];
    tools?: { name: string; level: string }[];
  };
}

// 1. Simple text‐style items
interface TextItem {
  type: "text" | "error" | "command";
  content: string;
}

// 2. Profile blocks
interface ProfileItem {
  type: "profile";
  content: { name: string; role: string; location: string; bio: string };
}

// 3. Contact blocks
interface ContactItem {
  type: "contact";
  content: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
    phone: string;
    availability: string;
    message: string;
  };
}

export const TerminalRenderer = ({ output, scrollRef }: Props) => {
  const [typewriterState, setTypewriterState] = useState<TypewriterState>({
    itemIndex: 0,
    charIndex: 0,
    isComplete: false,
  });

  useLayoutEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [typewriterState.charIndex, typewriterState.itemIndex]);

  useEffect(() => {
    // Reset typewriter state when output changes
    setTypewriterState({
      itemIndex: 0,
      charIndex: 0,
      isComplete: false,
    });

    if (output.length === 0) return;

    const typewriterInterval = setInterval(() => {
      setTypewriterState((prev) => {
        const currentItem = output[prev.itemIndex];
        if (!currentItem) return prev;

        let textContent = "";

        // Extract text content based on item type
        if (
          currentItem.type === "text" ||
          currentItem.type === "error" ||
          currentItem.type === "command"
        ) {
          textContent = currentItem.content || "";
        } else if (currentItem.type === "profile") {
          textContent = `Name: ${currentItem.content?.name || ""}\nRole: ${
            currentItem.content?.role || ""
          }\nLocation: ${currentItem.content?.location || ""}\nBio: ${
            currentItem.content?.bio || ""
          }`;
        } else if (currentItem.type === "contact") {
          const c = currentItem.content || {};
          textContent = `📧 Email: ${c.email || ""}\n🔗 LinkedIn: ${
            c.linkedin || ""
          }\n🐙 GitHub: ${c.github || ""}\n🐦 Twitter: ${
            c.twitter || ""
          }\n📱 Phone: ${c.phone || ""}\nAvailability: ${
            c.availability || ""
          }\n💬 ${c.message || ""}`;
        } else {
          // For complex items like projectList and skills, show them immediately
          textContent = ""; // Will be handled differently
        }

        const totalChars = textContent.length;

        // If it's a complex item or we've typed all characters
        if (totalChars === 0 || prev.charIndex >= totalChars) {
          // Move to next item
          if (prev.itemIndex < output.length - 1) {
            return {
              itemIndex: prev.itemIndex + 1,
              charIndex: 0,
              isComplete: false,
            };
          } else {
            return {
              ...prev,
              isComplete: true,
            };
          }
        }

        // Type next character
        return {
          ...prev,
          charIndex: prev.charIndex + 1,
        };
      });
    }, 20); // Typing speed - adjust as needed

    return () => clearInterval(typewriterInterval);
  }, [output]);

  const renderLine = (
    item: CommandOutputItem,
    i: number,
    isCurrentlyTyping: boolean,
    visibleText: string
  ) => {
    // Safety check - make sure item exists and has required properties
    if (!item || !item.type) {
      return null;
    }

    if (item.type === "text") {
      return (
        <p key={i} className={styles.textOutput}>
          {isCurrentlyTyping ? (
            <>
              {visibleText}
              <span className={styles.cursor}>|</span>
            </>
          ) : (
            item.content
          )}
        </p>
      );
    }

    if (item.type === "error") {
      return (
        <p key={i} className={styles.errorOutput}>
          {isCurrentlyTyping ? (
            <>
              {visibleText}
              <span className={styles.cursor}>|</span>
            </>
          ) : (
            item.content
          )}
        </p>
      );
    }

    if (item.type === "command") {
      return (
        <p key={i} className={styles.commandLine}>
          {isCurrentlyTyping ? (
            <>
              {visibleText}
              <span className={styles.cursor}>|</span>
            </>
          ) : (
            item.content
          )}
        </p>
      );
    }

    if (item.type === "profile") {
      if (!item.content) return null;
      const { name, role, location, bio } = item.content;

      if (isCurrentlyTyping) {
        const lines = visibleText.split("\n");
        return (
          <div key={i} className={styles.profileBox}>
            {lines.map((line, idx) => (
              <p key={idx}>
                {line}
                {idx === lines.length - 1 && (
                  <span className={styles.cursor}>|</span>
                )}
              </p>
            ))}
          </div>
        );
      }

      return (
        <div key={i} className={styles.profileBox}>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Bio:</strong> {bio}
          </p>
        </div>
      );
    }

    if (item.type === "projectList") {
      if (!item.content || !Array.isArray(item.content)) return null;
      return (
        <div key={i} className={styles.projectsGrid}>
          {item.content.map((project: Project, index: number) => (
            <div
              onClick={() => window.open(project.link, "_blank")}
              key={index}
              className={styles.projectItem}
            >
              <div className={styles.projectHeader}>
                <span className={styles.projectIndex}>[{index + 1}]</span>
                <span className={styles.projectTitle}>{project.name}</span>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectTech}>
                Tech: {project.tech?.join(", ") || "N/A"}
              </p>
              <div className={styles.projectMeta}>
                {project.status && <span>Status: {project.status}</span>}
                {project.users && <span>Users: {project.users}</span>}
                {project.contributors && (
                  <span>Contributors: {project.contributors}</span>
                )}
                {project.downloads && (
                  <span>Downloads: {project.downloads}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (item.type === "skills") {
      if (!item.content) return null;
      const { languages, frameworks, databases, tools } = item.content;

      const renderSkillBlock = (
        title: string,
        skills?: { name: string; level: string }[]
      ) => {
        if (!skills || !Array.isArray(skills)) return null;
        return (
          <div className={styles.skillCategory}>
            <p className={styles.skillLabel}>{title}</p>
            <ul className={styles.skillList}>
              {skills.map((s, idx) => (
                <li key={idx} className={styles.skillItem}>
                  <span>{s.name}</span>
                  <span>{s.level}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      };

      return (
        <div key={i} className={styles.skillsContainer}>
          {renderSkillBlock("Languages", languages)}
          {renderSkillBlock("Frameworks", frameworks)}
          {renderSkillBlock("Databases", databases)}
          {renderSkillBlock("Tools & DevOps", tools)}
        </div>
      );
    }

    if (item.type === "contact") {
      if (!item.content) return null;
      const { email, linkedin, github, twitter, phone, availability, message } =
        item.content;

      if (isCurrentlyTyping) {
        const lines = visibleText.split("\n");
        return (
          <div key={i} className={styles.contactCard}>
            {lines.map((line, idx) => (
              <p key={idx}>
                {line}
                {idx === lines.length - 1 && (
                  <span className={styles.cursor}>|</span>
                )}
              </p>
            ))}
          </div>
        );
      }

      return (
        <div key={i} className={styles.contactCard}>
          <p>
            <strong>📧 Email:</strong> {email}
          </p>
          <p>
            <strong>🔗 LinkedIn:</strong> {linkedin}
          </p>
          <p>
            <strong>🐙 GitHub:</strong> {github}
          </p>
          <p>
            <strong>🐦 Twitter:</strong> {twitter}
          </p>
          <p>
            <strong>📱 Phone:</strong> {phone}
          </p>
          <p>
            <strong>Availability:</strong> {availability}
          </p>
          <p>
            <strong>💬</strong> {message}
          </p>
        </div>
      );
    }

    return null;
  };

  const getVisibleItems = () => {
    const items = [];

    for (let i = 0; i <= typewriterState.itemIndex && i < output.length; i++) {
      const item = output[i];
      if (!item) continue;

      const isCurrentlyTyping =
        i === typewriterState.itemIndex && !typewriterState.isComplete;
      let visibleText = "";

      if (isCurrentlyTyping) {
        let fullText = "";

        // Extract text content based on item type
        if (
          item.type === "text" ||
          item.type === "error" ||
          item.type === "command"
        ) {
          fullText = item.content || "";
        } else if (item.type === "profile") {
          const c = item.content || {};
          fullText = `Name: ${c.name || ""}\nRole: ${c.role || ""}\nLocation: ${
            c.location || ""
          }\nBio: ${c.bio || ""}`;
        } else if (item.type === "contact") {
          const c = item.content || {};
          fullText = `📧 Email: ${c.email || ""}\n🔗 LinkedIn: ${
            c.linkedin || ""
          }\n🐙 GitHub: ${c.github || ""}\n🐦 Twitter: ${
            c.twitter || ""
          }\n📱 Phone: ${c.phone || ""}\nAvailability: ${
            c.availability || ""
          }\n💬 ${c.message || ""}`;
        }

        visibleText = fullText.substring(0, typewriterState.charIndex);
      }

      items.push({
        item,
        isCurrentlyTyping,
        visibleText,
      });
    }

    return items;
  };

  return (
    <div className={styles.outputSection}>
      {getVisibleItems().map(({ item, isCurrentlyTyping, visibleText }, i) =>
        renderLine(item, i, isCurrentlyTyping, visibleText)
      )}
    </div>
  );
};
