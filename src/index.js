import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import {App} from "./Components/App/App";

const mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);
