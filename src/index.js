import React from "react";
import ReactDOM from "react-dom";
import Reveal from "reveal.js";
import "./style/reveal.scss";
import "./style/white.css";
import "./style/style.css";
import {App} from "./components/App/App";

const mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

Reveal.initialize({
  controls: false,
  hash: true,
  transitionSpeed: 'fast',
});
