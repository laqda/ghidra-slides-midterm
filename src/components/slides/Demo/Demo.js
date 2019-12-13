import React from "react";
import styles from "./Demo.css";
import {Slide} from "../../Slide/Slide";

export const demoTitles = {
  title: "Demo",
  subtitles: [
    {
      title: "",
      length: 1,
    },
  ],
};

export const Demo = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#361a56">
        <h1>this is <mark style={{backgroundColor: '#fff', color: '#361a56'}}>demo time</mark></h1>
        {/*<img className={styles.imgLaunch} src={launch} alt="launch"/>*/}
      </Slide>
    </React.Fragment>
  );
};
