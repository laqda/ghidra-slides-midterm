import React from "react";
import styles from "./Introduction.css";
import {Slide} from "../../Slide/Slide";
import rsa_conference from "./rsa_conference.png";
import ReactMarkdown from "react-markdown";

export const introductionTitles = {
  title: "Introduction",
  subtitles: [
    {
      title: "Reverse Ingineering",
      length: 2,
    },
    {
      title: "Le marché avant / après la révolution",
      length: 4,
    },
    {
      title: "Ghidra", // + tweets
      length: 3,
    },
  ],
};

export const Introduction = () => {
  return (
    <React.Fragment>
      <Slide>

      </Slide>
      <Slide data-background-color="#361a56">
        <img className={styles.img} src={rsa_conference} alt="rsa-conference"/>
      </Slide>
    </React.Fragment>
  );
};
