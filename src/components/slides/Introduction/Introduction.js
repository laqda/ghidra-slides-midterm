import React from "react";
import styles from "./Introduction.css";
import {Slide} from "../../Slide/Slide";
import rsa_conference from "./rsa_conference.png";

export const Introduction = () => {
  return (
    <Slide data-background-color="#361a56">
      <img className={styles.img} src={rsa_conference} alt="rsa-conference"/>
    </Slide>
  );
};
