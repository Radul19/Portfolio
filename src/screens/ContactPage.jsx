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
  const stroke = useMotionValue("#1e1e1e");
  const path = useTransform(
    progress,
    [0, 1, 2, 3, 4, 5],
    [iconHand, iconGmail, iconHand, iconLinkedin, iconHand, iconGithub],
    {
      mixer: (a, b) => {
        return interpolate(a, b, { maxSegmentLength: 10 });
      },
    }
  );

  const gmailEnter = () => {
    if (window.screen.width > window.screen.height) {
      progress.set(0);
      ani(1);
    }
  };
  const linkEnter = () => {
    if (window.screen.width > window.screen.height) {
      progress.set(2);
      ani(3);
    }
  };
  const githubEnter = () => {
    if (window.screen.width > window.screen.height) {
      progress.set(4);
      ani(5);
    }
  };

  const leave = () => {
    let aux = progress.get();
    ani(aux - 1);
  };

  const ani = (position) => {
    stroke.set("#eee");
    animate(progress, position, {
      duration: 0.2,
      onComplete: () => {
        stroke.set("#1e1e1e");
      },
    });
  };

  return (
    <div className="Contact_page_ctn">
      <div className="Contact_page">
        <div className="svg_ctn">
          <svg
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
        </div>

        <div className="info_ctn">
          <p className="info_title">Hit me up!</p>
          <p className="info_text">
            Feel free to contact me in the platforms below
          </p>
          <div className="icon_link">
            <div className="icon">
              <SvgGit />
            </div>
            <a
              href="https://github.com/Radul19"
              target="blank"
              className="info_link"
              onMouseEnter={githubEnter}
              onMouseLeave={leave}
            >
              radul19
            </a>
          </div>
          <div className="icon_link">
            <div className="icon">
              <SvgGmail />
            </div>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=radulito19@gmail.com
            "
              target="blank"
              className="info_link"
              onMouseEnter={gmailEnter}
              onMouseLeave={leave}
            >
              raulbritogonz@gmail.com
            </a>
          </div>
          <div className="icon_link">
            <div className="icon">
              <SvgLinkedin />
            </div>
            <a
              href="https://linkedin.com/in/raulbritogonz"
              target="blank"
              className="info_link"
              onMouseEnter={linkEnter}
              onMouseLeave={leave}
            >
              raulbritocode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

const SvgGit = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_419_139)">
        <path
          d="M16 0C7.16533 0 0 7.164 0 16C0 23.0693 4.584 29.0667 10.9427 31.1827C11.7413 31.3307 12 30.8347 12 30.4133V27.4347C7.54933 28.4027 6.62267 25.5467 6.62267 25.5467C5.89467 23.6973 4.84533 23.2053 4.84533 23.2053C3.39333 22.212 4.956 22.2333 4.956 22.2333C6.56267 22.3453 7.408 23.8827 7.408 23.8827C8.83467 26.328 11.1507 25.6213 12.064 25.212C12.2067 24.1787 12.6213 23.472 13.08 23.0733C9.52667 22.6667 5.79067 21.2947 5.79067 15.1653C5.79067 13.4173 6.416 11.9907 7.43867 10.8707C7.27333 10.4667 6.72533 8.83867 7.59467 6.636C7.59467 6.636 8.93867 6.20667 11.996 8.276C13.272 7.92133 14.64 7.744 16 7.73733C17.36 7.744 18.7293 7.92133 20.008 8.276C23.0627 6.20667 24.404 6.636 24.404 6.636C25.2747 8.84 24.7267 10.468 24.5613 10.8707C25.588 11.9907 26.208 13.4187 26.208 15.1653C26.208 21.3107 22.4653 22.664 18.9027 23.06C19.476 23.556 20 24.5293 20 26.0227V30.4133C20 30.8387 20.256 31.3387 21.068 31.1813C27.4213 29.0627 32 23.0667 32 16C32 7.164 24.836 0 16 0Z"
          fill="#EEEEEE"
        />
      </g>
      <defs>
        <clipPath id="clip0_419_139">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const SvgLinkedin = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.64 4.66659C6.64 6.50792 5.16 7.99992 3.33333 7.99992C1.50667 7.99992 0.0266667 6.50792 0.0266667 4.66659C0.0266667 2.82659 1.50667 1.33325 3.33333 1.33325C5.16 1.33325 6.64 2.82659 6.64 4.66659ZM6.66667 10.6666H0V31.9999H6.66667V10.6666ZM17.3093 10.6666H10.6853V31.9999H17.3107V20.8013C17.3107 14.5746 25.3493 14.0653 25.3493 20.8013V31.9999H32V18.4919C32 7.98525 20.104 8.36792 17.3093 13.5399V10.6666Z"
        fill="#EEEEEE"
      />
    </svg>
  );
};
const SvgGmail = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7173 28.0915H2.28267C1.02267 28.0915 0 27.0688 0 25.8088V7.70747C0 6.44747 1.02267 5.4248 2.28267 5.4248H29.7173C30.9773 5.4248 32 6.44747 32 7.70747V25.8088C32 27.0688 30.9773 28.0915 29.7173 28.0915ZM16 19.9768L3.544 11.3328L3.51733 25.2953H28.4293V11.3328L16 19.9768Z"
        fill="#EEEEEE"
      />
    </svg>
  );
};
