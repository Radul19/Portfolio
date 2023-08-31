import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { aim, code, reacticon, cloud } from "../icons/Paths";
import { useMotionValue, useTransform, motion, animate } from "framer-motion";
import "../sass/banner.sass";

let text1 =
  "With more than 3 years in React and React Native I can bring any idea to life, taking web development one step further. Using Redux to not lose performance and smooth animations to delight the user with a quality web experience.";
let text2 =
  "After using NodeJS and MongoDB on multiple occasions, I have witnessed the potential between these two technologies. Understanding the core of both for the deployment of Full-Stack and API-Restful projects.";
let text3 =
  "While Heroku, Vercel and Cloudinary have allowed me to slowly get into cloud services, I have had the chance to work with AWS Lambdas and Firebase for web and mobile development between different internships.";
let text4 =
  "Challenges have become my passion at work, it's always exciting to face that mysterious enemy that makes you wonder why your code doesn't work. My curiosity and perseverance has given me victory multiple times.";
let title1 = "React/Redux";
let title2 = "NodeJS/MongoDB";
let title3 = "Cloud Services";
let title4 = "Challenge Seeker";


const list = [reacticon, code, cloud, aim];
const listTitle = [title1, title2, title3, title4];
const listText = [text1, text2, text3, text4];


function BannersPage() {
  const screenRef = useRef(null);
  const inViewport = useIntersection(screenRef, "-450px");

  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [pause, setPause] = useState(false);

  const bigX = useMotionValue(0);
  const fade = useTransform(bigX, [-150, 0, 150], [0.5, 1, 0.5]);
  const scale = useTransform(bigX, [-150, 0, 150], [0, 1, 0]);

  const smallX = useMotionValue(0);
  const smallFade = useTransform(bigX, [-150, 0, 150], [1, 0.5, 1]);
  const smallScale = useTransform(bigX, [-150, 0, 150], [1, 0, 1]);

  const pbar = useMotionValue(0);
  const pwidth = useTransform(pbar, [0, 1], ["0%", "100%"]);

  const textFade = useMotionValue(1);

  let click = () => {
  };

  const handleClick = (value)=>{
    if(bigX.get() === 0){
      setNum(value)
    }
  }

  let ani = (amount) => {
    animate(bigX, amount, {
      duration: 0.5,
      onComplete: () => {
        setPrevNum(() => {
          setTimeout(() => {
            bigX.set(0);
          }, 500);
          return num;
        });
      },
    });
  };

  let aniText = () => {
    animate(textFade, 0, {
      duration: 0.5,
      onComplete: () => {
        animate(textFade, 1, { duration: 0.5 });
      },
    });
  };

  const aniBar = () => {
    return animate(pbar, 1, {
      duration: 9,
      ease: "linear",
      onComplete: () => {
        pbar.set(0);
        setNum((prev) => (prev === 3 ? 0 : prev + 1));
      },
    });
  };

  const aniRegret = () => {
    return animate(pbar, 0, { duration: 0.2, ease: "linear" });
  };

  const mouseEnter = () => {
    setPause(true);
  };
  const mouseLeave = () => {
    setPause(false);
  };

  useEffect(() => {
    if (prevNum < num) {
      smallX.set(150);
      ani(-150);
    } else {
      smallX.set(-150);
      ani(150);
    }
    animate(smallX, 0, { duration: 0.5 });
    aniText();
  }, [num]);

  useEffect(() => {
    if (!pause && inViewport) {
      let a = aniBar();
      return () => {
        a.stop();
      };
    } else {
      aniRegret();
      pbar.set(0);
    }
  }, [pause, num, inViewport]);

  return (
    <div className="BannerPage">
      <motion.div
        ref={screenRef}
        className="skl_Page"
        viewport={{ once: true, margin: "900px 0px 0px 0px" }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="skl_title"></p>
        {/* <p className="skl_title">Skills</p> */}
        <div className="skl_content">
          <div className="skl_center" onClick={click}>
            <div className="icons_ctn">
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="idk"
                style={{ x: smallX, opacity: smallFade, scale: smallScale }}
              >
                <motion.path
                  d={list[num]}
                  stroke="#f2ca64"
                  fill="#f2ca64"
                  strokeLinejoin={"round"}
                  strokeWidth={1}
                />
              </motion.svg>
              {/* <CenterIcon /> */}
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate="fadeRight"
                style={{ x: bigX, opacity: fade, scale: scale }}
              >
                <motion.path
                  d={list[prevNum]}
                  stroke="#f2ca64"
                  fill="#f2ca64"
                  strokeLinejoin={"round"}
                  strokeWidth={1}
                />
              </motion.svg>
            </div>
            <motion.p className="skl_subtitle" style={{ opacity: textFade }}>
              {listTitle[prevNum]}
            </motion.p>
            <motion.p style={{ opacity: textFade }} className="skl_text">
              {listText[prevNum]}
            </motion.p>
          </div>
        </div>
        <div className="skl_bottom">
          <div
            className="skl_cage"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className="progress_bar">
              <motion.div
                className="bar"
                style={{ width: pwidth }}
              ></motion.div>
            </div>
            <div className="dots_ctn">
              <Dot {...{ setNum, num, value: 0 ,handleClick}} />
              <Dot {...{ setNum, num, value: 1 ,handleClick}} />
              <Dot {...{ setNum, num, value: 2 ,handleClick}} />
              <Dot {...{ setNum, num, value: 3 ,handleClick}} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BannersPage;

const Dot = ({ num, setNum, value ,handleClick}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="dot_cage"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        // setNum(value);
        handleClick(value)
      }}
    >
      <div
        style={{ backgroundColor: hover ? "#eeeeee78" : "#eeeeee34" }}
        className="dot"
        active={num === value ? "true" : "false"}
      ></div>
    </div>
  );
};

/**
 * WHAT I WANT TO DO
 * When i press the buttom or time complete, animate transition
 * if number is > then swipe right
 * if number is < then swipe left
 * Change icons
 */

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
