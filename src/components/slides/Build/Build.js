import React from "react";
import styles from "./Build.css";
import {Slide} from "../../Slide/Slide";

export const buildTitles = {
  title: "Build the tool",
  subtitles: [
    {
      title: "Dépendances",
      length: 1,
    },
    {
      title: "Launch it",
      length: 1,
    },
    {
      title: "Pourquoi le faire ?", // rigolo + failles
      length: 1,
    },
  ],
};

export const Build = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#361a56">
      </Slide>
    </React.Fragment>
  );
};
