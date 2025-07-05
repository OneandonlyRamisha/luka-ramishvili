"use client";

import { useState, useRef, useEffect } from "react";
import { BigTerminalText } from "@/components/welcome/welcome";
import { commandData } from "@/lib/commandsData";
import { TerminalRenderer } from "@/components/terminalRenderer/terminalRenderer";
import styles from "./nerdSection.module.css";

export default function NerdSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // SCROLL TO BOTTOM ON history CHANGE

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = input.trim();
      if (trimmed === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const command = commandData.find(
        (cmd) => cmd.command.toLowerCase() === trimmed.toLowerCase()
      );

      const output = command ? (
        <TerminalRenderer output={command.output} scrollRef={bodyRef} />
      ) : (
        <TerminalRenderer
          scrollRef={bodyRef}
          output={[
            { type: "error", content: `Command not found: ${trimmed}` },
            { type: "text", content: "Type 'help' for available commands." },
          ]}
        />
      );

      setHistory((prev) => [...prev, { command: trimmed, output }]);
      setInput("");
    }
  };

  const handleTerminalClick = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className={styles.nerdModeSection}>
      <div className={styles.terminalContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.macDots}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
          </div>
          <p className={styles.header}>Terminal - Portfolio</p>
        </div>

        <div
          className={styles.bodyContainer}
          ref={bodyRef}
          onClick={handleTerminalClick}
          tabIndex={0}
        >
          <div className={styles.welcome}>
            <p>Welcome to my portfolio</p>
            <p>{`Type 'help' to see available commands.`}</p>
            <BigTerminalText />
          </div>

          <div className={styles.commandHistory}>
            {history.map((entry, idx) => (
              <div key={idx} className={styles.commandBlock}>
                <p className={styles.promptsContainer}>
                  <span className={styles.prompt}>Ramisha@portfolio:~$</span>
                  {entry.command}
                </p>
                <div>{entry.output}</div>
              </div>
            ))}
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.prompt}>Ramisha@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={(e) => {
                if (e.relatedTarget === null) {
                  setTimeout(() => inputRef.current?.focus(), 0);
                }
              }}
              className={styles.commandInput}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
