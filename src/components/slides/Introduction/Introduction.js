import React from "react";
import styles from "./Introduction.css";
import {Slide} from "../../Slide/Slide";
import rsa_conference from "./rsa_conference.png";
import twitter_release_ghidra from "./twitter_release_ghidra.png"
import twitter_nsa_background from "./twitter_nsa_background.png"

export const introductionTitles = {
  title: "Introduction",
  subtitles: [
    {
      title: "Reverse engineering",
      length: 2,
    },
    {
      title: "RSA Conference",
      length: 2,
    },
  ],
};

export const Introduction = () => {
  return (
    <React.Fragment>
      <Slide>
        <h2>Pourquoi faire de la rétro-ingénierie ?</h2>
        <div>
          <ul>
            <li>comprendre le fonctionnement <span className="fragment">(fun)</span></li>
            <li>recherche de vulnérabilités</li>
            <li>outrepasser le secret industriel</li>
            <li>contourner des protections*</li>
          </ul>
        </div>
        <div className={`fragment ${styles.note}`}>* cracker le dernier call of duty <i
          className="em em-wink"/>
        </div>
      </Slide>
      <Slide>
        <div className={styles.blocs}>
          <div className={styles.bloc}>
            <h3>⬝ &nbsp;&nbsp;Analyse statique</h3>
            <div>
              étude approfondie du code source (désassembleur, décompilateur, ...)
            </div>
          </div>
          <div className={styles.bloc}>
            <h3>⬝ &nbsp;&nbsp;Analyse dynamique</h3>
            <div>
              exécution et observations (réseau, débogueur, registres, mémoires, ...)
            </div>
          </div>
        </div>
      </Slide>
      <Slide data-background-color="#361a56">
        <img className={styles.imgRsaConference} src={rsa_conference} alt="rsa-conference"/>
      </Slide>
      <Slide data-background={twitter_nsa_background}>
        <img className={styles.imgTweetReleaseGhidra} src={twitter_release_ghidra} alt="tweet-release-ghidra"/>
      </Slide>
    </React.Fragment>
  );
};
