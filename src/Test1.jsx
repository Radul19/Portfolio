
// import { useState, useEffect } from "react";
// import "./app.sass";
// import {
//   arrGamepad,
//   arrBox,
//   arrUser,
//   arrHome,
// } from "./icons/Paths";

// import { useSpring, animated } from "@react-spring/web";
// import {  interpolateAll } from "flubber";
// const paths = [arrGamepad, arrBox, arrHome, arrUser];

// const rand = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };

// const randomLine = () => {
//   let p1 = `${rand(0, 100)} ${rand(0, 150)}`;
//   let p2 = `${rand(100, 200)} ${rand(0, 150)}`;
//   let p3 = `${rand(200, 300)} ${rand(0, 150)}`;
//   let p4 = `${rand(200,300)} ${rand(150, 300)}`;
//   let p5 = `${rand(100, 200)} ${rand(150, 300)}`;
//   let p6 = `${rand(0, 100)} ${rand(150, 300)}`;

//   return `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5} L ${p6} L ${p1} `;
// };

// const randomShape = () => {
//   let line1 = randomLine();
//   let line2 = randomLine();
//   let line3 = randomLine();
//   let line4 = randomLine();
//   let line5 = randomLine();
//   let line6 = randomLine();
//   return [line1, line1, line1, line1, line1, line1];
// };

// function Test1() {
//   /**RANDOM VALUES TO LINES */
//   const [pause, setPause] = useState(false);
//   const [interpolators, setInterpolators] = useState({
//     prevShape: paths[1],
//     path: interpolateAll(paths[0], paths[1]),
//   });
//   const animationProps = useSpring({
//     from: { x: 0 },
//     to: {
//       x: 1,
//     },
//     config: {
//       duration: 2000,
//     },
//     reset: true,
//     onRest: () => {
//       updateShape();
//     },
//   });
//   const updateShape = () => {

//     if (!pause) {
//       let nextShape = randomShape();
//       setInterpolators((prev) => ({
//         prevShape: nextShape,
//         path: interpolateAll(prev.prevShape, nextShape),
//       }));
//     }
//   };

//   // useEffect(() => {
//   //   // updateShape();
//   // }, []);


//   const stop = () => {
//     setPause(!pause);
//     let aux = Math.floor(Math.random() * 3)
//     setInterpolators((prev) => ({
//       prevShape: paths[aux],
//       path: interpolateAll(prev.prevShape, paths[aux]),
//     }));
//     // updateShape();
//   };

//   const leave = ()=>{
//     setPause(!pause);
//     let nextShape = randomShape();
//     setInterpolators((prev) => ({
//       prevShape: nextShape,
//       path: interpolateAll(prev.prevShape, nextShape),
//     }));
//   }

//   return (
//     <div className="root">
//       <div className="box">
//         <svg width="300" height="300" onClick={stop} onMouseEnter={stop} onMouseLeave={leave} >
//           {interpolators.path.map((item, index) => (
//             <animated.path
//               key={index}
//               d={animationProps.x.to(item)}
//               stroke="#F2C964"
//               fill="none"
//               strokeWidth={2}
//               strokeLinejoin="round"
//             ></animated.path>
//           ))}
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default Test1;
// /**
//  * {interpolators.path.map((item, index) => (
//             <animated.path
//               key={index}
//               d={animationProps.x.to(item)}
//               stroke="#fff"
//               fill="none"
//               strokeWidth={4}
//             ></animated.path>
//           ))}
//  */