import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progress-bar.scss";

type ProgressBarT = {
  value: number;
  maxValue: number;
  text?: string;
  strokeWidth?: number;
};

const ProgressBar = ({ value, maxValue, text, strokeWidth }: ProgressBarT) => {
  return (
    <CircularProgressbar
      value={value}
      maxValue={maxValue}
      text={text}
      strokeWidth={strokeWidth}
    />
  );
};

export default ProgressBar;
