import React, { useEffect, useRef } from "react";
import testimg from "../icons/testimg.png";
import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import useOnScreen from "../helpers/useOnScreen";
import "../sass/picture.sass";
// console.log(window.outerHeight)

function PicturePage() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const opacity = useMotionValue(0);
  const opacityPic = useMotionValue(0);
  const pathLen = useMotionValue(0);

  const showStuff = () => {
    console.log("#showStufs");
    animate(opacity, 1, {
      duration: 0.5,
    });

    animate(pathLen, 1, {
      duration: 1,
      onComplete: () => {
        /// pic animated
        animate(opacityPic, 1, {
          delay: 0.5,
          duration: 0.5,
          onComplete: () => {
            pathLen.set(0);
          },
        });
      },
    });
  };

  // const hideStuff = () => {
  //   console.log("#hideStufs");
  //   pathLen.set(0);
  //   opacityPic.set(0);
  //   opacity.set(0);
  // };

  useEffect(() => {
    if (isVisible) {
      showStuff();
    } else {
      // hideStuff();
    }
  }, [isVisible]);

  const len = useSpring(0);

  const testVec = () => {
    len.set(1);
  };

  return (
    <div className="PicturePage_ctn">
      <div className="PicturePage" ref={ref}>
        <motion.div
          className="left"
          // style={{ opacity }}
          onClick={testVec}
        >
          <motion.svg
            width="650"
            height="650"
            viewBox="0 0 652 652"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pic_svg"
          >
            <motion.path
              d="M 1 1 L 651 1 L 535 428 L 1 650 L 1 1 L 82 82 L 82 1 L 163 1 L 1 163 L 1 82 L 82 82 L 164 164 L 163 1 L 245 82 L 253 213 L 164 164 L 245 82 L 326 1 L 353 55 L 285 42 L 311 96 L 353 55 L 378 109 L 245 82 L 338 150 L 253 213 L 431 217 L 338 150 L 431 217 L 378 109 L 490 1 L 540 109 L 378 109 L 404 162 L 461 109 L 593 217 L 431 217 L 540 109 L 570 1 L 622.27 108 L 540 109 L 593 217 L 497 271 L 564 325 L 564 325 L 483 325 L 512 217 L 431 217 L 483 325 L 535 428 L 457 401 L 483 325 L 265 354 L 253 213 L 347 285 L 431 217 L 483 325 L 347 285 L 265 354 L 327 514.47 L 347 415 L 431 471 L 457 401 L 373 339 L 347 415 L 265 354 L 179 293 L 95 307 L 95 232 L 179 293 L 253 213 L 164 164 L 179 293 L 95 232 L 164 164 L 1 163 L 95 232 L 1 325 L 95 382 L 95 307 L 95 382 L 265 354 L 296 436 L 180 368 L 95 382 L 164 422 L 238 402 L 245 470 L 327 514.47 L 245 548.56 L 203.96 524 L 245 470 L 164 422 L 81 456.117 L 1 326 L 1 489 L 81 456.117 L 1 650 L 82 616.3 L 81 456.117 L 155 586 L 245 470 L 81 456.117"
              stroke="#eee"
              strokeWidth={2}
              style={{ pathLength: pathLen }}
              // initial={{ pathLength: 0 }}
              // animate={{ pathLength: 1 }}
              // transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.svg>
          <motion.img
            src={testimg}
            className="picture"
            style={{ opacity: opacityPic }}
          />
        </motion.div>
        <motion.div className="right" style={{ opacity }}>
          <header className="ptr_title">Who I am?</header>
          <p className="ptr_subtitle">FULL STACK WEB DEVELOPER</p>
          <p className="ptr_text">
            Developer with more than 4 years of experience. JavaScript lover,
            natural researcher and independent student, exploring new
            technologies in the MERN spectrum. From full-stack development,
            mobile development, to database administration and UML.
          </p>
          <p className="ptr_text" style={{ marginTop: 24 }}>
            I strive to adapt and quickly acquire the skills that are required.
            An error has not been enough to interrupt my work routine, always
            looking for alternatives to maintain a readable, safe and fast code.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default PicturePage;

/**
 * M 1 1 L 651 1 L 535 429 L 1 651 L 1 1 L 82 82 L 82 1 L 163 1 L 1 163 L 1 82 L 82 82 L 164 164 L 163 1 L 245 82 L 253 213 L 164 164 L 245 82 L 326 1 L 353 55 L 285 42 L 311 96 L 353 55 L 378 109 L 245 82 L 338 150 L 253 213 L 431 217 L 338 150 L 431 217 L 378 109 L 490 1 L 540 109 L 378 109 L 404 162 L 461 109 L 593 217 L 431 217 L 540 109 L 570 1 L 622.27 108 L 540 109 L 593 217 L 497 271 L 564 325 L 564 325 L 483 325 L 512 217 L 431 217 L 483 325 L 535 429 L 457 401 L 483 325 L 265 354 L 253 213 L 347 285 L 431 217 L 483 325 L 347 285 L 265 354 L 327 515.47 L 347 415 L 431 472.24 L 457 401 L 373 339 L 347 415 L 265 354 L 179 293 L 95 307 L 95 232 L 179 293 L 253 213 L 164 164 L 179 293 L 95 232 L 164 164 L 1 163 L 95 232 L 1 325 L 95 382 L 95 307 L 95 382 L 265 354 L 296 436 L 180 368 L 95 382 L 164 422 L 238 402 L 245 470 L 327 515.47 L 245 549.56 L 203.96 524 L 245 470 L 164 422 L 81 456.117 L 1 326 L 1 489 L 81 456.117 L 1 651 L 82 617.33 L 81 456.117 L 155 586.98 L 245 470 L 81 456.117
 */
