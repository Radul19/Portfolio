import { useMotionValue, useTransform, motion, animate } from "framer-motion";
import React from "react";
import { interpolate } from "flubber";
import "../sass/contact.sass";

const iconHand = `M232 206c5 0 9-5 9-10 0-6-5-10-10-10h-60c-6 0-11-6-11-13s5-12 11-12h143c5 0 9-3 10-8 1-7-3-12-9-12H149c-5 0-9-3-11-8s-1-10 2-14l46-48c3-4 3-10 0-14-5-5-11-5-19-1l-77 53h-1l-59 35c-3 2-5 5-5 9v116c0 4 3 8 7 9l49 13c12 4 25 5 37 5h98c5 0 10-3 10-8 2-6-3-12-9-12h-46c-6 0-11-6-11-12 0-7 5-13 11-13h59a10 10 0 0 0 11-8c1-6-4-12-10-12h-60c-6 0-11-6-11-13 0-6 5-12 11-12h61Z`;
const iconLinkedin = `M73 51c0 20-17 36-37 36S0 71 0 51s16-36 36-36 37 16 37 36Zm0 66H0v233h73V117Zm116 0h-72v233h72V228c0-69 88-74 88 0v122h73V202c0-115-130-110-161-54v-31Z`;
const iconGmail = `M325 307H25c-14 0-25-11-25-25V84c0-13 11-25 25-25h300c14 0 25 12 25 25v198c0 14-11 25-25 25Zm-150-89L39 124l-1 153h273V124l-136 94Z`;
const iconGithub = `M175 0a175 175 0 0 0-55 341c8 2 11-4 11-8v-33c-48 11-59-21-59-21-8-20-19-25-19-25-16-11 1-11 1-11 18 1 27 18 27 18 16 27 41 19 51 15 2-12 6-19 11-24-39-4-80-19-80-86 0-19 7-35 18-47-1-5-7-22 2-46 0 0 15-5 48 18a168 168 0 0 1 88 0c33-23 48-18 48-18 9 24 3 41 2 46 11 12 18 28 18 47 0 67-41 82-80 86 6 6 12 16 12 33v48c0 4 3 10 11 8A175 175 0 0 0 175 0Z`;

function Contact() {
  const progress = useMotionValue(0);
  const fill = useMotionValue("#eee");
  const stroke = useMotionValue("#1e1e1e");
  const path = useTransform(
    progress,
    [0, 1, 2, 3, 4, 5],
    [iconHand, iconGmail, iconHand, iconLinkedin, iconHand, iconGithub],
    {
      mixer: (a, b) => {
        return interpolate(a, b, { maxSegmentLength: 1 });
      },
    }
  );

  const gmailEnter = () => {
    console.log("#gmail");
    progress.set(0);
    ani(1);
  };
  const linkEnter = () => {
    console.log("#linkedin");
    progress.set(2);
    ani(3);
  };
  const githubEnter = () => {
    console.log("#github");
    progress.set(4);
    ani(5);
  };

  const leave = () => {
    console.log("#leave");
    let aux = progress.get();
    ani(aux - 1);
  };

  const ani = (position) => {
    fill.set("#1e1e1e");
    stroke.set("#eee");
    animate(progress, position, {
      duration: 0.2,
      onComplete: () => {
        fill.set("#eee");
        stroke.set("#1e1e1e");
      },
    });
  };

  // useEffect(() => {
  //   progress.set(0)
  //   let a = animate(progress, 1, {
  //     duration: 0.2,
  //     onComplete: () => {
  //       fill.set("#eee");
  //       stroke.set("#1e1e1e");
  //     },
  //   });
  //   return ()=>{
  //     a.stop()
  //   }
  // }, [paths])

  return (
    <div className="Contact_page_ctn">
      <div className="Contact_page">
        <svg
          width="350"
          height="350"
          viewBox="0 0 352 402"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill={"#eee"}
            stroke={stroke}
          />
        </svg>

        <div className="info_ctn">
          <p className="info_title">Hit me up!</p>
          <p className="info_text">
            Feel free to contact me in some social media
          </p>
          <p
            className="info_link"
            onMouseEnter={githubEnter}
            onMouseLeave={leave}
          >
            radul19
          </p>
          <p
            className="info_link"
            onMouseEnter={gmailEnter}
            onMouseLeave={leave}
          >
            raulbritogonz@gmail.com
          </p>
          <p
            className="info_link"
            onMouseEnter={linkEnter}
            onMouseLeave={leave}
          >
            raulbritocode
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/** LINKEDIN
 * <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.625 51.0416C72.625 71.1812 56.4375 87.4999 36.4583 87.4999C16.4792 87.4999 0.291667 71.1812 0.291667 51.0416C0.291667 30.9166 16.4792 14.5833 36.4583 14.5833C56.4375 14.5833 72.625 30.9166 72.625 51.0416ZM72.9167 116.667H0V350H72.9167V116.667ZM189.321 116.667H116.871V350H189.335V227.514C189.335 159.41 277.258 153.839 277.258 227.514V350H350V202.256C350 87.3395 219.887 91.5249 189.321 148.094V116.667Z" fill="black"/>
</svg>

 */

/** GMAIL
 * <svg width="350" height="249" viewBox="0 0 350 249" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M325.033 248.25H24.9667C11.1854 248.25 0 237.065 0 223.283V25.2999C0 11.5187 11.1854 0.333252 24.9667 0.333252H325.033C338.815 0.333252 350 11.5187 350 25.2999V223.283C350 237.065 338.815 248.25 325.033 248.25ZM175 159.496L38.7625 64.952L38.4708 233.667H310.946V64.952L175 159.496ZM304.34 14.9166H44.9167L175 105.756C175 105.756 266.175 41.502 304.34 14.9166Z" fill="black"/>
</svg>

 */

/** GITHUB
 * <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M175 0C78.3708 0 0 78.3563 0 175C0 252.321 50.1375 317.917 119.685 341.06C128.421 342.679 131.25 337.254 131.25 332.646V300.067C82.5708 310.654 72.4354 279.417 72.4354 279.417C64.4729 259.19 52.9958 253.808 52.9958 253.808C37.1146 242.944 54.2062 243.177 54.2062 243.177C71.7792 244.402 81.025 261.217 81.025 261.217C96.6292 287.963 121.96 280.233 131.95 275.756C133.51 264.454 138.046 256.725 143.063 252.365C104.198 247.917 63.3354 232.91 63.3354 165.871C63.3354 146.752 70.175 131.148 81.3604 118.898C79.5521 114.479 73.5583 96.6729 83.0667 72.5813C83.0667 72.5813 97.7667 67.8854 131.206 90.5188C145.162 86.6396 160.125 84.7 175 84.6271C189.875 84.7 204.852 86.6396 218.837 90.5188C252.248 67.8854 266.919 72.5813 266.919 72.5813C276.442 96.6875 270.448 114.494 268.64 118.898C279.869 131.148 286.65 146.767 286.65 165.871C286.65 233.085 245.715 247.888 206.748 252.219C213.019 257.644 218.75 268.29 218.75 284.623V332.646C218.75 337.298 221.55 342.767 230.431 341.046C299.921 317.873 350 252.292 350 175C350 78.3563 271.644 0 175 0Z" fill="black"/>
</svg>

 */
