import React from "react";
import styles from "./FollowingEvents.css";
import {Slide} from "../../Slide/Slide";
import ghidra from "./ghidra.png"
import archi from "./archi.png"
import debug_ghidra from "./debug_ghidra.png"
import debug_eclipse from "./debug_eclipse.png"

export const followingEventsTitles = {
  title: "What next ?",
  subtitles: [
    {
      title: "Infrastructure",
      length: 1,
    },
    {
      title: "Debug mode",
      length: 1,
    },
    {
      title: "How it works",
      length: 1,
    },
  ],
};

export const FollowingEvents = () => {
  return (
    <React.Fragment>
      <Slide data-background={archi}>
        <h2 className={styles.titleArchi}>Architecture complexe</h2>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <div className={styles.debug}>
          <img className={styles.imgGhidra} src={debug_ghidra} alt="debug_ghidra"/>
          <div><i className={`em em-handshake`}/></div>
          <img className={styles.imgEclipse} src={debug_eclipse} alt="debug_eclipse"/>
        </div>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <h2>Étude des composants :</h2>
        <div className={styles.how}>
          <span>⬝ &nbsp;&nbsp;Sleigh</span>
          <span className={styles.howPath}>Ghidra/Processors</span>
          <span>⬝ &nbsp;&nbsp;Désassembleur</span>
          <span className={styles.howPath}>Ghidra/Features/Base</span>
          <span>⬝ &nbsp;&nbsp;Décompilateur</span>
          <span className={styles.howPath}>Ghidra/Features/Decompiler</span>
        </div>
      </Slide>
    </React.Fragment>
  );
};
