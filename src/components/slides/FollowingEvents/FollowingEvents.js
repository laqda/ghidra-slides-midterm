import React from "react";
import styles from "./FollowingEvents.css";
import {Slide} from "../../Slide/Slide";

export const followingEventsTitles = {
  title: "La suite",
  subtitles: [
    {
      title: "Mode debug",
      length: 1,
    },
    {
      title: "Architecture",
      length: 1,
    },
    {
      title: "Fonctionnement",
      length: 1,
    },
  ],
};

export const FollowingEvents = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#361a56">
      </Slide>
    </React.Fragment>
  );
};
