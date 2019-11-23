import React from "react";
import styles from './App.css';
import {Title} from "../slides/Title/Title";
import {Footer} from "../Footer/Footer";

export const App = () => {
  return (
    <div className={styles.App}>
      <div className="reveal">
        <div className="slides">
          <Title/>
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
        <Footer hideOnSlides={[0]}/>
      </div>
    </div>
  );
};
