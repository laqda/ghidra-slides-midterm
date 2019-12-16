import React from "react";
import styles from "./FollowingEvents.css";
import {Slide} from "../../Slide/Slide";
import ghidra from "./ghidra.png"

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
      <Slide data-background-color="#f6f8fa">
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
