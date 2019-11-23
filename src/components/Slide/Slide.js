import React from "react";
import styles from "./Slide.css";

export const Slide = ({children}) => {
  return (
    <section>
      <div className={styles.Slide}>
        {children}
      </div>
    </section>
  );
};
