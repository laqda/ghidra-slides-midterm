import React from "react";
import styles from "./Ghidra.css";
import {Slide} from "../../Slide/Slide";
import logo from "./logo.png";
import img_debugger from "./debugger.png";

export const ghidraTitles = {
  title: <span>Ghidra <i className={`em em-dragon ${styles.dragon}`}/></span>, // + tweets
  subtitles: [
    {
      title: "Caractéristiques",
      length: 1,
    },
    {
      title: "Concurrence",
      length: 1,
    },
    {
      title: "P-Code",
      length: 1,
    },
    {
      title: "Projet partagé",
      length: 1,
    },
    {
      title: "Débogueur",
      length: 1,
    },
  ],
};

export const Ghidra = () => {
  return (
    <React.Fragment>
      <Slide>
        <div className={styles.horizontal_layout}>
          <div>
            <img className={styles.logo} src={logo} alt="logo"/>
          </div>
          <ul>
            <li>développé depuis 10 ans</li>
            <li>codé en Java et C++</li>
            <li>cross-plateform</li>
            <li>GUI et ligne de commande</li>
            <li>système de plugins (Java ou Python)</li>
            <li className="fragment"><b>undo / redo</b></li>
          </ul>
        </div>
      </Slide>
      <Slide>
        Ghidra est sensé casser le marché<br/>
        tableau comparatif
      </Slide>
      <Slide>
        P-Code
      </Slide>
      <Slide>
        Projet partagé
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <h3>Quid de l'analyse dynamique ?</h3>
        <img className={styles.imgDebugger} src={img_debugger} alt="debugger"/>
      </Slide>
    </React.Fragment>
  );
};
