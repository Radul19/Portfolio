import React from "react";
import "../sass/displaypreviews.sass";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { enableScroll } from "./scrolls";

//$boxSize: calc(3.5vw + 3.5vh)
//100.48
//((window.innerWidth * 0.035) + window.innerHeight * 0.035) == 100.48
// 11 = amount of boxes
//calc(($boxSize * 11) + ( 2vw * 11 ))
// let boxSize = window.innerWidth * 0.035 + window.innerHeight * 0.035;
// let ctnWidth = boxSize * 11 + window.innerWidth * 0.02 * 11;
// let ctnSmall = window.innerWidth * 0.9 * 0.7;
// console.log(ctnWidth - ctnSmall);
// console.log((window.innerWidth * 0.9) * 0.7) - box ctn width

let boxSize = window.innerWidth * 0.035 + window.innerHeight * 0.035;


function DisplayPreviews({ selected, setSelected, allImages }) {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const opacity = useMotionValue(0);


  let ctnWidth = boxSize * allImages[selected].length;
  let ctnSmall = window.innerWidth * 0.9 * 0.7;
  let gaps = (allImages[selected].length) * window.innerWidth * 0.02;

  const ifMore = (ctnWidth + gaps) > ctnSmall

  const moveLeft = () => {
    animate(x, 0, {
      duration: 1,
    });
  };
  const moveRight = () => {
    
    if (ifMore) {
      animate(x, ctnSmall - ctnWidth - gaps, {
        duration: 1,
      });
    }
  };
  const close = () => {
    enableScroll();
    animate(opacity, 0, {
      duration: 0.3,
      onComplete: () => {
        setSelected(4);
      },
    });
  };

  useEffect(() => {
    animate(opacity, 1, { duration: 0.3 });
  }, []);

  return (
    <div className="displayCtn">
      <motion.div className="displayPreviews" style={{ opacity }}>
        <div className="cross" onClick={close}>
          <Cross />
        </div>
        <div className="dp_top">
          <img src={allImages[selected][active]} alt="si" className="bigImg" />
        </div>
        <div
          className="dp_bottom"
          style={{
            justifyContent: ifMore ? "center" : "space-between",
          }}
        >
          <div className="leftArrow" onClick={moveLeft}>
            {ifMore && <ArrowLeft />}
          </div>
          <div
            className="miniboxes_ctn"
            style={{ justifyContent: ifMore ? "start" : "center" }}
          >
            <motion.div
              className="miniboxes"
              style={{
                x,
                width:
                  boxSize * allImages[selected].length +
                  window.innerWidth * 0.02 * allImages[selected].length,
              }}
            >
              {allImages[selected].map((item, index) => (
                <MiniBox key={index} {...{ item, setActive, index }} />
              ))}
            </motion.div>
          </div>
          <div className="rightArrow" onClick={moveRight}>
            {ifMore && <ArrowLeft />}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DisplayPreviews;

const MiniBox = ({ item, setActive, index }) => {
  return (
    <div
      className="minibox"
      onClick={() => {
        setActive(index);
      }}
    >
      <img src={item} alt="preview" className="previewImg" />
    </div>
  );
};

const ArrowLeft = () => {
  return (
    <svg
      className="arrow"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.29258 13.7952L20.8841 2.88114C21.4143 2.50998 22.1429 2.88931 22.1429 3.53652V24.4635C22.1429 25.1107 21.4143 25.49 20.8841 25.1189L5.29258 14.2048C5.1504 14.1053 5.1504 13.8947 5.29258 13.7952Z"
        fill="#F2C964"
      />
    </svg>
  );
};

const Cross = () => {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#F2C964"
        d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
      />
    </svg>
  );
};
