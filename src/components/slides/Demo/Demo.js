import React from "react";
import styles from "./Demo.css";
import {Slide} from "../../Slide/Slide";

export const demoTitles = {
  title: "Demo",
  subtitles: [
    {
      title: "Demo time",
      length: 1,
    },
  ],
};

export const Demo = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#361a56">
      </Slide>
    </React.Fragment>
  );
};
