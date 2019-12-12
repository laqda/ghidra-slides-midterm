import React from "react";
import styles from "./Introduction.css";
import {Slide} from "../../Slide/Slide";
import rsa_conference from "./rsa_conference.png";
import twitter_release_ghidra from "./twitter_release_ghidra.png"
import twitter_nsa_background from "./twitter_nsa_background.png"
import why_releasing from "./why_releasing.png"
import twitter_thinks_ghidra_is_cool_1 from "./twitter_thinks_ghidra_is_cool_1.png";
import twitter_thinks_ghidra_is_cool_2 from "./twitter_thinks_ghidra_is_cool_2.png";
import twitter_thinks_ghidra_is_cool_3 from "./twitter_thinks_ghidra_is_cool_3.png";
import twitter_thinks_ghidra_is_cool_4 from "./twitter_thinks_ghidra_is_cool_4.png";

export const introductionTitles = {
  title: "Introduction",
  subtitles: [
    {
      title: "Reverse Engineering",
      length: 2,
    },
    {
      title: "RSA Conference",
      length: 3,
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
            <li>outrepasser le secret industriel</li>
            <li>recherche de vulnérabilités</li>
            <li>contourner des protections*</li>
          </ul>
        </div>
        <div className={`fragment ${styles.note}`}>* faire de l'open source depuis des codes propriétaires <i
          className="em em-wink"/>
        </div>
      </Slide>
      <Slide>
        <div className={styles.blocs}>
          <div className={styles.bloc}>
            <h3>⬝ &nbsp;&nbsp;Analyse statique</h3>
            <div>
              étude approfondie du code source
            </div>
          </div>
          <div className={styles.bloc}>
            <h3>⬝ &nbsp;&nbsp;Analyse dynamique</h3>
            <div>
              exécution et observation des modifications engendrées
            </div>
          </div>
        </div>
      </Slide>
      <Slide data-background-color="#361a56">
        <img className={styles.imgRsaConference} src={rsa_conference} alt="rsa-conference"/>
      </Slide>
      <Slide data-background-color="#361a56">
        <img className={styles.imgRsaConference} src={why_releasing} alt="why-releasing"/>
      </Slide>
      <Slide data-background={twitter_nsa_background}>
        <img className={styles.imgTweetReleaseGhidra} src={twitter_release_ghidra} alt="tweet-release-ghidra"/>
        <img className={`fragment ${styles.imgTweetGhidraCool} ${styles.imgTweetGhidraCool2}`} src={twitter_thinks_ghidra_is_cool_2} alt="tweet-ghidra-cool"/>
        <img className={`fragment ${styles.imgTweetGhidraCool} ${styles.imgTweetGhidraCool3}`} src={twitter_thinks_ghidra_is_cool_3} alt="tweet-ghidra-cool"/>
        <img className={`fragment ${styles.imgTweetGhidraCool} ${styles.imgTweetGhidraCool4}`} src={twitter_thinks_ghidra_is_cool_4} alt="tweet-ghidra-cool"/>
        <img className={`fragment ${styles.imgTweetGhidraCool} ${styles.imgTweetGhidraCool1}`} src={twitter_thinks_ghidra_is_cool_1} alt="tweet-ghidra-cool"/>
      </Slide>
    </React.Fragment>
  );
};
