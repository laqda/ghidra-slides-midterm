import React, {useState, useEffect} from "react";
import styles from './App.css';
import {Title} from "../slides/Title/Title";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import Reveal from "reveal.js";

const hideBarsOnSlides = [0];

export const App = () => {
  const slideIndex = useSlideIndex();
  return (
    <div className={styles.App}>
      <div className="reveal">
        <Header slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides} titles={[
          {
            title: "Introduction",
            subtitles: [
              {
                title: "Conférence RSA",
                length: 3,
              },
              {
                title: "Logiciels équivalents",
                length: 3,
              },
            ],
          },
          {
            title: "Fonctionnalités",
            subtitles: [
              {
                title: "Désassembleur",
                length: 3,
              },
              {
                title: "Décompilateur",
                length: 3,
              },
            ],
          },
        ]}/>
        <div className="slides">
          <Title/>
          <section>Slide 1</section>
          <section>Slide 2</section>
          <section>Slide 3</section>
          <section>Slide 4</section>
          <section>Slide 5</section>
          <section>Slide 6</section>
          <section>Slide 7</section>
          <section>Slide 8</section>
          <section>Slide 9</section>
          <section>Slide 10</section>
          <section>Slide 11</section>
          <section>Slide 12</section>
          {/*<section>Slide 13</section>*/}
          {/*<section>Slide 14</section>*/}
          {/*<section>Slide 15</section>*/}
          {/*<section>Slide 16</section>*/}
          {/*<section>Slide 17</section>*/}
          {/*<section>Slide 18</section>*/}
          {/*<section>Slide 19</section>*/}
        </div>
        <Footer slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides}/>
      </div>
    </div>
  );
};

const useSlideIndex = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    Reveal.addEventListener('slidechanged', () => {
      setSlideIndex(Reveal.getIndices().h);
    });
  }, []);
  return slideIndex;
};
