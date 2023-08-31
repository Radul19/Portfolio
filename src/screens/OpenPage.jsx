import React, { useEffect, useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
} from "framer-motion";
import {
  // gamepad,
  // user,
  // home,
  box,
} from "../icons/Paths";

import { interpolate } from "flubber";
import * as blobs2 from "blobs/v2";
import fly from "../icons/fly.svg";
import "../sass/open.sass";
import useOnScreen from "../helpers/useOnScreen";

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomLine = () => {
  // const svgPath = blobs2.svgPath({
  //   seed: Math.random(),
  //   extraPoints: 6,
  //   randomness: 5,
  //   size: 350,
  // });
  // return svgPath;
  let p1 = `${rand(10, 75)} ${rand(10, 75)}`;
  let p2 = `${rand(125, 175)} ${rand(10, 75)}`;
  let p3 = `${rand(225, 290)} ${rand(10, 75)}`;
  let p4 = `${rand(225, 290)} ${rand(225, 290)}`;
  let p5 = `${rand(125, 175)} ${rand(225, 290)}`;
  let p6 = `${rand(10, 75)} ${rand(225, 300)}`;

  return `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5} L ${p6} L ${p1} `;
  // return `M 10 10 L 150 75 L 250 75 L 250 250 L 150 250 L 50 250 L 10 10 `;
};

function OpenPage() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const [paths, setPaths] = useState([randomLine(), randomLine()]);
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 1 });
    },
  });
  useEffect(() => {
    if (isVisible) {
      console.log("wtf");
      progress.set(0);
      let a = animate(progress, 1, {
        duration: 1.5,
        onComplete: () => {
            setPaths((prev) => {
              progress.set(0);
              return [prev[1], randomLine()];
            });
        },
      });
      return () => {
        a.stop();
      };
    }
  }, [paths, isVisible]);


  return (
    <div className="OpenPage_ctn">
      <div className="OpenPage" ref={ref} >
        <motion.header className="header" >
          Raúl Brito
        </motion.header>
        <motion.p className="text" >
          {/* Desarrollador web full-stack */}
          Developing your web experience
        </motion.p>
        <div className="box_x">
          <svg
            className="abs_svg"
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 396L262 299M450 366L262 299M262 299V25"
              stroke="#eee"
              strokeWidth="5"
            />
          </svg>

          <div className="ins_box">
            <svg width="300" height="300" className="abs_svg2">
              <motion.path
                d={path}
                fill="#1E1E1E"
                stroke="#eeeeee00"
                strokeLinejoin={"round"}
                strokeWidth="5"
              />
            </svg>
          </div>

          <svg
            className="abs_svg"
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 133.725L262 25L450 97.4832M50 133.725L221.631 204.698M50 133.725V396L221.631 475M221.631 204.698L450 97.4832M221.631 204.698V475M450 97.4832V366L221.631 475"
              stroke="#eee"
              strokeWidth="5"
            />
          </svg>
        </div>

        <motion.div className="scroll_text_ctn" >
          <p className="scroll_text">Scroll down</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 12L12 18L6 12"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
            <path
              d="M18 6L12 12L6 6"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default OpenPage;

/**
 * import { useState, useEffect } from "react";
import "./app.sass";
import {
  // gamepad,
  // user,
  // home,
  box,
} from "./icons/Paths";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { interpolate } from "flubber";
import blobShape from "./icons/blobshape";
import * as blobs2 from "blobs/v2";
// const paths = [arrGamepad, arrBox, arrHome, arrUser];
// const paths = [gamepad, box, home, user];

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomLine = () => {
  // let p1 = `${rand(0, 100)} ${rand(0, 150)}`;
  // let p2 = `${rand(100, 200)} ${rand(0, 150)}`;
  // let p3 = `${rand(200, 300)} ${rand(0, 150)}`;
  // let p4 = `${rand(200, 300)} ${rand(150, 300)}`;
  // let p5 = `${rand(100, 200)} ${rand(150, 300)}`;
  // let p6 = `${rand(0, 100)} ${rand(150, 300)}`;

  // return `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5} L ${p6} L ${p1} `;

  // const { path, seedValue } = blobShape()
  // return path

  const svgPath = blobs2.svgPath({
    seed: Math.random(),
    extraPoints: 6,
    randomness: 5,
    size: 400,
  });
  return svgPath;
};

function App() {
  const [pause, setPause] = useState(false);
  const [paths, setPaths] = useState([randomLine(), randomLine()]);
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 1 });
    },
  });
  useEffect(() => {
    progress.set(0);
    let a = animate(progress, 1, {
      duration: pause ? 0.5 : 1.7,
      onComplete: () => {
        !pause &&
          setPaths((prev) => {
            progress.set(0);
            return [prev[1], randomLine()];
          });
      },
    });
    return () => {
      a.stop();
    };
  }, [paths, pause, progress]);

  const advance = () => {
    // if (pause) {
    //   setPaths([path.current, randomLine()]);
    //   setPause(false);
    // } else {
    //   setPaths([path.current, box]);
    //   setPause(true);
    // }
  };

  const enter = () => {
    setPause(true);
    setPaths([path.current, box]);
  };
  const leave = () => {
    setPause(false);
    setPaths([path.current, randomLine()]);
  };

  return (
    <div className="root">
      <motion.div
        className="box"
        onClick={advance}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <svg width="500" height="500" fill="none"  >
          <path
            d="M2 381.57L215.989 274.094M407 353.121L215.989 274.094M215.989 274.094V0.5"
            stroke="white"
            stroke-width="5"
            fill="none"
          />

          <motion.path
            d={path}
            stroke="#000"
            fill="#898989"
            strokeLinejoin={"round"}
            strokeWidth={1}
            className="blob"
          />
          <path
            d="M3 116.799L216.989 3L408 78.8658M3 116.799L176.777 191.084M3 116.799V387.07L176.777 474M176.777 191.084L408 78.8658M176.777 191.084V474M408 78.8658V358.621L176.777 474"
            stroke="white"
            stroke-width="5"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
/**
  // const [paths, setPaths] = useState([randomLine(), randomLine()]);
  // const [pathIndex, setPathIndex] = useState(1);
  // const progress = useMotionValue(pathIndex-1);
  // const path = useTransform(progress, [0, 1], paths);

  // useEffect(() => {
  //   progress.set(0);
  //   advance()
  // }, [paths]);

  // const advance = () => {
  //   animate(progress, pathIndex, {
  //     duration: 0.8,
  //     onComplete: () => {
  //       setPaths((prev) => [prev[1], randomLine()]);
  //       setPathIndex(1);
  //       // advance()
  //     },
  //   });
  // };
 */
