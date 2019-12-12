import React from "react";
import styles from "./Introduction.css";
import {Slide} from "../../Slide/Slide";
import rsa_conference from "./rsa_conference.png";

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
        <div>
          <h4>étude et analyse d'un système</h4>
          <div>
            <ul>
              <li>comprendre le fonctionnement</li>
              <li>améliorer la sécurité et la qualité</li>
              <li>contourner des protections*</li>
            </ul>
          </div>
          <div className={`fragment ${styles.note}`}>* faire de l'open source depuis des codes propriétaires <i className="em em-wink"/>
          </div>
        </div>
      </Slide>
      <Slide data-background-color="#361a56">
        <img className={styles.img} src={rsa_conference} alt="rsa-conference"/>
      </Slide>
    </React.Fragment>
  );
};
