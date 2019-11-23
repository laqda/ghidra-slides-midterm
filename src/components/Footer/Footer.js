import React, {useState, useEffect} from "react";
import styles from "./Footer.css";
import Reveal from "reveal.js";

export const Footer = ({slideIndex, hideOnSlides = []}) => {
  return !hideOnSlides.includes(slideIndex) ? (
    <div className={styles.Footer}>
      <div>
        Ghidra - Soutenance intermédiaire
      </div>
      <div>
        {slideIndex}
      </div>
    </div>
  ) : null;
};
