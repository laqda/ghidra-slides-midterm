import React, {useState, useEffect} from "react";
import styles from './App.css';
import {Title} from "../slides/Title/Title";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import Reveal from "reveal.js";
import {Introduction, introductionTitles} from "../slides/Introduction/Introduction";
import {Build, buildTitles} from "../slides/Build/Build";
import {Demo, demoTitles} from "../slides/Demo/Demo";
import {FollowingEvents, followingEventsTitles} from "../slides/FollowingEvents/FollowingEvents";
import {Ghidra, ghidraTitles} from "../slides/Ghidra/Ghidra";
import {End} from "../slides/End/End";

const hideBarsOnSlides = [0, 17];

export const App = () => {
  const slideIndex = useSlideIndex();
  return (
    <div className={styles.App}>
      <div className="reveal">
        <Header slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides} titles={[
          introductionTitles,
          ghidraTitles,
          buildTitles,
          demoTitles,
          followingEventsTitles,
        ]}/>
        <div className="slides">
          <Title/>
          <Introduction/>
          <Ghidra/>
          <Build/>
          <Demo/>
          <FollowingEvents/>
          <End/>
        </div>
        <Footer slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides}/>
      </div>
    </div>
  );
};

const useSlideIndex = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    setSlideIndex(Reveal.getIndices().h);
    Reveal.addEventListener('slidechanged', () => {
      setSlideIndex(Reveal.getIndices().h);
    });
  }, []);
  return slideIndex;
};
