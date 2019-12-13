import React from "react";
import styles from "./Build.css";
import {Slide} from "../../Slide/Slide";
import build from "./build.png";
import launch from "./launch.png";
import tweet from "./tweet.png";
import tweet_background_black from "./tweet_background_black.png";
import bison from "./bison.png";
import java11 from "./java11.png";
import gradle from "./gradle.png";

export const buildTitles = {
  title: "Build the tool",
  subtitles: [
    {
      title: "Requirements",
      length: 1,
    },
    {
      title: "Build",
      length: 1,
    },
    {
      title: "Start",
      length: 1,
    },
    {
      title: "Any backdoors ?",
      length: 1,
    },
  ],
};

export const Build = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <div className={styles.logos}>
          <img className={styles.imgBison} src={bison} alt="bison"/>
          <img className={styles.imgJava11} src={java11} alt="java11"/>
          <img className={styles.imgGradle} src={gradle} alt="gradle"/>
        </div>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img className={styles.imgBuild} src={build} alt="build"/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img className={styles.imgLaunch} src={launch} alt="launch"/>
      </Slide>
      <Slide data-background={tweet_background_black}>
        <img className={styles.imgTweet} src={tweet} alt="tweet-backdoor-ghidra"/>
      </Slide>
    </React.Fragment>
  );
};
