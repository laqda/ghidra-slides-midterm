import React from "react";
import styles from "./Title.css";
import cover from "./Ghidra.png";
import {Section} from "../../Section/Section";

export const Title = () => {
  return (
    <Section>
      <div className={styles.title}>
        Soutenance intermédiaire
      </div>
      <img className={styles.ghidra} src={cover} alt="cover-ghidra"/>
      <div className={styles.names}>
        Marianne FAURE & Quentin MICHEL
      </div>
    </Section>
  );
};
