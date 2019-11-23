import React, {useState, useEffect} from "react";
import styles from "./Footer.css";
import Reveal from "reveal.js";

export const Footer = ({hideOnSlides = []}) => {
  const [display, setDisplay] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    Reveal.addEventListener('slidechanged', () => {
      const current_slide = Reveal.getIndices().h;
      setDisplay(!hideOnSlides.includes(current_slide));
      setSlideIndex(current_slide);
    });
  }, []);
  return display ? (
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
