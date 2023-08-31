import React, { useEffect, useRef } from "react";
import { WideBannerBlack, WideBannerWhite } from "./WideBanner";
import { useState } from "react";
import { aim, code, reacticon, cloud } from "../icons/Paths";
import { useMotionValue, useTransform, motion, animate } from "framer-motion";
import { interpolate, interpolateAll, splitPathString } from "flubber";
import * as blobs2 from "blobs/v2";
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

const CenterIcon = ({ pathD = false }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M81.6797 34.6094C80.625 34.2578 79.5703 33.9258 78.5156 33.6133C78.6914 32.8906 78.8477 32.168 79.0039 31.4453C81.4062 19.8047 79.8242 10.4492 74.4922 7.36328C69.3555 4.41406 60.9766 7.48047 52.5 14.8633C51.6602 15.5859 50.8398 16.3477 50.0586 17.1094C49.5312 16.6016 48.9844 16.0937 48.4375 15.6055C39.5508 7.71484 30.6445 4.39453 25.3125 7.5C20.1953 10.4687 18.6719 19.2773 20.8203 30.293C21.0352 31.3867 21.2695 32.4609 21.543 33.5547C20.293 33.9062 19.0625 34.2969 17.9102 34.707C7.48047 38.3203 0 44.0234 0 49.9219C0 56.0156 7.96875 62.1289 18.8086 65.8398C19.6875 66.1328 20.5664 66.4258 21.4648 66.6797C21.1719 67.8516 20.918 69.0039 20.6836 70.1953C18.6328 81.0351 20.2344 89.6289 25.3516 92.5781C30.625 95.625 39.4922 92.5 48.125 84.9414C48.8086 84.3359 49.4922 83.7109 50.1758 83.0469C51.0352 83.8867 51.9336 84.6875 52.832 85.4687C61.1914 92.6562 69.4531 95.5664 74.5508 92.6172C79.8242 89.5703 81.543 80.332 79.3164 69.082C79.1406 68.2227 78.9453 67.3437 78.7305 66.4453C79.3555 66.2695 79.9609 66.0742 80.5664 65.8789C91.8359 62.1484 100 56.1133 100 49.9219C100 44.0039 92.3047 38.2617 81.6797 34.6094ZM55.2539 18.0273C62.5195 11.6992 69.2969 9.21875 72.3828 10.9961C75.6836 12.8906 76.9531 20.5469 74.8828 30.6055C74.7461 31.2695 74.6094 31.9141 74.4336 32.5586C70.0977 31.582 65.7031 30.8789 61.2891 30.4883C58.75 26.8555 55.9766 23.3789 52.9688 20.1172C53.7305 19.3945 54.4727 18.7109 55.2539 18.0273ZM32.6562 60.0586C33.6523 61.7578 34.668 63.457 35.7422 65.1172C32.6953 64.7851 29.668 64.2969 26.6797 63.6523C27.5391 60.8398 28.6133 57.9297 29.8633 54.9609C30.7617 56.6797 31.6797 58.3789 32.6562 60.0586ZM26.7383 36.5625C29.5508 35.9375 32.5391 35.4297 35.6445 35.0391C34.6094 36.6602 33.5938 38.3203 32.6367 40C31.6797 41.6602 30.7422 43.3594 29.8633 45.0781C28.6328 42.168 27.5977 39.3164 26.7383 36.5625ZM32.0898 50.0195C33.3789 47.3242 34.7852 44.6875 36.2695 42.0898C37.7539 39.4922 39.3555 36.9727 41.0352 34.4922C43.9648 34.2773 46.9531 34.1602 50 34.1602C53.0469 34.1602 56.0547 34.2773 58.9648 34.4922C60.625 36.9531 62.207 39.4727 63.7109 42.0508C65.2148 44.6289 66.6211 47.2656 67.9492 49.9414C66.6406 52.6367 65.2344 55.293 63.7305 57.9101C62.2461 60.5078 60.6641 63.0273 59.0039 65.5273C56.0938 65.7422 53.0664 65.8398 50 65.8398C46.9336 65.8398 43.9648 65.7422 41.0938 65.5664C39.3945 63.0859 37.793 60.5469 36.2891 57.9492C34.7852 55.3516 33.3984 52.7148 32.0898 50.0195ZM67.3633 60.0195C68.3594 58.3008 69.2969 56.5625 70.2148 54.8047C71.4648 57.6367 72.5586 60.5078 73.5156 63.457C70.4883 64.1406 67.4219 64.668 64.3359 65.0195C65.3906 63.3789 66.3867 61.6992 67.3633 60.0195ZM70.1758 45.0781C69.2578 43.3594 68.3203 41.6406 67.3438 39.9609C66.3867 38.3008 65.3906 36.6602 64.3555 35.0391C67.5 35.4297 70.5078 35.957 73.3203 36.6016C72.4219 39.4922 71.3672 42.3047 70.1758 45.0781ZM50.0391 23.1055C52.0898 25.332 54.0234 27.6758 55.8203 30.0977C51.9531 29.9219 48.0664 29.9219 44.1992 30.0977C46.1133 27.5781 48.0859 25.2344 50.0391 23.1055ZM27.3828 11.1328C30.6641 9.21875 37.9492 11.9531 45.625 18.75C46.1133 19.1797 46.6016 19.6484 47.1094 20.1172C44.082 23.3789 41.2891 26.8555 38.7305 30.4883C34.3164 30.8789 29.9414 31.5625 25.6055 32.5195C25.3516 31.5234 25.1367 30.5078 24.9219 29.4922C23.0859 20.0391 24.2969 12.9102 27.3828 11.1328ZM22.5977 62.6172C21.7773 62.3828 20.9766 62.1289 20.1758 61.8555C16.0156 60.5469 11.2891 58.4766 7.87109 55.7617C5.89844 54.3945 4.57031 52.2852 4.19922 49.9219C4.19922 46.3477 10.3711 41.7773 19.2773 38.6719C20.3906 38.2812 21.5234 37.9297 22.6562 37.5977C23.9844 41.8359 25.5859 45.9961 27.4414 50.0195C25.5664 54.1016 23.9453 58.3203 22.5977 62.6172ZM45.3711 81.7578C42.1484 84.707 38.418 87.0508 34.3555 88.6523C32.1875 89.6875 29.6875 89.7851 27.4609 88.9062C24.3555 87.1094 23.0664 80.2148 24.8242 70.9375C25.0391 69.8437 25.2734 68.75 25.5469 67.6758C29.9219 68.6133 34.3359 69.2578 38.8086 69.5898C41.3867 73.2422 44.2188 76.7383 47.2461 80.0195C46.6211 80.625 45.9961 81.2109 45.3711 81.7578ZM50.1562 77.0117C48.1641 74.8633 46.1719 72.4805 44.2383 69.9219C46.1133 70 48.0469 70.0391 50 70.0391C52.0117 70.0391 53.9844 70 55.9375 69.9023C54.1406 72.3828 52.207 74.7461 50.1562 77.0117ZM75.6836 82.8711C75.5078 85.2539 74.3359 87.4805 72.4609 88.9844C69.3555 90.7812 62.7344 88.4375 55.5859 82.3047C54.7656 81.6016 53.9453 80.8398 53.1055 80.0586C56.0938 76.7578 58.8477 73.2617 61.3477 69.5898C65.8203 69.2187 70.2734 68.5351 74.668 67.5391C74.8633 68.3398 75.0391 69.1406 75.1953 69.9219C76.1523 74.1406 76.3086 78.5351 75.6836 82.8711ZM79.2383 61.875C78.6914 62.0508 78.1445 62.2266 77.5781 62.3828C76.2109 58.125 74.5312 53.9648 72.5977 49.9219C74.4727 45.9375 76.0547 41.8359 77.3828 37.6367C78.3984 37.9297 79.375 38.2422 80.3125 38.5547C89.4141 41.6797 95.8008 46.3281 95.8008 49.8828C95.8008 53.7109 88.9844 58.6523 79.2383 61.875ZM50 58.9453C54.9414 58.9453 58.9453 54.9414 58.9453 50C58.9453 45.0586 54.9414 41.0547 50 41.0547C45.0586 41.0547 41.0547 45.0586 41.0547 50C41.0547 54.9414 45.0586 58.9453 50 58.9453Z"
      fill="#F2C964"
    />
    {/* <path d={pathD ? pathD : reacticon} fill="#F2C964" /> */}
  </svg>
);

function BannersPage() {
  const screenRef = useRef(null);
  const inViewport = useIntersection(screenRef, "-450px");

  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [pause, setPause] = useState(false);
  const [timer, setTimer] = useState(false)

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
