import React, { useState } from "react";
import "../sass/portfolio.sass";
import image1 from "../icons/insigns.png";
import image2 from "../icons/fain.png";
import image3 from "../icons/churro.png";
import DisplayPreviews from "../helpers/DisplayPreviews";

import f1 from '../images/faindit1.png'
import f2 from '../images/faindit2.png'
import f3 from '../images/faindit3.png'
import f4 from '../images/faindit4.png'
import f5 from '../images/faindit5.png'
import f6 from '../images/faindit6.png'
import f7 from '../images/faindit7.png'
import f8 from '../images/faindit8.png'
import f9 from '../images/faindit9.png'
import f10 from '../images/faindit10.png'
import f11 from '../images/faindit11.png'

import s1 from '../images/signs1.png'
import s2 from '../images/signs2.png'
import s3 from '../images/signs3.png'
import s4 from '../images/signs4.png'
import s5 from '../images/signs5.png'
import s6 from '../images/signs6.png'
import s7 from '../images/signs7.png'
import s8 from '../images/signs8.png'
import s9 from '../images/signs9.png'
import s10 from '../images/signs10.png'

import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'
import c7 from '../images/c7.png'
import c8 from '../images/c8.png'
import { disableScroll, enableScroll } from "../helpers/scrolls";
const text2 =
  "Project planning and development, Database administrator, API RESTful developer, Frontend development.";
const text1 =
  "Prototype for sign language application with minigames, achievements and user registration.";
const text3 =
  "Single Page Application with small inventory and contact form to present the company and its products";

const fainditTags = [
  { bg: "#3178C6", text: "React Native" },
  { bg: "#764ABC", text: "Redux" },
  { bg: "#3178C6", text: "Typescript" },
  { bg: "#3c873a", text: "NodeJS" },
  { bg: "#C97800", text: "AWS" },
  { bg: "#589636", text: "MongoDB" },
];
const inSigns = [
  { bg: "#3178C6", text: "React Native" },
  { bg: "#3c873a", text: "NodeJS" },
  { bg: "#589636", text: "MongoDB" },
];
const crazyChu = [
  { bg: "#CB5530", text: "Svelte" },
  { bg: "#764ABC", text: "Responsive" },
];

const fainditImages = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11]
const signsImages = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]
const churroImages = [c1,c2,c3,c4,c5,c6,c7,c8]
const allImages = [signsImages,fainditImages,churroImages]


function PortfolioPage() {

  const [selected, setSelected] = useState(4)
  
  return (
    <div className="PortfolioPage_ctn">
      <div className="PortfolioPage">
        {selected < 4 && <DisplayPreviews {...{selected,setSelected,allImages}} /> }
        {/* <Corners /> */}
        {/* CONTENT */}
        {/* <p className="ptf_title">Portfolio</p> */}
        <div style={{ height: 84 }}></div>

        <div className="cards_ctn">
          <Card set={setSelected} num={0} title="EnSeñas" text={text1} tags={inSigns} img={image1} />
          <Card set={setSelected} num={1} title="Faindit" text={text2} tags={fainditTags} img={image2} />
          <Card
            set={setSelected} num={2} title="Churro Locura"
            text={text3}
            tags={crazyChu}
            img={image3}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;

const Card = ({ title, text, tags = [], img,num,set }) => {
  return (
    <div className="card" onClick={()=>{
      disableScroll()
      set(num)}} >
      <div className="card_preview">
        <img src={img} alt={title} />
      </div>
      <div className="tags_ctn">
        {tags.map((item, index) => (
          <Tag text={item.text} bg={item.bg} key={index} />
        ))}
      </div>
      <p className="card_title">{title}</p>
      <p className="card_text">{text}</p>
    </div>
  );
};

const Tag = ({ text, bg }) => {
  return (
    <div className="tag" style={{ backgroundColor: bg }}>
      {text}
    </div>
  );
};
