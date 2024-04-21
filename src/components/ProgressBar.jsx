import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-progress-bar/dist/styles.css";
import { transform } from 'typescript';

const ProgressBar = (props) => {
    const {score} = props;

    //function for calculating the color
    const color = (percent, start, end) => {
        let a = percent/100,
        b = (end - start) * a,
        c = b + start;

        //return am css hsl color string
        return "hsl(" + c +
    }
  return (
    <CircularProgressbar 
        value={score}
        text={`${value} %`}
        circleRatio={0.7}
        styles={{
            trail: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                tranformOrigin: "center center"

            },
            path: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                tranformOrigin: "center center",
                stroke: "#000"
            },
            text:{
                fill: '#ddd',
            }
        }}

    />
  );
}

export default ProgressBar;
