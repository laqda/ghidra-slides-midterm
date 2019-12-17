import React from "react";
import styles from "./End.css";
import cover from "./Ghidra.png";
import {Slide} from "../../Slide/Slide";

export const End = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#361a56">
        <h1 style={{fontSize: '2.2em', marginBottom: '55px'}}>Merci de votre <mark style={{backgroundColor: '#fff', color: "#361a56"}}>écoute</mark></h1>
        <h5>https://github.com/quentm74/ghidra-slides-midterm</h5>
      </Slide>
    </React.Fragment>
  );
};
