import React from "react";
import styles from "./Ghidra.css";
import {Slide} from "../../Slide/Slide";
import logo from "./logo.png";

export const ghidraTitles = {
  title: <span>Ghidra <i className={`em em-dragon ${styles.dragon}`}/></span>, // + tweets
  subtitles: [
    {
      title: "Apercu",
      length: 1,
    },
    {
      title: "Concurrents",
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
            <li>modèle de processeur générique (SLEIGH)</li>
            <li>projets partagés</li>
            <li className="fragment"><b>undo / redo</b></li>
          </ul>
        </div>
      </Slide>
      <Slide>
        Ghidra est sensé casser le marché<br/>
        tableau comparatif
      </Slide>
    </React.Fragment>
  );
};
