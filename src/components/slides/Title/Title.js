import React from "react";
import styles from "./Title.css";
import cover from "./Ghidra.png";
import {Slide} from "../../Slide/Slide";

export const Title = () => {
  return (
    <Slide data-background-color="#361a56">
      <div className={styles.title}>
        Soutenance intermédiaire
      </div>
      <img className={styles.ghidra} src={cover} alt="cover-ghidra"/>
      <div className={styles.names}>
        sous la direction de <b>M. Frédéric Tronel</b><br/>
        <b>Marianne FAURE</b> & <b>Quentin MICHEL</b>
      </div>
    </Slide>
  );
};
