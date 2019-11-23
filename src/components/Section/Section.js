import React from "react";
import styles from "./Section.css";

export const Section = ({children}) => {
  return (
    <section>
      <div className={styles.Section}>
        {children}
      </div>
    </section>
  );
};
