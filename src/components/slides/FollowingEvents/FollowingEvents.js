import React from "react";
import styles from "./FollowingEvents.css";
import {Slide} from "../../Slide/Slide";
import ghidra from "./ghidra.png"
import archi from "./archi.png"
import archi2 from "./archi2.png"

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
        {/*<img className={`fragment ${styles.imgArchi}`} src={archi2} alt="archi"/>*/}
      </Slide>
      <Slide data-background-color="#f6f8fa">
      </Slide>
      <Slide data-background={ghidra}>
        <div className={styles.ghidra}>
          <b>Sleigh</b> + <b>Désassembleur</b> + <b>Décompilateur</b>
        </div>
      </Slide>
    </React.Fragment>
  );
};
